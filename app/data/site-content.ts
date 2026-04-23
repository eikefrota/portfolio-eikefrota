export type SocialLink = {
    name: string;
    url: string | null;
};

export type TechItem = {
    name: string;
    iconSrc: string;
    invertInDark?: boolean;
};

export const SITE_IDENTITY = {
    name: "Eike Frota",
    firstName: "Eike",
    lastName: "Frota",
    role: "Software Developer",
    locationShort: "Fortaleza, BR",
    locationLong: "Fortaleza, CE - Brazil",
    email: "eikefrotaa@hotmail.com",
    emailUser: "eikefrotaa",
    emailDomain: "@hotmail.com",
    linkedin: "https://www.linkedin.com/in/eikefrota/",
    githubProfile: "https://github.com/eikefrota",
    instagram: "https://www.instagram.com/eikefrotaa",
    whatsapp: "https://wa.me/5585999062339",
    siteUrl: "https://eikefrotaportfolio.netlify.app",
} as const;

export const HERO_CONTENT = {
    topNoteLine1: "From Fortaleza with",
    topNoteLine2: "focus",
    titleLine1: "Software",
    titleLine2: "Developer",
    portraitLabel: "EF / Placeholder",
    bodyLine1: "Interfaces, APIs, and",
    bodyLine2: "continuous product delivery.",
    availabilityLine1: "Open to product teams / tech squads",
    availabilityLine2: "Based in Fortaleza, BR",
    yearLabel: "Portfolio",
    locationLine1: "Based in",
    locationLine2: "Fortaleza, Brazil",
    locationLine3: "Driven by product & code",
    footerNote: "Portfolio by Eike Frota",
} as const;

export const HERO_STACK_LINKS = [
    { label: "React", href: "/projects" },
    { label: "Next.js", href: "/projects" },
    { label: "Node.js", href: "/#contact" },
] as const;

export const HERO_AVAILABILITY_LABEL = "Open to work";
export const HERO_EXPLORE_LABEL = "Selected work";

export const MARQUEE_CONTENT = {
    desktopTopLeft: "Full Stack",
    desktopTopRight: "Product Dev",
    desktopTopLabel: "Services",
    desktopTopItems: [
        "React / Next.js",
        "Node / Nest / Django",
        "Systems in production",
        "API integration",
    ],
    desktopBottomLeft: "Web",
    desktopBottomRight: "Systems",
    desktopBottomLabel: "Focus",
    desktopBottomItems: [
        "Performance",
        "Bug fixing",
        "New features",
        "Continuous evolution",
    ],
    mobileTop: "Full Stack",
    mobileBottom: "Product Dev",
    mobileLabel: "Expertise",
    mobileItems: [
        "Frontend delivery",
        "Backend systems",
        "Responsive interfaces",
        "API integration",
        "Data-driven products",
    ],
} as const;

export const ABOUT_CONTENT = {
    label: "About",
    title: "About",
    paragraphs: [
        "Software developer with experience building, maintaining, and improving systems, websites, and applications in production environments.",
        "Works across frontend with React.js and Next.js and backend with Node.js, NestJS, and Django, contributing to bug fixes, performance improvements, integrations, and new features.",
        "Currently studying Computer Science at Unifor and completed a Technical Degree in Systems Development at Senac Ceara, with a focus on clarity, scalability, and real product impact.",
    ],
} as const;

export const TECH_STACKS: readonly { label: string; items: readonly TechItem[] }[] = [
    {
        label: "Frontend",
        items: [
            { name: "React", iconSrc: "/images/frontend/react.svg" },
            { name: "Next.js", iconSrc: "/images/frontend/nextjs.svg", invertInDark: true },
            { name: "React Native", iconSrc: "/images/frontend/react.svg" },
            { name: "JavaScript", iconSrc: "/images/frontend/javascript.svg" },
            { name: "TypeScript", iconSrc: "/images/frontend/typescript.svg" },
            { name: "Tailwind CSS", iconSrc: "/images/frontend/tailwind-css.svg" },
        ],
    },
    {
        label: "Backend",
        items: [
            { name: "Node.js", iconSrc: "/images/backend/nodejs.svg" },
            { name: "NestJS", iconSrc: "/images/backend/nestjs.svg" },
            { name: "Python", iconSrc: "/images/backend/python.svg" },
            { name: "Django", iconSrc: "/images/backend/django.svg", invertInDark: true },
        ],
    },
    {
        label: "Database",
        items: [
            { name: "PostgreSQL", iconSrc: "/images/database/postgresql.svg" },
            { name: "MySQL", iconSrc: "/images/database/mysql.svg" },
            { name: "MongoDB", iconSrc: "/images/database/mongodb.svg" },
        ],
    },
    {
        label: "Tools",
        items: [
            { name: "Git", iconSrc: "/images/tools/git.svg" },
            { name: "Docker", iconSrc: "/images/tools/docker.svg" },
            { name: "Jest", iconSrc: "/images/tools/jest.svg" },
            { name: "Selenium", iconSrc: "/images/tools/selenium.svg" },
            { name: "Swagger", iconSrc: "/images/tools/swagger.svg" },
            { name: "Expo", iconSrc: "/images/tools/expo.svg", invertInDark: true },
        ],
    },
] as const;

export const SKILLS_TICKER =
    "React / Next.js / React Native / JavaScript / TypeScript / Tailwind CSS / Node.js / NestJS / Python / Django / PostgreSQL / MySQL / MongoDB / Git / Docker / Jest / Selenium / Swagger / Expo / ";

export const ACHIEVEMENTS_CONTENT = {
    label: "Achievements",
    title: "Recognition & Milestones",
    description: "A focused set of highlights that reflect delivery, formation, and real technical growth.",
    items: [
        {
            icon: "briefcase",
            title: "Full Stack Internship",
            description: "Professional experience building, maintaining, and improving systems, websites, and applications inside real production software.",
            year: "2025",
            category: "Professional",
        },
        {
            icon: "graduation-cap",
            title: "Technical Degree Completed",
            description: "Completed the Technical Degree in Systems Development at Senac Ceara with strong hands-on experience in software and project presentation.",
            year: "2025",
            category: "Education",
        },
        {
            icon: "code",
            title: "Computer Science In Progress",
            description: "Currently pursuing a Computer Science degree at the University of Fortaleza, expanding both theoretical foundation and engineering depth.",
            year: "2028",
            category: "Formation",
        },
        {
            icon: "sparkles",
            title: "Events & Exposure",
            description: "Participated in Geracao Tech 2.0, Feira do Conhecimento 2024, and Siara Tech Summit 2025 as part of ongoing technical growth.",
            year: "2024-2025",
            category: "Community",
        },
    ],
} as const;

export const TESTIMONIALS_CONTENT = {
    label: "Testimonials",
    titleLine1: "Team",
    titleLine2: "Feedback",
    note: "Perspectives shaped by day-to-day collaboration across delivery, product alignment, and production work.",
    items: [
        {
            name: "Tech Lead",
            role: "Engineering leadership",
            company: "Product Engineering",
            badge: "TL",
            content: "Quick to read context, careful with existing code, and reliable when a feature needs to move without creating noise for the rest of the team.",
            rating: 5,
        },
        {
            name: "Product Partner",
            role: "Product collaboration",
            company: "Product Strategy",
            badge: "PP",
            content: "Communication stays clear from briefing to delivery, which makes product discussions easier to turn into implementation with less back-and-forth.",
            rating: 5,
        },
        {
            name: "Squad Engineer",
            role: "Peer collaboration",
            company: "Delivery Squad",
            badge: "SQ",
            content: "Works well in iteration-heavy environments, handles fixes without friction, and keeps momentum even when priorities change mid-sprint.",
            rating: 5,
        },
        {
            name: "Client Stakeholder",
            role: "Business-facing view",
            company: "Client Delivery",
            badge: "CV",
            content: "There is a strong sense of ownership in the delivery, especially when the work depends on usability, consistency, and confidence in the final result.",
            rating: 5,
        },
    ],
} as const;

export const CONTACT_CONTENT = {
    label: "Contact",
    titleLine1: "Let's Build",
    titleLine2: "Together",
    description:
        "If the goal is to evolve a digital product with clearer interfaces, stronger integration, and technical continuity, that is the kind of context where I create the most value today.",
    socials: [
        { name: "GitHub", url: SITE_IDENTITY.githubProfile },
        { name: "LinkedIn", url: SITE_IDENTITY.linkedin },
        { name: "Instagram", url: SITE_IDENTITY.instagram },
    ] satisfies readonly SocialLink[],
} as const;

export const FLOATING_SOCIALS = [
    { name: "GitHub", url: SITE_IDENTITY.githubProfile },
    { name: "LinkedIn", url: SITE_IDENTITY.linkedin },
    { name: "WhatsApp", url: SITE_IDENTITY.whatsapp },
    { name: "Instagram", url: SITE_IDENTITY.instagram },
    { name: "Email", url: `mailto:${SITE_IDENTITY.email}` },
] satisfies readonly SocialLink[];

export const FOOTER_SOCIALS = [
    { name: "Email", url: `mailto:${SITE_IDENTITY.email}` },
    { name: "GitHub", url: SITE_IDENTITY.githubProfile },
    { name: "LinkedIn", url: SITE_IDENTITY.linkedin },
    { name: "Instagram", url: SITE_IDENTITY.instagram },
] satisfies readonly SocialLink[];

export const FOOTER_NAV = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
] as const;

export const FOOTER_CONTENT = {
    navigationLabel: "Navigation",
    backToTopLabel: "Back to Top",
    rights: "Software Developer",
    note: "Portfolio 2026",
} as const;

export const PROJECTS_HOME_CONTENT = {
    mobileTitle: "Featured Work",
    mobileDescription:
        "Three public projects that reflect how I work today across frontend, mobile-first flows, and product-oriented implementation.",
    desktopEyebrow: "Selected Projects",
    desktopTitleLine1: "Featured",
    desktopTitleLine2: "Work",
    desktopDescription:
        "A focused set of public projects that show interface work, implementation range, and product thinking in real builds.",
    viewAllLabel: "View all",
    scrubHint: "Scroll to scrub - Click a project to open",
} as const;

export const PROJECTS_PAGE_CONTENT = {
    eyebrow: "Portfolio",
    backHomeLabel: "Back to home",
    title: "All Projects",
    description:
        "Current public project list with the builds that are ready to be shown in the portfolio.",
    cardCta: "View project details",
} as const;

export const PROJECT_DETAIL_CONTENT = {
    openImageLabel: "Open image",
    caseStudyLabel: "Case study",
    allProjectsLabel: "All projects",
    homeLabel: "Home",
    viewLiveSiteLabel: "View live site",
    unavailableInlineLabel: "Link unavailable",
    unavailableButtonLabel: "Link unavailable",
    viewSourceLabel: "View source",
    liveDemoLabel: "Live demo",
    highlightsLabel: "Highlights",
    highlightsTitle: "Scope & impact",
} as const;
