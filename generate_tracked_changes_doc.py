#!/usr/bin/env python3
"""
Generate a Word document with tracked changes (visual markup) comparing
the Feb 22 baseline text against the current tour data.json files.

Deletions: Red text with strikethrough
Additions: Blue text with double underline
Unchanged: Normal black text

Usage:
    python3 generate_tracked_changes_doc.py
"""

import json
import os
import re
import difflib
from html.parser import HTMLParser
from docx import Document
from docx.shared import Pt, Cm, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH, WD_UNDERLINE


# ── Colors ──────────────────────────────────────────────────────────────
RED = RGBColor(0xCC, 0x00, 0x00)
BLUE = RGBColor(0x00, 0x44, 0xCC)
GRAY = RGBColor(0x55, 0x55, 0x55)
BLACK = RGBColor(0x33, 0x33, 0x33)
GREEN = RGBColor(0x00, 0x77, 0x00)


# ── HTML stripper ───────────────────────────────────────────────────────
class HTMLStripper(HTMLParser):
    def __init__(self):
        super().__init__()
        self._pieces = []
        self._in_li = False

    def handle_starttag(self, tag, attrs):
        if tag == "li":
            self._pieces.append("\n• ")
            self._in_li = True
        elif tag in ("p", "h4"):
            if self._pieces and not self._pieces[-1].endswith("\n"):
                self._pieces.append("\n")
        elif tag == "ul":
            pass

    def handle_endtag(self, tag):
        if tag == "li":
            self._in_li = False
        elif tag in ("p", "h4", "ul"):
            if self._pieces and not self._pieces[-1].endswith("\n"):
                self._pieces.append("\n")

    def handle_data(self, data):
        self._pieces.append(data)

    def get_text(self):
        return "".join(self._pieces).strip()


def strip_html(html_str):
    parser = HTMLStripper()
    parser.feed(html_str)
    return parser.get_text()


# ── Extract plain text from data.json ───────────────────────────────────
def extract_tour_text(data_path, tour_name, tour_number):
    with open(data_path, "r", encoding="utf-8") as f:
        stops = json.load(f)

    lines = []
    lines.append(f"Tour {tour_number}: {tour_name}")
    lines.append(f"Total stops: {len(stops)}")
    lines.append("")

    for stop in stops:
        stop_id = stop["id"]
        lines.append(f"Stop {stop_id}: {stop['title']}")
        lines.append(f"Location: {stop['location']}")

        stats_parts = []
        for s in stop.get("stats", []):
            stats_parts.append(f"{s['label']}: {s['value']}")
        if stats_parts:
            lines.append(f"Quick stats: {' | '.join(stats_parts)}")

        for section in stop.get("sections", []):
            sec_type = section.get("type")
            sec_id = section.get("id", "")
            sec_label = section.get("label", "")

            if sec_type == "gallery":
                # Include gallery captions
                lines.append("")
                lines.append("Gallery")
                for img in section.get("images", []):
                    lines.append(f"• {img.get('caption', img.get('alt', ''))}")
                continue

            if sec_id == "overview":
                lines.append("Overview")
            elif sec_id == "highlights":
                lines.append("")
                lines.append("At This Stop")
            elif sec_id == "details":
                lines.append("")
                lines.append(sec_label)
            elif sec_type == "resources":
                lines.append("")
                lines.append("Resources")
            else:
                lines.append("")
                lines.append(sec_label or sec_id.title())

            if sec_type == "highlights":
                for hi in section.get("highlights", []):
                    meta = f" ({hi['meta']})" if hi.get("meta") else ""
                    lines.append(f"• {hi['title']}: {hi['description']}{meta}")

            elif sec_type == "resources":
                for res in section.get("resources", []):
                    desc = f" - {res['description']}" if res.get("description") else ""
                    url = f" | {res['url']}" if res.get("url") else ""
                    lines.append(f"• {res['title']}{desc}{url}")

            else:
                content = section.get("content", "")
                if content:
                    text = strip_html(content)
                    for para in text.split("\n"):
                        para = para.strip()
                        if para:
                            lines.append(para)

                key_points = section.get("keyPoints", [])
                if key_points:
                    for kp in key_points:
                        lines.append(f"• {kp}")

        lines.append("")
        lines.append("")

    return "\n".join(lines)


# ── Diff and Word doc building ──────────────────────────────────────────

def add_legend(doc):
    """Add a legend explaining the markup."""
    doc.add_heading("How to Read This Document", level=2)

    p = doc.add_paragraph()
    run = p.add_run("This document compares the original tour text (February 22, 2026) "
                     "against the current live content. Changes are marked as follows:")
    run.font.size = Pt(11)

    p = doc.add_paragraph()
    run = p.add_run("Deleted text ")
    run.font.size = Pt(11)
    run = p.add_run("shown in red with strikethrough")
    run.font.color.rgb = RED
    run.font.strike = True
    run.font.size = Pt(11)

    p = doc.add_paragraph()
    run = p.add_run("Added text ")
    run.font.size = Pt(11)
    run = p.add_run("shown in blue with underline")
    run.font.color.rgb = BLUE
    run.underline = WD_UNDERLINE.SINGLE
    run.font.size = Pt(11)

    p = doc.add_paragraph()
    run = p.add_run("Unchanged text shown in normal black")
    run.font.size = Pt(11)

    doc.add_paragraph()

    p = doc.add_paragraph()
    run = p.add_run("[REORDERED] ")
    run.font.color.rgb = GREEN
    run.bold = True
    run.font.size = Pt(11)
    run = p.add_run("indicates stops that have been moved to a different position in the tour")
    run.font.size = Pt(11)

    p = doc.add_paragraph()
    run = p.add_run("[NEW STOP] ")
    run.font.color.rgb = GREEN
    run.bold = True
    run.font.size = Pt(11)
    run = p.add_run("indicates an entirely new stop added to the tour")
    run.font.size = Pt(11)

    doc.add_page_break()


def add_diff_paragraph(doc, old_text, new_text):
    """Add a paragraph showing word-level diff between old and new text."""
    if old_text == new_text:
        doc.add_paragraph(old_text)
        return

    old_words = old_text.split()
    new_words = new_text.split()

    sm = difflib.SequenceMatcher(None, old_words, new_words)
    p = doc.add_paragraph()

    for op, i1, i2, j1, j2 in sm.get_opcodes():
        if op == "equal":
            run = p.add_run(" ".join(old_words[i1:i2]) + " ")
            run.font.size = Pt(11)
        elif op == "delete":
            run = p.add_run(" ".join(old_words[i1:i2]) + " ")
            run.font.color.rgb = RED
            run.font.strike = True
            run.font.size = Pt(11)
        elif op == "insert":
            run = p.add_run(" ".join(new_words[j1:j2]) + " ")
            run.font.color.rgb = BLUE
            run.underline = WD_UNDERLINE.SINGLE
            run.font.size = Pt(11)
        elif op == "replace":
            run = p.add_run(" ".join(old_words[i1:i2]) + " ")
            run.font.color.rgb = RED
            run.font.strike = True
            run.font.size = Pt(11)
            run = p.add_run(" ".join(new_words[j1:j2]) + " ")
            run.font.color.rgb = BLUE
            run.underline = WD_UNDERLINE.SINGLE
            run.font.size = Pt(11)


def is_heading(line):
    """Check if a line is a heading."""
    patterns = [
        r"^Tour \d+:",
        r"^Total stops:",
        r"^Stop \d+:",
        r"^Location:",
        r"^Quick stats:",
        r"^Overview$",
        r"^At This Stop$",
        r"^Gallery$",
        r"^Resources$",
        r"^(Housing Model|Land Model|Land Rights|Programs|Partners & Work|"
        r"History & Plans|Details|Learn More)$",
    ]
    for pat in patterns:
        if re.match(pat, line.strip()):
            return True
    return False


def get_heading_level(line):
    if line.startswith("Tour "):
        return 1
    if line.startswith("Stop "):
        return 2
    if line.startswith("Location:") or line.startswith("Quick stats:") or line.startswith("Total stops:"):
        return 0  # metadata, not a heading
    return 3


def build_tracked_doc(old_text, new_text, output_path):
    """Build a Word document with tracked changes."""
    doc = Document()

    # Page setup
    section = doc.sections[0]
    section.top_margin = Cm(2.54)
    section.bottom_margin = Cm(2.54)
    section.left_margin = Cm(2.54)
    section.right_margin = Cm(2.54)

    # Styles
    style = doc.styles["Normal"]
    font = style.font
    font.name = "Calibri"
    font.size = Pt(11)
    font.color.rgb = BLACK
    style.paragraph_format.space_after = Pt(4)
    style.paragraph_format.line_spacing = 1.15

    for level in range(1, 5):
        name = f"Heading {level}"
        if name in doc.styles:
            h = doc.styles[name]
            h.font.name = "Calibri"
            h.font.color.rgb = RGBColor(0x1A, 0x1A, 0x1A)

    # Title
    title = doc.add_heading("BSH 2026 Tour Content — Tracked Changes", level=0)
    title.alignment = WD_ALIGN_PARAGRAPH.CENTER

    subtitle = doc.add_paragraph()
    subtitle.alignment = WD_ALIGN_PARAGRAPH.CENTER
    run = subtitle.add_run("Comparing: Feb 22 baseline → Current live content (Feb 28, 2026)")
    run.font.size = Pt(14)
    run.font.color.rgb = GRAY

    doc.add_paragraph()
    add_legend(doc)

    # Split into lines and diff
    old_lines = [l.strip() for l in old_text.strip().split("\n")]
    new_lines = [l.strip() for l in new_text.strip().split("\n")]

    # Filter out the header line from old text
    if old_lines and old_lines[0].startswith("BSH Interactive Map Tours"):
        old_lines = old_lines[3:]  # skip header + generated + source lines

    sm = difflib.SequenceMatcher(None, old_lines, new_lines)

    for op, i1, i2, j1, j2 in sm.get_opcodes():
        if op == "equal":
            for line in old_lines[i1:i2]:
                if not line:
                    continue
                level = get_heading_level(line)
                if line.startswith("Tour "):
                    doc.add_page_break()
                    doc.add_heading(line, level=1)
                elif line.startswith("Stop "):
                    doc.add_heading(line, level=2)
                elif line.startswith("Total stops:"):
                    p = doc.add_paragraph()
                    run = p.add_run(line)
                    run.font.italic = True
                    run.font.color.rgb = GRAY
                elif line.startswith("Location:") or line.startswith("Quick stats:"):
                    p = doc.add_paragraph()
                    run = p.add_run(line)
                    run.font.italic = True
                    run.font.color.rgb = GRAY
                elif is_heading(line):
                    doc.add_heading(line, level=3)
                else:
                    doc.add_paragraph(line)

        elif op == "delete":
            for line in old_lines[i1:i2]:
                if not line:
                    continue
                p = doc.add_paragraph()
                run = p.add_run(line)
                run.font.color.rgb = RED
                run.font.strike = True
                run.font.size = Pt(11)

        elif op == "insert":
            for line in new_lines[j1:j2]:
                if not line:
                    continue
                # Check for reorder/new stop annotations
                if line.startswith("Stop "):
                    doc.add_heading(line, level=2)
                    continue
                p = doc.add_paragraph()
                run = p.add_run(line)
                run.font.color.rgb = BLUE
                run.underline = WD_UNDERLINE.SINGLE
                run.font.size = Pt(11)

        elif op == "replace":
            old_block = [l for l in old_lines[i1:i2] if l.strip()]
            new_block = [l for l in new_lines[j1:j2] if l.strip()]

            # Try to match lines within the block for word-level diffs
            inner_sm = difflib.SequenceMatcher(
                None,
                [l.lower()[:40] for l in old_block],
                [l.lower()[:40] for l in new_block]
            )

            old_used = set()
            new_used = set()

            for iop, ii1, ii2, ij1, ij2 in inner_sm.get_opcodes():
                if iop == "equal":
                    for k in range(ii2 - ii1):
                        old_idx = ii1 + k
                        new_idx = ij1 + k
                        old_used.add(old_idx)
                        new_used.add(new_idx)
                        ol = old_block[old_idx]
                        nl = new_block[new_idx]
                        if ol == nl:
                            if ol.startswith("Tour "):
                                doc.add_heading(ol, level=1)
                            elif ol.startswith("Stop "):
                                doc.add_heading(ol, level=2)
                            elif is_heading(ol):
                                doc.add_heading(ol, level=3)
                            else:
                                doc.add_paragraph(ol)
                        else:
                            add_diff_paragraph(doc, ol, nl)

                elif iop == "delete":
                    for k in range(ii1, ii2):
                        old_used.add(k)
                        p = doc.add_paragraph()
                        run = p.add_run(old_block[k])
                        run.font.color.rgb = RED
                        run.font.strike = True
                        run.font.size = Pt(11)

                elif iop == "insert":
                    for k in range(ij1, ij2):
                        new_used.add(k)
                        line = new_block[k]
                        if line.startswith("Stop "):
                            doc.add_heading(line, level=2)
                        else:
                            p = doc.add_paragraph()
                            run = p.add_run(line)
                            run.font.color.rgb = BLUE
                            run.underline = WD_UNDERLINE.SINGLE
                            run.font.size = Pt(11)

                elif iop == "replace":
                    for k in range(ii1, ii2):
                        old_used.add(k)
                    for k in range(ij1, ij2):
                        new_used.add(k)

                    # Word-level diff for matched pairs
                    max_pairs = min(ii2 - ii1, ij2 - ij1)
                    for k in range(max_pairs):
                        ol = old_block[ii1 + k]
                        nl = new_block[ij1 + k]
                        add_diff_paragraph(doc, ol, nl)

                    # Remaining deletions
                    for k in range(max_pairs, ii2 - ii1):
                        p = doc.add_paragraph()
                        run = p.add_run(old_block[ii1 + k])
                        run.font.color.rgb = RED
                        run.font.strike = True
                        run.font.size = Pt(11)

                    # Remaining insertions
                    for k in range(max_pairs, ij2 - ij1):
                        line = new_block[ij1 + k]
                        if line.startswith("Stop "):
                            doc.add_heading(line, level=2)
                        else:
                            p = doc.add_paragraph()
                            run = p.add_run(line)
                            run.font.color.rgb = BLUE
                            run.underline = WD_UNDERLINE.SINGLE
                            run.font.size = Pt(11)

    doc.save(output_path)
    print(f"Tracked changes document saved to: {output_path}")


# ── Main ────────────────────────────────────────────────────────────────

if __name__ == "__main__":
    script_dir = os.path.dirname(os.path.abspath(__file__))

    # Read old baseline
    old_path = os.path.join(script_dir, "BSH_Tours_Text_For_Track_Changes.txt")
    with open(old_path, "r", encoding="utf-8") as f:
        old_text = f.read()

    # Generate current text from data.json files
    fscclt_path = os.path.join(script_dir, "fscclt", "data.json")
    community_path = os.path.join(script_dir, "community-orgs", "data.json")

    new_text = extract_tour_text(
        fscclt_path,
        "False Creek South, Senakw & Granville Island (FCSCLT)",
        1
    )
    new_text += "\n" + extract_tour_text(
        community_path,
        "Downtown Eastside Community Organizations",
        2
    )

    output_path = os.path.join(script_dir, "BSH_2026_Tour_Content_Tracked_Changes.docx")
    build_tracked_doc(old_text, new_text, output_path)
    print("Done!")
