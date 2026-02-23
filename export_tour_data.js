/**
 * Helper script: evaluates app.js tourStops and dumps them as JSON.
 * Usage: node export_tour_data.js > tour_data.json
 */

const fs = require('fs');
const path = require('path');

// Read app.js
const appJs = fs.readFileSync(path.join(__dirname, 'app.js'), 'utf8');

// Extract just the tourStops array declaration (up to the closing ];)
const match = appJs.match(/const tourStops\s*=\s*(\[[\s\S]*?\n\];)/);
if (!match) {
    console.error('Could not find tourStops in app.js');
    process.exit(1);
}

// Evaluate the array in a sandboxed context
const tourStops = eval(match[1]);

// Output as JSON
console.log(JSON.stringify(tourStops, null, 2));
