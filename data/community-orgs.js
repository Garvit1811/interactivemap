// Map 2: DTES community organizations and partners
window.tourStops = [
    {
        id: 1,
        title: "Downtown Eastside Community Land Trust",
        location: "Downtown Eastside, Vancouver (Keefer St & Main)",
        coordinates: [49.27921, -123.09807],

        heroImage: {
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Vancouver_Chinatown_Street_View.JPG/1280px-Vancouver_Chinatown_Street_View.JPG",
            alt: "Vancouver Chinatown street view",
            caption: "Vancouver Chinatown Street View — Photo: Wikimedia Commons (CC BY-SA 4.0)"
        },

        stats: [
            { label: "Founded", value: "2020" },
            { label: "Incorporated", value: "2023" },
            { label: "Model", value: "Community land trust" }
        ],

        sections: [
            {
                id: "overview",
                label: "Overview",
                icon: "info",
                content: `
                    <p>The Downtown Eastside Community Land Trust (DTES CLT) is a community-governed non-profit that acquires and stewards land and housing so it stays permanently affordable for DTES residents. The CLT removes property from the speculative market and reinvests revenue into building upkeep and tenant support.</p>
                    <p>Founded in spring 2020 and incorporated in January 2023, the CLT grew from a coalition of DTES non-profits and is guided by Elders, a Tenants Advisory Committee, and a majority-Indigenous Board.</p>
                    <p>The CLT works alongside the DTES SRO Collaborative to strengthen tenant-led initiatives and long-term housing security in the neighbourhood.</p>
                `
            },
            {
                id: "highlights",
                label: "At This Stop",
                icon: "sparkles",
                type: "highlights",
                highlights: [
                    {
                        title: "Community Ownership",
                        description: "Discuss how land trusts keep housing permanently affordable by holding property in community hands.",
                        meta: "Land trust"
                    },
                    {
                        title: "Tenant Leadership",
                        description: "Highlight the role of Elders and the Tenants Advisory Committee in guiding decisions.",
                        meta: "Governance"
                    },
                    {
                        title: "SRO Preservation",
                        description: "Map where SRO buildings could be acquired to keep existing tenants in place.",
                        meta: "Housing security"
                    },
                    {
                        title: "Coalition Roots",
                        description: "Note the coalition of community organizations that formed the CLT in 2020.",
                        meta: "Partnerships"
                    }
                ]
            },
            {
                id: "details",
                label: "How It Works",
                icon: "document",
                content: `
                    <h4>Purpose & Approach</h4>
                    <p>The DTES CLT is designed to take land and buildings out of speculation and keep them affordable for current and future residents. Revenue from leases is reinvested in maintenance, operations, and tenant support.</p>

                    <h4>Community Governance</h4>
                    <p>Decision-making is guided by Elders, a Tenants Advisory Committee, and a majority-Indigenous Board, ensuring tenants and community members shape the long-term vision.</p>

                    <h4>Origins</h4>
                    <p>The CLT was founded in 2020 by a coalition of DTES organizations and incorporated in January 2023, reflecting a locally led response to displacement pressures.</p>
                `,
                keyPoints: [
                    "Community-governed land trust focused on permanent affordability",
                    "Founded in 2020, incorporated in 2023",
                    "Guided by Elders and a Tenants Advisory Committee",
                    "Reinvests lease revenue into upkeep and tenant support"
                ]
            },
            {
                id: "gallery",
                label: "Gallery",
                icon: "images",
                type: "gallery",
                images: [
                    {
                        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Vancouver_Chinatown_streetlamp.jpg/1280px-Vancouver_Chinatown_streetlamp.jpg",
                        alt: "Chinatown streetlamp in Vancouver",
                        caption: "Chinatown streetlamp — Photo: Wikimedia Commons (CC BY-SA 3.0)"
                    },
                    {
                        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/CarnegieCtr.jpg/1280px-CarnegieCtr.jpg",
                        alt: "Carnegie Centre building in Vancouver",
                        caption: "Carnegie Centre — Photo: Wikimedia Commons (CC BY-SA 3.0)"
                    },
                    {
                        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Vancouver_Carnegie.jpg/1280px-Vancouver_Carnegie.jpg",
                        alt: "Vancouver Carnegie building exterior",
                        caption: "Vancouver Carnegie — Photo: Wikimedia Commons (CC BY-SA 2.0)"
                    },
                    {
                        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/East_Hastings_Street_Vancouver.JPG/1280px-East_Hastings_Street_Vancouver.JPG",
                        alt: "East Hastings Street in Vancouver",
                        caption: "East Hastings Street — Photo: GoToVan (CC BY-SA 3.0)"
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
                        title: "DTES Community Land Trust",
                        url: "https://dtescommunitylandtrust.ca/",
                        description: "Mission, governance, and current work"
                    },
                    {
                        title: "DTES CLT — History",
                        url: "https://dtescommunitylandtrust.ca/about/history/",
                        description: "Founding timeline and coalition partners"
                    },
                    {
                        title: "DTES CLT — Contact",
                        url: "https://dtescommunitylandtrust.ca/get-involved/contact/",
                        description: "Office location and contact information"
                    },
                    {
                        title: "Schumacher Center — DTES CLT",
                        url: "https://www.centerforneweconomics.org/community-land-trusts/downtown-eastside-community-land-trust/",
                        description: "Community land trust directory profile"
                    }
                ]
            }
        ],

        tags: ["community-land-trust", "dtes", "tenant-led", "affordable-housing"]
    },
    {
        id: 2,
        title: "First United",
        location: "320 E Hastings St, Vancouver",
        coordinates: [49.28195, -123.09793],

        heroImage: {
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/East_Hastings_Street_Vancouver.JPG/1280px-East_Hastings_Street_Vancouver.JPG",
            alt: "East Hastings Street in Vancouver",
            caption: "East Hastings Street — Photo: GoToVan (CC BY-SA 3.0)"
        },

        stats: [
            { label: "Meals/day", value: "250+" },
            { label: "Housing", value: "103 units" },
            { label: "Serving", value: "130+ years" }
        ],

        sections: [
            {
                id: "overview",
                label: "Overview",
                icon: "info",
                content: `
                    <p>First United is a low-barrier community ministry in the Downtown Eastside that provides daily meals, a community help desk, and other essential supports. It has served the neighbourhood for more than 130 years.</p>
                    <p>While its historic building at 320 E Hastings is being rebuilt, services continue nearby. The First United Food Truck now serves over 250 meals each day.</p>
                    <p>The First Forward redevelopment will replace the site with a new facility featuring four floors of community amenities and seven floors of below-market rental housing (103 homes) in partnership with Lu'ma Native Housing Society.</p>
                `
            },
            {
                id: "highlights",
                label: "At This Stop",
                icon: "sparkles",
                type: "highlights",
                highlights: [
                    {
                        title: "Food Truck Stop",
                        description: "Locate the First United Food Truck and discuss how food security programs sustain daily community life.",
                        meta: "Food security"
                    },
                    {
                        title: "Community Help Desk",
                        description: "Review supports like mail, phone access, and ID or tax assistance for people without stable housing.",
                        meta: "Essential services"
                    },
                    {
                        title: "Redevelopment Site",
                        description: "Explore how the First Forward project adds community amenities and below-market housing on-site.",
                        meta: "Housing + services"
                    },
                    {
                        title: "Low-Barrier Access",
                        description: "Note how low-barrier services are designed to be welcoming to people with complex needs.",
                        meta: "Inclusion"
                    }
                ]
            },
            {
                id: "details",
                label: "Programs & Redevelopment",
                icon: "document",
                content: `
                    <h4>Everyday Supports</h4>
                    <p>First United offers daily meals, a community help desk, and referrals to local health and housing resources. These services are designed to be low-barrier and accessible.</p>

                    <h4>Food Security</h4>
                    <p>The First United Food Truck serves hot meals each day while the historic building is under construction.</p>

                    <h4>First Forward Project</h4>
                    <p>The redevelopment adds a new community hub plus 103 homes of below-market rental housing in partnership with Lu'ma Native Housing Society.</p>
                `,
                keyPoints: [
                    "Low-barrier services in the DTES for 130+ years",
                    "Food Truck serves 250+ meals daily",
                    "Redevelopment adds 4 floors of amenities and 7 floors of housing",
                    "103 below-market rental homes in partnership with Lu'ma"
                ]
            },
            {
                id: "gallery",
                label: "Gallery",
                icon: "images",
                type: "gallery",
                images: [
                    {
                        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Pigeon_Park%2C_Vancouver.jpg/1280px-Pigeon_Park%2C_Vancouver.jpg",
                        alt: "Pigeon Park in Vancouver",
                        caption: "Pigeon Park — Photo: Wikimedia Commons (CC BY-SA 4.0)"
                    },
                    {
                        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Carnegie_Community_Centre_Vancouver.jpg/1280px-Carnegie_Community_Centre_Vancouver.jpg",
                        alt: "Carnegie Community Centre in Vancouver",
                        caption: "Carnegie Community Centre — Photo: Wikimedia Commons (CC BY-SA 4.0)"
                    },
                    {
                        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Vancouver_Chinatown_Street_View.JPG/1280px-Vancouver_Chinatown_Street_View.JPG",
                        alt: "Vancouver Chinatown street view",
                        caption: "Vancouver Chinatown Street View — Photo: Wikimedia Commons (CC BY-SA 4.0)"
                    },
                    {
                        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Oppenheimer_Park_%285674465960%29.jpg/1280px-Oppenheimer_Park_%285674465960%29.jpg",
                        alt: "Oppenheimer Park in Vancouver",
                        caption: "Oppenheimer Park — Photo: Guilhem Vellut (CC BY 2.0)"
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
                        title: "First United — Contact",
                        url: "https://firstunited.ca/contact-us/",
                        description: "Address, location, and current contact info"
                    },
                    {
                        title: "First United — Food Security",
                        url: "https://firstunited.ca/how-we-help/food-security/",
                        description: "Meal programs and the First United Food Truck"
                    },
                    {
                        title: "First Forward Redevelopment",
                        url: "https://firstunited.ca/first-forward-redevelopment/",
                        description: "Project details, housing plans, and partners"
                    },
                    {
                        title: "211 BC — Community Help Desk",
                        url: "https://bc.211.ca/agency-details/first-united-church-community-ministry-51587305",
                        description: "Service overview and help desk supports"
                    },
                    {
                        title: "BC Gov News — First Forward Funding",
                        url: "https://news.gov.bc.ca/releases/2020MAH0127-001867",
                        description: "Provincial funding announcement for redevelopment"
                    }
                ]
            }
        ],

        tags: ["food-security", "community-services", "dtes", "non-profit-housing"]
    },
    {
        id: 3,
        title: "Hogan's Alley Society",
        location: "312 Main St, Vancouver",
        coordinates: [49.28208, -123.09921],

        heroImage: {
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Hogan%27s_Alley%2C_2006.jpg/1280px-Hogan%27s_Alley%2C_2006.jpg",
            alt: "Hogan's Alley in Vancouver",
            caption: "Hogan's Alley, 2006 — Photo: Wikimedia Commons (CC BY-SA 3.0)"
        },

        stats: [
            { label: "MOU", value: "Sep 2022" },
            { label: "Nora Hendrix", value: "52 homes" },
            { label: "Pillars", value: "3" }
        ],

        sections: [
            {
                id: "overview",
                label: "Overview",
                icon: "info",
                content: `
                    <p>Hogan's Alley Society (HAS) is a Black-led non-profit dedicated to advancing the social, political, economic, and cultural well-being of people of African descent in Metro Vancouver. Its work centers on three pillars: culturally informed housing, nonprofit housing development, and community engagement.</p>
                    <p>HAS leads the Hogan's Alley Block initiative and is building a community land trust so future housing and cultural spaces remain community-controlled. In September 2022, HAS signed an MOU with the City of Vancouver to negotiate a long-term lease for the Hogan's Alley Block.</p>
                    <p>HAS is the lead operating partner of Nora Hendrix Place, a 52-home supportive housing site at 258 Union Street that prioritizes Black and Indigenous residents who are experiencing or at risk of homelessness.</p>
                `
            },
            {
                id: "highlights",
                label: "At This Stop",
                icon: "sparkles",
                type: "highlights",
                highlights: [
                    {
                        title: "Hogan's Alley Block",
                        description: "Discuss how the block connects to the history of Strathcona's Black community and future redevelopment plans.",
                        meta: "Cultural history"
                    },
                    {
                        title: "Community Land Trust",
                        description: "Explore how HAS uses a land trust to prevent displacement and keep space affordable long term.",
                        meta: "Community ownership"
                    },
                    {
                        title: "Nora Hendrix Place",
                        description: "Point to the nearby supportive housing site and its role in the long-term land trust vision.",
                        meta: "Supportive housing"
                    },
                    {
                        title: "Community Care",
                        description: "Highlight housing support and cultural programs focused on the Black community.",
                        meta: "Community care"
                    }
                ]
            },
            {
                id: "details",
                label: "Land Trust Vision",
                icon: "document",
                content: `
                    <h4>Three Strategic Pillars</h4>
                    <p>HAS focuses on culturally informed housing, nonprofit housing development, and community engagement as its core strategy.</p>

                    <h4>Hogan's Alley Block</h4>
                    <p>The Society signed an MOU with the City in 2022 to negotiate a long-term lease for the Hogan's Alley Block and to advance a community land trust model.</p>

                    <h4>Nora Hendrix Place</h4>
                    <p>Nora Hendrix Place provides 52 self-contained studio homes and is a step toward the long-term vision of a Black-led community land trust on the site.</p>
                `,
                keyPoints: [
                    "Black-led nonprofit focused on housing and cultural well-being",
                    "MOU signed with the City in September 2022",
                    "Community land trust approach for long-term affordability",
                    "Nora Hendrix Place provides 52 supportive homes"
                ]
            },
            {
                id: "gallery",
                label: "Gallery",
                icon: "images",
                type: "gallery",
                images: [
                    {
                        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Hogan%27s_Alley_Mural%2C_Vancouver.jpg/1280px-Hogan%27s_Alley_Mural%2C_Vancouver.jpg",
                        alt: "Hogan's Alley mural in Vancouver",
                        caption: "Hogan's Alley mural — Photo: GoToVan (CC BY-SA 3.0)"
                    },
                    {
                        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Vancouver_Chinatown_Street_View.JPG/1280px-Vancouver_Chinatown_Street_View.JPG",
                        alt: "Vancouver Chinatown street view",
                        caption: "Vancouver Chinatown Street View — Photo: Wikimedia Commons (CC BY-SA 4.0)"
                    },
                    {
                        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Vancouver_Chinatown_streetlamp.jpg/1280px-Vancouver_Chinatown_streetlamp.jpg",
                        alt: "Chinatown streetlamp in Vancouver",
                        caption: "Chinatown streetlamp — Photo: Wikimedia Commons (CC BY-SA 3.0)"
                    },
                    {
                        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Vancouver_Carnegie.jpg/1280px-Vancouver_Carnegie.jpg",
                        alt: "Vancouver Carnegie building exterior",
                        caption: "Vancouver Carnegie — Photo: Wikimedia Commons (CC BY-SA 2.0)"
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
                        description: "Mission, pillars, and current initiatives"
                    },
                    {
                        title: "HAS — About Us",
                        url: "https://www.hogansalleysociety.org/aboutus",
                        description: "MOU, land trust vision, and Nora Hendrix Place"
                    },
                    {
                        title: "HAS — Contact",
                        url: "https://www.hogansalleysociety.org/contactus",
                        description: "Mailing address and contact details"
                    },
                    {
                        title: "City of Vancouver — 258 Union St",
                        url: "https://vancouver.ca/people-programs/258-union-st.aspx",
                        description: "Nora Hendrix Place details and site context"
                    },
                    {
                        title: "211 BC — Hogan's Alley Society",
                        url: "https://bc.211.ca/agency-details/hogans-alley-society-76124936/",
                        description: "Housing support program and Nora Hendrix Place listing"
                    }
                ]
            }
        ],

        tags: ["black-led", "community-land-trust", "supportive-housing", "cultural-heritage"]
    },
    {
        id: 4,
        title: "DTES SRO Collaborative",
        location: "268 Keefer St, Vancouver (Sun Wah Centre)",
        coordinates: [49.27921, -123.09807],

        heroImage: {
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Pigeon_Park%2C_Vancouver.jpg/1280px-Pigeon_Park%2C_Vancouver.jpg",
            alt: "Pigeon Park in Vancouver",
            caption: "Pigeon Park — Photo: Wikimedia Commons (CC BY-SA 4.0)"
        },

        stats: [
            { label: "Focus", value: "Private SROs" },
            { label: "Model", value: "Tenant-led" },
            { label: "TORO", value: "40 hotels" }
        ],

        sections: [
            {
                id: "overview",
                label: "Overview",
                icon: "info",
                content: `
                    <p>The DTES SRO Collaborative is a tenant-led non-profit working to improve habitability, affordability, safety, health, and housing security for people living in privately owned SRO hotels.</p>
                    <p>The organization supports tenant committees and on-the-ground programs that respond to urgent needs inside SRO buildings. One of its flagship initiatives is the Tenant Overdose Response Organizers (TORO) program, which operates in 40 private SROs.</p>
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
                        description: "Discuss how tenant leadership shapes building-level priorities and advocacy.",
                        meta: "Resident power"
                    },
                    {
                        title: "TORO Program",
                        description: "Learn how peer organizers distribute naloxone and provide overdose response training.",
                        meta: "Health + safety"
                    },
                    {
                        title: "Fire & Heat Prep",
                        description: "Review tenant-led emergency planning and safety supports across SROs.",
                        meta: "Building safety"
                    },
                    {
                        title: "Right to Remain",
                        description: "Explore community-led research documenting SRO conditions and resident stories.",
                        meta: "Research"
                    }
                ]
            },
            {
                id: "details",
                label: "Tenant-Led Work",
                icon: "document",
                content: `
                    <h4>Mission</h4>
                    <p>The SRO Collaborative focuses on improving habitability, affordability, safety, health, and housing security for tenants in privately owned SROs.</p>

                    <h4>Programs</h4>
                    <p>Tenant-based initiatives include building-level organizing, harm reduction supports, fire safety work, and healthy food access.</p>

                    <h4>TORO</h4>
                    <p>The Tenant Overdose Response Organizers program operates across 40 private SRO hotels, providing peer-based overdose response training and support.</p>
                `,
                keyPoints: [
                    "Tenant-led nonprofit focused on private SROs",
                    "Supports organizing, safety, and harm reduction inside buildings",
                    "TORO program operates in 40 SRO hotels",
                    "Builds housing security through resident leadership"
                ]
            },
            {
                id: "gallery",
                label: "Gallery",
                icon: "images",
                type: "gallery",
                images: [
                    {
                        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/East_Hastings_Street_Vancouver.JPG/1280px-East_Hastings_Street_Vancouver.JPG",
                        alt: "East Hastings Street in Vancouver",
                        caption: "East Hastings Street — Photo: GoToVan (CC BY-SA 3.0)"
                    },
                    {
                        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Vancouver_Chinatown_Street_View.JPG/1280px-Vancouver_Chinatown_Street_View.JPG",
                        alt: "Vancouver Chinatown street view",
                        caption: "Vancouver Chinatown Street View — Photo: Wikimedia Commons (CC BY-SA 4.0)"
                    },
                    {
                        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Carnegie_Community_Centre_Vancouver.jpg/1280px-Carnegie_Community_Centre_Vancouver.jpg",
                        alt: "Carnegie Community Centre in Vancouver",
                        caption: "Carnegie Community Centre — Photo: Wikimedia Commons (CC BY-SA 4.0)"
                    },
                    {
                        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Oppenheimer_Park_%285674465960%29.jpg/1280px-Oppenheimer_Park_%285674465960%29.jpg",
                        alt: "Oppenheimer Park in Vancouver",
                        caption: "Oppenheimer Park — Photo: Guilhem Vellut (CC BY 2.0)"
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
                        description: "Mission and organization overview"
                    },
                    {
                        title: "DTES SRO Collaborative — Programs",
                        url: "https://srocollaborative.org/tenant-based-initiatives/",
                        description: "Tenant-led program list and focus areas"
                    },
                    {
                        title: "TORO Program",
                        url: "https://srocollaborative.org/toro-tenant-overdose-response-organizers/",
                        description: "Overdose response training and peer support"
                    },
                    {
                        title: "Right to Remain Research",
                        url: "https://www.righttoremain.ca/",
                        description: "Community research on SRO life and conditions"
                    },
                    {
                        title: "BC Gov News — SRO Collaborative Grant",
                        url: "https://news.gov.bc.ca/releases/2023HLTH0120-001398",
                        description: "Provincial support for tenant-led initiatives"
                    }
                ]
            }
        ],

        tags: ["sro", "tenant-led", "harm-reduction", "dtes"]
    },
    {
        id: 5,
        title: "UBC Learning Exchange",
        location: "612 Main St, Vancouver",
        coordinates: [49.2792, -123.09929],

        heroImage: {
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Vancouver_Chinatown_streetlamp.jpg/1280px-Vancouver_Chinatown_streetlamp.jpg",
            alt: "Chinatown streetlamp in Vancouver",
            caption: "Chinatown streetlamp — Photo: Wikimedia Commons (CC BY-SA 3.0)"
        },

        stats: [
            { label: "Since", value: "1999" },
            { label: "Location", value: "612 Main" },
            { label: "Model", value: "Two-way learning" }
        ],

        sections: [
            {
                id: "overview",
                label: "Overview",
                icon: "info",
                content: `
                    <p>The UBC Learning Exchange has been a UBC presence in the Downtown Eastside since 1999, connecting local residents with students, faculty, and staff through two-way learning.</p>
                    <p>Its storefront hub at 612 Main Street hosts free programs, community-based learning, and partnerships that blend local knowledge with university resources.</p>
                `
            },
            {
                id: "highlights",
                label: "At This Stop",
                icon: "sparkles",
                type: "highlights",
                highlights: [
                    {
                        title: "Community Learning Hub",
                        description: "Step inside the storefront space and note how it welcomes community learning and drop-in programs.",
                        meta: "Learning"
                    },
                    {
                        title: "Student Partnerships",
                        description: "Discuss how students and faculty collaborate with community partners on projects and research.",
                        meta: "UBC partnerships"
                    },
                    {
                        title: "Shared Knowledge",
                        description: "Highlight two-way learning that values local knowledge alongside academic expertise.",
                        meta: "Co-learning"
                    },
                    {
                        title: "Accessible Space",
                        description: "Note that the storefront is designed to be accessible and welcoming to all visitors.",
                        meta: "Access"
                    }
                ]
            },
            {
                id: "details",
                label: "How It Works",
                icon: "document",
                content: `
                    <h4>Two-Way Learning</h4>
                    <p>The Learning Exchange creates space for community members and UBC learners to teach and learn from one another.</p>

                    <h4>Programs</h4>
                    <p>Free programs include community-based learning, skill sharing, and opportunities for residents to connect with student projects.</p>

                    <h4>Partnerships</h4>
                    <p>UBC courses and research initiatives often partner with DTES organizations through the Learning Exchange.</p>
                `,
                keyPoints: [
                    "UBC presence in the DTES since 1999",
                    "Storefront hub at 612 Main Street",
                    "Focus on community-based, two-way learning",
                    "Connects residents with students and faculty"
                ]
            },
            {
                id: "gallery",
                label: "Gallery",
                icon: "images",
                type: "gallery",
                images: [
                    {
                        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Vancouver_Chinatown_Street_View.JPG/1280px-Vancouver_Chinatown_Street_View.JPG",
                        alt: "Vancouver Chinatown street view",
                        caption: "Vancouver Chinatown Street View — Photo: Wikimedia Commons (CC BY-SA 4.0)"
                    },
                    {
                        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/CarnegieCtr.jpg/1280px-CarnegieCtr.jpg",
                        alt: "Carnegie Centre building in Vancouver",
                        caption: "Carnegie Centre — Photo: Wikimedia Commons (CC BY-SA 3.0)"
                    },
                    {
                        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Vancouver_Carnegie.jpg/1280px-Vancouver_Carnegie.jpg",
                        alt: "Vancouver Carnegie building exterior",
                        caption: "Vancouver Carnegie — Photo: Wikimedia Commons (CC BY-SA 2.0)"
                    },
                    {
                        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Carnegie_Community_Centre_Vancouver.jpg/1280px-Carnegie_Community_Centre_Vancouver.jpg",
                        alt: "Carnegie Community Centre in Vancouver",
                        caption: "Carnegie Community Centre — Photo: Wikimedia Commons (CC BY-SA 4.0)"
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
                        description: "Program overview and community partnerships"
                    },
                    {
                        title: "UBC Learning Exchange — Contact",
                        url: "https://learningexchange.ubc.ca/contact/",
                        description: "Location and contact details"
                    },
                    {
                        title: "Urban Ethnographic Field School",
                        url: "https://learningexchange.ubc.ca/urban-ethnographic-field-school-uefs/",
                        description: "Background and history since 1999"
                    },
                    {
                        title: "UBC Action Plan — DTES Learning Exchange",
                        url: "https://dtes.ubc.ca/learning-exchange/",
                        description: "UBC Downtown Eastside Strategy overview"
                    }
                ]
            }
        ],

        tags: ["education", "community-learning", "ubc", "dtes"]
    }
];
