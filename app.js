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
        coordinates: [49.27015, -123.1185],

        heroImage: {
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Vancouver_-_False_Creek_pano_02.jpg/1280px-Vancouver_-_False_Creek_pano_02.jpg",
            alt: "Panoramic view of False Creek in Vancouver",
            caption: "False Creek panorama — Photo: Joe Mabel (CC BY-SA 3.0)"
        },

        stats: [
            { label: "City-Owned", value: "80 acres" },
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
                    <p>The City of Vancouver owns <strong>about 80 acres in False Creek South</strong>, making it a rare example of large-scale public land stewardship. The original vision committed to a tenure mix of one-third non-market rental housing, one-third co-ops, and one-third strata leasehold — a model designed to avoid the social stratification common in single-tenure developments.</p>
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
                        title: "Tour Start: Heather Square on Moberly Road",
                        description: "This stop is at Heather Square on Moberly Road in False Creek South.",
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

                    <h4>CMHC Origins & the Co-op Legacy</h4>
                    <p>In the late 1960s, the federal government tasked CMHC with developing False Creek's former industrial lands. CMHC built social housing, co-op housing, market condos on leased land, and rental housing, creating the mixed-tenure False Creek South community.</p>
                    <p>Five co-ops managed by CHF BC still operate along False Creek: Harbour Cove, Marina, Creekview, Twin Rainbows, and Alder Bay.</p>

                    <h4>The Lease Crisis</h4>
                    <p>The original 60-year leases are approaching expiry, creating uncertainty for roughly <strong>3,200 residents</strong>. In 2021, City Council rejected a staff proposal to triple density and instead directed a community-led planning process. In January 2025, the City awarded a <strong>$4 million contract to Arup Group</strong> to prepare a landowner plan, sparking renewed debate about community involvement.</p>

                    <h4>Community Land Trust Initiative</h4>
                    <p>In March 2024, Vancouver Council passed a motion supporting the construction of new co-ops on City-owned land through a <strong>community land trust model</strong>. The False Creek South Community Housing Trust received funding from Vancity Community Foundation to develop a business plan and engage with co-op boards. As Robyn Chan explains: "It's a way to have more control and to expand non-profit housing."</p>
                    <p>Recent grant-funded projects include an <strong>Embodied Carbon study</strong> (Vancity Envirofund) comparing demolition vs. lease extensions, and a <strong>capacity-building program</strong> to support governance, community engagement, and long-term financial planning.</p>
                `,
                keyPoints: [
                    "About 80 acres are on City-owned land",
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
        title: "Sen̓áḵw Development",
        location: "Kitsilano, Vancouver (near Burrard Bridge)",
        coordinates: [49.2716, -123.1388],

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
                    <p>Sen̓áḵw (pronounced "sen-AHK-w") is the <strong>largest Indigenous-led urban housing development in Canadian history</strong>. Located on 10.5 acres of Squamish Nation reserve land near the south end of the Burrard Bridge, this project demonstrates how Indigenous land rights can create new pathways for housing development.</p>
                    <p>The development will include <strong>6,000 purpose-built rental units</strong> across 11 towers, with 4 million square feet of floor space. Critically, <strong>1,200 units (20%) will be designated affordable</strong>, with rents 30–40% below comparable market rates. Of these, <strong>250 units are set aside specifically for Squamish Nation members</strong>, managed by the Nation's non-profit housing society <strong>Hiy̓ám̓ Housing</strong>. Applications for Squamish citizens opened in February 2026 — making Sen̓áḵw the largest permanent return of Squamish residents to this land in over a century.</p>
                    <p>The three-tier rental structure prioritizes Indigenous access: <strong>Hiy̓ám̓ Housing homes</strong> (rent-assisted, Squamish members first), <strong>affordable homes</strong> (below-market for middle-income households), and <strong>market rental homes</strong>. This model positions Sen̓áḵw as a landmark in urban Indigenous housing — addressing the needs of one of Vancouver's most historically marginalized communities.</p>
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
                    <p>Sen̓áḵw operates on <strong>federal reserve land</strong>, which exempts it from Vancouver's municipal zoning bylaws — including the city's "view cone" policies that restrict building heights to protect mountain views.</p>
                    <p>Vancouver's view cones, established in 1989, identify 38 protected views from specific locations. The Sen̓áḵw towers enter View Cone 20.0 (from West Broadway and Granville Street), but as reserve land, the project is not bound by these restrictions. In July 2024, Council approved major changes to the view cone policy, partly influenced by Sen̓áḵw's development.</p>

                    <h4>Ownership & Partnership</h4>
                    <p>In August 2025, <strong>OPTrust</strong> — one of Canada's largest pension fund investors — acquired development partner Westbank's ownership stake in Phases One and Two. OPTrust and the Squamish Nation now each hold <strong>50% ownership</strong> in these phases, representing a significant Indigenous-led partnership model.</p>

                    <h4>Project Scope & Public Space</h4>
                    <p>Sen̓áḵw's unit mix includes <strong>2,688 studios, 2,046 one-bedrooms, 874 two-bedrooms, and 472 three-bedrooms</strong>. Over half the site (roughly six acres) is planned as publicly accessible green space and cultural gathering areas.</p>

                    <h4>Services Agreement & Tenant Protections</h4>
                    <p>A 120-year services agreement with the City of Vancouver (signed May 2022) covers water, sewer, fire, and police services, with the Squamish Nation paying the same rates as Vancouver property owners.</p>
                    <p>In July 2023, the Squamish Nation became the first in Canada to adopt BC's <strong>Residential Tenancy Act (BCRTA)</strong> for a major housing development through the federal <strong>First Nations Commercial and Industrial Development Act (FNCIDA)</strong>. FNCIDA enables First Nations to request federal regulations that incorporate provincial law on reserve lands — a mechanism used only five times since 2005, and never before for residential housing. This means Sen̓áḵw tenants receive the same rent increase limits, eviction protections, and dispute resolution rights as any BC renter, with one key addition: an <strong>Indigenous-led dispute resolution process</strong> consistent with Squamish traditions. The protections also extend to Hiy̓ám̓ Housing developments on other Squamish Nation reserves in North Vancouver.</p>

                    <h4>Indigenous Land Development in BC</h4>
                    <p>Sen̓áḵw is part of a broader movement of Indigenous nations using land development for economic self-determination:</p>
                    <ul>
                        <li>Land is retained rather than sold, maintaining long-term nation ownership</li>
                        <li>Projects prioritize community benefit alongside economic returns</li>
                        <li>Housing developments include cultural spaces and community amenities</li>
                        <li>The 100% rental model prevents speculation and ensures ongoing control</li>
                    </ul>
                `,
                keyPoints: [
                    "Federal reserve land — exempt from municipal zoning",
                    "100% rental: 6,000 units; 1,200 affordable; 250 for Squamish Nation members via Hiy̓ám̓ Housing",
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
                        title: "Sen̓áḵw Official Website",
                        url: "https://www.senakw.com/",
                        description: "Project timeline, unit information, and updates"
                    },
                    {
                        title: "Squamish Nation — Sen̓áḵw Partnership",
                        url: "https://www.squamish.net/partnerships-entities/partnerships/senakw/",
                        description: "Squamish Nation's overview of the project"
                    },
                    {
                        title: "City of Vancouver — Sen̓áḵw Development",
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
                    },
                    {
                        title: "Squamish Nation — BCRTA Adoption Press Release",
                        url: "https://www.squamish.net/bcrta-adoption/",
                        description: "First-in-Canada adoption of provincial tenancy protections on reserve land via FNCIDA"
                    },
                    {
                        title: "First Nations Commercial and Industrial Development Act (FNCIDA)",
                        url: "https://www.sac-isc.gc.ca/eng/1100100033561/1612128155378",
                        description: "Federal legislation enabling Squamish Nation residential tenancy regulations"
                    },
                    {
                        title: "Maclean's — Vancouver's Mega-Development Is Undeniably Indigenous",
                        url: "https://macleans.ca/society/senakw-vancouver/",
                        description: "In-depth feature on Sen̓áḵw's significance for Indigenous urbanism"
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
        coordinates: [49.27262, -123.13524],

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
                    <p><a href="https://granvilleisland.com/" target="_blank" rel="noopener noreferrer">Granville Island</a> is a <strong>40-acre federal property</strong> that demonstrates how public land ownership can create vibrant, mixed-use communities without privatization. Managed by the <a href="https://granvilleisland.com/about-us/" target="_blank" rel="noopener noreferrer">Canada Mortgage and Housing Corporation (CMHC)</a> since 1973, the island is entirely <a href="https://granvilleisland.com/about-us/" target="_blank" rel="noopener noreferrer">self-sustaining with no government funding</a> — operating solely on lease revenue, parking fees, and filming permits.</p>
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
                    <p>CMHC owns all land on Granville Island and leases it to <a href="https://granvilleisland.com/about-us/" target="_blank" rel="noopener noreferrer">over 300</a> commercial, retail, cultural, artistic, and educational tenants. The island operates a <strong>subsidy model</strong> where market rents from some businesses support more affordable rents for:</p>
                    <ul>
                        <li>Small businesses and artisans</li>
                        <li>Arts and cultural organizations</li>
                        <li>Free community spaces and public amenities</li>
                        <li>The Public Market vendors</li>
                    </ul>

                    <h4>Current Challenges</h4>
                    <p>General Manager Tom Lancaster estimates <a href="https://www.cbc.ca/news/canada/british-columbia/granville-island-future-harcourt-housing-debate-1.7558992" target="_blank" rel="noopener noreferrer">up to $300 million</a> is needed for infrastructure upgrades. Public Market revenues have leveled off, while aging buildings (including the former Emily Carr campus and Cats Social House) need major repairs.</p>
                    <p>Possible paths include: <strong>more development</strong>, a <strong>government subsidy model</strong>, a new <a href="https://www.cbc.ca/news/canada/british-columbia/granville-island-future-harcourt-housing-debate-1.7558992" target="_blank" rel="noopener noreferrer">Granville Island Foundation</a>, or a <strong>cultural land trust</strong> proposal led by 221A Arts. Some have proposed transferring ownership from CMHC to Canada Lands Company, though CMHC states there are "<a href="https://www.cbc.ca/news/canada/british-columbia/granville-island-future-harcourt-housing-debate-1.7558992" target="_blank" rel="noopener noreferrer">no current plans for housing development</a>."</p>

                    <h4>Why This Matters for Housing</h4>
                    <p>Granville Island demonstrates key principles for housing policy:</p>
                    <ul>
                        <li><strong>Public ownership prevents speculation</strong> — land value increases don't inflate costs</li>
                        <li><strong>Cross-subsidy works</strong> — market tenants support affordable space</li>
                        <li><strong>Self-sufficiency is possible</strong> — <a href="https://granvilleisland.com/about-us/" target="_blank" rel="noopener noreferrer">no ongoing government funding required</a></li>
                        <li><strong>Flexibility enables innovation</strong> — outside municipal rules, creative solutions emerge</li>
                    </ul>
                `,
                keyPoints: [
                    "40 acres of federal land, <a href=\"https://granvilleisland.com/about-us/\" target=\"_blank\" rel=\"noopener noreferrer\">self-sustaining</a> on lease revenue",
                    "<a href=\"https://granvilleisland.com/about-us/\" target=\"_blank\" rel=\"noopener noreferrer\">300+</a> tenants with cross-subsidy model",
                    "Operates outside municipal zoning as federal property",
                    "<a href=\"https://www.cbc.ca/news/canada/british-columbia/granville-island-future-harcourt-housing-debate-1.7558992\" target=\"_blank\" rel=\"noopener noreferrer\">$300M</a> in infrastructure needs — future governance in discussion"
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
    },
    {
        id: 1,
        title: "Downtown Eastside Community Land Trust",
        location: "222 Keefer St, Vancouver",
        coordinates: [49.27935, -123.09892],

        heroImage: {
            src: "../images/community-orgs/dtes-clt-community-ownership.jpg",
            alt: "Community ownership group outside Chinese Community Library Services Association in the Downtown Eastside",
            caption: "Community ownership action in the DTES — Source: user-provided photo"
        },

        stats: [
            { label: "CLT Buildings", value: "2" },
            { label: "First Acquisition", value: "2026" },
            { label: "Governance", value: "Community-led" }
        ],

        sections: [
            {
                id: "overview",
                label: "Overview",
                icon: "info",
                content: `
                    <p>The <strong>Downtown Eastside Community Land Trust (DTES CLT)</strong> is a community-governed non-profit that acquires privately owned buildings and transfers them into permanent community ownership. Founded in 2020 and formally incorporated in January 2023, the CLT operates under <strong>Indigenous co-leadership</strong> with a decolonized governance model co-led by Indigenous peoples and those with lived experience of housing precarity.</p>
                    <p>The CLT's governance structure includes a <strong>community-elected board</strong> and a <strong>tenant and elder sub-committee</strong> that meets monthly to provide input on building acquisitions, renovations, and operations. This model ensures that those most affected by housing instability have direct decision-making power.</p>
                    <p>In February 2026, DTES CLT <strong>officially took possession of Powell Rooms</strong> — its first building acquisition. The CLT is also the operating partner for <strong>Keefer Rooms (48 units)</strong>, purchased by BC Housing in October 2023.</p>
                `
            },
            {
                id: "highlights",
                label: "At This Stop",
                icon: "sparkles",
                type: "highlights",
                highlights: [
                    {
                        title: "Community Ownership Model",
                        description: "DTES CLT acquires and stewards SRO buildings as permanently affordable community-owned housing.",
                        meta: "Land trust"
                    },
                    {
                        title: "Powell Rooms (23 units)",
                        description: "DTES CLT's first acquisition, completed February 2026. Funded through a $1M Reaching Home federal grant, City SRO upgrade funding, and philanthropic donations. Total cost: ~$2.5M. Includes ground-floor childcare by Promise Vancouver.",
                        meta: "First acquisition"
                    },
                    {
                        title: "Keefer Rooms (48 units)",
                        description: "Purchased by BC Housing for $8.2M in October 2023 after a 2022 fire displaced 39 residents. DTES CLT operates the building in partnership with BC Housing; over time, the lease may transfer fully to DTES CLT. Renovations included window, electrical, and fire-system upgrades.",
                        meta: "BC Housing partnership"
                    },
                    {
                        title: "CLT Governance Model",
                        description: "Community-elected board with Indigenous co-leadership. A tenant and elder sub-committee meets monthly to guide acquisition decisions, building design, and operations. Grounded in decolonized, non-hierarchical governance.",
                        meta: "Community governance"
                    }
                ]
            },
            {
                id: "details",
                label: "Partners & Work",
                icon: "document",
                content: `
                    <h4>Powell Rooms — First CLT Acquisition</h4>
                    <p>In February 2026, DTES CLT completed its first building acquisition: <strong>Powell Rooms</strong>, a 23-unit SRO with ground-floor childcare operated by Promise Vancouver. The previous owner, Rob Harden, sold the property after owning it since 2005.</p>
                    <p>The ~$2.5 million acquisition was funded through a <strong>$1 million Reaching Home federal grant</strong>, approximately $230,000 from a City of Vancouver SRO upgrade program, and philanthropic donations. The CLT had secured approximately 85% of required funds before closing.</p>

                    <h4>Keefer Rooms — BC Housing Partnership</h4>
                    <p>In October 2023, BC Housing purchased Keefer Rooms (48 SRO units at 222 Keefer St) for <strong>$8.2 million</strong> after a September 2022 fire displaced 39 residents. The building had been vacant for over a year. DTES CLT was named the <strong>operating partner</strong>, with the DTES SRO Collaborative overseeing tenant-led programming including harm reduction and fire safety.</p>
                    <p>Renovations included window replacements and electrical and fire-system upgrades. The building was targeted for reopening in spring 2025. Over time, <strong>BC Housing may transfer the lease to DTES CLT</strong>, but for now management operates as a partnership between BC Housing, the CLT, and the SRO Collaborative.</p>

                    <h4>Governance Model</h4>
                    <p>The CLT uses a <strong>decolonized, non-hierarchical governance model</strong> co-led by Indigenous peoples and people with lived experience:</p>
                    <ul>
                        <li><strong>Community-elected board of directors</strong> with Indigenous co-leadership</li>
                        <li><strong>Tenant and elder sub-committee</strong> meets monthly to guide decisions on acquisitions, furnishings, and building operations</li>
                        <li>Profits are reinvested into buildings and community benefit — not extracted</li>
                        <li>Properties are permanently removed from the speculative market through the trust structure</li>
                    </ul>

                    <h4>The CLT Model</h4>
                    <p>Community land trusts are non-profit corporations that acquire and hold land in perpetuity for community use. In the DTES context, the CLT model:</p>
                    <ul>
                        <li>Acquires privately owned SROs before they are lost to speculation or neglect</li>
                        <li>Ensures rents remain permanently affordable — tied to income levels, not market rates</li>
                        <li>Integrates <strong>holistic, tenant-centred housing</strong> designed by and for the community</li>
                        <li>Partners with DTES SRO Collaborative for tenant-based initiatives in each building</li>
                    </ul>
                `,
                keyPoints: [
                    "First acquisition (Powell Rooms, 23 units) completed February 2026",
                    "Keefer Rooms (48 units) operated in partnership with BC Housing",
                    "Indigenous co-leadership with tenant and elder sub-committee governance",
                    "Buildings permanently removed from speculative market through trust structure"
                ]
            },
            {
                id: "gallery",
                label: "Gallery",
                icon: "images",
                type: "gallery",
                images: [
                    {
                        src: "https://dtescommunitylandtrust.ca/wp-content/uploads/2023/02/SROs_ScoutMagazine.jpg",
                        alt: "Downtown Eastside SRO streetscape",
                        caption: "DTES SRO streetscape — Source: Downtown Eastside Community Land Trust"
                    },
                    {
                        src: "https://dtescommunitylandtrust.ca/wp-content/uploads/2023/02/arlington.jpg",
                        alt: "Arlington Hotel building in the Downtown Eastside",
                        caption: "Arlington Hotel — Source: Downtown Eastside Community Land Trust"
                    },
                    {
                        src: "https://dtescommunitylandtrust.ca/wp-content/uploads/2023/02/laurel.jpg",
                        alt: "Laurel Hotel building in the Downtown Eastside",
                        caption: "Laurel Hotel — Source: Downtown Eastside Community Land Trust"
                    },
                    {
                        src: "https://dtescommunitylandtrust.ca/wp-content/uploads/2023/02/empress.png",
                        alt: "Empress Hotel building in the Downtown Eastside",
                        caption: "Empress Hotel — Source: Downtown Eastside Community Land Trust"
                    },
                    {
                        src: "../images/community-orgs/dtes-clt-community-ownership.jpg",
                        alt: "Community ownership group outside Chinese Community Library Services Association in the Downtown Eastside",
                        caption: "Community ownership action in the DTES — Source: user-provided photo"
                    },
                    {
                        src: "../images/community-orgs/dtes-clt-powell-rooms.jpg",
                        alt: "Powell Rooms SRO building in the Downtown Eastside",
                        caption: "Powell Rooms SRO — Source: user-provided photo"
                    },
                    {
                        src: "../images/community-orgs/dtes-streetscape.jpg",
                        alt: "Downtown Eastside streetscape",
                        caption: "DTES streetscape — Source: user-provided photo"
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
                        title: "Downtown Eastside Community Land Trust",
                        url: "https://www.dtescommunitylandtrust.ca/",
                        description: "Official website — governance model, acquisition strategy, and community vision"
                    },
                    {
                        title: "CMHC — DTES CLT Demonstration Project",
                        url: "https://www.cmhc-schl.gc.ca/nhs/nhs-project-profiles/2021-nhs-projects/vancouver-downtown-eastside-community-land-trust",
                        description: "National Housing Strategy project profile on the CLT's foundation and framework"
                    },
                    {
                        title: "Vancity Lookout — Powell Rooms Acquisition",
                        url: "https://www.vancitylookout.com/p/exclusive-powell-rooms-sro-set-to-become-a-unique-model-of-community-owned-housing",
                        description: "In-depth reporting on the CLT's first building acquisition and community-owned housing model"
                    },
                    {
                        title: "BC Housing — Keefer Rooms Acquisition",
                        url: "https://news.gov.bc.ca/releases/2023HOUS0137-001604",
                        description: "Provincial announcement on the Keefer Rooms purchase and CLT operating partnership"
                    },
                    {
                        title: "BSH Research in Progress Webinar — DTES CLT",
                        url: "https://bsh.ubc.ca/research/evictions-and-security-of-tenure/",
                        description: "BSH webinar featuring DTES CLT research with Andy and Allie"
                    }
                ]
            }
        ],

        tags: ["community-land-trust", "sro", "dtes", "affordable"]
    },
    {
        id: 2,
        title: "First United Church",
        location: "320 E Hastings St, Vancouver",
        coordinates: [49.28148, -123.09688],

        heroImage: {
            src: "https://admin.firstunited.ca/app/uploads/2021/11/Web_Redevelopment_Info.jpg",
            alt: "First United Church building in Vancouver",
            caption: "FIRST UNITED redevelopment context — Source: FIRST UNITED"
        },

        stats: [
            { label: "Founded", value: "1886" },
            { label: "Safe Shelter", value: "51 beds" },
            { label: "Legal Cases", value: "1,400+/yr" }
        ],

        sections: [
            {
                id: "overview",
                label: "Overview",
                icon: "info",
                content: `
                    <p><strong>FIRST UNITED</strong> has operated in Vancouver's Downtown Eastside since 1886. The organization works from a harm reduction perspective across three pillars: <strong>Essential Services</strong>, <strong>Community Connection</strong>, and <strong>Systems Change</strong>.</p>
                    <p><strong>Essential Services</strong> meet basic human needs: the Safe Shelter program operates <strong>51 low-barrier beds</strong> at 467 Alexander Street; food security programs serve daily meals and run a mobile food truck; and the Community Help Desk provides direct harm reduction supplies.</p>
                    <p><strong>Community Connection</strong> keeps people linked to supports: Legal Advocacy handles <strong>over 1,400 cases annually</strong> focused on tenancy and income security; the Tax Clinic and Mail &amp; Phone programs maintain practical lifelines; and spiritual care fosters healing and belonging.</p>
                    <p><strong>Systems Change</strong> tackles structural causes of poverty: the Law Reform program addresses policy gaps; and the <strong>BC Eviction Mapping</strong> project — a partnership with BSH's Evictions and Security of Tenure research — collects critical data on what happens to BC tenants after eviction. Over 1,100 tenants have completed this survey, providing information not collected anywhere else in Canada.</p>
                    <p>FIRST UNITED is also leading a major <strong>redevelopment at 320 East Hastings</strong> in partnership with Lu'ma Native Housing Society, planned to include over 100 below-market homes for Indigenous peoples and approximately 40,000 sq ft of universally accessible, purpose-built community space.</p>
                `
            },
            {
                id: "highlights",
                label: "At This Stop",
                icon: "sparkles",
                type: "highlights",
                highlights: [
                    {
                        title: "Essential Services",
                        description: "Safe Shelter program (51 low-barrier beds at 467 Alexander St), daily meals and mobile food truck, Community Help Desk for benefits navigation and ID replacement.",
                        meta: "Basic needs"
                    },
                    {
                        title: "Community Connection",
                        description: "Drop-in gathering spaces, cultural and spiritual programming, healing supports including Indigenous-led ceremonies, peer support networks, and community-building activities.",
                        meta: "Belonging & healing"
                    },
                    {
                        title: "Systems Change",
                        description: "Legal advocacy for tenant rights and eviction prevention, policy research with BSH on Evictions and Security of Tenure, and the First Forward redevelopment at 320 E Hastings.",
                        meta: "Advocacy & research"
                    },
                    {
                        title: "First Forward Redevelopment",
                        description: "320 E Hastings: 4 floors of community amenities + 7 floors of below-market rental housing (100+ units) by Lu\u2019ma Native Housing. Triples program space to ~40,000 sq ft. Completion targeted 2026.",
                        meta: "Housing delivery"
                    }
                ]
            },
            {
                id: "details",
                label: "Deeper Dive",
                icon: "document",
                content: `
                    <h4>First Forward Redevelopment — 320 E Hastings</h4>
                    <p>The First Forward project will transform the 320 East Hastings site into a universally accessible, purpose-built facility: <strong>four floors of community amenities</strong> topped by <strong>seven floors of below-market rental housing</strong> (103 units — 35 supportive and 68 rental prioritized for Indigenous peoples) operated by Lu'ma Native Housing Society. <strong>25% of units will be fully accessible</strong>, with the remainder built to adaptable standards.</p>
                    <p>The ~$80 million project will nearly <strong>triple First United's program space to ~40,000 sq ft</strong>, incorporating:</p>
                    <ul>
                        <li>Expanded food security and meal service infrastructure</li>
                        <li>Dedicated legal advocacy and tenant support offices</li>
                        <li>Culturally grounded healing and spiritual care spaces</li>
                        <li>Community gathering, drop-in areas, and an outdoor deck</li>
                        <li>Warming, cooling, and wildfire smoke refuge for unsheltered community members</li>
                    </ul>
                    <p>The design was shaped by <strong>extensive community consultation</strong>: nearly 100 DTES residents with lived experience participated in one-on-one conversations and focus groups, alongside service providers and government partners. The interior is designed by Nisga'a architect <strong>Luugigyoo Patrick Stewart</strong>, with cultural consultant <strong>Xalek/Sekyu Siyam Chief Ian Campbell</strong> guiding the regulatory and design process. The exterior integrates works by <strong>Musqueam, Squamish, and Tsleil-Waututh artists</strong>.</p>

                    <h4>BSH Evictions & Security of Tenure Partnership</h4>
                    <p>First United is a key partner in BSH's <strong>Evictions and Security of Tenure</strong> research project. Through this collaboration, First United has collected eviction survey data from <strong>over 1,100 BC tenants</strong>, providing critical evidence on who is being evicted and the downstream impacts on households — data not being collected anywhere else in Canada.</p>
                    <p>Key findings from the broader BSH research show that <strong>no-fault evictions account for 65% of evictions nationally and 85% in British Columbia</strong>, highlighting the severe displacement pressures renters face. The project also includes research on <strong>Indigenous tenant rights and model legislation</strong> for Indigenous housing justice.</p>

                    <h4>Three Pillars Model</h4>
                    <p>First United organizes its work around three interconnected pillars, mirroring how housing precarity requires integrated responses:</p>
                    <ul>
                        <li><strong>Essential Services:</strong> Meeting immediate needs — safe shelter, food, help desk navigation for benefits, ID, and housing applications</li>
                        <li><strong>Community Connection:</strong> Building belonging through drop-in spaces, cultural programming, Indigenous-led healing, peer support, and spiritual care</li>
                        <li><strong>Systems Change:</strong> Addressing root causes through legal advocacy, tenant rights work, eviction prevention, and policy research partnerships like the BSH collaboration</li>
                    </ul>
                `,
                keyPoints: [
                    "Operating in the DTES since 1886",
                    "51 low-barrier shelter beds at the current safe shelter site",
                    "1,400+ legal advocacy cases each year",
                    "320 E Hastings redevelopment targets 100+ homes"
                ]
            },
            {
                id: "gallery",
                label: "Gallery",
                icon: "images",
                type: "gallery",
                images: [
                    {
                        src: "../images/community-orgs/first-united-church.webp",
                        alt: "First United Church building at East Hastings Street in Vancouver",
                        caption: "First United Church at East Hastings and Gore — Source: user-provided photo"
                    },
                    {
                        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/East_Hastings_Street_Vancouver.JPG/1280px-East_Hastings_Street_Vancouver.JPG",
                        alt: "East Hastings Street in Vancouver's Downtown Eastside",
                        caption: "East Hastings Street — Photo: Wikimedia Commons (CC BY-SA 3.0)"
                    },
                    {
                        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/41551-Vancouver_%2837509844511%29.jpg/1280px-41551-Vancouver_%2837509844511%29.jpg",
                        alt: "Carnegie Community Centre at Main and Hastings",
                        caption: "Carnegie Community Centre at Main and Hastings — Photo: Wikimedia Commons (CC BY-SA)"
                    },
                    {
                        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Vancouver_Pennsylvania_Hotel_Woods_Hotel_2011.jpg/1280px-Vancouver_Pennsylvania_Hotel_Woods_Hotel_2011.jpg",
                        alt: "Pennsylvania Hotel, a heritage SRO building in the Downtown Eastside",
                        caption: "Pennsylvania Hotel (heritage SRO) — Photo: Wikimedia Commons (CC BY-SA)"
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
                        title: "First United Church Community Ministry Society",
                        url: "https://firstunited.ca/",
                        description: "Official website — programs, services, redevelopment plans, and community impact"
                    },
                    {
                        title: "BSH — Evictions and Security of Tenure",
                        url: "https://bsh.ubc.ca/research/evictions-and-security-of-tenure/",
                        description: "BSH research project partnering with First United on BC eviction data and tenant displacement"
                    },
                    {
                        title: "The Tyee — First United Launches $30M Campaign",
                        url: "https://thetyee.ca/Presents/2021/11/17/First-United-30-Million-Campaign-Downtown-Eastside-Site/",
                        description: "Coverage of the First Forward capital campaign and DTES redevelopment vision"
                    },
                    {
                        title: "Vancouver Is Awesome — Community-Informed DTES Space",
                        url: "https://www.vancouverisawesome.com/sponsored/first-united-church-is-creating-a-community-informed-space-for-the-downtown-eastside-vancouver-6152186",
                        description: "How First United's inclusive design process centred DTES residents' voices"
                    }
                ]
            }
        ],

        tags: ["church", "shelter", "services", "dtes"]
    },
    {
        id: 3,
        title: "Hogan's Alley Society",
        location: "Union Street & Main Street, Vancouver",
        coordinates: [49.27779, -123.09836],

        heroImage: {
            src: "../images/hogans-alley-mural.webp",
            alt: "Hogan's Alley mural celebrating Black history and cultural continuity in Vancouver",
            caption: "Hogan's Alley mural — Source: user-provided photo"
        },

        stats: [
            { label: "CLT Site", value: "3.5 acres" },
            { label: "Cultural Centre", value: "27,000 sq ft" },
            { label: "Nora Hendrix Place", value: "52 homes" }
        ],

        sections: [
            {
                id: "overview",
                label: "Overview",
                icon: "info",
                content: `
                    <p><strong>Hogan's Alley</strong> — the informal name for Park Lane between Union and Prior streets — was the centre of Vancouver's Black community from the early 1900s through the 1960s. At its peak the neighbourhood included as many as 800 Black residents, many of whom were immigrants from the western United States and railway porters employed by the Great Northern Railway. The community supported Black-owned businesses, churches (including the African Methodist Episcopal Fountain Chapel), and social institutions until the City cleared the area for Georgia and Dunsmuir viaduct construction in 1967–72.</p>
                    <p>The <strong>Hogan's Alley Society (HAS)</strong>, formed in 2018, is a Black-led non-profit focused on cultural repair, anti-displacement work, and community-owned development. Under inaugural Executive Director Djaka Blais — who co-founded the Foundation for Black Communities, Canada's first philanthropic foundation for Black communities — HAS operates across three strategic pillars: <strong>culturally informed housing</strong>, <strong>non-profit housing development</strong>, and <strong>community engagement</strong>.</p>
                    <p>In <strong>September 2022</strong>, HAS and the City of Vancouver signed a Memorandum of Understanding for the <strong>898 Main Street block</strong> (bounded by Main, Union, Gore, and Prior streets), a 3.5-acre site within the Northeast False Creek Plan area. The MOU sets terms for negotiating a long-term lease to deliver affordable housing, a <strong>27,000-square-foot Black cultural centre</strong>, childcare facilities, artist production space, and small-business units through a Black-led Community Land Trust.</p>
                    <p>HAS currently operates <strong>Nora Hendrix Place</strong> at 258 Union Street: 52 temporary modular homes with private kitchens and washrooms, prioritizing Black and Indigenous residents at risk of or experiencing homelessness. HAS has been in a mentorship and capacity-building partnership with Atira to eventually assume full operations.</p>
                `
            },
            {
                id: "highlights",
                label: "At This Stop",
                icon: "sparkles",
                type: "highlights",
                highlights: [
                    {
                        title: "898 Main Street Block",
                        description: "3.5-acre CLT site within the Northeast False Creek Plan: long-term lease under negotiation since the 2022 MOU with the City.",
                        meta: "Land Trust"
                    },
                    {
                        title: "27,000 sq ft Cultural Centre",
                        description: "Planned focal point for Vancouver's Black community: food, gathering, education, art, music, dance, and research into Black Canadian history.",
                        meta: "Culture"
                    },
                    {
                        title: "Nora Hendrix Place",
                        description: "52-home temporary modular housing project at 258 Union Street, prioritizing Black and Indigenous residents with culturally grounded supports.",
                        meta: "Housing"
                    },
                    {
                        title: "Afrocentric Governance",
                        description: "Black-led governance informed by Ubuntu and communal decision-making principles, developed through community consultation with elders and diaspora organizations.",
                        meta: "Governance"
                    }
                ]
            },
            {
                id: "details",
                label: "History & Plans",
                icon: "document",
                content: `
                    <h4>Historical Displacement</h4>
                    <p>From the early 1900s, Hogan's Alley anchored Black social, cultural, and economic life in Vancouver's Strathcona neighbourhood. The community included families, businesses, the African Methodist Episcopal Fountain Chapel, and gathering places like Vie's Chicken and Steak House. City officials cleared the area for the Georgia and Dunsmuir viaducts (1967–72), displacing the roughly 800-person Black community and demolishing its institutions as part of a broader freeway plan that was ultimately abandoned.</p>

                    <h4>The 898 Main Street Block and CLT Strategy</h4>
                    <p>HAS's central project is the redevelopment of the <strong>898 Main Street block</strong>, a 3.5-acre City-owned site bounded by Main Street, Union Street, Gore Avenue, and Prior Street. A 2017 preliminary concept by Perkins & Will proposed six buildings reaching up to 14 storeys on this site. The broader Northeast False Creek Plan envisions 12,000 new residents, 1,800 units of social housing, 32 acres of parks, 8,000 new jobs, and $1.7 billion in public benefits across the plan area.</p>
                    <p>Under the 2022 MOU, HAS is responsible for design, construction, programming, operation, maintenance, and capital costs of the block's redevelopment. Planned deliverables include:</p>
                    <ul>
                        <li><strong>Affordable housing:</strong> ~300 social housing units targeted on the two blocks between Prior and Union, with 50% required to be two- and three-bedroom family units</li>
                        <li><strong>Cultural centre:</strong> a 27,000-square-foot facility for food, gathering, celebration, education, art, music, dance, and Black Canadian history research</li>
                        <li><strong>Childcare:</strong> dedicated childcare facilities within the block</li>
                        <li><strong>Enterprise space:</strong> Black-owned retail, restaurants, and artist production studios drawing on African diaspora design influences</li>
                    </ul>
                    <p>Physical redevelopment depends on viaduct demolition and a new street network, which have progressed more slowly than anticipated due to the NEFC Plan's reliance on development-driven revenues. HAS is currently engaged in community consultation, fundraising with senior government agencies, and developing detailed business and financial plans for the block.</p>

                    <h4>Nora Hendrix Place</h4>
                    <p>At 258 Union Street, Nora Hendrix Place — named for Jimi Hendrix's grandmother, a Vancouver resident — delivers 52 temporary modular homes with private kitchens and washrooms, with a minimum accessibility target and culturally grounded support services. The project prioritizes Black and Indigenous people who are at risk of or currently experiencing homelessness. HAS has been in a mentorship and capacity-building partnership with Atira, with the goal of HAS assuming full operational control.</p>

                    <h4>Governance: Afrocentric and Community-Accountable</h4>
                    <p>HAS governance is Black-led and community-accountable. The Society has engaged in a structured process — including community learning sessions and consultation with African diaspora organizations and elders — to develop an Afrocentric governance framework. This draws on principles such as Ubuntu ("I am because we are"), shifting from an individualistic decision-making model to a communal one rooted in African diaspora traditions.</p>
                    <p>Through the proposed Community Land Trust, land and assets are held in community ownership and removed from the speculative real estate market. Governance priorities are informed by residents, elders, cultural workers, and partner organizations, so that housing and cultural infrastructure remain under community control over the long term — a direct response to the viaduct-era displacement that this project seeks to redress.</p>

                    <h4>BSH Partnership and CNCLT Network</h4>
                    <p>HAS is a BSH (Balanced Supply of Housing) research partner. The October 2025 BSH Research in Progress webinar featured both HAS and the DTES CLT discussing their community work and its role in expanding affordable housing. BSH's "Reclaim, Remain" paper documents six BIPOC-led CLTs across Canada — including HAS — examining how these projects forge pathways for collective land stewardship and decolonized land practices.</p>
                    <p>At the <strong>CNCLT Summit</strong> (October 18–20, 2024, Vancouver), HAS was one of three Vancouver CLT site tours (alongside DTES CLT and CLT British Columbia). The summit drew 200+ delegates — CLT practitioners, funders, policymakers, researchers, and activists — and HAS has also offered public "CLT 101" sessions explaining how the Hogan's Alley Community Land Trust supports Black self-determination and housing justice across Metro Vancouver.</p>
                `,
                keyPoints: [
                    "898 Main Street block: 3.5-acre CLT site under long-term lease negotiation (MOU signed September 2022)",
                    "Planned: ~300 social housing units (50% family-sized), 27,000 sq ft Black cultural centre, childcare, enterprise space",
                    "Nora Hendrix Place: 52 modular homes prioritizing Black and Indigenous residents",
                    "Afrocentric, community-accountable governance model developed through structured diaspora consultation",
                    "BSH research partner; featured at CNCLT Summit (October 2024, 200+ delegates)"
                ]
            },
            {
                id: "gallery",
                label: "Gallery",
                icon: "images",
                type: "gallery",
                images: [
                    {
                        src: "../images/hogans-alley-mural.webp",
                        alt: "Hogan's Alley mural celebrating Black history and cultural continuity in Vancouver",
                        caption: "Hogan's Alley mural — Source: user-provided photo"
                    },
                    {
                        src: "../images/community-orgs/has-union-street-building.jpg",
                        alt: "Nora Hendrix Place building at 258 Union Street",
                        caption: "258 Union Street building at Nora Hendrix Place — Source: user-provided photo"
                    },
                    {
                        src: "../images/community-orgs/has-nora-hendrix-mural.jpg",
                        alt: "Mural detail at Nora Hendrix Place",
                        caption: "Nora Hendrix Place mural detail — Source: user-provided photo"
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
                        title: "Hogan's Alley Society",
                        url: "https://www.hogansalleysociety.org/",
                        description: "Official website — history, cultural restoration, CLT vision, and project updates"
                    },
                    {
                        title: "City of Vancouver — Hogan's Alley MOU & Northeast False Creek",
                        url: "https://vancouver.ca/people-programs/hogan-s-alley-mou.aspx",
                        description: "MOU details, 898 Main Street block plans, cultural redress framework, and NEFC Plan context"
                    },
                    {
                        title: "CNCLT Summit — Vancouver Community Land Trusts",
                        url: "https://www.youtube.com/watch?v=KevcrQW11T4",
                        description: "Canadian Network of Community Land Trusts summit presentation featuring Vancouver CLT site tours"
                    },
                    {
                        title: "BSH Research in Progress — Vancouver's Growing CLT Movement",
                        url: "https://bsh.ubc.ca/research-in-progress-on-vancouvers-growing-clt-movement/",
                        description: "BSH webinar featuring HAS and DTES CLT on affordable housing and community land stewardship"
                    },
                    {
                        title: "BSH — Reclaim, Remain: BIPOC-Led CLTs in Canada",
                        url: "https://bsh.ubc.ca/research/policy-report-profile-series-on-canadian-community-land-trusts/",
                        description: "Research profiles of six BIPOC-led CLTs including HAS, examining collective land stewardship"
                    },
                    {
                        title: "Globe and Mail — Vancouver Signs CLT Deal for Hogan's Alley",
                        url: "https://www.theglobeandmail.com/canada/british-columbia/article-vancouver-signs-deal-to-turn-former-site-of-hogans-alley-into/",
                        description: "Coverage of the City-HAS agreement to create a community land trust on the former Hogan's Alley site"
                    }
                ]
            }
        ],

        tags: ["black-history", "heritage", "housing", "culture"]
    },
    {
        id: 4,
        title: "DTES SRO Collaborative",
        location: "268 Keefer St, Vancouver",
        coordinates: [49.27918, -123.09803],

        heroImage: {
            src: "../images/community-orgs/dtes-streetscape.jpg",
            alt: "Downtown Eastside streetscape",
            caption: "DTES streetscape — Source: user-provided photo"
        },

        stats: [
            { label: "Participating SROs", value: "~40" },
            { label: "Tenants Surveyed", value: "900+" },
            { label: "Provincial Grant", value: "$11M" }
        ],

        sections: [
            {
                id: "overview",
                label: "Overview",
                icon: "info",
                content: `
                    <p>The <strong>DTES SRO Collaborative Society (SRO-C)</strong> is a tenant-led organization focused on improving habitability, safety, and housing security in privately owned SRO hotels. More than <strong>2,700 tenants across 40+ private SROs</strong> are supported through its tenant-based initiatives.</p>
                    <p>Core programs include: <strong>tenant committees</strong> that identify building-level issues and coordinate safety planning; <strong>TORO (Tenant Overdose Response Organizers)</strong> providing peer-led harm reduction and naloxone access; <strong>room cleaning and repairs</strong> training; <strong>cultural reconnection</strong> supports for Indigenous tenants (~33% of SRO residents); <strong>fire safety and emergency preparedness</strong>; and the <strong>Right to Remain</strong> research collective supporting tenant organizing for improved conditions.</p>
                    <p>In 2023, the Province provided a <strong>one-time $11 million grant</strong> to support tenant-led safety and stabilization programming over three years. In 2024, the Collaborative partnered with the City to conduct a major <strong>SRO Tenant Survey</strong> — interviewing over 900 tenants in 133 SRO buildings.</p>
                `
            },
            {
                id: "highlights",
                label: "At This Stop",
                icon: "sparkles",
                type: "highlights",
                highlights: [
                    {
                        title: "Tenant Committees",
                        description: "The cornerstone of SRO-C's Hub Program. Democratic structures where tenants identify building-level issues, coordinate repairs with landlords, and organize for improved habitability and affordability.",
                        meta: "Community organizing"
                    },
                    {
                        title: "TORO (Tenant Overdose Response)",
                        description: "Peer-led harm reduction across ~40 private SROs. Tenants trained as TOROs provide naloxone training and kits, safer supply referrals, and harm reduction supplies in the places people live.",
                        meta: "Harm reduction"
                    },
                    {
                        title: "SRO Degree & Right to Remain",
                        description: "The SRO Degree equips tenants with housing rights knowledge and practical skills. Right to Remain is a research collective supporting tenant organizing for safety, cleanliness, and empowerment.",
                        meta: "Education & research"
                    },
                    {
                        title: "2024 SRO Tenant Survey",
                        description: "Partnered with the City to survey 900+ tenants across 133 buildings — the most comprehensive SRO tenant data since 2013. Findings inform the intergovernmental SRO Investment Strategy.",
                        meta: "Data & justice"
                    }
                ]
            },
            {
                id: "details",
                label: "Programs",
                icon: "document",
                content: `
                    <h4>Tenant-Based Initiatives (TBIs)</h4>
                    <p>The SRO Collaborative's model empowers tenants to improve their own buildings. In contrast to top-down supportive housing, SRO-C provides life-skills training to tenants who then become active participants in building improvement. Core programs include:</p>
                    <ul>
                        <li><strong>Tenant Committees (SRO Hub Program):</strong> The cornerstone program — democratic structures that identify building-level issues, coordinate repairs, and build community ownership in privately-owned SROs</li>
                        <li><strong>TORO (Tenant Overdose Response Organizers):</strong> Peer-led harm reduction operating in ~40 private SRO hotels, providing naloxone training, safer supply referrals, and harm reduction supplies</li>
                        <li><strong>SRO Degree:</strong> Connects tenants with housing and tenant rights knowledge to take power in their living situations</li>
                        <li><strong>Right to Remain:</strong> A research collective supporting tenant organizing for improved safety, cleanliness, affordability, and empowerment</li>
                        <li><strong>Room cleaning and repairs:</strong> Tenants trained in building maintenance and trades skills</li>
                        <li><strong>Cultural reconnection:</strong> Supports for the ~33% of SRO tenants who self-identify as Indigenous</li>
                        <li><strong>Fire safety:</strong> Emergency preparedness training and building-level evacuation planning</li>
                    </ul>

                    <h4>2024 SRO Tenant Survey</h4>
                    <p>Between January and April 2024, the SRO Collaborative partnered with the City of Vancouver to conduct the <strong>most comprehensive SRO tenant survey since 2013</strong>. Over <strong>900 tenants were interviewed across 133 SRO buildings</strong> — approximately 15% of all tenants in surveyed buildings. The survey was designed in collaboration with a Tenant Advisory Committee, with questions comparable to 2008 and 2013 surveys to track trends over time.</p>
                    <p>Key context from the survey and related data:</p>
                    <ul>
                        <li>Average private SRO rent: <strong>$681/month</strong> (up 21% since 2019), with some units reaching $1,950/month</li>
                        <li>At least <strong>60% of private SRO residents</strong> spend more than half their income on housing</li>
                        <li>Provincial shelter rate remains <strong>$500/month</strong>, creating a persistent affordability gap</li>
                        <li>Private SRO stock has declined from 7,830 rooms (1994) to 3,305 rooms (2023)</li>
                        <li><strong>One-third of tenants</strong> self-identify as Indigenous</li>
                        <li>SRO tenants are excluded from most census data, making this survey a critical data source</li>
                    </ul>

                    <h4>Policy and Public Accountability</h4>
                    <p>The SRO Collaborative played a central role in the campaign for <strong>vacancy control for SROs</strong>. In November 2021, Vancouver City Council voted near-unanimously to approve the bylaw. After legal challenges from 13 SRO owners suspended it, the Province of BC passed an amendment in May 2024 to the <strong>Municipalities Enabling and Validating Act (MEVA)</strong> to restore the city's bylaw — a landmark tenant protection preventing rent spikes between tenancies and protecting as many as 1,000 tenants from displacement.</p>
                    <p>In 2023, the Province provided an <strong>$11 million grant</strong> to the SRO Collaborative to expand services and supports across the DTES. As Executive Director Wendy Pedersen stated: "Privately owned SRO hotels are a last resort before homelessness."</p>
                    <p>The Collaborative continues to generate evidence that shapes housing policy through the <strong>Right to Remain</strong> research collective, coordinated surveys, the 2019 Habitability Study, and public reporting that documents living conditions in real time. Their 2024 survey findings directly inform the City's intergovernmental <strong>SRO Investment Strategy</strong>.</p>
                `
            },
            {
                id: "gallery",
                label: "Gallery",
                icon: "images",
                type: "gallery",
                images: [
                    {
                        src: "https://i0.wp.com/srocollaborative.org/wp-content/uploads/2025/02/IMG_9755.jpg",
                        alt: "TORO outreach setup inside SRO HUB space",
                        caption: "TORO outreach space — Source: SRO Collaborative"
                    },
                    {
                        src: "https://i0.wp.com/srocollaborative.org/wp-content/uploads/2025/02/IMG_9504.jpg",
                        alt: "Overdose response and harm reduction supplies table",
                        caption: "Harm reduction supplies in TORO program — Source: SRO Collaborative"
                    },
                    {
                        src: "https://i0.wp.com/srocollaborative.org/wp-content/uploads/2023/04/20171011_195154_1024.jpg.png",
                        alt: "Downtown Eastside SRO corridor streetscape",
                        caption: "DTES SRO corridor streetscape — Source: SRO Collaborative"
                    },
                    {
                        src: "../images/community-orgs/dtes-clt-community-ownership.jpg",
                        alt: "Community ownership action in the Downtown Eastside",
                        caption: "Community ownership action — Source: user-provided photo"
                    },
                    {
                        src: "../images/community-orgs/dtes-clt-powell-rooms.jpg",
                        alt: "Powell Rooms SRO building in the Downtown Eastside",
                        caption: "Powell Rooms SRO — Source: user-provided photo"
                    },
                    {
                        src: "../images/community-orgs/dtes-streetscape.jpg",
                        alt: "Downtown Eastside streetscape",
                        caption: "DTES streetscape — Source: user-provided photo"
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
                        title: "Mission Statement",
                        url: "https://www.srocollaborative.org/mission-statement",
                        description: "Organization mission and tenant-led model"
                    },
                    {
                        title: "SRO HUB Program",
                        url: "https://www.srocollaborative.org/programs/sro-hub-program/",
                        description: "Tenant committee support, advocacy, and building-level organizing"
                    },
                    {
                        title: "TORO Program",
                        url: "https://www.srocollaborative.org/programs/toro/",
                        description: "Tenant overdose response initiative details"
                    },
                    {
                        title: "BC Government Grant Announcement (2023)",
                        url: "https://news.gov.bc.ca/releases/2023hous0053-000772",
                        description: "One-time provincial funding announcement"
                    },
                    {
                        title: "2024 SRO Tenant Survey",
                        url: "https://srocollaborative.org/projects/sro-tenant-survey/",
                        description: "Survey of 900+ tenants across 133 SROs — demographics, conditions, and housing experiences"
                    },
                    {
                        title: "City of Vancouver — SRO Tenant Survey Report",
                        url: "https://vancouver.ca/files/cov/sro-tenant-survey-2024.pdf",
                        description: "Full report with aggregated findings informing the SRO Investment Strategy"
                    }
                ]
            }
        ],

        tags: ["tenant-advocacy", "sro", "harm-reduction", "dtes"]
    },
    {
        id: 5,
        title: "UBC Learning Exchange",
        location: "612 Main St, Vancouver",
        coordinates: [49.27920, -123.09929],

        heroImage: {
            src: "https://learningexchange.ubc.ca/files/2018/08/le_homepage_main-1920x600.jpg",
            alt: "UBC Learning Exchange in Vancouver's Downtown Eastside",
            caption: "UBC Learning Exchange — Source: UBC Learning Exchange"
        },

        stats: [
            { label: "Since", value: "2000" },
            { label: "Focus", value: "Education" },
            { label: "Location", value: "612 Main St" }
        ],

        sections: [
            {
                id: "overview",
                label: "Overview",
                icon: "info",
                content: `
                    <p>The <strong>UBC Learning Exchange</strong> has operated at 612 Main Street since 2000, serving as a bridge between UBC and the Downtown Eastside community. Programming is grounded in <strong>reciprocal learning</strong>: residents access free educational opportunities, while UBC students and faculty engage in community-informed teaching and research.</p>
                    <p>Core programs include computer and digital literacy support, conversation and communication workshops, and collaborative projects shaped by resident-identified priorities. The Learning Exchange also serves as a venue for community-engaged research events.</p>
                    <p>In June 2025, UBC's Housing Research Collaborative held <strong>"Confronting Sweeps: Reimagining Advocacy for Tent Cities"</strong> at the Learning Exchange. The workshop brought together 40 participants — legal experts, frontline workers, community organizers, and individuals with lived experience — to examine how municipal bylaws and zoning policies continue to displace unhoused residents. The resulting report proposes classifying encampment supports as core policy decisions and shifting toward legal tools that emphasize human dignity and community accountability.</p>
                `
            },
            {
                id: "highlights",
                label: "At This Stop",
                icon: "sparkles",
                type: "highlights",
                highlights: [
                    {
                        title: "Community Programs",
                        description: "Observe free, resident-centered learning programs delivered at 612 Main Street.",
                        meta: "Education"
                    },
                    {
                        title: "Research Partnerships",
                        description: "Review how community priorities are integrated into UBC teaching and research projects.",
                        meta: "Research"
                    },
                    {
                        title: "Student Involvement",
                        description: "See how students contribute through service learning and community-engaged coursework.",
                        meta: "Partnership"
                    },
                    {
                        title: "Resource Access",
                        description: "Map pathways from the neighbourhood into UBC resources and public-facing services.",
                        meta: "Access"
                    }
                ]
            },
            {
                id: "details",
                label: "Programs",
                icon: "document",
                content: `
                    <h4>Program Model</h4>
                    <p>The Learning Exchange builds all programs with community members and local organizations — not as one-way outreach. Residents shape program priorities, and their knowledge is reflected in project design and evaluation.</p>
                    <h4>Education and Skills</h4>
                    <p>Activities include computer and digital literacy support, communication and conversation workshops, and sessions responding to resident-identified interests. These programs prioritize equitable access and digital inclusion for DTES residents.</p>
                    <h4>Research and Events</h4>
                    <p>The Learning Exchange hosts community-engaged research events that bridge academic analysis with lived experience. In June 2025, UBC's <strong>Housing Research Collaborative (HRC)</strong> held the <strong>"Confronting Sweeps: Reimagining Advocacy for Tent Cities"</strong> workshop at the Learning Exchange, convening <strong>40 participants</strong> — legal experts, frontline workers, community organizers, and individuals with lived experience of homelessness — to reimagine policy responses to encampment displacement.</p>
                    <p>The resulting report (McKay &amp; Sethi, 2025) examines how municipal bylaws and zoning policies continue to displace unhoused residents through surveillance and control, and proposes advocacy frameworks grounded in human dignity rather than punitive enforcement. The Learning Exchange's role as host reflects its position as a trusted community space where research serves justice.</p>
                    <h4>Community Integration</h4>
                    <p>Partnerships across the DTES ensure UBC resources are shared equitably:</p>
                    <ul>
                        <li>Resident-informed programming shapes digital inclusion and education offerings</li>
                        <li>Service learning pathways connect UBC students with community priorities</li>
                        <li>Research collaborations bridge academic analysis with lived experience and frontline knowledge</li>
                    </ul>
                `,
                keyPoints: [
                    "Reciprocal learning hub at 612 Main Street since 2000",
                    "Free digital literacy, communication, and education programs",
                    "Hosted HRC's 'Confronting Sweeps' workshop in June 2025",
                    "Research collaborations bridging academic and community knowledge"
                ]
            },
            {
                id: "gallery",
                label: "Gallery",
                icon: "images",
                type: "gallery",
                images: [
                    {
                        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/796_Main_-_Flickr_-_Edna_Winti.jpg/1280px-796_Main_-_Flickr_-_Edna_Winti.jpg",
                        alt: "Building at 796 Main Street in the Downtown Eastside",
                        caption: "Main Street building near the Learning Exchange — Photo: Edna Winti (CC BY-SA)"
                    },
                    {
                        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Dominion_Building_-_207_West_Hastings_Street%2C_Vancouver%2C_BC_-_2012.JPG/1280px-Dominion_Building_-_207_West_Hastings_Street%2C_Vancouver%2C_BC_-_2012.JPG",
                        alt: "Dominion Building at 207 West Hastings Street",
                        caption: "Dominion Building (207 W Hastings) — Photo: Filip Conev (CC BY-SA 3.0)"
                    },
                    {
                        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Flack_Block_-_163_West_Hastings_Street%2C_Vancouver%2C_BC_-_2012.JPG/1280px-Flack_Block_-_163_West_Hastings_Street%2C_Vancouver%2C_BC_-_2012.JPG",
                        alt: "Flack Block heritage building at 163 West Hastings Street",
                        caption: "Flack Block (163 W Hastings) — Photo: Filip Conev (CC BY-SA 3.0)"
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
                        title: "UBC Learning Exchange",
                        url: "https://learningexchange.ubc.ca/",
                        description: "Official website — reciprocal learning model, programs, and community partnerships"
                    },
                    {
                        title: "HRC — Confronting Sweeps Report",
                        url: "https://www.hrc.ubc.ca/wp-content/uploads/2025/07/Confronting-Sweeps-Report.pdf",
                        description: "2025 report from the Housing Research Collaborative workshop held at the Learning Exchange"
                    },
                    {
                        title: "Housing Research Collaborative (HRC)",
                        url: "https://www.hrc.ubc.ca/",
                        description: "UBC's parent research centre for BSH — community-based housing research and events"
                    },
                    {
                        title: "Place-Based Learning in the DTES",
                        url: "https://learningexchange.ubc.ca/ubc-student-learning/",
                        description: "How 612 Main Street supports community learning"
                    },
                    {
                        title: "UBC Today: Learning Exchange at 20 Years",
                        url: "https://learningexchange.ubc.ca/ubc-learning-exchange-reopens-marks-20-years-in-the-downtown-eastside/",
                        description: "History and community impact profile"
                    }
                ]
            }
        ],

        tags: ["education", "university", "community", "dtes"]
    },
    {
        id: 6,
        title: "Aboriginal Front Door Society",
        location: "384 Main St, Vancouver",
        coordinates: [49.2812, -123.0996],

        heroImage: {
            src: "../images/community-orgs/aboriginal-front-door-vancity-lookout.jpg",
            alt: "Aboriginal Front Door Society outreach photo in Vancouver's Downtown Eastside",
            caption: "Aboriginal Front Door Society outreach photo — Source: Vancity Lookout"
        },

        stats: [
            { label: "Cultural Space", value: "DTES Hub" },
            { label: "Focus", value: "Indigenous-led support" },
            { label: "Location", value: "384 Main St" }
        ],

        sections: [
            {
                id: "overview",
                label: "Overview",
                icon: "info",
                content: `
                    <p>The <strong>Aboriginal Front Door Society</strong> offers a supportive space for Indigenous and non-Indigenous people in the Downtown Eastside, focusing on traditional approaches to community and healing.</p>
                    <p>Operating as a drop-in centre, they provide Elder and family cultural guidance, community meetings, social and recreational activities, and culturally safe referrals for drug and alcohol treatment.</p>
                    <p>Their mission is to foster, encourage, and support marginalized people to live with love, honor, respect, and compassion by reconnecting them to their culture and to each other through traditional ways.</p>
                `
            },
            {
                id: "highlights",
                label: "At This Stop",
                icon: "sparkles",
                type: "highlights",
                highlights: [
                    {
                        title: "Cultural Programming",
                        description: "Provides talking circles, drumming, singing, beadwork, cedar bark weaving, and bannock making.",
                        meta: "Culture"
                    },
                    {
                        title: "Drop-in Centre",
                        description: "A safe entry point for community connection, education, and language learning.",
                        meta: "Community services"
                    },
                    {
                        title: "Homeless Storage Program",
                        description: "Secure bin storage for individuals experiencing homelessness or precarious housing.",
                        meta: "Support"
                    },
                    {
                        title: "Food Security",
                        description: "A weekly food bank and daily morning coffee with Elder Coordinators.",
                        meta: "Basic needs"
                    }
                ]
            },
            {
                id: "details",
                label: "Programs & Role",
                icon: "document",
                content: `
                    <h4>Cultural Reconnection</h4>
                    <p>The organization champions the implementation of an Indigenous-specific drug and alcohol strategy in the DTES, grounding its approach in Aboriginal traditions and teachings.</p>
                    <h4>Daily Supports</h4>
                    <p>Programming includes morning coffee starting at 8:00 AM, a Wednesday food bank, and regular cultural workshops. These activities help anchor individuals needing connection and cultural resonance in the neighborhood.</p>
                `,
                keyPoints: [
                    "Located at 384 Main Street, serving the DTES community",
                    "Provides cultural activities, Elder guidance, and safe referrals",
                    "Operates a homeless storage program and regular food bank",
                    "A critical Indigenous-led organization in the neighborhood"
                ]
            },
            {
                id: "gallery",
                label: "Gallery",
                icon: "images",
                type: "gallery",
                images: [
                    {
                        src: "../images/community-orgs/aboriginal-front-door-vancity-lookout.jpg",
                        alt: "Aboriginal Front Door Society outreach photo in Vancouver's Downtown Eastside",
                        caption: "Aboriginal Front Door Society outreach photo — Source: Vancity Lookout"
                    },
                    {
                        src: "../images/community-orgs/first-united-church.webp",
                        alt: "East Hastings and Gore streetscape in the Downtown Eastside",
                        caption: "East Hastings and Gore streetscape — nearby DTES context"
                    },
                    {
                        src: "../images/community-orgs/has-union-street-building.jpg",
                        alt: "Union Street streetscape in Vancouver",
                        caption: "Union Street streetscape — community-serving area context"
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
                        title: "Aboriginal Front Door - BC 211",
                        url: "https://bc.211.ca/agencies/aboriginal-front-door-society/",
                        description: "Services overview and access information"
                    },
                    {
                        title: "LinkVan - Aboriginal Front Door",
                        url: "https://linkvan.ca/resources/aboriginal-front-door-society",
                        description: "Drop-in hours and current program schedule"
                    }
                ]
            }
        ],

        tags: ["indigenous", "community-centre", "dtes", "cultural-services"]
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
        return 'images/placeholder.svg';
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
    initStopsDrawer();
    updateNavButtons();
    createLightbox();
    normalizeExternalLinks();
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
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions" target="_blank" rel="noopener noreferrer">CARTO</a>',
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
    normalizeExternalLinks();
}

function fitMapToStops() {
    if (!map || !tourStops.length) return;
    const bounds = L.latLngBounds(tourStops.map(stop => stop.coordinates));
    map.fitBounds(bounds, {
        padding: [60, 60],
        animate: true
    });
}

function createMarker(stop, index) {
    const icon = L.divIcon({
        className: 'custom-marker-wrapper',
        html: `<div class="custom-marker ${index === 0 ? 'active' : ''}" data-index="${index}">${index + 1}</div>`,
        iconSize: [40, 40],
        iconAnchor: [20, 20]
    });

    const marker = L.marker(stop.coordinates, { icon });
    marker.bindTooltip(stop.title, {
        direction: 'top',
        offset: [0, -20],
        opacity: 0.95,
        className: 'marker-tooltip'
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

    // Reset section index
    currentSectionIndex = 0;

    // Scroll to top
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
    normalizeExternalLinks(document.getElementById('stopContent'));

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

    // Collapse mobile sidebar
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
        nextBtn.innerHTML = `
            <span class="nav-btn-text">
                <span class="nav-btn-label">Complete</span>
                <span class="nav-btn-title">End of tour</span>
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
        // Lightbox navigation
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

        // Stop navigation
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

        // Tab navigation with number keys
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
// Public API
// ============================================

window.BSHTour = {
    goToStop,
    getCurrentStop: () => currentStopIndex,
    getTotalStops: () => tourStops.length,
    getStopData: (index) => tourStops[index],
    switchSection
};
