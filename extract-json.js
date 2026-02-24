const fs = require('fs');

function extractJson(filePath, outPath) {
    const content = fs.readFileSync(filePath, 'utf8');
    const match = content.match(/const tourStops = (\[[\s\S]*?\]);\s*\/\//);
    if (match) {
        let arr;
        try {
            eval('arr = ' + match[1]);
            fs.writeFileSync(outPath, JSON.stringify(arr, null, 2));
            console.log('Successfully wrote ' + outPath);
            return true;
        } catch (e) {
            console.error('Error eval-ing ' + filePath + ':', e);
            return false;
        }
    } else {
        console.error('Could not find tourStops array in ' + filePath);
        return false;
    }
}

let ok = extractJson('/Users/garvitkumarkalra/Documents/GitHub/interactivemap/fscclt/app.js', '/Users/garvitkumarkalra/Documents/GitHub/interactivemap/fscclt/data.json');
ok = extractJson('/Users/garvitkumarkalra/Documents/GitHub/interactivemap/community-orgs/app.js', '/Users/garvitkumarkalra/Documents/GitHub/interactivemap/community-orgs/data.json') && ok;
if (!ok) process.exit(1);
