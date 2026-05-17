import type { Education, Experience, NavItem, Project, Skill, SocialLink } from "@/types/content";

export const siteIdentity = {
    name: "Soumya Prakash Nayak",
    shortName: "Soumya",
    role: "Backend Software Engineer",
    email: "nsoumyaprakash@gmail.com",
    phone: "+91 8908930619",
    location: "Odisha, India",
    yearsExperience: "4.7+",
    headline: "Backend engineer with 4.7+ years delivering APIs, integrations, and production-ready systems.",
    about: "I build reliable backend systems using Node.js, PHP, and Python stacks, with hands-on experience in API design, integration workflows, production debugging, and deployment operations. My work spans enterprise products, communication platforms, and developer tooling.",
    professionalSummary: "Backend-focused engineer experienced in API architecture, platform integrations, and operational reliability across Node.js, PHP, and Python environments.",
};

export const navigation: NavItem[] = [
    { label: "Home", href: "/" },
    { label: "Resume", href: "/resume" },
    { label: "Privacy", href: "/privacypolicy" },
    { label: "Terms", href: "/termsofservice" },
];

export const socialLinks: SocialLink[] = [
    { label: "GitHub", href: "https://github.com/SoumyaRKN" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/soumya-prakash-nayak-558151261" },
];

export const projects: Project[] = [
    {
        slug: "whatsapp-business-chat-app",
        title: "WhatsApp Business Chat App",
        summary: "Multi-tenant messaging workspace for business support operations.",
        description:
            "Engineered a production-oriented messaging platform with template orchestration, contact workflows, and operational dashboards for business communication teams.",
        role: "Backend & Platform Engineer",
        year: "2024",
        domain: "Business Messaging Platform",
        backendFocus: "Real-time messaging, multi-tenant workflows, and operational reliability",
        challenge:
            "Support and operations teams needed a unified platform for high-volume conversations, role-based access, and dependable message visibility.",
        solution:
            "Delivered a Node.js-backed application with real-time event updates, workflow-oriented data models, and administrative controls for templates and user operations.",
        impact: [
            "Improved support response handling through centralized conversation workflows",
            "Reduced operational overhead with unified template and contact management",
            "Enabled safer collaboration through role-based access patterns",
        ],
        architecture: [
            "Event-driven message updates using Socket.IO",
            "Tenant-aware data isolation and role-based access controls",
            "Operations dashboard for template lifecycle and conversation oversight",
        ],
        href: "https://whisperwave-frontend.vercel.app",
        technologies: ["Next.js", "Node.js", "MongoDB", "Socket.IO"],
        highlights: [
            "Real-time messaging and delivery updates",
            "Template lifecycle management",
            "Role-based user management",
        ],
        images: [{ src: "/projects/whatsapp_buseness_chat_app/1.png", alt: "WhatsApp business app dashboard" }],
    },
    {
        slug: "meta-whatsapp-cloud-api-sdk",
        title: "Meta WhatsApp Cloud API SDK",
        summary: "Node.js SDK for WhatsApp Cloud API integrations.",
        description:
            "Built and published an SDK that standardizes templates, media operations, webhook validation, and messaging flows for faster Node.js integration.",
        role: "Backend Engineer",
        year: "2024",
        domain: "Developer Tooling",
        backendFocus: "API abstraction and integration reliability",
        challenge:
            "Repeated WhatsApp Cloud API integrations across projects caused duplicated implementation effort and inconsistent webhook handling.",
        solution:
            "Developed a reusable Node.js SDK that wraps template APIs, media operations, and webhook verification, then published it to NPM with integration-focused documentation.",
        impact: [
            "Reduced integration effort for WhatsApp-enabled products",
            "Reduced repeated boilerplate in client applications",
            "Improved reliability and consistency across webhook and template flows",
        ],
        architecture: [
            "Layered client abstraction for message and template endpoints",
            "Reusable verification utilities for webhook authenticity checks",
            "Publishable package design for enterprise integration reuse",
        ],
        href: "https://www.npmjs.com/package/meta-whatsapp-cloud-api-sdk",
        technologies: ["Node.js", "TypeScript", "REST APIs", "NPM"],
        highlights: [
            "Template and media operations wrapper",
            "Webhook verification pipeline",
            "Reduced integration complexity for client apps",
        ],
        images: [{ src: "/projects/meta_whatsapp_cloud_api_sdk/1.png", alt: "WhatsApp cloud API SDK preview" }],
    },
    {
        slug: "weather-app",
        title: "Weather App",
        summary: "Location-aware weather interface with resilient API integration.",
        description:
            "Built a responsive weather product with geolocation and city search, focusing on clean API response mapping and dependable client-side data handling.",
        role: "Software Engineer",
        year: "2023",
        domain: "Real-Time Data Experience",
        backendFocus: "API integration quality and resilient data adapters",
        challenge:
            "The product required responsive UX with reliable geolocation fallback and consistent handling of API data across devices.",
        solution:
            "Implemented modular forecast adapters and robust request flows for geolocation and city-search scenarios with responsive UI components.",
        impact: [
            "Improved mobile lookup flow through clearer interaction patterns",
            "Established reusable API adapter patterns for future data-driven interfaces",
        ],
        architecture: [
            "Adapter-based API response normalization",
            "Geolocation plus manual-search fallback strategy",
            "Responsive component structure with tokenized styling",
        ],
        href: "https://next-weather-app-xi.vercel.app",
        technologies: ["Next.js", "Tailwind CSS", "OpenWeather API"],
        highlights: [
            "Current and searched location support",
            "Responsive mobile-first UI",
            "Reusable forecast data adapters",
        ],
        images: [{ src: "/projects/weather_app/1.png", alt: "Weather app forecast interface" }],
    },
];

export const skills: Skill[] = [
    // Backend Technologies
    { name: "Node.js", category: "Backend", level: "Advanced" },
    { name: "PHP", category: "Backend", level: "Advanced" },
    { name: "Python", category: "Backend", level: "Proficient" },
    { name: "Bun", category: "Backend", level: "Working" },
    { name: "REST APIs", category: "Backend", level: "Advanced" },
    { name: "Authentication & Authorization", category: "Backend", level: "Advanced" },
    { name: "Microservices", category: "Backend", level: "Proficient" },
    { name: "Webhooks", category: "Backend", level: "Proficient" },

    // Frameworks
    { name: "Express.js", category: "Frameworks", level: "Advanced" },
    { name: "NestJS", category: "Frameworks", level: "Proficient" },
    { name: "Laravel", category: "Frameworks", level: "Advanced" },
    { name: "CodeIgniter", category: "Frameworks", level: "Proficient" },
    { name: "Django", category: "Frameworks", level: "Proficient" },
    { name: "FastAPI", category: "Frameworks", level: "Working" },
    { name: "Flask", category: "Frameworks", level: "Working" },
    { name: "FilamentPHP", category: "Frameworks", level: "Proficient" },

    // Databases
    { name: "MySQL", category: "Databases", level: "Advanced" },
    { name: "PostgreSQL", category: "Databases", level: "Advanced" },
    { name: "MongoDB", category: "Databases", level: "Proficient" },
    { name: "Redis", category: "Databases", level: "Proficient" },
    { name: "SQLite", category: "Databases", level: "Working" },

    // DevOps & Infrastructure
    { name: "Docker", category: "DevOps", level: "Proficient" },
    { name: "AWS", category: "DevOps", level: "Proficient" },
    { name: "Google Cloud Platform", category: "DevOps", level: "Proficient" },
    { name: "Linux/Unix", category: "DevOps", level: "Advanced" },
    { name: "Nginx", category: "DevOps", level: "Proficient" },
    { name: "CI/CD", category: "DevOps", level: "Proficient" },

    // Frontend Working Knowledge
    { name: "TypeScript", category: "Frontend", level: "Advanced" },
    { name: "JavaScript", category: "Frontend", level: "Advanced" },
    { name: "React.js", category: "Frontend", level: "Proficient" },
    { name: "Next.js", category: "Frontend", level: "Proficient" },
    { name: "Tailwind CSS", category: "Frontend", level: "Advanced" },
    { name: "HTML/CSS", category: "Frontend", level: "Advanced" },

    // Tools
    { name: "Git", category: "Tools", level: "Advanced" },
    { name: "GitHub", category: "Tools", level: "Advanced" },
    { name: "Postman", category: "Tools", level: "Advanced" },
    { name: "Swagger/OpenAPI", category: "Tools", level: "Proficient" },
    { name: "VS Code", category: "Tools", level: "Advanced" },
    { name: "Jira", category: "Tools", level: "Proficient" },
];

export const experiences: Experience[] = [
    {
        company: "Zolute Technology and Consulting Private Limited",
        role: "Software Developer",
        period: "October 2023 – Present",
        location: "Remote",
        mode: "Remote",
        highlights: [
            "Designed and delivered backend services and APIs for enterprise and product-focused applications",
            "Worked on backend architecture, third-party integrations, debugging, and production issue resolution",
            "Supported deployments, infrastructure configuration, and server-side troubleshooting",
            "Collaborated with frontend, QA, and stakeholders for feature delivery and release execution",
            "Contributed to architecture reviews, performance optimization, and integration planning",
        ],
    },
    {
        company: "iKontel Solutions Pvt. Ltd",
        role: "Software Developer",
        period: "August 2021 – October 2023",
        location: "Bhubaneswar, India",
        mode: "Onsite",
        highlights: [
            "Developed and maintained backend logic, CRUD modules, and SQL queries for healthcare-oriented PHP applications",
            "Built backend-integrated modules for company and client web platforms",
            "Contributed to debugging, optimization, maintenance, and deployment of existing systems",
            "Collaborated with team members on feature implementation, requirement analysis, and production support",
            "Strengthened backend and database architecture skills through internal and personal projects",
        ],
    },
];

export const inquiryInterests = [
    "Backend Development",
    "API Development",
    "System Architecture",
    "DevOps & Infrastructure",
    "Performance Optimization",
    "Technical Consulting",
    "Other",
] as const;

export const education: Education[] = [
    {
        degree: "Bachelor of Technology",
        institution: "Sudhananda Engineering & Research Center",
        location: "Bhubaneswar, Odisha, India",
        completion: "April 2023",
    },
    {
        degree: "Diploma",
        institution: "Bhubanananda Odisha School Of Engineering",
        location: "Cuttack, Odisha, India",
        completion: "November 2019",
    },
    {
        degree: "10th",
        institution: "B.B High School",
        location: "Rajkanika, Kendrapara, Odisha, India",
        completion: "April 2015",
    },
];
