import { ArrowRightIcon } from "@radix-ui/react-icons";
import { cn } from "../utils/cn";
import AnimatedShinyText from "../../src/components/magicui/animated-shiny-text";

export const AnimatedShinyTextDemo = () => {
    return (
        <div className="z-10 flex min-h-[16rem] items-center justify-center">
            <div
                className={cn(
                    "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
                )}
            >
                <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-900 hover:duration-800 hover:dark:text-neutral-300">
                    <span>Model Middle School Baghedi </span>
                    <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                </AnimatedShinyText>
            </div>
        </div>
    );
};

export const Footer = () => {
    return (
        <footer>
            <AnimatedShinyTextDemo />
        </footer>
    );
};



