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
                        description: "DTES CLT acquires and stewards SRO buildings as permanently community-owned housing.",
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
                id: "learn-more",
                label: "Learn More",
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
                        title: "Safe Shelter Program",
                        description: "The 51-bed low-barrier shelter supports individuals facing immediate housing instability.",
                        meta: "Shelter"
                    },
                    {
                        title: "Legal Advocacy",
                        description: "Tenancy, social assistance, and disability advocacy support are delivered at the street level.",
                        meta: "Tenant rights"
                    },
                    {
                        title: "Food Access",
                        description: "Meal services include daily lunch and outreach food truck operations.",
                        meta: "Food security"
                    },
                    {
                        title: "Redevelopment Site",
                        description: "The current site is planned for long-term affordable homes and an integrated community space.",
                        meta: "Housing delivery"
                    }
                ]
            },
            {
                id: "details",
                label: "Programs",
                icon: "document",
                content: `
                    <h4>First Forward Redevelopment — 320 E Hastings</h4>
                    <p>The First Forward project will transform the 320 East Hastings site into a universally accessible, purpose-built facility: <strong>four floors of community amenities</strong> topped by <strong>seven floors of below-market rental housing</strong> (over 100 studio and one-bedroom units) operated by Lu'ma Native Housing Society.</p>
                    <p>The new facility will nearly <strong>triple First United's program space to ~40,000 sq ft</strong>, incorporating:</p>
                    <ul>
                        <li>Expanded food security and meal service infrastructure</li>
                        <li>Dedicated legal advocacy and tenant support offices</li>
                        <li>Culturally grounded healing and spiritual care spaces</li>
                        <li>Community gathering and drop-in areas</li>
                        <li>Indigenous-led governance with Musqueam, Squamish, and Tsleil-Waututh artwork integrated into the building design</li>
                    </ul>
                    <p>The project is developed in partnership with Lu'ma Native Housing Society, ensuring <strong>Indigenous-led and community-accountable governance</strong> for long-term operations. The building is targeted for completion in 2026.</p>

                    <h4>BSH Research Partnership</h4>
                    <p>First United is a key partner in BSH's <strong>Evictions and Security of Tenure</strong> research project. Through this collaboration, First United has collected eviction survey data from over 1,100 BC tenants, providing critical evidence on who is being evicted and the downstream impacts on households — data not being collected anywhere else in Canada. The project also includes research on Indigenous tenant rights and model legislation for Indigenous housing justice.</p>
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
                id: "learn-more",
                label: "Learn More",
                icon: "link",
                type: "resources",
                resources: [
                    {
                        title: "First United Church Community Ministry Society",
                        url: "https://firstunited.ca/",
                        description: "Official website — programs, redevelopment plans, and community impact"
                    },
                    {
                        title: "BSH — Evictions and Security of Tenure",
                        url: "https://bsh.ubc.ca/research/evictions-and-security-of-tenure/",
                        description: "BSH research project partnering with First United on BC eviction data"
                    },
                    {
                        title: "First United — BC Eviction Mapping",
                        url: "https://firstunited.ca/how-we-help/bc-eviction-mapping/",
                        description: "Eviction survey collecting data from 1,100+ BC tenants"
                    },
                    {
                        title: "First Forward Redevelopment",
                        url: "https://firstunited.ca/first-forward-redevelopment/",
                        description: "Plans for the 320 E Hastings mixed-use community hub and housing"
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
            src: "../images/community-orgs/has-union-street-building.jpg",
            alt: "Nora Hendrix Place at 258 Union Street",
            caption: "258 Union Street (Nora Hendrix Place) — Source: user-provided photo"
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
                        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Vancouver_Downtown_Eastside.jpg/1280px-Vancouver_Downtown_Eastside.jpg",
                        alt: "Downtown Eastside neighbourhood streetscape near Hogan's Alley",
                        caption: "Downtown Eastside neighbourhood — Photo: Wikimedia Commons (CC BY-SA)"
                    },
                    {
                        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Vancouver_Holden_Building_Tellier_Tower_2011.jpg/1280px-Vancouver_Holden_Building_Tellier_Tower_2011.jpg",
                        alt: "Holden Building and Tellier Tower in the Downtown Eastside",
                        caption: "Holden Building / Tellier Tower — Photo: Wikimedia Commons (CC BY-SA)"
                    },
                    {
                        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Vancouver_Chinatown_17.JPG/1280px-Vancouver_Chinatown_17.JPG",
                        alt: "Chinatown streetscape near Hogan's Alley",
                        caption: "Chinatown near Main and Keefer — Photo: Wikimedia Commons (CC BY-SA 3.0)"
                    },
                    {
                        src: "../images/community-orgs/has-nora-hendrix-mural.jpg",
                        alt: "Hogan's Alley mural at Nora Hendrix Place",
                        caption: "Nora Hendrix Place mural (258 Union Street) — Source: user-provided photo"
                    },
                    {
                        src: "../images/community-orgs/has-union-street-building.jpg",
                        alt: "Nora Hendrix Place building at 258 Union Street",
                        caption: "258 Union Street building — Source: user-provided photo"
                    }
                ]
            },
            {
                id: "learn-more",
                label: "Learn More",
                icon: "link",
                type: "resources",
                resources: [
                    {
                        title: "Hogan's Alley Society",
                        url: "https://www.hogansalleysociety.org/",
                        description: "Organization history, MOU context, cultural restoration, and project pillars"
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
                    },
                    {
                        title: "City of Vancouver — Hogan's Alley MOU",
                        url: "https://vancouver.ca/people-programs/hogan-s-alley-mou.aspx",
                        description: "MOU details, Northeast False Creek Plan context, and cultural redress framework"
                    },
                    {
                        title: "CNCLT Summit — Vancouver Community Land Trusts",
                        url: "https://www.youtube.com/watch?v=KevcrQW11T4",
                        description: "Canadian Network of Community Land Trusts summit presentation featuring Vancouver CLT site tours"
                    },
                    {
                        title: "BSH Research in Progress — Vancouver's Growing CLT Movement",
                        url: "https://bsh.ubc.ca/research-in-progress-on-vancouvers-growing-clt-movement/",
                        description: "October 2025 BSH webinar featuring HAS and DTES CLT on affordable housing and community land stewardship"
                    },
                    {
                        title: "BSH — Reclaim, Remain: BIPOC-Led CLTs in Canada",
                        url: "https://bsh.ubc.ca/research/policy-report-profile-series-on-canadian-community-land-trusts/",
                        description: "Research profiles of six BIPOC-led CLTs including HAS, examining collective land stewardship and anti-displacement strategies"
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
            { label: "Active SROs", value: "~40" },
            { label: "Tenants Supported", value: "2,700+" },
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
                        title: "Tenant Organizing",
                        description: "Tenant-led organizing and advocacy strategies empower residents.",
                        meta: "Advocacy"
                    },
                    {
                        title: "TORO Program",
                        description: "The Tenant Overdose Response Organizers initiative operates across multiple SROs.",
                        meta: "Harm reduction"
                    },
                    {
                        title: "SRO Conditions",
                        description: "The Collaborative documents challenges and opportunities in SRO housing.",
                        meta: "Housing"
                    },
                    {
                        title: "Policy Impact",
                        description: "The Collaborative played a central role in advancing vacancy control policy.",
                        meta: "Policy"
                    }
                ]
            },
            {
                id: "details",
                label: "Programs",
                icon: "document",
                content: `
                    <h4>Tenant-Based Initiatives (TBIs)</h4>
                    <p>The SRO Collaborative's model empowers tenants to improve their own buildings. In contrast to top-down supportive housing, SRO-C provides life-skills training to tenants who then become active participants in building improvement. Programs include:</p>
                    <ul>
                        <li><strong>Tenant committees:</strong> Democratic structures that identify building-level issues and coordinate with landlords for repairs</li>
                        <li><strong>TORO:</strong> Peer-led overdose response and naloxone distribution across ~40 private SROs</li>
                        <li><strong>Room cleaning and repairs:</strong> Tenants trained in building maintenance and trades skills</li>
                        <li><strong>Cultural reconnection:</strong> Supports for the ~33% of SRO tenants who self-identify as Indigenous</li>
                        <li><strong>Fire safety:</strong> Emergency preparedness training and building-level planning</li>
                        <li><strong>SRO Hub:</strong> Newsletter, tenant rights library, and workshops including the "SRO Degree" program</li>
                    </ul>

                    <h4>2024 SRO Tenant Survey</h4>
                    <p>Between January and April 2024, the SRO Collaborative partnered with the City of Vancouver to survey <strong>over 900 tenants across 133 SRO buildings</strong> — approximately 15% of all tenants in surveyed buildings. The survey was designed in collaboration with a Tenant Advisory Committee and included questions comparable to the 2008 and 2013 surveys to track trends over time. Key findings inform the City's intergovernmental <strong>SRO Investment Strategy</strong> on demographics, service use, and housing conditions.</p>

                    <h4>Policy and Public Accountability</h4>
                    <p>The SRO Collaborative played a central role in the campaign for <strong>vacancy control for SROs</strong>. In November 2021, Vancouver City Council voted near-unanimously to approve the bylaw. After legal challenges suspended it, the Province of BC passed an amendment in May 2024 to the <strong>Municipalities Enabling and Validating Act</strong> to restore the city's bylaw — a landmark tenant protection preventing rent spikes between tenancies.</p>
                    <p>The Collaborative continues to document SRO living conditions through public reporting, coordinated surveys, and the <strong>Right to Remain</strong> research collective, generating evidence that shapes municipal and provincial housing policy.</p>
                `,
                keyPoints: [
                    "Tenant-led programming across 40+ private SROs supporting 2,700+ residents",
                    "$11M provincial grant (2023) funds three years of tenant-based initiatives",
                    "2024 SRO Tenant Survey: 900+ tenants across 133 buildings — informs SRO Investment Strategy",
                    "Central role in winning vacancy control for SROs (2021 bylaw, restored 2024)"
                ]
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
                id: "learn-more",
                label: "Learn More",
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
                        description: "Free, resident-centered learning programs are delivered at 612 Main Street.",
                        meta: "Education"
                    },
                    {
                        title: "Research Partnerships",
                        description: "Community priorities are integrated into UBC teaching and research projects.",
                        meta: "Research"
                    },
                    {
                        title: "Student Involvement",
                        description: "Students contribute through service learning and community-engaged coursework.",
                        meta: "Partnership"
                    },
                    {
                        title: "Resource Access",
                        description: "Pathways connect the neighbourhood to UBC resources and public-facing services.",
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
                    <p>The Learning Exchange hosts community-engaged research events. In 2025, the Housing Research Collaborative's <strong>Confronting Sweeps</strong> workshop convened legal experts, frontline workers, and community members to develop policy recommendations on encampment responses grounded in human dignity rather than punitive enforcement.</p>
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
                id: "learn-more",
                label: "Learn More",
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
            src: "../images/placeholder.svg",
            alt: "Aboriginal Front Door Society at 384 Main Street",
            caption: "Aboriginal Front Door Society (384 Main St)"
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
                id: "learn-more",
                label: "Learn More",
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

    // Connect stops in tour order so the path stays aligned with navigation.
    const routeSegments = [dedupeRouteCoords(tourStops.map((stop) => stop.coordinates))]
        .filter((segment) => segment.length >= 2);

    drawRoute(routeSegments);
    void upgradeRouteWithOSRM(routeSegments);

    // Add informational pins for key DTES buildings
    const poiMarkerIcon = function (label) {
        return L.divIcon({
            className: 'poi-marker-wrapper',
            html: '<div class="poi-marker">' + label + '</div>',
            iconSize: [24, 24],
            iconAnchor: [12, 12]
        });
    };

    L.marker([49.2793, -123.0996], { icon: poiMarkerIcon('K') })
        .bindTooltip('Keefer Rooms (48 units)', {
            direction: 'top', offset: [0, -16], className: 'marker-tooltip'
        })
        .addTo(map);

    L.marker([49.2832, -123.0975], { icon: poiMarkerIcon('P') })
        .bindTooltip('Powell Rooms (23 units) — DTES CLT acquisition', {
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

function drawRoute(coordsOrSegments) {
    if (!map || !Array.isArray(coordsOrSegments)) return;

    const segments = Array.isArray(coordsOrSegments[0]?.[0])
        ? coordsOrSegments
        : [coordsOrSegments];
    const cleanSegments = segments
        .map(dedupeRouteCoords)
        .filter(segment => segment.length >= 2);
    if (!cleanSegments.length) return;

    if (routeCasingLayer) {
        map.removeLayer(routeCasingLayer);
        routeCasingLayer = null;
    }
    if (routeDashLayer) {
        map.removeLayer(routeDashLayer);
        routeDashLayer = null;
    }

    routeCasingLayer = L.layerGroup(
        cleanSegments.map((segment) => L.polyline(segment, {
            color: '#ffffff',
            weight: 9,
            opacity: 0.82,
            lineCap: 'round',
            lineJoin: 'round',
            interactive: false
        }))
    ).addTo(map);

    routeDashLayer = L.layerGroup(
        cleanSegments.map((segment) => L.polyline(segment, {
            color: '#2f67dc',
            weight: 6,
            opacity: 0.98,
            dashArray: '0, 12',
            dashOffset: '0',
            lineCap: 'round',
            lineJoin: 'round',
            interactive: false,
            className: 'tour-route'
        }))
    ).addTo(map);
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
            type="button"
        >${index + 1}</button>
    `).join('');

    container.querySelectorAll('.progress-dot').forEach(dot => {
        dot.addEventListener('click', () => {
            const index = parseInt(dot.dataset.index, 10);
            goToStop(index);
        });
    });

    updateProgressDots();
}

function updateProgressDots() {
    document.querySelectorAll('.progress-dot').forEach((dot, index) => {
        const isActive = index === currentStopIndex;
        dot.classList.toggle('active', isActive);
        dot.setAttribute('aria-current', isActive ? 'step' : 'false');
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
