/**
 * Community Organizations Interactive Map Tour
 * DTES & Partner Organizations
 */

// ============================================
// Tour Stop Data
// ============================================

const tourStops = [
    {
        id: 1,
        title: "Downtown Eastside Community Land Trust",
        location: "222 Keefer St, Vancouver",
        coordinates: [49.27922, -123.09891],

        heroImage: {
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/East_Hastings_Street_Vancouver.JPG/1280px-East_Hastings_Street_Vancouver.JPG",
            alt: "East Hastings Street in Vancouver",
            caption: "East Hastings Street — Photo: Canadian2006 (CC BY-SA 3.0)"
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
                    <p>The Downtown Eastside (DTES) is home to <strong>over 4,000 residents living in roughly 99 SRO buildings</strong> — often the last rental option before homelessness. Approximately one-third of SRO residents are Indigenous.</p>
                    <p>Community organizations are working to acquire buildings and convert them to <strong>permanent community ownership through land trust models</strong>, removing them from the speculative market while preserving affordability for current residents.</p>
                    <p>In 2023, the Province provided an <strong>$11 million grant to the DTES SRO Collaborative Society</strong> to support tenant-led programming and safety initiatives. The Downtown Eastside Community Land Trust (DTES CLT) was incorporated in 2023 to acquire buildings under Indigenous co-leadership and community governance.</p>
                `
            },
            {
                id: "highlights",
                label: "At This Stop",
                icon: "sparkles",
                type: "highlights",
                highlights: [
                    {
                        title: "Carnegie Community Centre",
                        description: "Visit the historic centre to see wraparound services that anchor the neighbourhood.",
                        meta: "Community hub"
                    },
                    {
                        title: "SRO Support Loop",
                        description: "Map the tenant support network connecting SRO buildings, outreach teams, and health resources.",
                        meta: "Support services"
                    },
                    {
                        title: "Hogan's Alley Sites",
                        description: "Identify the restoration efforts honoring Vancouver's historic Black neighbourhood.",
                        meta: "Cultural heritage"
                    },
                    {
                        title: "Future Acquisitions",
                        description: "Review the Keefer and Powell Rooms timelines to understand CLT acquisition strategy.",
                        meta: "Land trust"
                    }
                ]
            },
            {
                id: "details",
                label: "Partners & Work",
                icon: "document",
                content: `
                    <h4>The SRO Challenge</h4>
                    <p>Vancouver's SRO stock is governed by the SRA by-law, with <strong>~99 buildings and ~4,000 rooms</strong> in the DTES alone. Average rents are roughly <strong>$680/month</strong> overall, while private SROs average closer to <strong>$740/month</strong>. The provincial shelter rate is $500/month, creating a persistent affordability gap.</p>
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
                    <p>In 2024, Vancouver implemented <strong>vacancy control for SROs</strong>, preventing rent spikes between tenancies. DTES CLT's first acquisition, <strong>Powell Rooms (23 units)</strong>, is expected to close in January 2026, while <strong>Keefer Rooms (48 units)</strong> is reopening in spring 2025 through a BC Housing partnership and community programming model.</p>
                `,
                keyPoints: [
                    "4,000+ residents in ~99 SROs — last stop before homelessness",
                    "$11M provincial grant to SRO Collaborative (2023)",
                    "CLT acquisitions remove buildings from speculative market",
                    "Vacancy control (2024) prevents rent hikes between tenancies"
                ]
            },
            {
                id: "gallery",
                label: "Gallery",
                icon: "images",
                type: "gallery",
                images: [
                    {
                        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/633_East_Hastings_02.JPG/1280px-633_East_Hastings_02.JPG",
                        alt: "633 East Hastings building in Vancouver",
                        caption: "633 East Hastings — Photo: Gordon Smith (CC BY-SA 3.0)"
                    },
                    {
                        src: "https://upload.wikimedia.org/wikipedia/commons/7/76/Vancouver_Downtown_Eastside.jpg",
                        alt: "Downtown Eastside neighbourhood view",
                        caption: "Downtown Eastside — Photo: Public domain"
                    },
                    {
                        src: "https://upload.wikimedia.org/wikipedia/commons/7/76/Vancouver_Downtown_Eastside.jpg",
                        alt: "Pigeon Park in the Downtown Eastside",
                        caption: "Pigeon Park — Photo: Wikimedia Commons (CC BY-SA 4.0)"
                    },
                    {
                        src: "https://upload.wikimedia.org/wikipedia/commons/7/76/Vancouver_Downtown_Eastside.jpg",
                        alt: "Carnegie Community Centre exterior in Vancouver",
                        caption: "Carnegie Community Centre — Photo: Wikimedia Commons (CC BY-SA 4.0)"
                    },
                    {
                        src: "https://upload.wikimedia.org/wikipedia/commons/7/76/Vancouver_Downtown_Eastside.jpg",
                        alt: "Oppenheimer Park in the Downtown Eastside",
                        caption: "Oppenheimer Park — Photo: Guilhem Vellut (CC BY 2.0)"
                    },
                    {
                        src: "https://upload.wikimedia.org/wikipedia/commons/7/76/Vancouver_Downtown_Eastside.jpg",
                        alt: "Hogan's Alley mural in Vancouver",
                        caption: "Hogan's Alley mural — Photo: GoToVan (CC BY-SA 3.0)"
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
                        title: "Downtown Eastside Community Land Trust",
                        url: "https://www.dtescommunitylandtrust.ca/",
                        description: "Community land trust leadership and acquisition model in the DTES"
                    },
                    {
                        title: "SRO Collaborative Programs",
                        url: "https://srocollaborative.org/programs/",
                        description: "Tenant organizing, peer supports, and SRO-focused program directory"
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
    },
    {
        id: 2,
        title: "First United Church",
        location: "320 E Hastings St, Vancouver",
        coordinates: [49.28101, -123.09716],

        heroImage: {
            src: "https://upload.wikimedia.org/wikipedia/commons/7/76/Vancouver_Downtown_Eastside.jpg",
            alt: "First United Church",
            caption: "Carnegie area near First United — Photo: Wikimedia Commons (CC BY-SA 4.0)"
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
                    <p><strong>FIRST UNITED</strong> has worked in Vancouver's Downtown Eastside since 1886. Today it combines shelter, legal advocacy, and community food programs in one service model focused on reducing harm and preventing homelessness.</p>
                    <p>Its Safe Shelter program currently operates <strong>51 low-barrier shelter beds</strong> at 467 Alexander Street. The Legal Advocacy program supports tenants and income-security clients and reports <strong>more than 1,400 unique cases each year</strong>.</p>
                    <p>The organization is also leading a major redevelopment at 320 East Hastings with partner <strong>Lu'ma Native BCH Housing Society</strong>, planned to include <strong>100+ homes and roughly 40,000 sq ft</strong> of community-serving space.</p>
                `
            },
            {
                id: "highlights",
                label: "At This Stop",
                icon: "sparkles",
                type: "highlights",
                highlights: [
                    {
                        title: "Safe Shelter Program",
                        description: "Review how the 51-bed low-barrier shelter supports people facing immediate housing instability.",
                        meta: "Shelter"
                    },
                    {
                        title: "Legal Advocacy",
                        description: "Understand tenancy, social assistance, and disability advocacy support delivered at street level.",
                        meta: "Tenant rights"
                    },
                    {
                        title: "Food Access",
                        description: "Track meal services including daily lunch and outreach food truck operations.",
                        meta: "Food security"
                    },
                    {
                        title: "Redevelopment Site",
                        description: "Connect the current site to plans for long-term affordable homes and integrated community space.",
                        meta: "Housing delivery"
                    }
                ]
            },
            {
                id: "details",
                label: "Programs",
                icon: "document",
                content: `
                    <h4>Core Programs</h4>
                    <p>FIRST UNITED's front-line model combines shelter, legal support, and food access:</p>
                    <ul>
                        <li><strong>Safe Shelter:</strong> 51 low-barrier beds currently operating at 467 Alexander Street</li>
                        <li><strong>Legal Advocacy:</strong> more than 1,400 unique client cases annually focused on tenancy and income rights</li>
                        <li><strong>Food Programs:</strong> daily meal services, lunch distribution, and a mobile food truck</li>
                    </ul>
                    <h4>Redevelopment at 320 E Hastings</h4>
                    <p>The redevelopment project is designed to preserve FIRST UNITED's service base while adding permanent housing supply. Public project materials describe a mixed-use community hub with 100+ homes and approximately 40,000 sq ft for social, cultural, and health-serving uses.</p>
                    <p>The project partnership with Lu'ma Native BCH Housing Society also sets out Indigenous-led and community-accountable governance outcomes for long-term operations.</p>
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
                        src: "https://upload.wikimedia.org/wikipedia/commons/7/76/Vancouver_Downtown_Eastside.jpg",
                        alt: "Carnegie Community Centre near First United",
                        caption: "Carnegie Community Centre — Photo: Wikimedia Commons (CC BY-SA 4.0)"
                    },
                    {
                        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/East_Hastings_Street_Vancouver.JPG/1280px-East_Hastings_Street_Vancouver.JPG",
                        alt: "East Hastings near First United",
                        caption: "East Hastings Street — Photo: Canadian2006 (CC BY-SA 3.0)"
                    },
                    {
                        src: "https://upload.wikimedia.org/wikipedia/commons/7/76/Vancouver_Downtown_Eastside.jpg",
                        alt: "Pigeon Park near First United",
                        caption: "Pigeon Park — Photo: Wikimedia Commons (CC BY-SA 4.0)"
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
                        title: "First United Church",
                        url: "https://firstunited.ca/",
                        description: "Official organization website"
                    },
                    {
                        title: "Safe Shelter",
                        url: "https://firstunited.ca/how-we-help/safe-shelter/",
                        description: "Current low-barrier shelter program details"
                    },
                    {
                        title: "Legal Advocacy",
                        url: "https://firstunited.ca/how-we-help/legal-advocacy/",
                        description: "Tenancy and income advocacy services"
                    },
                    {
                        title: "Redevelopment of FIRST UNITED",
                        url: "https://firstunited.ca/first-forward-redevelopment/",
                        description: "320 E Hastings redevelopment plan"
                    },
                    {
                        title: "Food Security Programs",
                        url: "https://firstunited.ca/how-we-help/food-security/",
                        description: "Meal access and food outreach programs"
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
        coordinates: [49.27792, -123.09831],

        heroImage: {
            src: "https://upload.wikimedia.org/wikipedia/commons/7/76/Vancouver_Downtown_Eastside.jpg",
            alt: "Hogan's Alley mural in Vancouver",
            caption: "Hogan's Alley mural — Photo: GoToVan (CC BY-SA 3.0)"
        },

        stats: [
            { label: "Historic Era", value: "1935-67" },
            { label: "Focus", value: "Black history" },
            { label: "Nora Hendrix", value: "52 homes" }
        ],

        sections: [
            {
                id: "overview",
                label: "Overview",
                icon: "info",
                content: `
                    <p><strong>Hogan's Alley</strong> was the historic centre of Vancouver's Black community until the area was cleared during viaduct-era urban renewal. The Hogan's Alley Society (HAS) is a Black-led non-profit focused on cultural repair, anti-displacement work, and community-owned development.</p>
                    <p>HAS and the City of Vancouver signed a formal <strong>Memorandum of Understanding in September 2022</strong> to guide a Hogan's Alley Land Trust and long-term planning in Northeast False Creek.</p>
                    <p>Current projects include <strong>Nora Hendrix Place</strong> at 258 Union Street, a 52-home temporary modular housing project that includes culturally informed supports and onsite services.</p>
                `
            },
            {
                id: "highlights",
                label: "At This Stop",
                icon: "sparkles",
                type: "highlights",
                highlights: [
                    {
                        title: "Historic Site",
                        description: "Walk the former alley footprint and connect present blocks to erased Black community history.",
                        meta: "Heritage"
                    },
                    {
                        title: "Nora Hendrix Place",
                        description: "Review the 52-home project named for Jimi Hendrix's grandmother and its support model.",
                        meta: "Housing"
                    },
                    {
                        title: "Cultural Programming",
                        description: "Explore Black cultural programming, storytelling, and place-keeping led by HAS.",
                        meta: "Culture"
                    },
                    {
                        title: "Future Development",
                        description: "Track land trust and redevelopment planning tied to the Northeast False Creek process.",
                        meta: "Planning"
                    }
                ]
            },
            {
                id: "details",
                label: "History & Plans",
                icon: "document",
                content: `
                    <h4>Historical Context</h4>
                    <p>Hogan's Alley became a cultural anchor for Black life in Vancouver through the mid-20th century. City documents now identify the district as a major site of displacement connected to viaduct-era planning decisions.</p>
                    <h4>Current Housing and Land Work</h4>
                    <p>HAS is advancing housing and cultural infrastructure through a land trust approach. The Society's planning framework highlights affordable rental housing, childcare, support for Black-owned businesses, and dedicated cultural space.</p>
                    <h4>Nora Hendrix Place</h4>
                    <p>At 258 Union Street, Nora Hendrix Place delivers 52 temporary modular homes with private kitchens and washrooms, with a minimum accessibility target and culturally grounded support services.</p>
                    <h4>Municipal Partnership</h4>
                    <p>The City-HAS MOU (2022) sets a formal basis for co-development and governance conversations in Northeast False Creek as the viaduct removal area is rebuilt.</p>
                    <ul>
                        <li>Black-led community governance in project planning</li>
                        <li>Housing, childcare, and enterprise space as linked anti-displacement tools</li>
                        <li>Cultural redress integrated into redevelopment decisions</li>
                    </ul>
                `,
                keyPoints: [
                    "Historic heart of Vancouver's Black community",
                    "City and HAS signed an MOU in September 2022",
                    "Nora Hendrix Place provides 52 modular homes",
                    "Land trust model ties housing with cultural redress"
                ]
            },
            {
                id: "gallery",
                label: "Gallery",
                icon: "images",
                type: "gallery",
                images: [
                    {
                        src: "https://upload.wikimedia.org/wikipedia/commons/7/76/Vancouver_Downtown_Eastside.jpg",
                        alt: "Hogan's Alley mural in Vancouver",
                        caption: "Hogan's Alley mural — Photo: GoToVan (CC BY-SA 3.0)"
                    },
                    {
                        src: "https://upload.wikimedia.org/wikipedia/commons/7/76/Vancouver_Downtown_Eastside.jpg",
                        alt: "Oppenheimer Park near Hogan's Alley area",
                        caption: "Oppenheimer Park — Photo: Guilhem Vellut (CC BY 2.0)"
                    },
                    {
                        src: "https://upload.wikimedia.org/wikipedia/commons/7/76/Vancouver_Downtown_Eastside.jpg",
                        alt: "Downtown Eastside streetscape near Hogan's Alley",
                        caption: "Downtown Eastside streetscape — Photo: Public domain"
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
                        description: "Restoring Vancouver's historic Black community"
                    },
                    {
                        title: "Hogan's Alley Society - About",
                        url: "https://www.hogansalleysociety.org/aboutus",
                        description: "Organization history, MOU context, and project pillars"
                    },
                    {
                        title: "City of Vancouver - Hogan's Alley Society Block",
                        url: "https://vancouver.ca/home-property-development/hogans-alley-society-block.aspx",
                        description: "Municipal planning and implementation details"
                    },
                    {
                        title: "City of Vancouver - 258 Union Street",
                        url: "https://vancouver.ca/people-programs/258-union-street.aspx",
                        description: "Nora Hendrix Place housing project profile"
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
        coordinates: [49.27918, -123.09802],

        heroImage: {
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/633_East_Hastings_02.JPG/1280px-633_East_Hastings_02.JPG",
            alt: "SRO Collaborative",
            caption: "East Hastings SRO block context — Photo: Gordon Smith (CC BY-SA 3.0)"
        },

        stats: [
            { label: "Provincial Grant", value: "$11M" },
            { label: "Focus", value: "Tenant advocacy" },
            { label: "Program", value: "TORO" }
        ],

        sections: [
            {
                id: "overview",
                label: "Overview",
                icon: "info",
                content: `
                    <p>The <strong>DTES SRO Collaborative Society</strong> is a tenant-led organization focused on resident safety, tenancy rights, and policy change in privately owned SRO hotels.</p>
                    <p>Its <strong>Tenant Overdose Response Organizers (TORO)</strong> initiative is active in around 40 private SRO hotels and supports residents through overdose prevention education, naloxone access, and peer organizing.</p>
                    <p>In 2023, the Province of British Columbia announced a <strong>one-time $11 million grant</strong> to support tenant-led safety and stabilization work in the DTES. The Collaborative also co-led a 2024 tenant survey project with community partners and the City.</p>
                `
            },
            {
                id: "highlights",
                label: "At This Stop",
                icon: "sparkles",
                type: "highlights",
                highlights: [
                    {
                        title: "Tenant Organizing",
                        description: "Learn about tenant-led organizing and advocacy strategies.",
                        meta: "Advocacy"
                    },
                    {
                        title: "TORO Program",
                        description: "Understand the Tenant Overdose Response Organizers initiative.",
                        meta: "Harm reduction"
                    },
                    {
                        title: "SRO Conditions",
                        description: "Discuss challenges and opportunities in SRO housing.",
                        meta: "Housing"
                    },
                    {
                        title: "Policy Impact",
                        description: "Review the Collaborative's role in vacancy control policy.",
                        meta: "Policy"
                    }
                ]
            },
            {
                id: "details",
                label: "Programs",
                icon: "document",
                content: `
                    <h4>How the Collaborative Works</h4>
                    <p>The organization describes tenant committees as a core accountability structure. These committees identify building-level issues, connect residents to legal and health supports, and coordinate local safety planning.</p>
                    <h4>TORO Program</h4>
                    <p>TORO is designed as a tenant-led overdose response and harm-reduction model within SRO buildings. The program focuses on peer leadership and direct supply access to reduce preventable deaths.</p>
                    <h4>Policy and Public Accountability</h4>
                    <p>Recent efforts include coordinated tenant surveys and public documentation of SRO living conditions, helping shape city and provincial conversations on minimum standards, rent protections, and anti-displacement policy.</p>
                    <h4>Funding Context</h4>
                    <p>The 2023 provincial grant provides targeted support for tenant-led operations, outreach, and staffing for services tied to safety and stabilization in the private SRO stock.</p>
                    <ul>
                        <li>Resident-led governance through tenant committees</li>
                        <li>Harm reduction and overdose response capacity in SRO hotels</li>
                        <li>Cross-partner survey and policy evidence gathering</li>
                    </ul>
                `,
                keyPoints: [
                    "Tenant-led advocacy organization",
                    "$11M provincial grant (2023)",
                    "TORO active in around 40 private SRO hotels",
                    "2024 tenant survey work with city and community partners"
                ]
            },
            {
                id: "gallery",
                label: "Gallery",
                icon: "images",
                type: "gallery",
                images: [
                    {
                        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/633_East_Hastings_02.JPG/1280px-633_East_Hastings_02.JPG",
                        alt: "SRO building on East Hastings",
                        caption: "East Hastings SRO building — Photo: Gordon Smith (CC BY-SA 3.0)"
                    },
                    {
                        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/East_Hastings_Street_Vancouver.JPG/1280px-East_Hastings_Street_Vancouver.JPG",
                        alt: "East Hastings street view",
                        caption: "East Hastings Street — Photo: Canadian2006 (CC BY-SA 3.0)"
                    },
                    {
                        src: "https://upload.wikimedia.org/wikipedia/commons/7/76/Vancouver_Downtown_Eastside.jpg",
                        alt: "Pigeon Park in the DTES",
                        caption: "Pigeon Park — Photo: Wikimedia Commons (CC BY-SA 4.0)"
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
            src: "https://upload.wikimedia.org/wikipedia/commons/7/76/Vancouver_Downtown_Eastside.jpg",
            alt: "UBC Learning Exchange",
            caption: "Downtown Eastside near Main and Keefer — Photo: Public domain"
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
                    <p>The <strong>UBC Learning Exchange</strong> is a long-running university-community hub in the Downtown Eastside. It has operated from 612 Main Street since the program launched in 2000 as part of UBC's Community Learning Initiative.</p>
                    <p>Programming focuses on two-way learning: local residents access free educational opportunities while UBC students and faculty engage in community-informed teaching, volunteering, and research.</p>
                    <p>Core activities include computer and digital literacy support, conversation and communication programming, and partnerships with local organizations on neighbourhood priorities.</p>
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
                    <p>The Learning Exchange frames its work as reciprocal community learning. Programs are built with community members and local organizations rather than delivered as one-way outreach.</p>
                    <h4>Education and Skills</h4>
                    <p>Public-facing activities include computer and internet support, literacy and communication programming, and workshops that respond to resident-identified interests.</p>
                    <h4>University-Community Bridge</h4>
                    <p>The site provides practical entry points for UBC students and faculty to participate in community-engaged learning and collaborative research in the DTES.</p>
                    <h4>Neighbourhood Partnerships</h4>
                    <p>Partnerships across the DTES shape how UBC resources are shared and how local knowledge is reflected in project design and evaluation.</p>
                    <ul>
                        <li>Resident-informed education and digital inclusion programming</li>
                        <li>Community-engaged teaching and service learning pathways for students</li>
                        <li>Long-term collaboration infrastructure between UBC and DTES organizations</li>
                    </ul>
                `,
                keyPoints: [
                    "University-community partnership since 2000",
                    "Free educational programming",
                    "Reciprocal model for research and teaching",
                    "Based at 612 Main Street in the DTES"
                ]
            },
            {
                id: "gallery",
                label: "Gallery",
                icon: "images",
                type: "gallery",
                images: [
                    {
                        src: "https://upload.wikimedia.org/wikipedia/commons/7/76/Vancouver_Downtown_Eastside.jpg",
                        alt: "Downtown Eastside near the Learning Exchange",
                        caption: "Downtown Eastside streetscape — Photo: Public domain"
                    },
                    {
                        src: "https://upload.wikimedia.org/wikipedia/commons/7/76/Vancouver_Downtown_Eastside.jpg",
                        alt: "Carnegie Community Centre near Main Street",
                        caption: "Carnegie Community Centre — Photo: Wikimedia Commons (CC BY-SA 4.0)"
                    },
                    {
                        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/East_Hastings_Street_Vancouver.JPG/1280px-East_Hastings_Street_Vancouver.JPG",
                        alt: "East Hastings and Main area",
<<<<<<< ours
                        caption: "East Hastings Street — Photo: GoToVan (CC BY-SA 3.0)"
                    },
                    {
                        src: "https://upload.wikimedia.org/wikipedia/commons/7/76/Vancouver_Downtown_Eastside.jpg",
                        alt: "Oppenheimer Park near the Learning Exchange area",
                        caption: "Oppenheimer Park — Photo: Guilhem Vellut (CC BY 2.0)"
=======
                        caption: "East Hastings Street — Photo: Canadian2006 (CC BY-SA 3.0)"
>>>>>>> theirs
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
                        description: "Official program website"
                    },
                    {
                        title: "Who We Are",
                        url: "https://learningexchange.ubc.ca/about-us/",
                        description: "Program model and reciprocal learning approach"
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
        center: [49.2820, -123.0990],
        zoom: 16,
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

    // Draw route line connecting stops
    const routeCoords = tourStops.map(stop => stop.coordinates);
    L.polyline(routeCoords, {
        color: '#002145',
        weight: 2,
        opacity: 0.3,
        dashArray: '8, 8',
        className: 'tour-route'
    }).addTo(map);

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
