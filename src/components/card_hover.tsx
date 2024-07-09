import { HoverEffect } from "../components/ui/card-hover-effect";
import { projects } from "./projects"
export function CardHoverEffectDemo() {
    return (
        <div className="max-w-5xl mx-auto px-8">
            <HoverEffect items={projects} />
        </div>
    );
}