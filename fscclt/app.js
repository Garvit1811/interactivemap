document.addEventListener('DOMContentLoaded', () => {
    window.BSHTourMap.init({
        dataUrl: 'data.json',
        center: [49.2720, -123.1320],
        zoom: 14,
        routeColor: '#2f67dc',
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
