/**
 * BSH 2026 Interactive Map Tour
 * Non-Profit Housing in Vancouver
 * Modernized Version with Tabs, Gallery & Rich Content
 */

// ============================================
// Tour Stop Data - Enhanced Structure
// ============================================

const tourStops = [
    {
        id: 1,
        title: "False Creek South Community Land Trust",
        location: "False Creek South, Vancouver",
        coordinates: [49.2712, -123.1280],

        // Hero image (placeholder for now)
        heroImage: {
            src: "images/fcs-hero.jpg",
            alt: "Aerial view of False Creek South mixed-tenure community",
            caption: "False Creek South — A model of mixed-tenure housing since the 1970s"
        },

        // Quick stats for badges
        stats: [
            { label: "Established", value: "1974" },
            { label: "Units", value: "1,800+" },
            { label: "Tenure Types", value: "6" }
        ],

        // Content organized into sections/tabs
        sections: [
            {
                id: "overview",
                label: "Overview",
                icon: "info",
                content: `
                    <p>False Creek South represents one of Vancouver's most successful experiments in mixed-tenure community development. Developed on city-owned land starting in the 1970s, this neighbourhood demonstrates how public land can support diverse housing options while maintaining long-term affordability.</p>
                    <p>The area features an intentional mix of housing tenures — <strong>co-operatives, non-market rentals, market rentals, strata residential, and city-owned properties</strong> — all coexisting within the same community. This diversity was deliberate: city planners designed the neighbourhood to avoid the social stratification common in single-tenure developments.</p>
                    <p>Chaired by <strong>Robyn Chan</strong>, the False Creek South community continues to advocate for the preservation of this mixed-tenure model as the city considers redevelopment options.</p>
                `
            },
            {
                id: "details",
                label: "Housing Model",
                icon: "document",
                content: `
                    <h4>Mixed Tenure Breakdown</h4>
                    <p>The False Creek South neighbourhood showcases six distinct tenure types, each serving different community needs:</p>
                    <ul>
                        <li><strong>Co-operatives (Co-Op):</strong> Member-owned housing where residents have secure tenure and participate in governance. Examples include Twin Rainbows Co-Op, Creek View Co-Op, Fountain Terrace, and Spruce Harbour Co-Op.</li>
                        <li><strong>Non-Market Rental:</strong> Below-market housing typically operated by non-profit societies, ensuring affordability for lower-income residents.</li>
                        <li><strong>Market Rental:</strong> Rental housing at market rates, providing flexibility for those who prefer renting.</li>
                        <li><strong>Strata Residential:</strong> Privately-owned condominiums within the mixed community.</li>
                        <li><strong>City-Owned Properties:</strong> Land and buildings retained by the City of Vancouver.</li>
                        <li><strong>Commercial & Civic:</strong> Including False Creek School and retail frontages.</li>
                    </ul>

                    <h4>The Land Lease Model</h4>
                    <p>A key feature of False Creek South is that the <strong>land remains publicly owned</strong>. Housing operators lease the land from the city rather than purchasing it outright. This approach:</p>
                    <ul>
                        <li>Keeps land costs out of housing prices</li>
                        <li>Prevents speculation and land flipping</li>
                        <li>Maintains public control over development decisions</li>
                        <li>Allows the city to enforce affordability requirements</li>
                    </ul>
                `,
                keyPoints: [
                    "Land is leased, not sold — city retains ownership",
                    "Six different tenure types create economic diversity",
                    "Co-ops provide democratic, resident-controlled housing",
                    "Non-market units ensure permanent affordability"
                ]
            },
            {
                id: "gallery",
                label: "Gallery",
                icon: "images",
                type: "gallery",
                images: [
                    {
                        src: "images/fcs-map.jpg",
                        alt: "False Creek South tenure map showing different housing types",
                        caption: "Tenure map by VIA Architecture showing the mix of housing types"
                    },
                    {
                        src: "images/fcs-coop.jpg",
                        alt: "Co-operative housing at False Creek South",
                        caption: "Co-operative housing buildings along the seawall"
                    },
                    {
                        src: "images/fcs-community.jpg",
                        alt: "Community spaces at False Creek South",
                        caption: "Shared community gardens and gathering spaces"
                    },
                    {
                        src: "images/fcs-aerial.jpg",
                        alt: "Aerial view of False Creek South",
                        caption: "The neighbourhood's relationship to downtown Vancouver"
                    }
                ]
            },
            {
                id: "resources",
                label: "Resources",
                icon: "link",
                type: "resources",
                resources: [
                    {
                        title: "False Creek South Neighbourhood Association",
                        url: "https://www.falsecreeksouth.org/",
                        description: "Official community organization website"
                    },
                    {
                        title: "VIA Architecture — False Creek South Analysis",
                        url: "https://via-architecture.com/",
                        description: "Detailed tenure mapping and planning analysis"
                    },
                    {
                        title: "City of Vancouver — False Creek South",
                        url: "https://vancouver.ca/home-property-development/false-creek-south.aspx",
                        description: "Municipal information and planning documents"
                    },
                    {
                        title: "Community Land Trust Overview — BC Housing",
                        url: "https://www.bchousing.org/",
                        description: "Provincial context for land trust models"
                    }
                ]
            }
        ],

        tags: ["community-land-trust", "cooperative", "mixed-tenure", "public-land"]
    },
    {
        id: 2,
        title: "Senákw Development",
        location: "Kitsilano, Vancouver (near Burrard Bridge)",
        coordinates: [49.2735, -123.1375],

        heroImage: {
            src: "images/senakw-hero.jpg",
            alt: "Rendering of Senákw development towers",
            caption: "Senákw — The largest Indigenous-led urban development in Canada"
        },

        stats: [
            { label: "Nation", value: "Squamish" },
            { label: "Units", value: "6,000+" },
            { label: "Towers", value: "11" }
        ],

        sections: [
            {
                id: "overview",
                label: "Overview",
                icon: "info",
                content: `
                    <p>Senákw (pronounced "sen-AHK-w") is a landmark Indigenous-led development by the <strong>Squamish Nation</strong> on their reserve land near the south end of the Burrard Bridge. This project represents one of the largest Indigenous-led urban developments in Canadian history.</p>
                    <p>The development will include approximately <strong>6,000 rental units</strong> across 11 towers, with a commitment that over half will be rented at below-market rates. The project demonstrates how Indigenous land rights can create new pathways for housing development outside traditional municipal constraints.</p>
                    <p>Key figures involved include members of the Squamish Nation Council and development partner Westbank, with ongoing collaboration involving <strong>Alex Flynn</strong> and <strong>Nathan Lawster</strong> on housing policy dimensions.</p>
                `
            },
            {
                id: "details",
                label: "Land Rights",
                icon: "document",
                content: `
                    <h4>Federal Jurisdiction & View Cones</h4>
                    <p>The Senákw development gained significant attention due to Vancouver's "view cone" policies. The project's proposed height initially conflicted with municipal regulations designed to protect mountain views from various points in the city.</p>
                    <p>However, as <strong>reserve land under federal jurisdiction</strong>, Senákw operates outside Vancouver's zoning bylaws. This jurisdictional distinction allows the Squamish Nation to develop the land according to their own priorities rather than municipal regulations.</p>

                    <h4>Indigenous Land Development in BC</h4>
                    <p>Senákw is part of a broader movement of Indigenous nations in British Columbia reclaiming and developing their traditional territories:</p>
                    <ul>
                        <li>Nations are increasingly using land development as a tool for economic self-determination</li>
                        <li>Projects often prioritize community benefit over maximum profit</li>
                        <li>Housing developments can include cultural spaces and community amenities</li>
                        <li>Land is typically retained rather than sold, maintaining long-term nation ownership</li>
                    </ul>

                    <h4>Rental Model</h4>
                    <p>Unlike many market developments, Senákw is designed as a <strong>100% rental project</strong>. The Squamish Nation has committed to maintaining affordability, with plans for a significant portion of below-market units.</p>
                `,
                keyPoints: [
                    "Federal reserve land — outside municipal zoning",
                    "100% rental development, no condos for sale",
                    "Over 50% of units at below-market rents",
                    "Demonstrates Indigenous-led urban development model"
                ]
            },
            {
                id: "gallery",
                label: "Gallery",
                icon: "images",
                type: "gallery",
                images: [
                    {
                        src: "images/senakw-render.jpg",
                        alt: "Architectural rendering of Senákw towers",
                        caption: "Planned development showing 11 towers"
                    },
                    {
                        src: "images/senakw-site.jpg",
                        alt: "Current Senákw development site",
                        caption: "Development site near the Burrard Bridge"
                    },
                    {
                        src: "images/senakw-context.jpg",
                        alt: "Senákw in Vancouver context",
                        caption: "Location relative to downtown and Kitsilano"
                    }
                ]
            },
            {
                id: "resources",
                label: "Resources",
                icon: "link",
                type: "resources",
                resources: [
                    {
                        title: "Senákw Official Website",
                        url: "https://www.senakw.com/",
                        description: "Project information from the Squamish Nation"
                    },
                    {
                        title: "Squamish Nation",
                        url: "https://www.squamish.net/",
                        description: "Official Squamish Nation website"
                    },
                    {
                        title: "Understanding Vancouver's View Cones",
                        url: "https://vancouver.ca/home-property-development/view-cones.aspx",
                        description: "City policy on protected views"
                    }
                ]
            }
        ],

        tags: ["indigenous", "rental", "federal-land", "squamish-nation"]
    },
    {
        id: 3,
        title: "Granville Island",
        location: "Granville Island, Vancouver",
        coordinates: [49.2701, -123.1340],

        heroImage: {
            src: "images/granville-hero.jpg",
            alt: "Granville Island public market and waterfront",
            caption: "Granville Island — Federal public land since 1973"
        },

        stats: [
            { label: "Manager", value: "CMHC" },
            { label: "Since", value: "1973" },
            { label: "Model", value: "Land Lease" }
        ],

        sections: [
            {
                id: "overview",
                label: "Overview",
                icon: "info",
                content: `
                    <p>Granville Island offers a compelling model of <strong>public land stewardship</strong>. As federal land managed by the Canada Mortgage and Housing Corporation (CMHC) since 1973, Granville Island demonstrates how government-owned land can be leased rather than sold, maintaining public control while enabling diverse uses.</p>
                    <p>UBC Professor <strong>Utyae Lee</strong> has documented this model in a mini-documentary exploring how Granville Island's approach to public land could inform housing policy. The key insight is that retaining public ownership while leasing land prevents speculation and maintains community benefit.</p>
                    <p>The island's transformation from industrial land to a vibrant mixed-use destination happened without privatizing the land — a model that housing advocates argue could be applied to residential development.</p>
                `
            },
            {
                id: "details",
                label: "Land Model",
                icon: "document",
                content: `
                    <h4>The Land Lease Approach</h4>
                    <p>Granville Island operates on a <strong>land lease model</strong> where CMHC retains ownership of all land and leases it to various tenants including:</p>
                    <ul>
                        <li>The Public Market and food vendors</li>
                        <li>Arts and cultural organizations</li>
                        <li>Educational institutions (Emily Carr University was here until 2017)</li>
                        <li>Marine and industrial businesses</li>
                        <li>Restaurants and retail</li>
                    </ul>

                    <h4>Why This Matters for Housing</h4>
                    <p>The Granville Island model demonstrates several principles applicable to housing:</p>
                    <ul>
                        <li><strong>Public ownership prevents speculation:</strong> Land values don't inflate housing costs</li>
                        <li><strong>Long-term leases provide security:</strong> Tenants can invest in improvements</li>
                        <li><strong>Public benefit is prioritized:</strong> Uses serve community rather than maximizing land value</li>
                        <li><strong>Mixed uses create vibrancy:</strong> Diversity of tenants creates a complete community</li>
                    </ul>

                    <h4>Utyae Lee's Research</h4>
                    <p>Professor Lee's mini-documentary explores how federal land management at Granville Island could provide a template for affordable housing development. The research examines how separating land costs from building costs could dramatically improve housing affordability.</p>
                `,
                keyPoints: [
                    "Federal land managed by CMHC since 1973",
                    "Land lease model preserves public ownership",
                    "No privatization despite massive value increase",
                    "Model could inform housing policy"
                ]
            },
            {
                id: "gallery",
                label: "Gallery",
                icon: "images",
                type: "gallery",
                images: [
                    {
                        src: "images/granville-market.jpg",
                        alt: "Granville Island Public Market",
                        caption: "The Public Market — anchor of the island's mixed-use development"
                    },
                    {
                        src: "images/granville-aerial.jpg",
                        alt: "Aerial view of Granville Island",
                        caption: "The island's relationship to False Creek and downtown"
                    },
                    {
                        src: "images/granville-arts.jpg",
                        alt: "Arts and cultural spaces on Granville Island",
                        caption: "Cultural institutions benefit from below-market land leases"
                    }
                ]
            },
            {
                id: "resources",
                label: "Resources",
                icon: "link",
                type: "resources",
                resources: [
                    {
                        title: "Granville Island Official Website",
                        url: "https://granvilleisland.com/",
                        description: "CMHC-managed destination information"
                    },
                    {
                        title: "History of Granville Island",
                        url: "https://granvilleisland.com/about/history",
                        description: "From industrial land to public space"
                    },
                    {
                        title: "CMHC — Granville Island",
                        url: "https://www.cmhc-schl.gc.ca/",
                        description: "Federal housing corporation overview"
                    },
                    {
                        title: "Public Land for Public Good — CCPA",
                        url: "https://www.policyalternatives.ca/",
                        description: "Policy research on public land and housing"
                    }
                ]
            }
        ],

        tags: ["public-land", "federal", "land-lease", "cmhc"]
    },
    {
        id: 4,
        title: "Downtown Eastside Community Land Trust",
        location: "Downtown Eastside, Vancouver",
        coordinates: [49.2827, -123.0985],

        heroImage: {
            src: "images/dtes-hero.jpg",
            alt: "Downtown Eastside community housing",
            caption: "DTES CLT — Community-led housing in Vancouver's most vulnerable neighbourhood"
        },

        stats: [
            { label: "Focus", value: "SRO Housing" },
            { label: "Partners", value: "10+" },
            { label: "Status", value: "Active" }
        ],

        sections: [
            {
                id: "overview",
                label: "Overview",
                icon: "info",
                content: `
                    <p>The Downtown Eastside Community Land Trust (DTES CLT) represents community-led efforts to secure permanently affordable housing in one of Vancouver's most vulnerable neighbourhoods. The trust has <strong>recently acquired a key building</strong>, demonstrating the viability of community ownership in high-pressure real estate markets.</p>
                    <p>The DTES CLT works alongside a network of community partners to preserve and expand affordable housing options, particularly Single Room Occupancy (SRO) hotels that provide essential housing for low-income residents.</p>
                    <p>The organization is actively <strong>working on additional acquisitions</strong> to expand community-controlled housing in the neighbourhood.</p>
                `
            },
            {
                id: "details",
                label: "Partners & Work",
                icon: "document",
                content: `
                    <h4>Community Partners</h4>
                    <p>The DTES CLT works within a broader ecosystem of community organizations:</p>
                    <ul>
                        <li><strong>SRO Collaborative:</strong> Coalition working to preserve Single Room Occupancy hotels</li>
                        <li><strong>Aboriginal Front Door:</strong> Indigenous-led support services</li>
                        <li><strong>Carnegie Community Centre:</strong> Historic community hub and gathering space</li>
                        <li><strong>Hogan's Alley Society:</strong> Working to restore Vancouver's historic Black neighbourhood, with buildings on Union Street and Main Street</li>
                        <li><strong>United — Evictions and Tenure Project:</strong> Renter rights and eviction prevention support</li>
                        <li><strong>UBC Learning Exchange:</strong> University-community partnership</li>
                    </ul>

                    <h4>Recent Acquisitions</h4>
                    <p>The DTES CLT has successfully acquired properties to convert to permanent community ownership. This model:</p>
                    <ul>
                        <li>Removes buildings from the speculative market</li>
                        <li>Ensures long-term affordability through CLT structure</li>
                        <li>Keeps housing decisions in community hands</li>
                        <li>Prevents displacement of current residents</li>
                    </ul>

                    <h4>Ongoing Work</h4>
                    <p>The trust continues to identify acquisition opportunities and build partnerships with funders, government agencies, and community organizations to expand community-controlled housing.</p>
                `,
                keyPoints: [
                    "Recently purchased building for community housing",
                    "Working on additional property acquisitions",
                    "Partners include SRO Collaborative and Aboriginal Front Door",
                    "Connected to tenant rights work through United"
                ]
            },
            {
                id: "gallery",
                label: "Gallery",
                icon: "images",
                type: "gallery",
                images: [
                    {
                        src: "images/dtes-sro.jpg",
                        alt: "SRO hotel in the Downtown Eastside",
                        caption: "Single Room Occupancy hotels provide essential housing"
                    },
                    {
                        src: "images/dtes-carnegie.jpg",
                        alt: "Carnegie Community Centre",
                        caption: "Carnegie Centre — heart of the DTES community"
                    },
                    {
                        src: "images/dtes-community.jpg",
                        alt: "Community organizing in the DTES",
                        caption: "Community members advocating for housing rights"
                    }
                ]
            },
            {
                id: "resources",
                label: "Resources",
                icon: "link",
                type: "resources",
                resources: [
                    {
                        title: "Vancouver Community Land Trust Foundation",
                        url: "https://www.vcltf.ca/",
                        description: "Regional CLT organization"
                    },
                    {
                        title: "SRO Collaborative",
                        url: "https://www.srocollaborative.org/",
                        description: "Coalition preserving SRO housing"
                    },
                    {
                        title: "Carnegie Community Centre",
                        url: "https://carnegiecentre.org/",
                        description: "Historic community hub"
                    },
                    {
                        title: "Hogan's Alley Society",
                        url: "https://www.hogansalleysociety.org/",
                        description: "Restoring Vancouver's Black community"
                    }
                ]
            }
        ],

        tags: ["community-land-trust", "sro", "dtes", "affordable"]
    }
];

// ============================================
// Application State
// ============================================

let currentStopIndex = 0;
let currentSectionIndex = 0;
let map = null;
let markers = [];
let lightboxActive = false;
let lightboxImages = [];
let lightboxIndex = 0;

// ============================================
// Icons
// ============================================

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
    link: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
        <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
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

// ============================================
// Initialize Application
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    initMap();
    initNavigation();
    initMobileToggle();
    initKeyboardShortcuts();
    renderStop(currentStopIndex);
    updateProgress();
    createStopDots();
    createLightbox();
    createKeyboardHint();
});

// ============================================
// Map Functions
// ============================================

function initMap() {
    // Center map on Vancouver
    map = L.map('map', {
        center: [49.2750, -123.1200],
        zoom: 13,
        zoomControl: true
    });

    // Use CartoDB Positron for a cleaner look
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 19
    }).addTo(map);

    // Add markers for each stop
    tourStops.forEach((stop, index) => {
        const marker = createMarker(stop, index);
        markers.push(marker);
        marker.addTo(map);
    });

    // Fly to first stop
    flyToStop(0);
}

function createMarker(stop, index) {
    const icon = L.divIcon({
        className: 'custom-marker-wrapper',
        html: `<div class="custom-marker ${index === 0 ? 'active' : ''}" data-index="${index}">${index + 1}</div>`,
        iconSize: [40, 40],
        iconAnchor: [20, 20]
    });

    const marker = L.marker(stop.coordinates, { icon });

    marker.on('click', () => {
        goToStop(index);
    });

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
    map.flyTo(stop.coordinates, 15, {
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

    // Reset section index
    currentSectionIndex = 0;

    // Scroll to top
    container.scrollTop = 0;

    container.innerHTML = `
        ${renderHeroImage(stop.heroImage)}

        <div class="stop-header">
            <span class="stop-number">${stop.id}</span>
            <h2 class="stop-title">${stop.title}</h2>
            <div class="stop-location">
                ${icons.location}
                ${stop.location}
            </div>
            ${renderStats(stop.stats)}
        </div>

        ${renderSectionTabs(stop.sections)}

        <div class="section-panels">
            ${stop.sections.map((section, idx) => renderSectionPanel(section, idx)).join('')}
        </div>
    `;

    // Initialize section tab handlers
    initSectionTabs();
    initGalleryHandlers(stop);
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
        <div class="stop-hero">
            <img
                src="${heroImage.src}"
                alt="${heroImage.alt}"
                loading="eager"
                onerror="this.parentElement.classList.add('placeholder'); this.style.display='none'; this.parentElement.innerHTML='${icons.placeholder}';"
            />
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

    return `
        <div class="gallery-grid">
            ${images.map((image, index) => `
                <div class="gallery-item ${!image.src ? 'placeholder' : ''}" data-index="${index}" tabindex="0" role="button">
                    ${image.src ? `
                        <img
                            src="${image.src}"
                            alt="${image.alt}"
                            loading="lazy"
                            onerror="this.parentElement.classList.add('placeholder'); this.style.display='none'; this.parentElement.innerHTML='${icons.placeholder}';"
                        />
                        <div class="gallery-item-overlay">
                            <span class="gallery-item-caption">${image.caption || ''}</span>
                        </div>
                    ` : icons.placeholder}
                </div>
            `).join('')}
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

    // Update tab states
    document.querySelectorAll('.section-tab').forEach((tab, index) => {
        const isActive = index === sectionIndex;
        tab.classList.toggle('active', isActive);
        tab.setAttribute('aria-selected', isActive);
    });

    // Update panel visibility
    document.querySelectorAll('.section-panel').forEach((panel, index) => {
        panel.classList.toggle('active', index === sectionIndex);
    });
}

// ============================================
// Gallery & Lightbox
// ============================================

function initGalleryHandlers(stop) {
    const gallerySection = stop.sections?.find(s => s.type === 'gallery');
    if (!gallerySection || !gallerySection.images) return;

    lightboxImages = gallerySection.images;

    document.querySelectorAll('.gallery-item:not(.placeholder)').forEach(item => {
        item.addEventListener('click', () => {
            const index = parseInt(item.dataset.index);
            openLightbox(index);
        });

        item.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const index = parseInt(item.dataset.index);
                openLightbox(index);
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

    // Event listeners
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
    document.getElementById('progressText').textContent = `Stop ${currentStopIndex + 1} of ${tourStops.length}`;
}

function createStopDots() {
    const container = document.getElementById('stopDots');
    container.innerHTML = tourStops.map((stop, index) => `
        <button
            class="dot ${index === 0 ? 'active' : ''}"
            data-index="${index}"
            data-title="${stop.title}"
            aria-label="Go to ${stop.title}"
        ></button>
    `).join('');

    container.querySelectorAll('.dot').forEach(dot => {
        dot.addEventListener('click', (e) => {
            const index = parseInt(e.target.dataset.index);
            goToStop(index);
        });
    });
}

function updateDots() {
    document.querySelectorAll('.dot').forEach((dot, index) => {
        dot.classList.toggle('active', index === currentStopIndex);
    });
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
        }
    });
}

function goToStop(index) {
    currentStopIndex = index;
    renderStop(index);
    flyToStop(index);
    updateProgress();
    updateDots();
    updateMarkers();
    updateNavButtons();

    // Collapse mobile sidebar
    if (window.innerWidth <= 768) {
        document.getElementById('sidebar').classList.remove('expanded');
    }
}

function updateNavButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    prevBtn.disabled = currentStopIndex === 0;
    nextBtn.disabled = currentStopIndex === tourStops.length - 1;

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

// ============================================
// Mobile Toggle
// ============================================

function initMobileToggle() {
    const sidebar = document.getElementById('sidebar');
    const header = document.querySelector('.sidebar-header');
    const toggle = document.getElementById('mobileToggle');

    header.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            sidebar.classList.toggle('expanded');
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
        // Lightbox navigation
        if (lightboxActive) {
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowLeft') navigateLightbox(-1);
            if (e.key === 'ArrowRight') navigateLightbox(1);
            return;
        }

        // Stop navigation
        if (e.key === 'ArrowLeft' && currentStopIndex > 0) {
            goToStop(currentStopIndex - 1);
        } else if (e.key === 'ArrowRight' && currentStopIndex < tourStops.length - 1) {
            goToStop(currentStopIndex + 1);
        }

        // Tab navigation with number keys
        if (e.key >= '1' && e.key <= '4') {
            const tabIndex = parseInt(e.key) - 1;
            const tabs = document.querySelectorAll('.section-tab');
            if (tabs[tabIndex]) {
                switchSection(tabIndex);
            }
        }
    });
}

function createKeyboardHint() {
    const mapContainer = document.querySelector('.map-container');
    const hint = document.createElement('div');
    hint.className = 'keyboard-hint';
    hint.innerHTML = `
        <span><kbd>←</kbd> <kbd>→</kbd> Navigate stops</span>
        <span><kbd>1</kbd>-<kbd>4</kbd> Switch tabs</span>
    `;
    mapContainer.appendChild(hint);
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
