export const PROJECT_DESCRIPTIONS: Readonly<Record<string, string>> = {
    quizdev:
        "A mobile-first full stack build that combines React Native, backend logic, and persisted data into a compact interactive experience.",
    fastdish:
        "A responsive web interface focused on fast reading, direct navigation, and a lightweight ordering flow built around clarity.",
    "frotas-gourmet":
        "A digital menu experience designed for mobile clarity, direct conversion, and organized information hierarchy.",
};

export function getProjectDescription(slug: string): string | undefined {
    return PROJECT_DESCRIPTIONS[slug];
}
