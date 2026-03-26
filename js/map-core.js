
window.BSHTourMap = {
    async init(config) {
        this.config = Object.assign({
            containerId: 'map',
            center: [49.2800, -123.0985],
            zoom: 15,
            routeColor: '#2f67dc',
            dataUrl: 'data.json',
            onMapInit: null,
            routeSegments: null
        }, config);

        try {
            const res = await fetch(config.dataUrl);
            const tourStops = await res.json();

            const icons = {
                info: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>
    </svg>`,
                document: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
        <polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
    </svg>`,
                images: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
        <circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
    </svg>`,
                expand: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/>
        <line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/>
    </svg>`,
                link: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
        <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
    </svg>`,
                sparkles: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M5 3l1.2 3.6L10 8l-3.8 1.4L5 13l-1.2-3.6L0 8l3.8-1.4L5 3z" transform="translate(2 2)"/>
        <path d="M15 3l1.2 3.6L20 8l-3.8 1.4L15 13l-1.2-3.6L10 8l3.8-1.4L15 3z" transform="translate(2 6)"/>
        <path d="M7 14l1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3z" transform="translate(10 -2)"/>
    </svg>`,
                location: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
        <circle cx="12" cy="10" r="3"/>
    </svg>`,
                check: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="9 11 12 14 22 4"/>
        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>
    </svg>`,
                placeholder: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
        <circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
    </svg>`,
                close: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
    </svg>`,
                prev: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="15 18 9 12 15 6"/>
    </svg>`,
                next: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="9 18 15 12 9 6"/>
    </svg>`,
                arrowRight: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="9 18 15 12 9 6"/>
    </svg>`
            };


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

            function normalizeExternalLinks(root = document) {
                if (!root || typeof root.querySelectorAll !== 'function') return;

                root.querySelectorAll('a[href]').forEach((link) => {
                    const href = link.getAttribute('href');
                    if (!href || !/^https?:\/\//i.test(href)) return;

                    link.setAttribute('target', '_blank');

                    const relParts = new Set((link.getAttribute('rel') || '').split(/\s+/).filter(Boolean));
                    relParts.add('noopener');
                    relParts.add('noreferrer');
                    link.setAttribute('rel', Array.from(relParts).join(' '));
                });
            }



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

                const locateControl = L.control({ position: "bottomright" });
                locateControl.onAdd = function (m) {
                    const div = L.DomUtil.create("div", "leaflet-bar leaflet-control leaflet-control-custom");
                    div.innerHTML = "<button class=\"locate-btn\" title=\"Locate Me\" aria-label=\"Locate Me\" style=\"background:#fff; border:none; padding:8px; cursor:pointer; width:34px; height:34px; display:flex; align-items:center; justify-content:center;\"><svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#2f67dc\" stroke-width=\"2.5\"><path d=\"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z\"/></svg></button>";
                    div.onclick = function (e) {
                        e.stopPropagation();
                        m.locate({ setView: true, maxZoom: 16 });
                    }
                    return div;
                };
                locateControl.addTo(map);

                let userLocationMarker = null;
                map.on("locationfound", function (e) {
                    if (userLocationMarker) map.removeLayer(userLocationMarker);
                    userLocationMarker = L.circleMarker(e.latlng, { radius: 8, fillColor: "#2f67dc", color: "#fff", weight: 3, opacity: 1, fillOpacity: 1 }).addTo(map);
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
                if (pastSegments.length) {
                    layers.push(L.layerGroup(pastSegments.map(seg => L.polyline(seg, {
                        color: '#8b9bb4', // Grayed out for past
                        weight: 6, opacity: 0.98, lineCap: 'round', lineJoin: 'round', interactive: false, className: 'tour-route-past'
                    }))));
                }
                if (futureSegments.length) {
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


            /**
 * Community Organizations Interactive Map Tour
 * DTES & Partner Organizations
 */

            // ============================================
            // Tour Stop Data
            // ============================================





            // ============================================
            // Icons
            // ============================================


            function getFallbackSrc(src) {
                if (!src) return '';
                if (src.startsWith('http://') || src.startsWith('https://')) {
                    return '../images/placeholder.svg';
                }
                return src.replace(/\.[^.]+$/, '.svg');
            }

            function handleImageError(imgEl) {
                if (!imgEl) return;
                const fallback = imgEl.dataset.fallback;
                if (fallback && !imgEl.src.includes(fallback)) {
                    imgEl.src = fallback;
                    return;
                }

                const wrapper = imgEl.parentElement;
                if (wrapper) {
                    wrapper.classList.add('placeholder');
                    imgEl.remove();
                    wrapper.innerHTML = icons.placeholder;
                }
            }

            // ============================================
            // Initialize Application
            // ============================================



            // ============================================
            // Map Functions
            // ============================================

            function fitMapToStops() {
                if (!map || !tourStops.length) return;
                const bounds = L.latLngBounds(tourStops.map(stop => stop.coordinates));
                map.fitBounds(bounds, { padding: [60, 60], animate: true, duration: 1.5 });
            }

            function dedupeRouteCoords(coords) {
                const deduped = [];
                coords.forEach((coord) => {
                    if (!Array.isArray(coord) || coord.length < 2) return;
                    const [lat, lng] = coord;
                    const prev = deduped[deduped.length - 1];
                    if (!prev || prev[0] !== lat || prev[1] !== lng) {
                        deduped.push([lat, lng]);
                    }
                });
                return deduped;
            }

            async function fetchOSRMRoute(coords, profile) {
                const queryCoords = coords.map(([lat, lng]) => `${lng},${lat}`).join(';');
                const url = `https://router.project-osrm.org/route/v1/${profile}/${queryCoords}?overview=full&geometries=geojson&steps=false&continue_straight=true`;
                const response = await fetch(url);
                if (!response.ok) return null;
                const data = await response.json();
                const geometry = data?.routes?.[0]?.geometry?.coordinates;
                if (!Array.isArray(geometry) || geometry.length < 2) return null;
                return geometry.map(([lng, lat]) => [lat, lng]);
            }

            async function upgradeRouteWithOSRM(seedSegments) {
                if (!Array.isArray(seedSegments) || !seedSegments.length) return;

                const dedupedSegments = seedSegments
                    .map(dedupeRouteCoords)
                    .filter(segment => segment.length >= 2);
                if (!dedupedSegments.length) return;

                try {
                    const routedSegments = await Promise.all(dedupedSegments.map(async (segment) => {
                        // Prefer road-constrained geometry per segment without connecting separate tour legs.
                        const drivingRoute = await fetchOSRMRoute(segment, 'driving');
                        if (drivingRoute) return dedupeRouteCoords(drivingRoute);

                        const walkingRoute = await fetchOSRMRoute(segment, 'walking');
                        if (walkingRoute) return dedupeRouteCoords(walkingRoute);

                        return segment;
                    }));
                    drawRoute(routedSegments);
                } catch (error) {
                    console.warn('OSRM route upgrade failed; using fallback route.', error);
                }
            }

            function createMarker(stop, index) {
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
            }

            function updateMarkers() {
                markers.forEach((marker, index) => {
                    const el = marker.getElement();
                    if (el) {
                        const markerDiv = el.querySelector('.custom-marker');
                        if (markerDiv) {
                            markerDiv.classList.toggle('active', index === currentStopIndex);
                        }
                    }
                });
            }

            function flyToStop(index) {
                const stop = tourStops[index];
                map.flyTo(stop.coordinates, 17, {
                    duration: 1.2,
                    easeLinearity: 0.25
                });
            }

            // ============================================
            // Stop Rendering
            // ============================================

            function renderStop(index) {
                const stop = tourStops[index];
                const container = document.getElementById('stopContent');

                // Fade out before swap
                container.style.opacity = '0';
                container.style.transform = 'translateY(8px)';
                container.style.transition = 'opacity 150ms ease, transform 150ms ease';

                setTimeout(() => {
                    currentSectionIndex = 0;
                    container.scrollTop = 0;

                    container.innerHTML = `
            ${renderHeroImage(stop.heroImage)}
            ${renderSectionTabs(stop.sections)}

            <div class="stop-header">
                <span class="stop-number">${stop.id}</span>
                <h2 class="stop-title">${stop.title}</h2>
                <div class="stop-location">
                    ${icons.location}
                    ${stop.location}
                </div>
            </div>

            <div class="section-panels">
                ${stop.sections.map((section, idx) => renderSectionPanel(section, idx)).join('')}
            </div>

            ${renderFacts(stop.stats)}
        `;
                    normalizeExternalLinks(container);

                    // Fade in
                    container.style.opacity = '1';
                    container.style.transform = 'translateY(0)';

                    initSectionTabs();
                    initGalleryHandlers(stop);
                }, 160);
            }

            function renderHeroImage(heroImage) {
                if (!heroImage || !heroImage.src) {
                    return `
            <div class="stop-hero placeholder">
                ${icons.placeholder}
            </div>
        `;
                }

                return `
        <div class="stop-hero expandable" role="button" tabindex="0" aria-label="Expand hero image" data-hero="true">
            <img
                src="${heroImage.src}"
                data-fallback="${getFallbackSrc(heroImage.src)}"
                alt="${heroImage.alt}"
                loading="eager"
                onerror="handleImageError(this)"
            />
            <div class="stop-hero-action">
                ${icons.expand}
                Expand
            </div>
            ${heroImage.caption ? `<div class="stop-hero-caption">${heroImage.caption}</div>` : ''}
        </div>
    `;
            }

            function renderStats(stats) {
                if (!stats || stats.length === 0) return '';

                return `
        <div class="stop-stats">
            ${stats.map(stat => `
                <div class="stat-badge">
                    <span class="stat-badge-label">${stat.label}:</span>
                    <span class="stat-badge-value">${stat.value}</span>
                </div>
            `).join('')}
        </div>
    `;
            }

            function renderFacts(stats) {
                if (!stats || stats.length === 0) return '';

                return `
        <div class="stop-facts">
            <div class="stop-facts-title">Quick Facts</div>
            ${renderStats(stats)}
        </div>
    `;
            }

            function renderSectionTabs(sections) {
                if (!sections || sections.length <= 1) return '';

                return `
        <div class="section-tabs" role="tablist">
            ${sections.map((section, index) => `
                <button
                    class="section-tab ${index === 0 ? 'active' : ''}"
                    role="tab"
                    aria-selected="${index === 0}"
                    aria-controls="panel-${section.id}"
                    data-section-index="${index}"
                >
                    ${icons[section.icon] || icons.info}
                    <span>${section.label}</span>
                </button>
            `).join('')}
        </div>
    `;
            }

            function renderSectionPanel(section, index) {
                const isActive = index === 0 ? 'active' : '';

                let content = '';

                if (section.type === 'gallery') {
                    content = renderGallery(section.images);
                } else if (section.type === 'highlights') {
                    content = renderHighlights(section.highlights);
                } else if (section.type === 'resources') {
                    content = renderResources(section.resources);
                } else {
                    content = `
            <div class="section-content">
                ${section.content}
            </div>
            ${section.keyPoints ? renderKeyPoints(section.keyPoints) : ''}
        `;
                }

                return `
        <div class="section-panel ${isActive}" id="panel-${section.id}" role="tabpanel">
            ${content}
        </div>
    `;
            }

            function renderHighlights(highlights) {
                if (!highlights || highlights.length === 0) {
                    return `
            <div class="gallery-empty">
                ${icons.placeholder}
                <p>Highlights coming soon</p>
            </div>
        `;
                }

                return `
        <div class="highlights-grid">
            ${highlights.map((item, index) => `
                <div class="highlight-card">
                    <div class="highlight-header">
                        <span class="highlight-index">0${index + 1}</span>
                        ${item.meta ? `<span class="highlight-meta">${item.meta}</span>` : ''}
                    </div>
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                </div>
            `).join('')}
        </div>
    `;
            }

            function renderKeyPoints(keyPoints) {
                if (!keyPoints || keyPoints.length === 0) return '';

                return `
        <div class="key-points">
            <div class="key-points-title">
                ${icons.check}
                Key Points
            </div>
            <ul>
                ${keyPoints.map(point => `<li>${point}</li>`).join('')}
            </ul>
        </div>
    `;
            }

            function renderGallery(images) {
                if (!images || images.length === 0) {
                    return `
            <div class="gallery-empty">
                ${icons.placeholder}
                <p>Gallery images coming soon</p>
            </div>
        `;
                }

                let lightboxIndex = 0;

                return `
        <div class="gallery-grid">
            ${images.map((image) => {
                    const hasSrc = Boolean(image.src);
                    const index = hasSrc ? lightboxIndex++ : -1;
                    return `
                    <div class="gallery-item ${!hasSrc ? 'placeholder' : ''}" data-index="${index}" tabindex="0" role="button" aria-label="Expand photo">
                        ${hasSrc ? `
                            <img
                                src="${image.src}"
                                data-fallback="${getFallbackSrc(image.src)}"
                                alt="${image.alt}"
                                loading="lazy"
                                onerror="handleImageError(this)"
                            />
                            <div class="gallery-item-overlay">
                                <span class="gallery-item-caption">${image.caption || ''}</span>
                                <span class="gallery-item-expand">
                                    ${icons.expand}
                                    Expand
                                </span>
                            </div>
                        ` : icons.placeholder}
                    </div>
                `;
                }).join('')}
        </div>
    `;
            }

            function renderResources(resources) {
                if (!resources || resources.length === 0) return '<p>No resources available.</p>';

                return `
        <div class="resources-list">
            ${resources.map(resource => `
                <a href="${resource.url}" target="_blank" rel="noopener noreferrer" class="resource-card">
                    <div class="resource-card-icon">
                        ${icons.link}
                    </div>
                    <div class="resource-card-content">
                        <div class="resource-card-title">${resource.title}</div>
                        ${resource.description ? `<div class="resource-card-description">${resource.description}</div>` : ''}
                    </div>
                    <div class="resource-card-arrow">
                        ${icons.arrowRight}
                    </div>
                </a>
            `).join('')}
        </div>
    `;
            }

            // ============================================
            // Section Tab Navigation
            // ============================================

            function initSectionTabs() {
                document.querySelectorAll('.section-tab').forEach(tab => {
                    tab.addEventListener('click', () => {
                        const index = parseInt(tab.dataset.sectionIndex);
                        switchSection(index);
                    });
                });
            }

            function switchSection(sectionIndex) {
                currentSectionIndex = sectionIndex;

                document.querySelectorAll('.section-tab').forEach((tab, index) => {
                    const isActive = index === sectionIndex;
                    tab.classList.toggle('active', isActive);
                    tab.setAttribute('aria-selected', isActive);
                });

                document.querySelectorAll('.section-panel').forEach((panel, index) => {
                    panel.classList.toggle('active', index === sectionIndex);
                });
            }

            // ============================================
            // Gallery & Lightbox
            // ============================================

            function initGalleryHandlers(stop) {
                const gallerySection = stop.sections?.find(s => s.type === 'gallery');
                const galleryImages = gallerySection?.images || [];
                const heroImage = stop.heroImage?.src ? stop.heroImage : null;
                const heroOffset = heroImage ? 1 : 0;

                lightboxImages = [
                    ...(heroImage ? [heroImage] : []),
                    ...galleryImages.filter(image => image?.src)
                ];

                const heroEl = document.querySelector('.stop-hero.expandable');
                if (heroEl && heroImage) {
                    heroEl.addEventListener('click', () => openLightbox(0));
                    heroEl.addEventListener('keydown', (e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            openLightbox(0);
                        }
                    });
                }

                if (!galleryImages.length) return;

                document.querySelectorAll('.gallery-item:not(.placeholder)').forEach(item => {
                    item.addEventListener('click', () => {
                        const index = parseInt(item.dataset.index, 10);
                        openLightbox(index + heroOffset);
                    });

                    item.addEventListener('keydown', (e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            const index = parseInt(item.dataset.index, 10);
                            openLightbox(index + heroOffset);
                        }
                    });
                });
            }

            function createLightbox() {
                const lightbox = document.createElement('div');
                lightbox.id = 'lightbox';
                lightbox.className = 'lightbox';
                lightbox.innerHTML = `
        <button class="lightbox-close" aria-label="Close lightbox">
            ${icons.close}
        </button>
        <button class="lightbox-nav prev" aria-label="Previous image">
            ${icons.prev}
        </button>
        <div class="lightbox-content">
            <img class="lightbox-image" src="" alt="" />
            <div class="lightbox-caption"></div>
            <div class="lightbox-counter"></div>
        </div>
        <button class="lightbox-nav next" aria-label="Next image">
            ${icons.next}
        </button>
    `;

                document.body.appendChild(lightbox);

                lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
                lightbox.querySelector('.lightbox-nav.prev').addEventListener('click', () => navigateLightbox(-1));
                lightbox.querySelector('.lightbox-nav.next').addEventListener('click', () => navigateLightbox(1));
                lightbox.addEventListener('click', (e) => {
                    if (e.target === lightbox) closeLightbox();
                });
            }

            function openLightbox(index) {
                if (!lightboxImages || lightboxImages.length === 0) return;

                lightboxActive = true;
                lightboxIndex = index;

                const lightbox = document.getElementById('lightbox');
                updateLightboxImage();
                lightbox.classList.add('active');
                document.body.style.overflow = 'hidden';
            }

            function closeLightbox() {
                lightboxActive = false;
                const lightbox = document.getElementById('lightbox');
                lightbox.classList.remove('active');
                document.body.style.overflow = '';
            }

            function navigateLightbox(direction) {
                if (!lightboxImages || lightboxImages.length === 0) return;

                lightboxIndex += direction;
                if (lightboxIndex < 0) lightboxIndex = lightboxImages.length - 1;
                if (lightboxIndex >= lightboxImages.length) lightboxIndex = 0;

                updateLightboxImage();
            }

            function updateLightboxImage() {
                const image = lightboxImages[lightboxIndex];
                if (!image) return;

                const lightbox = document.getElementById('lightbox');
                const imgEl = lightbox.querySelector('.lightbox-image');
                const captionEl = lightbox.querySelector('.lightbox-caption');
                const counterEl = lightbox.querySelector('.lightbox-counter');

                imgEl.src = image.src;
                imgEl.alt = image.alt;
                captionEl.textContent = image.caption || '';
                counterEl.textContent = `${lightboxIndex + 1} / ${lightboxImages.length}`;
            }

            // ============================================
            // Progress & Navigation
            // ============================================

            function updateProgress() {
                const progress = ((currentStopIndex + 1) / tourStops.length) * 100;
                document.getElementById('progressFill').style.width = `${progress}%`;
                const indicator = document.getElementById('stopIndicator');
                if (indicator) {
                    indicator.textContent = `Stop ${currentStopIndex + 1} of ${tourStops.length}`;
                }
            }

            function createStopNavigator() {
                const container = document.getElementById('stopNavigator');
                if (!container) return;

                container.innerHTML = tourStops.map((stop, index) => `
        <button
            class="stop-card ${index === 0 ? 'active' : ''}"
            data-index="${index}"
            aria-label="Go to ${stop.title}"
        >
            <span class="stop-card-index">${index + 1}</span>
            <span class="stop-card-text">
                <span class="stop-card-title">${stop.title}</span>
                <span class="stop-card-location">${stop.location}</span>
            </span>
            <span class="stop-card-arrow">${icons.arrowRight}</span>
        </button>
    `).join('');

                container.querySelectorAll('.stop-card').forEach(card => {
                    card.addEventListener('click', () => {
                        const index = parseInt(card.dataset.index, 10);
                        goToStop(index);
                        closeStopsDrawer();
                    });
                });
            }

            function updateStopNavigator() {
                const cards = document.querySelectorAll('.stop-card');
                cards.forEach((card, index) => {
                    card.classList.toggle('active', index === currentStopIndex);
                });

                if (stopsDrawerOpen && window.innerWidth <= 768) {
                    const activeCard = document.querySelector(`.stop-card[data-index="${currentStopIndex}"]`);
                    if (activeCard) {
                        activeCard.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
                    }
                }
            }

            function initStopsDrawer() {
                const openBtn = document.getElementById('openStops');
                const closeBtn = document.getElementById('closeStops');
                const drawer = document.getElementById('stopsDrawer');
                const backdrop = document.getElementById('stopsBackdrop');

                if (!openBtn || !closeBtn || !drawer || !backdrop) return;

                openBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    openStopsDrawer();
                });
                closeBtn.addEventListener('click', () => closeStopsDrawer());
                backdrop.addEventListener('click', () => closeStopsDrawer());
            }

            function openStopsDrawer() {
                const drawer = document.getElementById('stopsDrawer');
                const backdrop = document.getElementById('stopsBackdrop');
                if (!drawer || !backdrop) return;

                stopsDrawerOpen = true;
                drawer.classList.add('open');
                drawer.setAttribute('aria-hidden', 'false');
                backdrop.hidden = false;
                requestAnimationFrame(() => backdrop.classList.add('visible'));
            }

            function closeStopsDrawer() {
                const drawer = document.getElementById('stopsDrawer');
                const backdrop = document.getElementById('stopsBackdrop');
                if (!drawer || !backdrop) return;

                stopsDrawerOpen = false;
                drawer.classList.remove('open');
                drawer.setAttribute('aria-hidden', 'true');
                backdrop.classList.remove('visible');
                setTimeout(() => {
                    backdrop.hidden = true;
                }, 200);
            }


            function initMapActions() {
                const fitBtn = document.getElementById('fitAllBtn');
                const centerBtn = document.getElementById('centerStopBtn');

                if (fitBtn) {
                    fitBtn.addEventListener('click', () => {
                        fitMapToStops();
                    });
                }

                if (centerBtn) {
                    centerBtn.addEventListener('click', () => {
                        flyToStop(currentStopIndex);
                    });
                }
            }

            function initNavigation() {
                const prevBtn = document.getElementById('prevBtn');
                const nextBtn = document.getElementById('nextBtn');

                prevBtn.addEventListener('click', () => {
                    if (currentStopIndex > 0) {
                        goToStop(currentStopIndex - 1);
                    }
                });

                nextBtn.addEventListener('click', () => {
                    if (currentStopIndex < tourStops.length - 1) {
                        goToStop(currentStopIndex + 1);
                    } else {
                        showTourComplete();
                    }
                });
            }

            function goToStop(index) {
                const safeIndex = Math.max(0, Math.min(index, tourStops.length - 1));
                currentStopIndex = safeIndex;
                renderStop(safeIndex);
                flyToStop(safeIndex);
                updateProgress();
                updateMarkers();
                updateStopNavigator();
                updateNavButtons();

                if (window.innerWidth <= 768) {
                    document.getElementById('sidebar').classList.remove('expanded');
                }
            }

            function updateNavButtons() {
                const prevBtn = document.getElementById('prevBtn');
                const nextBtn = document.getElementById('nextBtn');
                const prevStop = tourStops[currentStopIndex - 1];
                const nextStop = tourStops[currentStopIndex + 1];

                prevBtn.disabled = currentStopIndex === 0;
                nextBtn.disabled = currentStopIndex === tourStops.length - 1;

                prevBtn.innerHTML = `
        <span class="nav-btn-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M15 18l-6-6 6-6"/>
            </svg>
        </span>
        <span class="nav-btn-text">
            <span class="nav-btn-label">Previous</span>
            <span class="nav-btn-title">${prevStop ? prevStop.title : 'Start'}</span>
        </span>
    `;

                if (currentStopIndex === tourStops.length - 1) {
                    nextBtn.disabled = false;
                    nextBtn.innerHTML = `
            <span class="nav-btn-text">
                <span class="nav-btn-label">Complete Tour</span>
            </span>
            <span class="nav-btn-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="20 6 9 17 4 12"/>
                </svg>
            </span>
        `;
                } else {
                    nextBtn.innerHTML = `
            <span class="nav-btn-text">
                <span class="nav-btn-label">Next</span>
                <span class="nav-btn-title">${nextStop ? nextStop.title : 'Next stop'}</span>
            </span>
            <span class="nav-btn-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M9 18l6-6-6-6"/>
                </svg>
            </span>
        `;
                }
            }

            // ============================================
            // Mobile Toggle
            // ============================================

            function initMobileToggle() {
                const sidebar = document.getElementById('sidebar');
                const header = document.querySelector('.sidebar-header');
                const toggle = document.getElementById('mobileToggle');

                header.addEventListener('click', (e) => {
                    if (window.innerWidth <= 768) {
                        const isStopsButton = e.target?.closest?.('.stops-btn');
                        if (!isStopsButton) {
                            sidebar.classList.toggle('expanded');
                        }
                    }
                });

                toggle.addEventListener('click', () => {
                    sidebar.classList.toggle('expanded');
                });

                document.getElementById('map').addEventListener('click', () => {
                    if (window.innerWidth <= 768) {
                        sidebar.classList.remove('expanded');
                    }
                });
            }

            // ============================================
            // Keyboard Shortcuts
            // ============================================

            function initKeyboardShortcuts() {
                document.addEventListener('keydown', (e) => {
                    if (lightboxActive) {
                        if (e.key === 'Escape') closeLightbox();
                        if (e.key === 'ArrowLeft') navigateLightbox(-1);
                        if (e.key === 'ArrowRight') navigateLightbox(1);
                        return;
                    }

                    if (stopsDrawerOpen && e.key === 'Escape') {
                        closeStopsDrawer();
                        return;
                    }

                    const key = e.key.toLowerCase();

                    if (e.key === 'ArrowLeft' && currentStopIndex > 0) {
                        goToStop(currentStopIndex - 1);
                    } else if (e.key === 'ArrowRight' && currentStopIndex < tourStops.length - 1) {
                        goToStop(currentStopIndex + 1);
                    }

                    if (key === 'a') {
                        fitMapToStops();
                    }

                    if (key === 'c') {
                        flyToStop(currentStopIndex);
                    }

                    if (e.key >= '1' && e.key <= '9') {
                        const tabIndex = parseInt(e.key, 10) - 1;
                        const tabs = document.querySelectorAll('.section-tab');
                        if (tabs[tabIndex]) {
                            switchSection(tabIndex);
                        }
                    }
                });
            }


            // ============================================
            // Onboarding Toast
            // ============================================

            function showOnboardingToast() {
                const mapContainer = document.querySelector('.map-container');
                if (!mapContainer) return;

                const toast = document.createElement('div');
                toast.className = 'onboarding-toast';
                toast.textContent = 'Tip: Use arrow keys to navigate between stops, or click map markers to jump directly.';
                mapContainer.appendChild(toast);

                setTimeout(() => {
                    toast.classList.add('fade-out');
                    setTimeout(() => toast.remove(), 500);
                }, 6000);
            }

            // ============================================
            // Scroll Indicator
            // ============================================

            function initScrollIndicator() {
                const content = document.getElementById('stopContent');
                if (!content) return;

                content.addEventListener('scroll', () => {
                    content.classList.toggle('scrolled', content.scrollTop > 10);
                });
            }

            // ============================================
            // Mobile Swipe Navigation
            // ============================================

            function initSwipeNavigation() {
                if (window.innerWidth > 768) return;

                const content = document.getElementById('stopContent');
                if (!content) return;

                let startX = 0;
                let startY = 0;

                content.addEventListener('touchstart', (e) => {
                    startX = e.touches[0].clientX;
                    startY = e.touches[0].clientY;
                }, { passive: true });

                content.addEventListener('touchend', (e) => {
                    const deltaX = e.changedTouches[0].clientX - startX;
                    const deltaY = e.changedTouches[0].clientY - startY;

                    if (Math.abs(deltaX) > 80 && Math.abs(deltaX) > Math.abs(deltaY) * 1.5) {
                        if (deltaX < 0 && currentStopIndex < tourStops.length - 1) {
                            goToStop(currentStopIndex + 1);
                        } else if (deltaX > 0 && currentStopIndex > 0) {
                            goToStop(currentStopIndex - 1);
                        }
                    }
                }, { passive: true });
            }

            // ============================================
            // Tour Completion
            // ============================================

            function showTourComplete() {
                const container = document.getElementById('stopContent');
                if (!container) return;

                container.style.opacity = '0';
                container.style.transform = 'translateY(8px)';
                container.style.transition = 'opacity 150ms ease, transform 150ms ease';

                setTimeout(() => {
                    container.scrollTop = 0;
                    container.innerHTML = `
            <div class="tour-complete-panel">
                <h3>Tour Complete</h3>
                <p>You've explored all ${tourStops.length} stops in this tour. Return to see other tours or revisit any stop from the sidebar.</p>
                <a href="../index.html" class="tour-complete-link">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M15 18l-6-6 6-6"/>
                    </svg>
                    Back to All Tours
                </a>
            </div>
        `;
                    container.style.opacity = '1';
                    container.style.transform = 'translateY(0)';
                }, 160);
            }

            // ============================================
            // Public API
            // ============================================

            window.BSHTour = {
                goToStop,
                getCurrentStop: () => currentStopIndex,
                getTotalStops: () => tourStops.length,
                getStopData: (index) => tourStops[index],
                switchSection
            };


            initMap();
            if (config.onMapInit) config.onMapInit(map, L);
            normalizeExternalLinks();

            createLightbox();
            createStopNavigator();
            initNavigation();
            initStopsDrawer();
            initMapActions();

            // Auto-render stop 1 on load so panel isn't blank
            goToStop(0);

            // Allow markers to be keyboard accessible
            document.querySelectorAll('.custom-marker').forEach((btn) => {
                btn.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        goToStop(parseInt(btn.getAttribute('data-index'), 10));
                    }
                });
            });

            const sidebarContent = document.getElementById('stopContent');
            if (sidebarContent) sidebarContent.setAttribute('aria-live', 'polite');

            window.activeMap = map;
            window.activeStops = tourStops;

        } catch (e) {
            console.error('Failed to initialize map tour:', e);
        }
    }
};
