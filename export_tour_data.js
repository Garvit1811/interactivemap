/**
 * Helper script: reads the live data.json files and dumps them as a single
 * JSON structure with separate tour groups.
 *
 * Usage: node export_tour_data.js > tour_data.json
 */

const fs = require('fs');
const path = require('path');

function readStops(filePath) {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

const tours = [
    {
        id: "fcsclt",
        title: "False Creek South, Sen̓áḵw & Granville Island Tour",
        description: "Seawall walking tour covering public land stewardship, Indigenous-led development, and federal property governance.",
        stops: readStops(path.join(__dirname, 'fscclt', 'data.json'))
    },
    {
        id: "community-orgs",
        title: "DTES Community Organizations Tour",
        description: "Walking tour of Downtown Eastside community organizations, land trusts, and tenant advocacy groups.",
        stops: readStops(path.join(__dirname, 'community-orgs', 'data.json'))
    }
];

console.log(JSON.stringify(tours, null, 2));
