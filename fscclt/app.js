/**
 * FCSCLT Interactive Map Tour
 * False Creek South, Senakw & Granville Island
 */

// ============================================
// Tour Stop Data
// ============================================

const tourStops = [
    {
        id: 1,
        title: "False Creek South Community Land Trust",
        location: "False Creek South, Vancouver",
        coordinates: [49.26715, -123.12615],

        heroImage: {
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Vancouver_-_False_Creek_pano_02.jpg/1280px-Vancouver_-_False_Creek_pano_02.jpg",
            alt: "Panoramic view of False Creek in Vancouver",
            caption: "False Creek panorama — Photo: Joe Mabel (CC BY-SA 3.0)"
        },

        stats: [
            { label: "City-Owned", value: "80%" },
            { label: "Units", value: "1,849" },
            { label: "Leases", value: "2036-46" }
        ],

        sections: [
            {
                id: "overview",
                label: "Overview",
                icon: "info",
                content: `
                    <p>False Creek South represents one of Vancouver's most successful experiments in mixed-tenure community development. Built on former industrial land in the 1970s and 1980s, this <strong>136-acre waterfront neighbourhood</strong> demonstrates how <strong>public land ownership</strong> can support diverse housing options while maintaining long-term affordability.</p>
                    <p>The City of Vancouver owns <strong>80% of False Creek South</strong>, making it a rare example of large-scale public land stewardship. The original vision committed to a tenure mix of one-third non-market rental housing, one-third co-ops, and one-third strata leasehold — a model designed to avoid the social stratification common in single-tenure developments.</p>
                    <p>Today, about <strong>5,500 residents live in 1,849 homes</strong>. The land is leased on 60-year terms that begin expiring between 2036 and 2046, creating a pivotal decision point about how to preserve affordability while renewing public assets.</p>
                    <p><strong>Robyn Chan</strong>, Project Manager for the False Creek South Community Housing Trust, leads community planning efforts. A civic engagement specialist with a Masters in Urban Studies from SFU, Chan has been working with the neighbourhood to establish a community land trust that would give residents more control over their housing future.</p>
                `
            },
            {
                id: "highlights",
                label: "At This Stop",
                icon: "sparkles",
                type: "highlights",
                highlights: [
                    {
                        title: "Tour Start: 4th & Heather Bus Stop",
                        description: "The tour begins at the bus stop at W 4th Avenue and Heather Street in False Creek South — a transit connection into the neighbourhood.",
                        meta: "Starting point"
                    },
                    {
                        title: "Lease Renewal Timeline",
                        description: "Locate the leasehold parcels expiring between 2036–2046 and discuss how renewal options affect long-term affordability.",
                        meta: "Decision window"
                    },
                    {
                        title: "Co-op Cluster",
                        description: "Visit the co-op homes along the waterfront to see shared courtyards and resident-led governance in action.",
                        meta: "Community-led"
                    },
                    {
                        title: "Waterfront Greenway",
                        description: "Follow the seawall to experience the public-realm improvements tied to public land stewardship.",
                        meta: "Public realm"
                    },
                    {
                        title: "Housing Trust Hub",
                        description: "Review the community housing trust concept and how it could govern future redevelopment.",
                        meta: "Future planning"
                    }
                ]
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

                    <h4>The Lease Crisis</h4>
                    <p>The original 60-year leases are approaching expiry, creating uncertainty for roughly <strong>3,200 residents</strong>. In 2021, City Council rejected a staff proposal to triple density and instead directed a community-led planning process. In January 2025, the City awarded a <strong>$4 million contract to Arup Group</strong> to prepare a landowner plan, sparking renewed debate about community involvement.</p>

                    <h4>Community Land Trust Initiative</h4>
                    <p>In March 2024, Vancouver Council passed a motion supporting the construction of new co-ops on City-owned land through a <strong>community land trust model</strong>. The False Creek South Community Housing Trust received funding from Vancity Community Foundation to develop a business plan and engage with co-op boards. As Robyn Chan explains: "It's a way to have more control and to expand non-profit housing."</p>
                    <p>Recent grant-funded projects include an <strong>Embodied Carbon study</strong> (Vancity Envirofund) comparing demolition vs. lease extensions, and a <strong>capacity-building program</strong> to support governance, community engagement, and long-term financial planning.</p>
                `,
                keyPoints: [
                    "80% of neighbourhood is on City-owned land",
                    "1,849 homes with a one-third / one-third / one-third tenure mix",
                    "All land leases expire in 2036-2046 — critical transition period",
                    "2021 Council rejected wholesale demolition and density tripling",
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
                        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Vancouver_-_False_Creek_near_Granville_Island_01.jpg/1280px-Vancouver_-_False_Creek_near_Granville_Island_01.jpg",
                        alt: "False Creek near Granville Island in Vancouver",
                        caption: "False Creek near Granville Island — Photo: Joe Mabel (CC BY-SA 3.0)"
                    },
                    {
                        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Vancouver_-_False_Creek_pano_03.jpg/1280px-Vancouver_-_False_Creek_pano_03.jpg",
                        alt: "False Creek panorama in Vancouver",
                        caption: "False Creek panorama — Photo: Joe Mabel (CC BY-SA 3.0)"
                    },
                    {
                        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Granville_Street_Bridge_01.JPG/1280px-Granville_Street_Bridge_01.JPG",
                        alt: "Granville Street Bridge over False Creek",
                        caption: "Granville Street Bridge — Photo: Xicotencatl (CC BY-SA 4.0)"
                    },
                    {
                        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/False_Creek%2C_Vancouver_%282025%29.jpg/1280px-False_Creek%2C_Vancouver_%282025%29.jpg",
                        alt: "Aerial view over False Creek with downtown Vancouver",
                        caption: "Aerial view over False Creek — Photo: Northwest (CC BY 4.0)"
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
        title: "Senakw Development",
        location: "Kitsilano, Vancouver (near Burrard Bridge)",
        coordinates: [49.27257, -123.14289],

        heroImage: {
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Burrard_Bridge_and_False_Creek_Vancouver.jpg/1280px-Burrard_Bridge_and_False_Creek_Vancouver.jpg",
            alt: "Burrard Bridge and False Creek in Vancouver",
            caption: "Burrard Bridge and False Creek — Photo: Darren Kirby (CC BY-SA 3.0)"
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
                    <p>Senakw (pronounced "sen-AHK-w") is the <strong>largest Indigenous-led urban housing development in Canadian history</strong>. Located on 10.5 acres of Squamish Nation reserve land near the south end of the Burrard Bridge, this project demonstrates how Indigenous land rights can create new pathways for housing development.</p>
                    <p>The development will include <strong>6,000 purpose-built rental units</strong> across 11 towers, with 4 million square feet of floor space. Critically, <strong>1,200 units will be designated affordable</strong>, and rents will be 30-40% below comparable market rates.</p>
                    <p>In September 2022, Prime Minister Justin Trudeau announced a <strong>$1.4 billion federal loan</strong> to fund the first two phases. Phase One (1,409 units in three towers) targets completion in early 2026, with phased buildout continuing into the early 2030s.</p>
                `
            },
            {
                id: "highlights",
                label: "At This Stop",
                icon: "sparkles",
                type: "highlights",
                highlights: [
                    {
                        title: "Tower Cluster View",
                        description: "Compare the 11-tower massing plan with surrounding Kitsilano scale to understand the density shift.",
                        meta: "Design focus"
                    },
                    {
                        title: "Public Green Space",
                        description: "Walk the six-acre open space to see how public realm access is built into the development agreement.",
                        meta: "Open space"
                    },
                    {
                        title: "Transit Connections",
                        description: "Note the proximity to Burrard Bridge, cycling routes, and future rapid transit plans.",
                        meta: "Mobility"
                    },
                    {
                        title: "Cultural Gathering",
                        description: "Identify where cultural programming and Indigenous-led placemaking will be hosted.",
                        meta: "Community"
                    }
                ]
            },
            {
                id: "details",
                label: "Land Rights",
                icon: "document",
                content: `
                    <h4>Federal Jurisdiction & View Cones</h4>
                    <p>Senakw operates on <strong>federal reserve land</strong>, which exempts it from Vancouver's municipal zoning bylaws — including the city's "view cone" policies that restrict building heights to protect mountain views.</p>
                    <p>Vancouver's view cones, established in 1989, identify 38 protected views from specific locations. The Senakw towers enter View Cone 20.0 (from West Broadway and Granville Street), but as reserve land, the project is not bound by these restrictions. In July 2024, Council approved major changes to the view cone policy, partly influenced by Senakw's development.</p>

                    <h4>Ownership & Partnership</h4>
                    <p>In August 2025, <strong>OPTrust</strong> — one of Canada's largest pension fund investors — acquired development partner Westbank's ownership stake in Phases One and Two. OPTrust and the Squamish Nation now each hold <strong>50% ownership</strong> in these phases, representing a significant Indigenous-led partnership model.</p>

                    <h4>Project Scope & Public Space</h4>
                    <p>Senakw's unit mix includes <strong>2,688 studios, 2,046 one-bedrooms, 874 two-bedrooms, and 472 three-bedrooms</strong>. Over half the site (roughly six acres) is planned as publicly accessible green space and cultural gathering areas.</p>

                    <h4>Services Agreement & Tenant Protections</h4>
                    <p>A 120-year services agreement with the City of Vancouver (signed May 2022) covers water, sewer, fire, and police services, with the Squamish Nation paying the same rates as Vancouver property owners.</p>
                    <p>The Squamish Nation adopted BC's Residential Tenancy Act through the First Nations Commercial and Industrial Development Act, ensuring rent increase limits and tenant protections, alongside an Indigenous-led dispute resolution process.</p>

                    <h4>Indigenous Land Development in BC</h4>
                    <p>Senakw is part of a broader movement of Indigenous nations using land development for economic self-determination:</p>
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
                    "50/50 Squamish Nation-OPTrust ownership (Phases 1-2)",
                    "Over half the site dedicated to public green space"
                ]
            },
            {
                id: "gallery",
                label: "Gallery",
                icon: "images",
                type: "gallery",
                images: [
                    {
                        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Vancouver_Burrard_Street_Bridge_%289971716326%29.jpg/1280px-Vancouver_Burrard_Street_Bridge_%289971716326%29.jpg",
                        alt: "Burrard Street Bridge in Vancouver",
                        caption: "Burrard Street Bridge — Photo: Wikimedia Commons (CC0)"
                    },
                    {
                        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Vancouver_-_False_Creek_pano_02.jpg/1280px-Vancouver_-_False_Creek_pano_02.jpg",
                        alt: "False Creek panorama near Kitsilano",
                        caption: "False Creek near Kits Point — Photo: Joe Mabel (CC BY-SA 3.0)"
                    },
                    {
                        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Dusk_View_of_Downtown_and_West_End_from_Kitsilano_Beach_-_Vancouver_BC_-_Canada.jpg/1280px-Dusk_View_of_Downtown_and_West_End_from_Kitsilano_Beach_-_Vancouver_BC_-_Canada.jpg",
                        alt: "Kitsilano Beach with the Vancouver skyline at dusk",
                        caption: "Kitsilano Beach — Photo: Adam Jones (CC BY-SA 2.0)"
                    },
                    {
                        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Vanier-Park.jpg/1280px-Vanier-Park.jpg",
                        alt: "Downtown Vancouver skyline seen from Vanier Park",
                        caption: "Downtown skyline from Vanier Park — Photo: Wikimedia Commons (CC BY-SA)"
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
                        title: "Senakw Official Website",
                        url: "https://www.senakw.com/",
                        description: "Project timeline, unit information, and updates"
                    },
                    {
                        title: "Squamish Nation — Senakw Partnership",
                        url: "https://www.squamish.net/partnerships-entities/partnerships/senakw/",
                        description: "Squamish Nation's overview of the project"
                    },
                    {
                        title: "City of Vancouver — Senakw Development",
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
        coordinates: [49.27056, -123.13417],

        heroImage: {
            src: "https://upload.wikimedia.org/wikipedia/commons/6/62/Granville_Island.jpg",
            alt: "Granville Island on False Creek in Vancouver",
            caption: "Granville Island — Photo: Public domain"
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
                    <p>Granville Island is a <strong>40-acre federal property</strong> that demonstrates how public land ownership can create vibrant, mixed-use communities without privatization. Managed by the Canada Mortgage and Housing Corporation (CMHC) since 1973, the island is entirely <strong>self-sustaining with no government funding</strong> — operating solely on lease revenue, parking fees, and filming permits.</p>
                    <p>Between 1973 and 1982, CMHC invested <strong>$24.7 million</strong> to transform the former industrial site into a public market, arts hub, and cultural destination. As federal land, Granville Island operates outside Vancouver's municipal regulations, functioning essentially as <strong>its own jurisdiction</strong> and enabling creative placemaking that wouldn't be possible under rigid municipal zoning.</p>
                    <p>Urbanist and documentary creator <strong>Uytae Lee</strong> highlighted the island's governance model in a 2025 documentary, sparking renewed public debate about whether the site should pursue more development, public subsidy, or a new foundation model to fund repairs.</p>
                `
            },
            {
                id: "highlights",
                label: "At This Stop",
                icon: "sparkles",
                type: "highlights",
                highlights: [
                    {
                        title: "Public Market Hall",
                        description: "Start at the Public Market to see how cross-subsidy supports local vendors and public amenities.",
                        meta: "Must see"
                    },
                    {
                        title: "Artist Studio Row",
                        description: "Visit the artisan studios to experience the affordable creative space model.",
                        meta: "Creative economy"
                    },
                    {
                        title: "Waterfront Walk",
                        description: "Follow the seawall edge to observe flexible public space programming and ferry access.",
                        meta: "Public realm"
                    },
                    {
                        title: "Future Sites",
                        description: "Discuss aging infrastructure and where reinvestment could support long-term viability.",
                        meta: "Reinvestment"
                    }
                ]
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
                    <p>General Manager Tom Lancaster estimates <strong>up to $300 million</strong> is needed for infrastructure upgrades. Public Market revenues have leveled off, while aging buildings (including the former Emily Carr campus and Cats Social House) need major repairs.</p>
                    <p>Possible paths include: <strong>more development</strong>, a <strong>government subsidy model</strong>, a new <strong>Granville Island Foundation</strong>, or a <strong>cultural land trust</strong> proposal led by 221A Arts. Some have proposed transferring ownership from CMHC to Canada Lands Company, though CMHC states there are "no current plans for housing development."</p>

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
                        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Granville_Island_Public_Market_2024.jpg/1280px-Granville_Island_Public_Market_2024.jpg",
                        alt: "Granville Island Public Market exterior",
                        caption: "Granville Island Public Market — Photo: On the road (CC BY 4.0)"
                    },
                    {
                        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Granville_Island%2C_Mar_2%2C_2025_-_54362444969.jpg/1280px-Granville_Island%2C_Mar_2%2C_2025_-_54362444969.jpg",
                        alt: "Granville Island waterfront and village area",
                        caption: "Granville Island village — Photo: Dietmar Rabich (CC BY 2.0)"
                    },
                    {
                        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Granville_Island_Vancouver_01.JPG/1280px-Granville_Island_Vancouver_01.JPG",
                        alt: "Granville Island overview",
                        caption: "Granville Island overview — Photo: Xicotencatl (CC BY-SA 4.0)"
                    },
                    {
                        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Granville_Island_-_ArtsClub_Theatre_Company.jpg/1280px-Granville_Island_-_ArtsClub_Theatre_Company.jpg",
                        alt: "Arts Club Theatre Company on Granville Island",
                        caption: "Arts Club Theatre on Granville Island — Photo: Wikimedia Commons (CC BY-SA 3.0)"
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
    }
];

// ============================================
// Application State
// ============================================

let currentStopIndex = 0;
let currentSectionIndex = 0;
let map = null;
let markers = [];
let routeCasingLayer = null;
let routeDashLayer = null;
let lightboxActive = false;
let lightboxImages = [];
let lightboxIndex = 0;
let stopsDrawerOpen = false;

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

document.addEventListener('DOMContentLoaded', () => {
    initMap();
    initNavigation();
    initMobileToggle();
    initKeyboardShortcuts();
    initMapActions();
    renderStop(currentStopIndex);
    updateProgress();
    createStopNavigator();
    createProgressDots();
    initStopsDrawer();
    updateNavButtons();
    createLightbox();
    initScrollIndicator();
    initSwipeNavigation();
});

// ============================================
// Map Functions
// ============================================

function initMap() {
    map = L.map('map', {
        center: [49.2720, -123.1320],
        zoom: 14,
        zoomControl: true
    });

    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 19
    }).addTo(map);

    tourStops.forEach((stop, index) => {
        const marker = createMarker(stop, index);
        markers.push(marker);
        marker.addTo(map);
    });

    // Seed route line connecting stops (follows seawall path).
    // Waypoints go NORTH from Stop 1 to the seawall, then WEST along
    // the waterfront.  Dense spacing prevents any straight-line segment
    // from cutting across the water even if OSRM is unavailable.
    const routeCoords = [
        // Segment 1: False Creek South → Senakw (seawall west)
        [49.26715, -123.12615],  // Stop 1: False Creek South CLT
        [49.26800, -123.12615],  // North on Moberly Rd
        [49.26900, -123.12620],  // Continue north through FCS neighbourhood
        [49.27000, -123.12630],  // Approaching 1st Ave / waterfront
        [49.27050, -123.12640],  // Seawall access point
        [49.27060, -123.12720],  // On seawall, heading west
        [49.27040, -123.12800],  // Leg-in-Boot Square area
        [49.27020, -123.12880],  // West of Leg-in-Boot
        [49.27050, -123.12960],  // Seawall continues west
        [49.27080, -123.13050],  // Creek-side walk
        [49.27110, -123.13140],  // Approaching Stamps Landing
        [49.27140, -123.13220],  // Stamps Landing east
        [49.27160, -123.13300],  // Stamps Landing dock
        [49.27170, -123.13380],  // Stamps Landing west
        [49.27160, -123.13450],  // East Charleson Park
        [49.27150, -123.13530],  // Charleson Park waterfront
        [49.27140, -123.13610],  // West Charleson Park
        [49.27120, -123.13680],  // Approaching Granville Bridge
        [49.27100, -123.13750],  // Under Granville Bridge
        [49.27080, -123.13830],  // West of Granville Bridge
        [49.27060, -123.13900],  // Island Park Walk east
        [49.27040, -123.13970],  // Island Park Walk west
        [49.27030, -123.14040],  // Alder Bay Walk east
        [49.27040, -123.14110],  // Alder Bay Walk west
        [49.27080, -123.14180],  // Approaching Burrard Bridge
        [49.27150, -123.14240],  // Near Burrard Bridge south end
        [49.27257, -123.14289],  // Stop 2: Senakw
        // Segment 2: Senakw → Granville Island (seawall east then south)
        [49.27150, -123.14240],  // Back east from Senakw
        [49.27080, -123.14180],  // East along seawall
        [49.27040, -123.14110],  // Alder Bay
        [49.27030, -123.14040],  // Alder Bay Walk
        [49.27040, -123.13970],  // Island Park Walk west
        [49.27060, -123.13900],  // Island Park Walk east
        [49.27080, -123.13830],  // East of Granville Bridge
        [49.27100, -123.13750],  // Near Granville Bridge
        [49.27120, -123.13680],  // Granville Bridge south
        [49.27100, -123.13600],  // Turning south toward Granville Island
        [49.27070, -123.13500],  // Approaching Granville Island
        [49.27056, -123.13417]   // Stop 3: Granville Island
    ];
    drawRoute(routeCoords);
    // Keep the upgraded route aligned to the seawall by routing through
    // the seeded waterfront waypoints, not just the stop markers.
    void upgradeRouteWithOSRM(routeCoords);

    // Add informational marker for 4th & Heather bus stop (tour starting point)
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

    flyToStop(0);

    // Show onboarding toast on first visit
    if (!localStorage.getItem('bsh-tour-onboarded')) {
        showOnboardingToast();
        localStorage.setItem('bsh-tour-onboarded', 'true');
    }
}

function fitMapToStops() {
    if (!map || !tourStops.length) return;
    const bounds = L.latLngBounds(tourStops.map(stop => stop.coordinates));
    map.fitBounds(bounds, {
        padding: [60, 60],
        animate: true
    });
}

function drawRoute(coords) {
    if (!map || !Array.isArray(coords) || coords.length < 2) return;

    if (routeCasingLayer) {
        map.removeLayer(routeCasingLayer);
        routeCasingLayer = null;
    }
    if (routeDashLayer) {
        map.removeLayer(routeDashLayer);
        routeDashLayer = null;
    }

    routeCasingLayer = L.polyline(coords, {
        color: '#ffffff',
        weight: 9,
        opacity: 0.82,
        lineCap: 'round',
        lineJoin: 'round',
        interactive: false
    }).addTo(map);

    routeDashLayer = L.polyline(coords, {
        color: '#2f67dc',
        weight: 3.5,
        opacity: 0.98,
        dashArray: '6, 10',
        dashOffset: '0',
        lineCap: 'round',
        lineJoin: 'round',
        interactive: false,
        className: 'tour-route'
    }).addTo(map);
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

async function upgradeRouteWithOSRM(seedCoords) {
    const deduped = dedupeRouteCoords(seedCoords);
    if (deduped.length < 2) return;

    try {
        // Only use walking profile so the route stays on the seawall.
        // Driving profile would route through roads/bridges, not the
        // waterfront path, so we skip it entirely.
        const walkingRoute = await fetchOSRMRoute(deduped, 'walking');
        if (walkingRoute) {
            drawRoute(walkingRoute);
        }
    } catch (error) {
        console.warn('OSRM route upgrade failed; using seed route.', error);
    }
}

function createMarker(stop, index) {
    const icon = L.divIcon({
        className: 'custom-marker-wrapper',
        html: `<div class="custom-marker ${index === 0 ? 'active' : ''}" data-index="${index}">${index + 1}</div>`,
        iconSize: [40, 40],
        iconAnchor: [20, 20]
    });

    const marker = L.marker(stop.coordinates, { icon });

    const tooltipContent = `
        <div class="marker-popup">
            <strong>${stop.title}</strong>
            <span class="marker-popup-location">${stop.location}</span>
            ${stop.stats[0] ? `<span class="marker-popup-stat">${stop.stats[0].label}: ${stop.stats[0].value}</span>` : ''}
        </div>
    `;
    marker.bindTooltip(tooltipContent, {
        direction: 'top',
        offset: [0, -24],
        opacity: 1,
        className: 'marker-tooltip-rich',
        permanent: false
    });

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
    updateProgressDots();
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
    currentStopIndex = index;
    renderStop(index);
    flyToStop(index);
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
                <span class="nav-btn-title">View summary</span>
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
// Progress Dots
// ============================================

function createProgressDots() {
    const container = document.getElementById('progressDots');
    if (!container) return;

    container.innerHTML = tourStops.map((stop, index) => `
        <button
            class="progress-dot ${index === 0 ? 'active' : ''}"
            data-index="${index}"
            aria-label="Go to stop ${index + 1}: ${stop.title}"
        >${index + 1}</button>
    `).join('');

    container.querySelectorAll('.progress-dot').forEach(dot => {
        dot.addEventListener('click', () => {
            const index = parseInt(dot.dataset.index, 10);
            goToStop(index);
        });
    });
}

function updateProgressDots() {
    document.querySelectorAll('.progress-dot').forEach((dot, index) => {
        dot.classList.toggle('active', index === currentStopIndex);
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
                <p>You've explored all ${tourStops.length} stops in this tour. Return to see other tours or revisit any stop using the dots above.</p>
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
