document.addEventListener('DOMContentLoaded', () => {
    window.BSHTourMap.init({
        dataUrl: 'data.json?v=20260408-1',
        center: [49.2800, -123.0985],
        zoom: 15,
        routeColor: '#2f67dc',
        onMapInit: (map, L) => {
            const poiMarkerIcon = function (label) {
                return L.divIcon({
                    className: 'poi-marker-wrapper',
                    html: '<div class="poi-marker">' + label + '</div>',
                    iconSize: [24, 24],
                    iconAnchor: [12, 12]
                });
            };

            L.marker([49.2793, -123.0996], { icon: poiMarkerIcon('K') })
                .bindTooltip('Keefer Rooms (48 units)', { direction: 'top', offset: [0, -16], className: 'marker-tooltip' })
                .addTo(map);

            L.marker([49.2832, -123.0975], { icon: poiMarkerIcon('P') })
                .bindTooltip('Powell Rooms (23 units) — DTES CLT acquisition', { direction: 'top', offset: [0, -16], className: 'marker-tooltip' })
                .addTo(map);
        }
    });
});
