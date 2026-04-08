document.addEventListener('DOMContentLoaded', () => {
    window.BSHTourMap.init({
        dataUrl: 'data.json?v=20260408-3',
        center: [49.2720, -123.1320],
        zoom: 14,
        routeColor: '#2f67dc',
        onMapInit: (map, L) => {
            const busStopIcon = L.divIcon({
                className: 'poi-marker-wrapper',
                html: '<div class="poi-marker" title="Heather Square on Moberly Road">B</div>',
                iconSize: [24, 24],
                iconAnchor: [12, 12]
            });
            L.marker([49.27108, -123.12434], { icon: busStopIcon })
                .bindTooltip('Tour Start: Heather Square on Moberly Road', {
                    direction: 'top', offset: [0, -16], className: 'marker-tooltip'
                })
                .addTo(map);
        }
    });
});
