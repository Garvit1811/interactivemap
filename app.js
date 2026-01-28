/**
 * BSH 2026 Interactive Map Tour
 * Non-Profit Housing in Vancouver
 */

// Tour Stop Data
const tourStops = [
    {
        id: 1,
        title: "False Creek South Community Land Trust",
        location: "False Creek South, Vancouver",
        coordinates: [49.2712, -123.1280],
        description: `
            <p>False Creek South Community Land Trust represents one of Vancouver's most significant examples of community-controlled land for affordable housing. Chaired by Robyn Chan, the CLT model here demonstrates how communities can maintain long-term affordability by separating land ownership from housing.</p>
            <p>The CLT approach ensures that land is never sold off, keeping a healthy portion of housing permanently below market rate. This model protects residents from displacement and speculation while maintaining community control over housing decisions.</p>
        `,
        keyPoints: [
            "Community Land Trust model separates land from housing ownership",
            "Land is rented, never sold — ensuring permanent affordability",
            "Significant portion of units maintained below market rate",
            "Robyn Chan serves as chair of the CLT"
        ],
        resources: [
            {
                title: "Community Land Trust Overview — BC Housing",
                url: "https://www.bchousing.org/housing-assistance/community-land-trusts"
            },
            {
                title: "False Creek South Neighbourhood Association",
                url: "https://www.falsecreeksouth.org/"
            },
            {
                title: "CLT Model Explained — Community Land Trust Network",
                url: "https://www.communitylandtrusts.ca/"
            }
        ]
    },
    {
        id: 2,
        title: "Senákw Development",
        location: "Kitsilano, Vancouver (near Burrard Bridge)",
        coordinates: [49.2735, -123.1375],
        description: `
            <p>Senákw is a landmark Indigenous-led development by the Squamish Nation on their reserve land near the south end of the Burrard Bridge. This project represents one of the largest Indigenous-led urban developments in Canadian history.</p>
            <p>The development gained significant attention due to Vancouver's "view cone" policies — the project's height required careful navigation of municipal regulations designed to protect mountain views. As reserve land, Senákw operates under federal jurisdiction, demonstrating how Indigenous land rights can create new pathways for housing development outside traditional municipal constraints.</p>
        `,
        keyPoints: [
            "Squamish Nation-led development on reserve land",
            "One of Canada's largest Indigenous urban housing projects",
            "Federal jurisdiction allows different development rules",
            "\"View cones\" controversy highlighted Indigenous land rights"
        ],
        resources: [
            {
                title: "Senákw Official Website",
                url: "https://www.senakw.com/"
            },
            {
                title: "Squamish Nation — Senákw Project",
                url: "https://www.squamish.net/senakw/"
            },
            {
                title: "Understanding Vancouver's View Cones",
                url: "https://vancouver.ca/home-property-development/view-cones.aspx"
            }
        ]
    },
    {
        id: 3,
        title: "Granville Island",
        location: "Granville Island, Vancouver",
        coordinates: [49.2701, -123.1340],
        description: `
            <p>Granville Island offers a compelling model of public land stewardship. As federal land managed by the Canada Mortgage and Housing Corporation (CMHC), Granville Island demonstrates how government-owned land can be leased rather than sold, maintaining public control while enabling diverse uses.</p>
            <p>UBC Professor Utyae Lee has documented this model in a mini-documentary exploring how Granville Island's approach to public land could inform housing policy. The key insight is that retaining public ownership while leasing land prevents speculation and maintains community benefit.</p>
        `,
        keyPoints: [
            "Federal land managed by CMHC since 1973",
            "Land lease model preserves public ownership",
            "Mixed-use development without privatization",
            "Featured in Utyae Lee's UBC mini-documentary"
        ],
        resources: [
            {
                title: "Granville Island — CMHC",
                url: "https://granvilleisland.com/"
            },
            {
                title: "History of Granville Island",
                url: "https://granvilleisland.com/about/history"
            },
            {
                title: "Public Land for Public Good — CCPA",
                url: "https://www.policyalternatives.ca/"
            }
        ]
    },
    {
        id: 4,
        title: "Downtown Eastside Community Land Trust",
        location: "Downtown Eastside, Vancouver",
        coordinates: [49.2827, -123.0985],
        description: `
            <p>The Downtown Eastside Community Land Trust (DTES CLT) represents community-led efforts to secure permanently affordable housing in one of Vancouver's most vulnerable neighbourhoods. The trust has recently acquired a key building, demonstrating the viability of community ownership in high-pressure real estate markets.</p>
            <p>Working alongside partners like the SRO Collaborative and Aboriginal Front Door, the DTES CLT is actively pursuing additional acquisitions to expand community-controlled housing. This work connects to broader efforts around eviction prevention and tenant rights through organizations like United.</p>
        `,
        keyPoints: [
            "Recently purchased a building for community housing",
            "Working on additional acquisitions",
            "Partners include SRO Collaborative and Aboriginal Front Door",
            "Connected to tenant rights work through United"
        ],
        resources: [
            {
                title: "Vancouver Community Land Trust Foundation",
                url: "https://www.vcltf.ca/"
            },
            {
                title: "SRO Collaborative",
                url: "https://www.srocollaborative.org/"
            },
            {
                title: "Carnegie Community Centre",
                url: "https://carnegiecentre.org/"
            }
        ]
    }
];

// Application State
let currentStopIndex = 0;
let map = null;
let markers = [];

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    initMap();
    initNavigation();
    initMobileToggle();
    renderStop(currentStopIndex);
    updateProgress();
    createStopDots();
});

// Initialize Leaflet Map
function initMap() {
    // Center map on Vancouver
    map = L.map('map', {
        center: [49.2750, -123.1200],
        zoom: 13,
        zoomControl: true
    });

    // Add tile layer (OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Alternative: Use a cleaner tile layer (CartoDB Positron)
    // L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    //     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
    // }).addTo(map);

    // Add markers for each stop
    tourStops.forEach((stop, index) => {
        const marker = createMarker(stop, index);
        markers.push(marker);
        marker.addTo(map);
    });

    // Fly to first stop
    flyToStop(0);
}

// Create custom marker
function createMarker(stop, index) {
    const icon = L.divIcon({
        className: 'custom-marker-wrapper',
        html: `<div class="custom-marker ${index === 0 ? 'active' : ''}" data-index="${index}">${index + 1}</div>`,
        iconSize: [36, 36],
        iconAnchor: [18, 18]
    });

    const marker = L.marker(stop.coordinates, { icon });

    marker.on('click', () => {
        goToStop(index);
    });

    return marker;
}

// Update marker active states
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

// Fly to a specific stop
function flyToStop(index) {
    const stop = tourStops[index];
    map.flyTo(stop.coordinates, 15, {
        duration: 1.5,
        easeLinearity: 0.25
    });
}

// Render stop content in sidebar
function renderStop(index) {
    const stop = tourStops[index];
    const container = document.getElementById('stopContent');

    const resourcesHTML = stop.resources.map(resource => `
        <a href="${resource.url}" target="_blank" rel="noopener noreferrer" class="resource-link">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                <polyline points="15 3 21 3 21 9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
            ${resource.title}
        </a>
    `).join('');

    const keyPointsHTML = stop.keyPoints.map(point => `
        <li>${point}</li>
    `).join('');

    container.innerHTML = `
        <span class="stop-number">${stop.id}</span>
        <h2 class="stop-title">${stop.title}</h2>
        <div class="stop-location">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                <circle cx="12" cy="10" r="3"/>
            </svg>
            ${stop.location}
        </div>
        <div class="stop-description">
            ${stop.description}
        </div>
        <div class="key-points">
            <div class="key-points-title">Key Points</div>
            <ul>
                ${keyPointsHTML}
            </ul>
        </div>
        <div class="resources">
            <div class="resources-title">Further Reading</div>
            ${resourcesHTML}
        </div>
    `;
}

// Update progress bar and text
function updateProgress() {
    const progress = ((currentStopIndex + 1) / tourStops.length) * 100;
    document.getElementById('progressFill').style.width = `${progress}%`;
    document.getElementById('progressText').textContent = `Stop ${currentStopIndex + 1} of ${tourStops.length}`;
}

// Create stop selector dots
function createStopDots() {
    const container = document.getElementById('stopDots');
    container.innerHTML = tourStops.map((_, index) => `
        <button class="dot ${index === 0 ? 'active' : ''}" data-index="${index}" aria-label="Go to stop ${index + 1}"></button>
    `).join('');

    // Add click handlers
    container.querySelectorAll('.dot').forEach(dot => {
        dot.addEventListener('click', (e) => {
            const index = parseInt(e.target.dataset.index);
            goToStop(index);
        });
    });
}

// Update active dot
function updateDots() {
    document.querySelectorAll('.dot').forEach((dot, index) => {
        dot.classList.toggle('active', index === currentStopIndex);
    });
}

// Navigation
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
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft' && currentStopIndex > 0) {
            goToStop(currentStopIndex - 1);
        } else if (e.key === 'ArrowRight' && currentStopIndex < tourStops.length - 1) {
            goToStop(currentStopIndex + 1);
        }
    });
}

// Go to specific stop
function goToStop(index) {
    currentStopIndex = index;
    renderStop(index);
    flyToStop(index);
    updateProgress();
    updateDots();
    updateMarkers();
    updateNavButtons();

    // On mobile, collapse sidebar after selection
    if (window.innerWidth <= 768) {
        document.getElementById('sidebar').classList.remove('expanded');
    }
}

// Update navigation button states
function updateNavButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    prevBtn.disabled = currentStopIndex === 0;
    nextBtn.disabled = currentStopIndex === tourStops.length - 1;

    // Update next button text on last stop
    if (currentStopIndex === tourStops.length - 1) {
        nextBtn.innerHTML = `
            Complete
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="20 6 9 17 4 12"/>
            </svg>
        `;
    } else {
        nextBtn.innerHTML = `
            Next
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M9 18l6-6-6-6"/>
            </svg>
        `;
    }
}

// Mobile toggle
function initMobileToggle() {
    const sidebar = document.getElementById('sidebar');
    const header = document.querySelector('.sidebar-header');
    const toggle = document.getElementById('mobileToggle');

    // Toggle sidebar on mobile
    header.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            sidebar.classList.toggle('expanded');
        }
    });

    toggle.addEventListener('click', () => {
        sidebar.classList.toggle('expanded');
    });

    // Close sidebar when clicking on map on mobile
    document.getElementById('map').addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            sidebar.classList.remove('expanded');
        }
    });
}

// Export for potential external use
window.BSHTour = {
    goToStop,
    getCurrentStop: () => currentStopIndex,
    getTotalStops: () => tourStops.length,
    getStopData: (index) => tourStops[index]
};
