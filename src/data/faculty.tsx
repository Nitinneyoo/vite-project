import { useTheme } from "next-themes";

import { MagicCard } from "../components/magicui/magic-card";

export function MagicCardDemo() {
    const { theme } = useTheme();
    return (
        <div
            className={
                "flex h-[500px] w-full flex-col gap-4 lg:h-[250px] lg:flex-row mb-10"
            }
        >
            <MagicCard
                className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
                gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
            >
                Suneeta Singh
            </MagicCard>
            <MagicCard
                className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
                gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
            >
                Devendra Singh
            </MagicCard>
            <MagicCard
                className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
                gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
            >
                Kamlesh Kushwaha

            </MagicCard>
            <MagicCard
                className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
                gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
            >
                Brijesh Kumar Manjhi
            </MagicCard>
        </div>
    );
}


export const Faculty = () => {
    return (
        <div>
            <div>
                <h1 className="text-5xl font-bold text-center text-white mb-10">Faculty</h1>
            </div>
            <MagicCardDemo />
        </div>
    )
}
