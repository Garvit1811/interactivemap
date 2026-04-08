document.addEventListener('DOMContentLoaded', () => {
    window.BSHTourMap.init({
        dataUrl: 'data.json?v=20260408-5',
        center: [49.2730, -123.1400],
        zoom: 14,
        routeColor: '#2f67dc',
        onMapInit: (map, L) => {
            const busStopIcon = L.divIcon({
                className: 'poi-marker-wrapper',
                html: '<div class="poi-marker" title="EB Cornwall Ave @ Cypress St">B</div>',
                iconSize: [24, 24],
                iconAnchor: [12, 12]
            });
            L.marker([49.27331, -123.15217], { icon: busStopIcon })
                .bindTooltip('Nearest bus stop: EB Cornwall Ave @ Cypress St', {
                    direction: 'top', offset: [0, -16], className: 'marker-tooltip'
                })
                .addTo(map);
        }
    });
});
