# CODING.md

## Project Overview

BSH Interactive Map Tours is a web application for managing and displaying interactive map-based tours. Built with vanilla JavaScript, HTML, and CSS, it uses the Leaflet.js library for map rendering.

## Project Structure

```
interactivemap/
├── index.html              # Main HTML entry point (tour management UI)
├── app.js                  # Core application logic (tour CRUD, map interactions)
├── styles.css              # All application styles
├── tour_data.json          # Tour data in JSON format
├── export_tour_data.js     # Script to export tour data
├── export_tours_to_word.py # Python script to export tours to Word format
├── BSH_2026_Tour_Content.docx # Tour content document
├── images/                 # Image assets
├── community-orgs/         # Community organizations content
├── fscclt/                 # FSCCLT-related content
└── .github/                # GitHub configuration
```

## Development Setup

### Prerequisites

- A modern web browser (Chrome, Firefox, Edge, Safari)
- A local web server (e.g., VS Code Live Server, Python `http.server`, or Node.js `http-server`)
- Python 3.x (only needed for Word export functionality)

### Running Locally

1. Clone the repository
2. Serve the project directory using a local web server:
   ```bash
   # Using Python
   python -m http.server 8000

   # Using Node.js http-server
   npx http-server
   ```
3. Open `http://localhost:8000` in your browser

## Tech Stack

- **HTML/CSS/JavaScript** - No build tools or frameworks required
- **Leaflet.js** (v1.9.4) - Interactive map rendering, loaded via CDN
- **Google Fonts** - Montserrat and Open Sans typefaces

## Coding Standards

### JavaScript

- Use vanilla JavaScript (no frameworks)
- Follow existing patterns in `app.js` for tour and map logic
- Use descriptive variable and function names
- Keep map interaction logic centralized in `app.js`

### CSS

- All styles are maintained in `styles.css`
- Use the CSS custom properties (variables) defined in `:root` for consistent theming:
  - `--bsh-gold`, `--bsh-gold-bright` - Brand gold colors
  - `--bsh-blue`, `--bsh-blue-light` - Brand blue colors
  - `--bsh-navy` - Dark navy
  - `--bsh-beige`, `--bsh-mid-grey`, `--bsh-light-grey`, `--bsh-white` - Neutral colors
  - `--font-brand` / `--font-body` - Font stacks
  - `--radius-lg` - Border radius tokens

### HTML

- Maintain semantic HTML structure
- Keep inline styles to a minimum; prefer classes in `styles.css`

## Data Format

Tour data is stored in `tour_data.json`. Each tour entry contains location coordinates, descriptions, and metadata used by the map application.

## Key Commands

```bash
# Export tour data to Word document
python export_tours_to_word.py

# Run export tour data script
node export_tour_data.js
```
