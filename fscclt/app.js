document.addEventListener('DOMContentLoaded', () => {
    // Segment 1: FCS → Senakw (walk west along seawall through GI area)
    const fcsToSenakw = [
        [49.26715, -123.12615],  // Start at FCS
        [49.26800, -123.12615],  // North on Moberly Rd
        [49.26900, -123.12620],  // North through FCS
        [49.27000, -123.12630],  // Approaching 1st Ave
        [49.27050, -123.12640],  // Seawall access point
        [49.27060, -123.12720],  // On seawall, heading west
        [49.27040, -123.12800],  // Leg-in-Boot Square area
        [49.27050, -123.12960],  // Seawall continues west
        [49.27110, -123.13140],  // Stamps Landing approach
        [49.27160, -123.13300],  // Stamps Landing dock
        [49.27170, -123.13380],  // Stamps Landing west
        [49.27056, -123.13417],  // Past Granville Island
        [49.27100, -123.13600],  // Turning north toward seawall
        [49.27120, -123.13680],  // Under Granville Bridge
        [49.27100, -123.13750],  // West of Granville Bridge
        [49.27060, -123.13900],  // Island Park Walk
        [49.27030, -123.14040],  // Alder Bay Walk
        [49.27080, -123.14180],  // Approaching Burrard Bridge
        [49.27257, -123.14289]   // Senakw
    ];

    // Segment 2: Senakw → Granville Island (walk back east)
    const senakwToGI = [
        [49.27257, -123.14289],  // Senakw
        [49.27080, -123.14180],  // From Burrard Bridge
        [49.27030, -123.14040],  // Alder Bay Walk
        [49.27060, -123.13900],  // Island Park Walk
        [49.27100, -123.13750],  // West of Granville Bridge
        [49.27120, -123.13680],  // Under Granville Bridge
        [49.27100, -123.13600],  // Approaching Granville Island
        [49.27056, -123.13417]   // Granville Island
    ];

    window.BSHTourMap.init({
        dataUrl: 'data.json',
        center: [49.2720, -123.1320],
        zoom: 14,
        routeColor: '#2f67dc',
        routeSegments: [fcsToSenakw, senakwToGI],
        onMapInit: (map, L) => {
            const busStopIcon = L.divIcon({
                className: 'poi-marker-wrapper',
                html: '<div class="poi-marker" title="4th &amp; Heather Bus Stop">B</div>',
                iconSize: [24, 24],
                iconAnchor: [12, 12]
            });
            L.marker([49.2668, -123.1185], { icon: busStopIcon })
                .bindTooltip('Tour Start: 4th & Heather Bus Stop', {
                    direction: 'top', offset: [0, -16], className: 'marker-tooltip'
                })
                .addTo(map);
        }
    });
});
