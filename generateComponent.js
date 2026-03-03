const fs = require('fs');

const mapData = JSON.parse(fs.readFileSync('map_data.json', 'utf8'));

const componentCode = `
"use client";

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
                ${mapData.base.replace(/class/g, "className").replace(/className="base-country"/g, `className={baseStyle}`)}
            </g>

            <g className="interactive-countries">
                <path
                    id="country-br"
                    className={\`country-path transition-all duration-300 \${activeCountry === "br" ? \`country-active \${highlightStyle}\` : baseStyle}\`}
                    d="${mapData.br}"
                />
                
                <path
                    id="country-pe"
                    className={\`country-path transition-all duration-300 \${activeCountry === "pe" ? \`country-active \${highlightStyle}\` : baseStyle}\`}
                    d="${mapData.pe}"
                />

                <path
                    id="country-es"
                    className={\`country-path transition-all duration-300 \${activeCountry === "es" ? \`country-active \${highlightStyle}\` : baseStyle}\`}
                    d="${mapData.es}"
                />
            </g>
        </svg>
    );
}
`;

fs.writeFileSync('src/components/about/SvgWorldMap.tsx', componentCode.trim());
console.log('Component SvgWorldMap.tsx generated successfully.');
