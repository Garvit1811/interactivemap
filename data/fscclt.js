// Map 1: False Creek South, Senákw, Granville Island
window.tourStops = [
    {
        id: 1,
        title: "False Creek South Community Land Trust",
        location: "False Creek South, Vancouver",
        coordinates: [49.2712, -123.1280],

        // Hero image
        heroImage: {
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Vancouver_-_False_Creek_pano_02.jpg/1280px-Vancouver_-_False_Creek_pano_02.jpg",
            alt: "Panoramic view of False Creek in Vancouver",
            caption: "False Creek panorama — Photo: Joe Mabel (CC BY-SA 3.0)"
        },

        // Quick stats for badges
        stats: [
            { label: "City-Owned", value: "80%" },
            { label: "Units", value: "1,849" },
            { label: "Leases", value: "2036-46" }
        ],

        // Content organized into sections/tabs
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
                        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/False_Creek_Vancouver.jpg/1280px-False_Creek_Vancouver.jpg",
                        alt: "False Creek waterfront with downtown Vancouver skyline",
                        caption: "False Creek waterfront — Photo: Wikimedia Commons (CC BY-SA 4.0)"
                    },
                    {
                        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/False_Creek%2C_Vancouver%2C_BC%2C_Canada_-_panoramio.jpg/1280px-False_Creek%2C_Vancouver%2C_BC%2C_Canada_-_panoramio.jpg",
                        alt: "False Creek shoreline view in Vancouver",
                        caption: "False Creek shoreline — Photo: Panoramio archive (CC BY 3.0)"
                    },
                    {
                        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Granville_Bridge_Vancouver.jpg/1280px-Granville_Bridge_Vancouver.jpg",
                        alt: "Granville Bridge over False Creek",
                        caption: "Granville Bridge over False Creek — Photo: McKay Savage (CC BY 2.0)"
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
        title: "Senákw Development",
        location: "Kitsilano, Vancouver (near Burrard Bridge)",
        coordinates: [49.2735, -123.1375],

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
                    <p>Senákw (pronounced "sen-AHK-w") is the <strong>largest Indigenous-led urban housing development in Canadian history</strong>. Located on 10.5 acres of Squamish Nation reserve land near the south end of the Burrard Bridge, this project demonstrates how Indigenous land rights can create new pathways for housing development.</p>
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
                    <p>Senákw operates on <strong>federal reserve land</strong>, which exempts it from Vancouver's municipal zoning bylaws — including the city's "view cone" policies that restrict building heights to protect mountain views.</p>
                    <p>Vancouver's view cones, established in 1989, identify 38 protected views from specific locations. The Senákw towers enter View Cone 20.0 (from West Broadway and Granville Street), but as reserve land, the project is not bound by these restrictions. In July 2024, Council approved major changes to the view cone policy, partly influenced by Senákw's development.</p>

                    <h4>Ownership & Partnership</h4>
                    <p>In August 2025, <strong>OPTrust</strong> — one of Canada's largest pension fund investors — acquired development partner Westbank's ownership stake in Phases One and Two. OPTrust and the Squamish Nation now each hold <strong>50% ownership</strong> in these phases, representing a significant Indigenous-led partnership model.</p>

                    <h4>Project Scope & Public Space</h4>
                    <p>Senákw's unit mix includes <strong>2,688 studios, 2,046 one-bedrooms, 874 two-bedrooms, and 472 three-bedrooms</strong>. Over half the site (roughly six acres) is planned as publicly accessible green space and cultural gathering areas.</p>

                    <h4>Services Agreement & Tenant Protections</h4>
                    <p>A 120-year services agreement with the City of Vancouver (signed May 2022) covers water, sewer, fire, and police services, with the Squamish Nation paying the same rates as Vancouver property owners.</p>
                    <p>The Squamish Nation adopted BC's Residential Tenancy Act through the First Nations Commercial and Industrial Development Act, ensuring rent increase limits and tenant protections, alongside an Indigenous-led dispute resolution process.</p>

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
                        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Kitsilano_Beach_2015.jpg/1280px-Kitsilano_Beach_2015.jpg",
                        alt: "Kitsilano Beach with the Vancouver skyline",
                        caption: "Kitsilano Beach — Photo: Wikimedia Commons (CC BY-SA 4.0)"
                    },
                    {
                        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Vancouver_-_Burrard_Bridge_2012.jpg/1280px-Vancouver_-_Burrard_Bridge_2012.jpg",
                        alt: "Burrard Bridge spanning False Creek in Vancouver",
                        caption: "Burrard Bridge — Photo: Wikimedia Commons (CC BY-SA 3.0)"
                    },
                    {
                        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Vanier-Park.jpg/1280px-Vanier-Park.jpg",
                        alt: "Downtown Vancouver skyline seen from Vanier Park",
                        caption: "Downtown skyline from Vanier Park — Photo: Xicotencatl (CC BY-SA 4.0)"
                    },
                    {
                        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Burrard_Bridge_%26_False_Creek_at_dusk.jpg/1280px-Burrard_Bridge_%26_False_Creek_at_dusk.jpg",
                        alt: "Burrard Bridge at dusk over False Creek",
                        caption: "Burrard Bridge at dusk — Photo: Joe Mabel (CC BY-SA 3.0)"
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
                        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Granville_Island_Public_Market_interior.jpg/1280px-Granville_Island_Public_Market_interior.jpg",
                        alt: "Interior of the Granville Island Public Market",
                        caption: "Public Market interior — Photo: Wikimedia Commons (CC BY-SA 4.0)"
                    },
                    {
                        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Granville_Island_View.jpg/1280px-Granville_Island_View.jpg",
                        alt: "View of Granville Island with marina and waterfront",
                        caption: "Granville Island waterfront — Photo: Wikimedia Commons (CC BY-SA 3.0)"
                    },
                    {
                        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Granville_Island.jpg/1280px-Granville_Island.jpg",
                        alt: "Granville Island waterfront view",
                        caption: "Granville Island waterfront — Photo: Public domain"
                    },
                    {
                        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Granville_Island%2C_Vancouver_%288002251017%29.jpg/1280px-Granville_Island%2C_Vancouver_%288002251017%29.jpg",
                        alt: "Granville Island street scene with shops",
                        caption: "Granville Island street scene — Photo: InSapphoWeTrust (CC BY-SA 2.0)"
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
;
