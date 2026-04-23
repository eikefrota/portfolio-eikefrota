import { PROJECT_DESCRIPTIONS } from "./project-descriptions";

export type Project = {
    slug: string;
    title: string;
    role: string;
    description: string;
    highlights: readonly string[];
    tech: readonly string[];
    github: string | null;
    live: string | null;
    featured: boolean;
    year: string;
    image: string;
    status: string;
};

type ProjectCore = Omit<Project, "description">;

const projectCoreList: readonly ProjectCore[] = [
    {
        slug: "quizdev",
        title: "QuizDev",
        role: "Full Stack Development",
        highlights: [
            "Built a mobile-first interactive experience with React Native and Expo.",
            "Connected application flow to backend logic and persisted data with PostgreSQL.",
            "Focused on navigation, question flow, and a compact full stack architecture.",
            "Shows range beyond browser-based interfaces while keeping product clarity central.",
        ],
        tech: ["React Native", "Node.js", "PostgreSQL", "Expo"],
        github: "https://github.com/eikefrota/quiz-dev",
        live: null,
        featured: true,
        year: "2025",
        image: "/images/projects/quizdev.webp",
        status: "Public code",
    },
    {
        slug: "fastdish",
        title: "FastDish",
        role: "Frontend Development",
        highlights: [
            "Designed a web ordering experience around fast reading, simple navigation, and responsive behavior.",
            "Used React and Vite to keep implementation lightweight and direct.",
            "Prioritized visual hierarchy and task-oriented flow instead of decorative complexity.",
            "Acts as a clear proof of UI execution and frontend decision-making.",
        ],
        tech: ["React", "Vite", "JavaScript", "CSS"],
        github: "https://github.com/eikefrota/fastdish",
        live: "https://fastdish.vercel.app/",
        featured: true,
        year: "2025",
        image: "/images/projects/fastdish.webp",
        status: "Live demo",
    },
    {
        slug: "frotas-gourmet",
        title: "Frota's Gourmet",
        role: "Frontend Development",
        highlights: [
            "Created a digital menu focused on fast reading, mobile clarity, and direct conversion.",
            "Structured categories and pricing to work well on smaller screens.",
            "Used a lean stack to ship a clear and lightweight experience.",
            "Works as a practical example of interface organization with commercial intent.",
        ],
        tech: ["HTML5", "JavaScript", "Tailwind CSS"],
        github: "https://github.com/eikefrota/frota-gourmet",
        live: "https://frotagourmet.netlify.app",
        featured: true,
        year: "2024",
        image: "/images/projects/frotas-gourmet.webp",
        status: "Live demo",
    },
];

function attachDescription(core: ProjectCore): Project {
    const description = PROJECT_DESCRIPTIONS[core.slug];
    if (description === undefined) {
        throw new Error(`Missing PROJECT_DESCRIPTIONS entry for slug: ${core.slug}`);
    }
    return { ...core, description };
}

export const projects: readonly Project[] = projectCoreList.map(attachDescription);

export const getProjectBySlug = (slug: string): Project | null => {
    return projects.find((project) => project.slug === slug) ?? null;
};
