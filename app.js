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
            { label: "City-Owned", value: "80%" },
            { label: "Co-ops", value: "6" },
            { label: "Leases Expire", value: "2030s-40s" }
        ],

        // Content organized into sections/tabs
        sections: [
            {
                id: "overview",
                label: "Overview",
                icon: "info",
                content: `
                    <p>False Creek South represents one of Vancouver's most successful experiments in mixed-tenure community development. Built on former industrial land in the 1970s and 1980s, this neighbourhood demonstrates how <strong>public land ownership</strong> can support diverse housing options while maintaining long-term affordability.</p>
                    <p>The City of Vancouver owns <strong>80% of False Creek South</strong>, making it a rare example of large-scale public land stewardship. The original vision committed to a tenure mix of one-third non-market rental housing, one-third co-ops, and one-third condominiums — a model designed to avoid the social stratification common in single-tenure developments.</p>
                    <p><strong>Robyn Chan</strong>, Project Manager for the False Creek South Community Housing Trust, leads community planning efforts. A civic engagement specialist with a Masters in Urban Studies from SFU, Chan has been working with the neighbourhood to establish a community land trust that would give residents more control over their housing future.</p>
                `
            },
            {
                id: "details",
                label: "Housing Model",
                icon: "document",
                content: `
                    <h4>Mixed Tenure Breakdown</h4>
                    <p>False Creek South showcases six distinct tenure types, each serving different community needs:</p>
                    <ul>
                        <li><strong>Co-operatives:</strong> Six housing co-ops including Twin Rainbows (86 units, opened 1981), Creekview, Alder Bay, and others. Members have secure tenure and participate in democratic governance.</li>
                        <li><strong>Non-Market Rental:</strong> Below-market housing operated by non-profit societies, ensuring affordability for lower-income residents.</li>
                        <li><strong>Market Rental:</strong> Rental housing at market rates, providing flexibility for those who prefer renting.</li>
                        <li><strong>Strata Residential:</strong> Privately-owned condominiums within the mixed community.</li>
                        <li><strong>City-Owned Properties:</strong> Land and buildings retained by the City of Vancouver.</li>
                        <li><strong>Commercial & Civic:</strong> Including False Creek School and retail frontages.</li>
                    </ul>

                    <h4>The Land Lease Model</h4>
                    <p>Housing operators <strong>lease land from the city</strong> rather than purchasing it. All lease terms expire in the 2030s and 2040s, creating both opportunity and uncertainty. This model:</p>
                    <ul>
                        <li>Keeps land costs out of housing prices</li>
                        <li>Prevents speculation and land flipping</li>
                        <li>Maintains public control over development decisions</li>
                        <li>Allows the city to enforce affordability requirements</li>
                    </ul>

                    <h4>Community Land Trust Initiative</h4>
                    <p>In March 2024, Vancouver Council passed a motion supporting the construction of new co-ops on City-owned land through a <strong>community land trust model</strong>. The False Creek South Community Housing Trust received funding from Vancity Community Foundation to develop a business plan and engage with co-op boards. As Robyn Chan explains: "It's a way to have more control and to expand non-profit housing."</p>
                `,
                keyPoints: [
                    "80% of neighbourhood is on City-owned land",
                    "Six housing co-ops with democratic resident governance",
                    "All land leases expire in 2030s-2040s — critical transition period",
                    "March 2024 Council motion supports community land trust model"
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
                        caption: "Tenure map showing the mix of co-ops, non-market, market, and strata housing"
                    },
                    {
                        src: "images/fcs-coop.jpg",
                        alt: "Co-operative housing at False Creek South",
                        caption: "Twin Rainbows Co-op — 86 units in two seven-storey buildings since 1981"
                    },
                    {
                        src: "images/fcs-community.jpg",
                        alt: "Community spaces at False Creek South",
                        caption: "Shared community spaces and seawall access"
                    },
                    {
                        src: "images/fcs-aerial.jpg",
                        alt: "Aerial view of False Creek South",
                        caption: "The neighbourhood's relationship to Granville Island and downtown"
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
                        title: "False Creek South Neighbourhood Association (RePlan)",
                        url: "https://www.falsecreeksouth.org/",
                        description: "Official community organization and housing trust information"
                    },
                    {
                        title: "False Creek South Community Housing Trust",
                        url: "https://www.falsecreeksouth.org/community-housing-trust/",
                        description: "About the community land trust initiative"
                    },
                    {
                        title: "City of Vancouver — False Creek South",
                        url: "https://vancouver.ca/home-property-development/false-creek-south.aspx",
                        description: "Municipal planning information and policy documents"
                    },
                    {
                        title: "Globe and Mail — Are Land Trusts the Future?",
                        url: "https://www.theglobeandmail.com/business/article-are-land-trusts-the-future-of-canadian-housing/",
                        description: "Coverage of False Creek South's community land trust model"
                    },
                    {
                        title: "CHF BC — Find a Co-op",
                        url: "https://www.chf.bc.ca/find-co-op/",
                        description: "Co-operative Housing Federation of BC directory"
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
            caption: "Senákw — The largest Indigenous-led urban development in Canadian history"
        },

        stats: [
            { label: "Units", value: "6,000" },
            { label: "Affordable", value: "1,200" },
            { label: "Phase 1", value: "2026" }
        ],

        sections: [
            {
                id: "overview",
                label: "Overview",
                icon: "info",
                content: `
                    <p>Senákw (pronounced "sen-AHK-w") is the <strong>largest Indigenous-led urban housing development in Canadian history</strong>. Located on 10.5 acres of Squamish Nation reserve land near the south end of the Burrard Bridge, this project demonstrates how Indigenous land rights can create new pathways for housing development.</p>
                    <p>The development will include <strong>6,000 purpose-built rental units</strong> across 11 towers, with 4 million square feet of floor space. Critically, <strong>1,200 units will be designated affordable</strong>, and rents will be 30-40% below comparable market rates.</p>
                    <p>In September 2022, Prime Minister Justin Trudeau announced a <strong>$1.4 billion federal loan</strong> to fund the first two phases. The first phase of ~1,408 rental homes targets occupancy in 2025-2026, with full completion expected by 2030.</p>
                `
            },
            {
                id: "details",
                label: "Land Rights",
                icon: "document",
                content: `
                    <h4>Federal Jurisdiction & View Cones</h4>
                    <p>Senákw operates on <strong>federal reserve land</strong>, which exempts it from Vancouver's municipal zoning bylaws — including the city's "view cone" policies that restrict building heights to protect mountain views.</p>
                    <p>Vancouver's view cones, established in 1989, identify 38 protected views from specific locations. The Senákw towers enter View Cone 20.0 (from West Broadway and Granville Street), but as reserve land, the project is not bound by these restrictions. In July 2024, Council approved major changes to the view cone policy, partly influenced by Senákw's development.</p>

                    <h4>Ownership & Partnership</h4>
                    <p>In August 2025, <strong>OPTrust</strong> — one of Canada's largest pension fund investors — acquired development partner Westbank's ownership stake in Phases One and Two. OPTrust and the Squamish Nation now each hold <strong>50% ownership</strong> in these phases, representing a significant Indigenous-led partnership model.</p>

                    <h4>Indigenous Land Development in BC</h4>
                    <p>Senákw is part of a broader movement of Indigenous nations using land development for economic self-determination:</p>
                    <ul>
                        <li>Land is retained rather than sold, maintaining long-term nation ownership</li>
                        <li>Projects prioritize community benefit alongside economic returns</li>
                        <li>Housing developments include cultural spaces and community amenities</li>
                        <li>The 100% rental model prevents speculation and ensures ongoing control</li>
                    </ul>
                `,
                keyPoints: [
                    "Federal reserve land — exempt from municipal zoning",
                    "100% rental: 6,000 units with 1,200 affordable",
                    "$1.4B federal loan announced September 2022",
                    "50/50 Squamish Nation-OPTrust ownership (Phases 1-2)"
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
                        caption: "11 towers up to 56 storeys with 4 million sq ft of floor space"
                    },
                    {
                        src: "images/senakw-site.jpg",
                        alt: "Current Senákw development site",
                        caption: "10.5 acres of Squamish Nation land at Kits Point"
                    },
                    {
                        src: "images/senakw-context.jpg",
                        alt: "Senákw in Vancouver context",
                        caption: "Location relative to Burrard Bridge and downtown Vancouver"
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
                        description: "Project timeline, unit information, and updates"
                    },
                    {
                        title: "Squamish Nation — Senákw Partnership",
                        url: "https://www.squamish.net/partnerships-entities/partnerships/senakw/",
                        description: "Squamish Nation's overview of the project"
                    },
                    {
                        title: "City of Vancouver — Senákw Development",
                        url: "https://vancouver.ca/home-property-development/senakw-development.aspx",
                        description: "City coordination and infrastructure planning"
                    },
                    {
                        title: "CBC — Inside Canada's Largest Indigenous-Led Housing Development",
                        url: "https://www.cbc.ca/news/canada/british-columbia/sen-%C3%A1%E1%B8%B5w-sneak-preview-1.7451499",
                        description: "2025 media coverage with interior previews"
                    },
                    {
                        title: "Vancouver Public Views Policy",
                        url: "https://vancouver.ca/home-property-development/protecting-vancouvers-views.aspx",
                        description: "Background on view cone regulations"
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
            caption: "Granville Island — 40 acres of federal public land, self-sustaining since 1973"
        },

        stats: [
            { label: "Size", value: "40 acres" },
            { label: "Tenants", value: "300+" },
            { label: "Govt Funding", value: "$0" }
        ],

        sections: [
            {
                id: "overview",
                label: "Overview",
                icon: "info",
                content: `
                    <p>Granville Island is a <strong>40-acre federal property</strong> that demonstrates how public land ownership can create vibrant, mixed-use communities without privatization. Managed by the Canada Mortgage and Housing Corporation (CMHC) since 1973, the island is entirely <strong>self-sustaining with no government funding</strong> — operating solely on lease revenue and parking fees.</p>
                    <p>As federal land, Granville Island operates outside Vancouver's municipal regulations, functioning essentially as <strong>its own jurisdiction</strong>. This flexibility has allowed for creative placemaking that wouldn't be possible under rigid municipal zoning.</p>
                    <p>UBC Professor <strong>Utyae Lee</strong> has documented this model in a mini-documentary exploring how Granville Island's approach to public land could inform housing policy — particularly how separating land costs from building costs could improve affordability.</p>
                `
            },
            {
                id: "details",
                label: "Land Model",
                icon: "document",
                content: `
                    <h4>The Land Lease Approach</h4>
                    <p>CMHC owns all land on Granville Island and leases it to <strong>over 300 commercial, retail, cultural, artistic, and educational tenants</strong>. The island operates a <strong>subsidy model</strong> where market rents from some businesses support more affordable rents for:</p>
                    <ul>
                        <li>Small businesses and artisans</li>
                        <li>Arts and cultural organizations</li>
                        <li>Free community spaces and public amenities</li>
                        <li>The Public Market vendors</li>
                    </ul>

                    <h4>Connection to False Creek South</h4>
                    <p>In the late 1960s, the federal government tasked CMHC with developing False Creek's former industrial lands. CMHC built <strong>social housing, co-op housing (including a live-aboard marina co-op), market condos on leased land, and rental housing</strong> — creating the mixed-tenure False Creek South community. Granville Island was part of this broader vision.</p>

                    <h4>Current Challenges</h4>
                    <p>General Manager Tom Lancaster estimates <strong>up to $300 million</strong> is needed for infrastructure upgrades. Some have proposed transferring ownership from CMHC to Canada Lands Company, though CMHC states there are "no current plans for housing development." The island's future governance remains an active policy discussion.</p>

                    <h4>Why This Matters for Housing</h4>
                    <p>Granville Island demonstrates key principles for housing policy:</p>
                    <ul>
                        <li><strong>Public ownership prevents speculation</strong> — land value increases don't inflate costs</li>
                        <li><strong>Cross-subsidy works</strong> — market tenants support affordable space</li>
                        <li><strong>Self-sufficiency is possible</strong> — no ongoing government funding required</li>
                        <li><strong>Flexibility enables innovation</strong> — outside municipal rules, creative solutions emerge</li>
                    </ul>
                `,
                keyPoints: [
                    "40 acres of federal land, self-sustaining on lease revenue",
                    "300+ tenants with cross-subsidy model",
                    "Operates outside municipal zoning as federal property",
                    "$300M in infrastructure needs — future governance in discussion"
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
                        caption: "40 acres transformed from industrial land without privatization"
                    },
                    {
                        src: "images/granville-arts.jpg",
                        alt: "Arts and cultural spaces on Granville Island",
                        caption: "Cultural institutions benefit from cross-subsidized leases"
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
                        title: "Granville Island 2040",
                        url: "https://granvilleisland2040.ca/",
                        description: "Community visioning process for the island's future"
                    },
                    {
                        title: "Granville Island Official Website",
                        url: "https://granvilleisland.com/",
                        description: "Visitor information and tenant directory"
                    },
                    {
                        title: "Heritage Vancouver — Granville Island",
                        url: "https://heritagevancouver.org/2025/3-granville-island/",
                        description: "Heritage context and preservation considerations"
                    },
                    {
                        title: "CBC — Is Housing the Solution for Granville Island?",
                        url: "https://www.cbc.ca/news/canada/british-columbia/granville-island-future-harcourt-housing-debate-1.7558992",
                        description: "2024 coverage of infrastructure needs and housing debate"
                    },
                    {
                        title: "Traveling Circus of Urbanism — Granville Island Model",
                        url: "https://www.travelingcircusofurbanism.com/vancouver/granvilleisland/",
                        description: "Analysis of the brownfield redevelopment model"
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
            caption: "DTES — Over 4,000 residents in ~100 private SROs, the last stop before homelessness"
        },

        stats: [
            { label: "Private SROs", value: "~100" },
            { label: "SRO Residents", value: "4,000+" },
            { label: "Indigenous", value: "~33%" }
        ],

        sections: [
            {
                id: "overview",
                label: "Overview",
                icon: "info",
                content: `
                    <p>The Downtown Eastside (DTES) is home to <strong>over 4,000 residents living in approximately 100 privately-owned Single Room Occupancy (SRO) buildings</strong> — often the last rental option before homelessness. Approximately one-third of SRO residents are Indigenous.</p>
                    <p>Community organizations are working to acquire buildings and convert them to <strong>permanent community ownership through land trust models</strong>, removing them from the speculative market while preserving affordable housing for current residents.</p>
                    <p>In 2023, the Province provided an <strong>$11 million grant to the DTES SRO Collaborative Society</strong> to help improve services and supports for SRO residents — recognizing that tenant-led initiatives "empower tenants to improve habitability and help their neighbours."</p>
                `
            },
            {
                id: "details",
                label: "Partners & Work",
                icon: "document",
                content: `
                    <h4>The SRO Challenge</h4>
                    <p>Vancouver has over <strong>6,500 SRO units</strong>, with 48% privately owned and 52% owned by the Province, City, or non-profits. In the DTES alone, there are 88 privately owned SRO hotels with approximately 3,600 beds. Conditions are often poor, with average rents around $600/month — though some landlords charge over $1,000.</p>
                    <p>As <strong>Wendy Pedersen</strong>, Executive Director of the SRO Collaborative, explains: "Privately owned SRO hotels are a last resort before homelessness." The Collaborative's Tenant Overdose Response Organizers (TORO) project connects tenant organizers with naloxone supplies and education.</p>

                    <h4>Community Partners</h4>
                    <p>Multiple organizations work together to preserve and improve DTES housing:</p>
                    <ul>
                        <li><strong>DTES SRO Collaborative:</strong> Advocates for tenants, received $11M provincial grant in 2023</li>
                        <li><strong>Hogan's Alley Society:</strong> Restoring Vancouver's historic Black neighbourhood, with projects on Union Street and Main Street</li>
                        <li><strong>Aboriginal Front Door:</strong> Indigenous-led support services</li>
                        <li><strong>Carnegie Community Centre:</strong> Historic community hub since 1903</li>
                        <li><strong>DTES Neighbourhood House:</strong> Community programs and partnerships</li>
                        <li><strong>UBC Learning Exchange:</strong> University-community partnership</li>
                    </ul>

                    <h4>Community Land Trust Model</h4>
                    <p>The CLT approach in the DTES:</p>
                    <ul>
                        <li>Removes buildings permanently from the speculative market</li>
                        <li>Ensures long-term affordability through trust structure</li>
                        <li>Keeps housing decisions in community hands</li>
                        <li>Prevents displacement of current residents during acquisition</li>
                    </ul>

                    <h4>Policy Context</h4>
                    <p>In 2024, the Province took action to prevent evictions in the DTES, and the City is exploring policy changes to make it easier for governments, non-profits, and the private sector to build low-income housing and replace aging SROs.</p>
                `,
                keyPoints: [
                    "4,000+ residents in ~100 private SROs — last stop before homelessness",
                    "$11M provincial grant to SRO Collaborative (2023)",
                    "CLT acquisitions remove buildings from speculative market",
                    "Tenant-led initiatives like TORO improve safety and habitability"
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
                        caption: "SRO hotels: small rooms, often shared bathrooms, no kitchens"
                    },
                    {
                        src: "images/dtes-carnegie.jpg",
                        alt: "Carnegie Community Centre",
                        caption: "Carnegie Centre — community hub since 1903"
                    },
                    {
                        src: "images/dtes-community.jpg",
                        alt: "Community organizing in the DTES",
                        caption: "Tenant organizing and community advocacy"
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
                        title: "DTES SRO Collaborative",
                        url: "https://srocollaborative.org/",
                        description: "Tenant advocacy and support organization"
                    },
                    {
                        title: "DTES Neighbourhood House — SRO Collaborative Profile",
                        url: "https://www.dtesnhouse.ca/news-updates/partner-feature-sro-collaborative",
                        description: "Background on the SRO Collaborative's work"
                    },
                    {
                        title: "Vancouver Community Land Trust Foundation",
                        url: "https://www.vcltf.ca/",
                        description: "Regional community land trust organization"
                    },
                    {
                        title: "Right to Remain Research Collective",
                        url: "https://www.righttoremain.ca/",
                        description: "SRO histories and tenant stories"
                    },
                    {
                        title: "Hogan's Alley Society",
                        url: "https://www.hogansalleysociety.org/",
                        description: "Restoring Vancouver's historic Black community"
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
