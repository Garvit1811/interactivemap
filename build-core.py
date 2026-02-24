import re, sys

path = "/Users/garvitkumarkalra/Documents/GitHub/interactivemap/community-orgs/app.js"
with open(path, "r") as f:
    content = f.read()

# 1. Remove tourStops
content = re.sub(r"const tourStops = \[.+?\];\n\n// ============================================\n// Application State\n// ============================================", "", content, flags=re.DOTALL)

# 2. Extract globals and icons
icons_match = re.search(r"(const icons = \{.*?\n\};\n)", content, flags=re.DOTALL)
if not icons_match:
    print("Could not find icons")
    sys.exit(1)
content = content.replace(icons_match.group(1), "")

state_vars = """
let currentStopIndex = 0;
let map = null;
let markers = [];
let routeCasingLayer = null;
let routeDashLayer = null;
let routePassedLayer = null;
let lightboxImages = [];
let lightboxIndex = 0;
let lightboxActive = false;
let stopsDrawerOpen = false;
let currentSectionIndex = 0;
"""

# Completely strip all global lets at the top level
content = re.sub(r"let currentStopIndex = 0;(.*?)let currentSectionIndex = 0;", "", content, flags=re.DOTALL)
content = re.sub(r"let map = null;(.*?)let stopsDrawerOpen = false;\n", "", content, flags=re.DOTALL)

# Remove the DOMContentLoaded listener entirely
content = re.sub(r"document\.addEventListener\('DOMContentLoaded',\s*\(\)\s*=>\s*\{.*?\}\);", "", content, flags=re.DOTALL)

# Remove the original initMap, drawRoute, and flyToStop so we can inject our own
content = re.sub(r"function initMap\(\) \{.*?\}\n\nfunction fitMapToStops", "function fitMapToStops", content, flags=re.DOTALL)
content = re.sub(r"function drawRoute\(coordsOrSegments\) \{.*?\}\n\nfunction dedupeRouteCoords", "function dedupeRouteCoords", content, flags=re.DOTALL)
content = re.sub(r"function flyToStop\(index\) \{.*?\}\n// ============================================\n// Stop Rendering", "// ============================================\n// Stop Rendering", content, flags=re.DOTALL)


new_methods = r"""
function initMap() {
    if (map) { map.remove(); }
    map = L.map('map', {
        center: config.center || [49.2800, -123.0985],
        zoom: config.zoom || 15,
        zoomControl: true
    });

    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; OpenStreetMap &copy; CARTO',
        subdomains: 'abcd',
        maxZoom: 19
    }).addTo(map);

    const locateControl = L.control({position: "bottomright"});
    locateControl.onAdd = function(m) {
        const div = L.DomUtil.create("div", "leaflet-bar leaflet-control leaflet-control-custom");
        div.innerHTML = "<button class=\"locate-btn\" title=\"Locate Me\" aria-label=\"Locate Me\" style=\"background:#fff; border:none; padding:8px; cursor:pointer; width:34px; height:34px; display:flex; align-items:center; justify-content:center;\"><svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#2f67dc\" stroke-width=\"2.5\"><path d=\"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z\"/></svg></button>";
        div.onclick = function(e){
            e.stopPropagation();
            m.locate({setView: true, maxZoom: 16});
        }
        return div;
    };
    locateControl.addTo(map);

    let userLocationMarker = null;
    map.on("locationfound", function(e) {
        if (userLocationMarker) map.removeLayer(userLocationMarker);
        userLocationMarker = L.circleMarker(e.latlng, {radius: 8, fillColor: "#2f67dc", color: "#fff", weight: 3, opacity: 1, fillOpacity: 1}).addTo(map);
    });

    tourStops.forEach((stop, index) => {
        const marker = createMarker(stop, index);
        markers.push(marker);
        marker.addTo(map);
    });
}

function updateRouteProgress() {
    if (!routeCasingLayer || !routeDashLayer || !config.routeSegments) return;
    
    map.removeLayer(routeDashLayer);
    
    let pastSegments = config.routeSegments.slice(0, currentStopIndex);
    let futureSegments = config.routeSegments.slice(currentStopIndex);
    
    let layers = [];
    if(pastSegments.length) {
        layers.push(L.layerGroup(pastSegments.map(seg => L.polyline(seg, {
            color: '#8b9bb4', // Grayed out for past
            weight: 6, opacity: 0.98, dashArray: '8, 8', lineCap: 'round', lineJoin: 'round', interactive: false, className: 'tour-route-past'
        }))));
    }
    if(futureSegments.length) {
        layers.push(L.layerGroup(futureSegments.map(seg => L.polyline(seg, {
            color: config.routeColor || '#2f67dc',
            weight: 6, opacity: 0.98, lineCap: 'round', lineJoin: 'round', interactive: false, className: 'tour-route tour-route-future'
        }))));
    }
    routeDashLayer = L.layerGroup(layers).addTo(map);
}

function drawRoute(coordsOrSegments) {
    if (!map || !Array.isArray(coordsOrSegments)) return;
    const segments = Array.isArray(coordsOrSegments[0]?.[0]) ? coordsOrSegments : [coordsOrSegments];
    const cleanSegments = segments.map(dedupeRouteCoords).filter(s => s.length >= 2);
    if (!cleanSegments.length) return;

    if (routeCasingLayer) map.removeLayer(routeCasingLayer);
    if (routeDashLayer) map.removeLayer(routeDashLayer);

    routeCasingLayer = L.layerGroup(cleanSegments.map(seg => L.polyline(seg, {
        color: '#ffffff', weight: 9, opacity: 0.82, lineCap: 'round', lineJoin: 'round', interactive: false
    }))).addTo(map);

    routeDashLayer = L.layerGroup(cleanSegments.map(seg => L.polyline(seg, {
        color: config.routeColor || '#2f67dc', weight: 6, opacity: 0.98, lineCap: 'round', lineJoin: 'round', interactive: false, className: 'tour-route'
    }))).addTo(map);
}

function flyToStop(index) {
    const stop = tourStops[index];
    map.flyTo(stop.coordinates, config.zoom || 16, { duration: 1.5, easeLinearity: 0.25 });
}
"""

marker_func = r"""function createMarker(stop, index) {
    const icon = L.divIcon({
        className: 'custom-marker-wrapper',
        html: `<button class="custom-marker ${index === 0 ? 'active' : ''}" data-index="${index}" aria-label="Tour Stop ${index + 1}: ${stop.title}" aria-expanded="false">${index + 1}</button>`,
        iconSize: [40, 40],
        iconAnchor: [20, 20]
    });

    const marker = L.marker(stop.coordinates, { icon });
    const tooltipContent = `
        <div class="marker-popup">
            <strong>${stop.title}</strong>
            <span class="marker-popup-location">${stop.location}</span>
        </div>
    `;
    marker.bindTooltip(tooltipContent, {
        direction: 'top', offset: [0, -24], opacity: 1, className: 'marker-tooltip-rich', permanent: false
    });

    marker.on('click', () => { goToStop(index); });
    return marker;
}"""

content = re.sub(r"function createMarker\(stop, index\) \{.+?return marker;\n\}", marker_func, content, flags=re.DOTALL)
content = re.sub(r"map\.fitBounds\(.*?animate: true\n\s*\}\);", r"map.fitBounds(bounds, { padding: [60, 60], animate: true, duration: 1.5 });", content, flags=re.DOTALL)
content = re.sub(r"updateProgress\(\);", r"updateProgress();\n    updateRouteProgress();", content)

final_content = f"""
window.BSHTourMap = {{
    async init(config) {{
        this.config = Object.assign({{
            containerId: 'map',
            center: [49.2800, -123.0985],
            zoom: 15,
            routeColor: '#2f67dc',
            dataUrl: 'data.json',
            onMapInit: null,
            routeSegments: null
        }}, config);

        try {{
            const res = await fetch(config.dataUrl);
            const tourStops = await res.json();
            
            {icons_match.group(1)}
            {state_vars}

            {new_methods}
            
            {content}

            initMap();
            if(config.routeSegments) {{
                drawRoute(config.routeSegments);
                if(typeof upgradeRouteWithOSRM !== "undefined") {{
                    void upgradeRouteWithOSRM(config.routeSegments);
                }}
            }}
            if(config.onMapInit) config.onMapInit(map, L);

            createLightbox();
            createStopNavigator();
            initNavigation();
            initStopsDrawer();
            initMapActions();
            
            // Allow markers to be keyboard accessible
            document.querySelectorAll('.custom-marker').forEach((btn) => {{
                btn.addEventListener('keydown', (e) => {{
                    if (e.key === 'Enter' || e.key === ' ') {{
                        e.preventDefault();
                        goToStop(parseInt(btn.getAttribute('data-index'), 10));
                    }}
                }});
            }});

            const sidebarContent = document.getElementById('stopContent');
            if (sidebarContent) sidebarContent.setAttribute('aria-live', 'polite');

            window.activeMap = map;
            window.activeStops = tourStops;

        }} catch (e) {{
            console.error('Failed to initialize map tour:', e);
        }}
    }}
}};
"""

outpath = "/Users/garvitkumarkalra/Documents/GitHub/interactivemap/js/map-core.js"
with open(outpath, "w") as f:
    f.write(final_content)
    
print("Successfully wrote js/map-core.js")
