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
        location: "Downtown Eastside, Vancouver",
        coordinates: [49.2827, -123.0985],

        heroImage: {
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/East_Hastings_Street_Vancouver.JPG/1280px-East_Hastings_Street_Vancouver.JPG",
            alt: "East Hastings Street in Vancouver",
            caption: "East Hastings Street — Photo: GoToVan (CC BY-SA 3.0)"
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
                        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Pigeon_Park%2C_Vancouver.jpg/1280px-Pigeon_Park%2C_Vancouver.jpg",
                        alt: "Pigeon Park in the Downtown Eastside",
                        caption: "Pigeon Park — Photo: Wikimedia Commons (CC BY-SA 4.0)"
                    },
                    {
                        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Carnegie_Community_Centre_Vancouver.jpg/1280px-Carnegie_Community_Centre_Vancouver.jpg",
                        alt: "Carnegie Community Centre exterior in Vancouver",
                        caption: "Carnegie Community Centre — Photo: Wikimedia Commons (CC BY-SA 4.0)"
                    },
                    {
                        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Oppenheimer_Park_%285674465960%29.jpg/1280px-Oppenheimer_Park_%285674465960%29.jpg",
                        alt: "Oppenheimer Park in the Downtown Eastside",
                        caption: "Oppenheimer Park — Photo: Guilhem Vellut (CC BY 2.0)"
                    },
                    {
                        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Hogan%27s_Alley_Mural%2C_Vancouver.jpg/1280px-Hogan%27s_Alley_Mural%2C_Vancouver.jpg",
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
    },
    {
        id: 2,
        title: "First United Church",
        location: "320 E Hastings St, Vancouver",
        coordinates: [49.2826, -123.0962],

        heroImage: {
            src: null,
            alt: "First United Church",
            caption: null
        },

        stats: [
            { label: "Founded", value: "1886" },
            { label: "Services", value: "Multi" },
            { label: "Focus", value: "Housing" }
        ],

        sections: [
            {
                id: "overview",
                label: "Overview",
                icon: "info",
                content: `
                    <p><strong>First United Church</strong> has been serving Vancouver's Downtown Eastside since 1886, making it one of the oldest continuously operating social service organizations in the city.</p>
                    <p>The church provides a range of services including <strong>emergency shelter, meals, and community programs</strong> for residents experiencing poverty and homelessness.</p>
                    <p class="placeholder-note"><em>Additional content to be added after research.</em></p>
                `
            },
            {
                id: "highlights",
                label: "At This Stop",
                icon: "sparkles",
                type: "highlights",
                highlights: [
                    {
                        title: "Historic Building",
                        description: "View the church building that has served the community for over a century.",
                        meta: "Heritage"
                    },
                    {
                        title: "Community Services",
                        description: "Learn about the range of services provided to DTES residents.",
                        meta: "Services"
                    },
                    {
                        title: "Housing Advocacy",
                        description: "Understand First United's role in housing advocacy and policy.",
                        meta: "Advocacy"
                    },
                    {
                        title: "Partnership Network",
                        description: "See how First United connects with other community organizations.",
                        meta: "Collaboration"
                    }
                ]
            },
            {
                id: "details",
                label: "Programs",
                icon: "document",
                content: `
                    <h4>About First United</h4>
                    <p>Content to be added after research on:</p>
                    <ul>
                        <li>Current housing programs and initiatives</li>
                        <li>Emergency services and shelter capacity</li>
                        <li>Community partnerships</li>
                        <li>Advocacy work and policy positions</li>
                    </ul>
                `,
                keyPoints: [
                    "One of Vancouver's oldest social service organizations",
                    "Provides emergency shelter and meals",
                    "Active in housing advocacy",
                    "Partners with DTES community organizations"
                ]
            },
            {
                id: "gallery",
                label: "Gallery",
                icon: "images",
                type: "gallery",
                images: []
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
                        description: "Official website"
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
        coordinates: [49.2790, -123.0975],

        heroImage: {
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Hogan%27s_Alley_Mural%2C_Vancouver.jpg/1280px-Hogan%27s_Alley_Mural%2C_Vancouver.jpg",
            alt: "Hogan's Alley mural in Vancouver",
            caption: "Hogan's Alley mural — Photo: GoToVan (CC BY-SA 3.0)"
        },

        stats: [
            { label: "Historic Era", value: "1935-67" },
            { label: "Focus", value: "Black history" },
            { label: "Projects", value: "Multiple" }
        ],

        sections: [
            {
                id: "overview",
                label: "Overview",
                icon: "info",
                content: `
                    <p><strong>Hogan's Alley</strong> was the heart of Vancouver's Black community from the 1930s to 1967, when it was destroyed to build the Georgia Viaduct. The Hogan's Alley Society works to restore and commemorate this important piece of Vancouver's history.</p>
                    <p>The Society is leading efforts to develop <strong>affordable housing, cultural spaces, and community facilities</strong> on the historic Hogan's Alley site as part of the Northeast False Creek development.</p>
                    <p class="placeholder-note"><em>Additional content to be added after research.</em></p>
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
                        description: "Walk the original footprint of Hogan's Alley and learn about its history.",
                        meta: "Heritage"
                    },
                    {
                        title: "Nora Hendrix Place",
                        description: "Visit the development named for Jimi Hendrix's grandmother.",
                        meta: "Housing"
                    },
                    {
                        title: "Cultural Programming",
                        description: "Learn about ongoing cultural initiatives and events.",
                        meta: "Culture"
                    },
                    {
                        title: "Future Development",
                        description: "Review plans for the Northeast False Creek site.",
                        meta: "Planning"
                    }
                ]
            },
            {
                id: "details",
                label: "History & Plans",
                icon: "document",
                content: `
                    <h4>Hogan's Alley History</h4>
                    <p>Content to be added after research on:</p>
                    <ul>
                        <li>History of Vancouver's Black community</li>
                        <li>Destruction of Hogan's Alley (1967)</li>
                        <li>Current restoration and commemoration efforts</li>
                        <li>Nora Hendrix Place and housing projects</li>
                        <li>Northeast False Creek development plans</li>
                    </ul>
                `,
                keyPoints: [
                    "Historic heart of Vancouver's Black community",
                    "Destroyed in 1967 for the Georgia Viaduct",
                    "Active restoration and commemoration efforts",
                    "Part of Northeast False Creek development"
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
                    }
                ]
            }
        ],

        tags: ["black-history", "heritage", "housing", "culture"]
    },
    {
        id: 4,
        title: "DTES SRO Collaborative",
        location: "Downtown Eastside, Vancouver",
        coordinates: [49.2832, -123.1000],

        heroImage: {
            src: null,
            alt: "SRO Collaborative",
            caption: null
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
                    <p>The <strong>DTES SRO Collaborative Society</strong> is a tenant-led organization that advocates for improved conditions in Single Room Occupancy (SRO) buildings throughout Vancouver's Downtown Eastside.</p>
                    <p>In 2023, the Province provided an <strong>$11 million grant</strong> to support tenant-led programming and safety initiatives. The Collaborative runs the <strong>Tenant Overdose Response Organizers (TORO) project</strong>, which connects tenant organizers with naloxone supplies and education.</p>
                    <p>As Executive Director <strong>Wendy Pedersen</strong> explains: "Privately owned SRO hotels are a last resort before homelessness."</p>
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
                    <h4>SRO Collaborative Programs</h4>
                    <p>Content to be added after research on:</p>
                    <ul>
                        <li>TORO (Tenant Overdose Response Organizers) program details</li>
                        <li>Tenant organizing and advocacy work</li>
                        <li>Partnerships with other DTES organizations</li>
                        <li>Policy advocacy and achievements</li>
                        <li>Use of provincial grant funding</li>
                    </ul>
                `,
                keyPoints: [
                    "Tenant-led advocacy organization",
                    "$11M provincial grant (2023)",
                    "TORO program for overdose response",
                    "Key role in vacancy control policy"
                ]
            },
            {
                id: "gallery",
                label: "Gallery",
                icon: "images",
                type: "gallery",
                images: []
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
        coordinates: [49.2825, -123.1005],

        heroImage: {
            src: null,
            alt: "UBC Learning Exchange",
            caption: null
        },

        stats: [
            { label: "Founded", value: "2000" },
            { label: "Focus", value: "Education" },
            { label: "Partner", value: "UBC" }
        ],

        sections: [
            {
                id: "overview",
                label: "Overview",
                icon: "info",
                content: `
                    <p>The <strong>UBC Learning Exchange</strong> is a university-community partnership that has been operating in the Downtown Eastside since 2000. It provides free educational programming and resources to DTES residents while creating learning opportunities for UBC students and faculty.</p>
                    <p>The Learning Exchange offers programs including <strong>computer access, literacy support, community-based research, and various workshops</strong> that connect university resources with community needs.</p>
                    <p class="placeholder-note"><em>Additional content to be added after research.</em></p>
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
                        description: "Visit the Learning Exchange to see community education in action.",
                        meta: "Education"
                    },
                    {
                        title: "Research Partnerships",
                        description: "Learn about community-based research initiatives.",
                        meta: "Research"
                    },
                    {
                        title: "Student Involvement",
                        description: "Understand how UBC students engage with the community.",
                        meta: "Partnership"
                    },
                    {
                        title: "Resource Access",
                        description: "See how the Learning Exchange provides access to university resources.",
                        meta: "Access"
                    }
                ]
            },
            {
                id: "details",
                label: "Programs",
                icon: "document",
                content: `
                    <h4>UBC Learning Exchange Programs</h4>
                    <p>Content to be added after research on:</p>
                    <ul>
                        <li>Educational programming and workshops</li>
                        <li>Community-based research initiatives</li>
                        <li>Student volunteer and service-learning programs</li>
                        <li>Partnerships with other DTES organizations</li>
                        <li>Housing-related research and advocacy</li>
                    </ul>
                `,
                keyPoints: [
                    "University-community partnership since 2000",
                    "Free educational programming",
                    "Community-based research",
                    "Connects UBC resources with community needs"
                ]
            },
            {
                id: "gallery",
                label: "Gallery",
                icon: "images",
                type: "gallery",
                images: []
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
                        description: "Official website"
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
    initStopsDrawer();
    updateNavButtons();
    createLightbox();
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

    flyToStop(0);
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
// Public API
// ============================================

window.BSHTour = {
    goToStop,
    getCurrentStop: () => currentStopIndex,
    getTotalStops: () => tourStops.length,
    getStopData: (index) => tourStops[index],
    switchSection
};
