"use client";
import {
    TextRevealCard,
    TextRevealCardDescription,
    TextRevealCardTitle,
} from "./ui/text-reveal-card";

export function TextRevealCardPreview() {
    return (
        <div className="flex items-center justify-center bg-[#0E0E10] h-[30rem] rounded-2xl w-full ">
            <TextRevealCard
                text="The School You Want"
                revealText="Model Middle School"
            >
                <TextRevealCardTitle>
                    Sometimes, you just need to see it.
                </TextRevealCardTitle>
                <TextRevealCardDescription>
                    This is the Best Part That You are Being Revealed.
                </TextRevealCardDescription>
            </TextRevealCard>
        </div>
    );
}
