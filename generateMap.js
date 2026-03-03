const fs = require('fs');
const d3 = require('d3-geo');

const file = fs.readFileSync('countries.geo.json', 'utf8');
const geojson = JSON.parse(file);

// scale 150, center it
const projection = d3.geoMercator().scale(150).translate([480, 400]);
const path = d3.geoPath().projection(projection);

let basePaths = [];
let brPath = '';
let pePath = '';
let esPath = '';

geojson.features.forEach(feature => {
    const id = feature.id; // e.g., BRA, PER, ESP
    const d = path(feature);
    if (!d) return;

    // Ignore Antarctica to focus on the inhabited continents
    if (id === 'ATA') return;

    if (id === 'BRA') {
        brPath = d;
    } else if (id === 'PER') {
        pePath = d;
    } else if (id === 'ESP') {
        esPath = d;
    } else {
        basePaths.push(`<path d="${d}" className="base-country" />`);
    }
});

const result = {
    base: basePaths.join(''),
    br: brPath,
    pe: pePath,
    es: esPath
};

fs.writeFileSync('map_data.json', JSON.stringify(result, null, 2));
