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

    if (id === 'ATA') return;

    if (id === 'BRA') {
        brPath = d;
    } else if (id === 'PER') {
        pePath = d;
    } else if (id === 'ESP') {
        esPath = d;
    } else {
        basePaths.push(`<path d="${d}" className={baseStyle} />`);
    }
});

const tsxContent = `"use client";

export default function SvgWorldMap({ activeCountry, isHoveringMap }: { activeCountry: string | null; isHoveringMap: boolean }) {
    // Todos os países em cinza claro no estado inicial
    const baseStyle = "fill-zinc-200 stroke-white stroke-[0.5] transition-all duration-300 ease-out";

    // País em destaque no hover do card
    const highlightStyle = "fill-[#FFD23F] stroke-white stroke-[0.5] opacity-85 drop-shadow-[0_0_8px_rgba(255,210,63,0.4)]";

    return (
        <svg
            viewBox="0 0 1000 600"
            className={\`w-full h-auto \${!isHoveringMap ? "animate-breath" : ""}\`}
            style={{
                filter: "drop-shadow(0px 10px 30px rgba(0,0,0,0.03))"
            }}
        >
            <style jsx>{\`
                @keyframes breath {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.008); }
                }
                .animate-breath {
                    animation: breath 7s ease-in-out infinite;
                }
                @media (prefers-reduced-motion: reduce) {
                    .animate-breath {
                        animation: none;
                    }
                }
                .country-path {
                    transform-origin: center;
                }
                .country-active {
                    transform: scale(1.015);
                }
            \`}</style>

            <g className="world-base">
                ${basePaths.join('')}
            </g>

            <g className="interactive-countries">
                <path
                    id="country-br"
                    className={\`country-path transition-all duration-300 \${activeCountry === "br" ? \`country-active \${highlightStyle}\` : baseStyle}\`}
                    d="${brPath}"
                />
                <path
                    id="country-pe"
                    className={\`country-path transition-all duration-300 \${activeCountry === "pe" ? \`country-active \${highlightStyle}\` : baseStyle}\`}
                    d="${pePath}"
                />
                <path
                    id="country-es"
                    className={\`country-path transition-all duration-300 \${activeCountry === "es" ? \`country-active \${highlightStyle}\` : baseStyle}\`}
                    d="${esPath}"
                />
            </g>
        </svg>
    );
}
`;

fs.writeFileSync('src/components/about/SvgWorldMap.tsx', tsxContent);
console.log("Successfully wrote SvgWorldMap.tsx");
