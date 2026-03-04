# Summary of Changes — Sarah's Feedback Implementation

**Branch:** `claude/implement-sarahs-changes-IYhzX`
**Date:** March 4, 2026

---

## 1. Global Changes

### Spelling: Senakw → Sen̓áḵw
- Corrected spelling from "Senakw" to "Sen̓áḵw" across all 13 files (data.json, index.html, SVGs, tour_data.json, app.js, text docs)
- JavaScript variable names kept ASCII-safe; URLs and pronunciation guides preserved

### Route Lines & Dots Removed Entirely
- Removed all route polylines from the landing page preview map
- Removed `drawRoute`, `updateRouteProgress`, and OSRM route upgrade calls from `map-core.js`
- Removed `stroke-dasharray`, `routeDotsFlow` CSS animation, and all route-related CSS classes
- Removed stale "dots above" reference in tour completion message

### First Stop Auto-Loads on Tour Open
- Added `goToStop(0)` on initialization in `map-core.js` so both tours immediately display stop #1 content instead of showing a blank panel

---

## 2. False Creek South / Sen̓áḵw / Granville Island Tour (FSCCLT)

### False Creek South CLT — Location Fix
- Moved marker from inland coordinates (49.267, -123.126) to the waterfront at Leg-in-Boot Square (49.271, -123.128)

### Granville Island — Removed "Connection to False Creek South"
- Removed the "Connection to False Creek South" section (co-ops are along False Creek, not on Granville Island)
- Replaced hallucinated "live-aboard marina co-op" with the five real CHF BC co-ops: Harbour Cove, Marina, Creekview, Twin Rainbows, and Alder Bay

### FCS CLT — Added CMHC Co-op History
- Added new "CMHC Origins & the Co-op Legacy" section to FCS CLT's Housing Model details
- Correctly attributes the five CHF BC co-ops along False Creek

---

## 3. Community Organizations Tour

### Stop Reordering
- **First United Church** is now stop #1 (was previously behind DTES CLT in tour_data.json)
- **Aboriginal Front Door Society** is now stop #2 (was #6)
- Full order: First United → Aboriginal Front Door → UBC Learning Exchange → DTES CLT → DTES SRO Collaborative → Hogan's Alley Society
- Updated across `community-orgs/data.json`, `tour_data.json`, and landing page preview map

### First United Church
- **Highlights rebucketed** per firstunited.ca/how-we-help pillars: Essential Services, Community Connection, Systems Change, plus First Forward Redevelopment
- **Details section renamed** from "Programs" to "Deeper Dive" to eliminate repetition with overview
- **First Forward Redevelopment enriched**: 103 units (35 supportive + 68 prioritized for Indigenous peoples), 25% fully accessible, ~$80M total cost, warming/cooling/smoke refuge, outdoor deck
- **Inclusive design process added**: ~100 DTES residents consulted, Nisga'a architect Luugigyoo Patrick Stewart, cultural consultant Chief Ian Campbell, Musqueam/Squamish/Tsleil-Waututh exterior artwork
- **BSH Evictions & Security of Tenure** partnership expanded: 1,100+ BC tenants surveyed, 65% no-fault evictions nationally / 85% in BC, Indigenous tenant rights research
- **Three Pillars Model** section added as structural framing
- **Learn More simplified**: one main firstunited.ca link + BSH research + The Tyee and Vancouver Is Awesome news coverage (removed duplicate subpage links)

### DTES Community Land Trust
- **Stats fixed**: replaced DTES-wide stats (Private SROs: ~100, SRO Residents: 4,000+, Indigenous: ~33%) with CLT-specific stats (CLT Buildings: 2, First Acquisition: 2026, Governance: Community-led)
- **Hogan's Alley highlight removed** — there is a dedicated HAS stop
- **Highlights updated**: Community Ownership Model, Powell Rooms (with $1M Reaching Home grant + funding details), Keefer Rooms ($8.2M BC Housing partnership), CLT Governance Model
- **Overview and details synced** from the corrected community-orgs/data.json

### Hogan's Alley Society
- **Consolidated City of Vancouver links**: three links merged into one (MOU page, most comprehensive)
- **Added Globe and Mail** coverage of the CLT deal
- Kept BSH webinar, CNCLT Summit video, and Reclaim/Remain research links

### DTES SRO Collaborative
- **Stats fixed**: "Active SROs" → "Participating SROs: ~40", "Tenants Supported" → "Tenants Surveyed: 900+"
- **Highlights rebucketed**: Tenant Committees, TORO (Tenant Overdose Response), SRO Degree & Right to Remain, 2024 SRO Tenant Survey — each with full descriptions
- **Details built out** with all programs described (not just TORO)
- **2024 Tenant Survey data added**: $681 avg rent (up 21% since 2019), 60% spending 50%+ income on housing, stock decline 7,830→3,305 rooms, 1/3 Indigenous, census exclusion
- **Policy section expanded**: vacancy control legal fight (13 SRO owners' challenge, MEVA amendment), $11M provincial grant, Wendy Pedersen quote
- **Key points removed** from details section (content integrated into Policy)

### UBC Learning Exchange
- **Confronting Sweeps expanded**: 40 participants, June 2025, McKay & Sethi (2025) report, municipal bylaw/zoning analysis, advocacy frameworks grounded in dignity, Learning Exchange's role as trusted community space

---

## Files Modified

| File | Changes |
|------|---------|
| `community-orgs/data.json` | Stop reorder, all content updates for community tour |
| `fscclt/data.json` | Sen̓áḵw spelling, FCS coordinates, co-op content move |
| `fscclt/app.js` | Removed route segments |
| `tour_data.json` | All stop reorders, content syncs, stats fixes |
| `app.js` | All content updates (main tour data) |
| `index.html` | Sen̓áḵw spelling, route removal, stop reorder, FCS coords |
| `js/map-core.js` | Route removal, auto-load first stop |
| `styles.css` | Route CSS removal |
| `images/senakw-hero.svg` | Sen̓áḵw spelling |
| `images/senakw-render.svg` | Sen̓áḵw spelling |
| `BSH_2026_Tour_Content_20260224.txt` | Sen̓áḵw spelling, co-op content removal |
| `BSH_Tours_Text_For_Track_Changes.txt` | Sen̓áḵw spelling, co-op content removal |
| `export_tour_data.js` | Sen̓áḵw spelling |
| `generate_tracked_changes_doc.py` | Sen̓áḵw spelling |
| `fscclt/index.html` | Sen̓áḵw spelling |
