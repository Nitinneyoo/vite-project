import { HoverEffect } from "../components/ui/card-hover-effect";
import { projects } from "./projects"
export function CardHoverEffectDemo() {
    return (
        <div className="max-w-8xl mx-auto px-10 md:max-full">
            <HoverEffect items={projects} />
        </div>
    );
}
