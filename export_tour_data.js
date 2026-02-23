/**
 * Helper script: extracts tourStops from all three app.js files and dumps
 * them as a single JSON structure with separate tour groups.
 *
 * Usage: node export_tour_data.js > tour_data.json
 */

const fs = require('fs');
const path = require('path');

function extractTourStops(filePath) {
    const code = fs.readFileSync(filePath, 'utf8');
    const match = code.match(/const tourStops\s*=\s*(\[[\s\S]*?\n\];)/);
    if (!match) {
        console.error(`Could not find tourStops in ${filePath}`);
        return [];
    }
    return eval(match[1]);
}

const tours = [
    {
        id: "fcsclt",
        title: "False Creek South, Senakw & Granville Island Tour",
        description: "Seawall walking tour covering public land stewardship, Indigenous-led development, and federal property governance.",
        stops: extractTourStops(path.join(__dirname, 'fscclt', 'app.js'))
    },
    {
        id: "community-orgs",
        title: "DTES Community Organizations Tour",
        description: "Walking tour of Downtown Eastside community organizations, land trusts, and tenant advocacy groups.",
        stops: extractTourStops(path.join(__dirname, 'community-orgs', 'app.js'))
    }
];

console.log(JSON.stringify(tours, null, 2));
