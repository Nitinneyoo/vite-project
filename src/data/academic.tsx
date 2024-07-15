"use client"

import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";


const Academic_cards = [
    {
        title: "Student Performance",
        name: "Honor Roll and Awards:",
        quote: "List of students on the honor roll  and awards received. Academic awards and recognitions"
    },
    {
        title: "Student Performance",
        name: "Overall Academic Performance:",
        quote: "Average GPA of students.Distribution of grades (A, B, C, etc.)."
    },
    {
        title: "Teacher Information",
        name: "Teacher Qualifications:",
        quote: "Average 10 years of teaching experience.Percentage of teachers with advanced degrees."
    },
    {
        title: "Teacher Information",
        name: "Teacher-Student Ratio:",
        quote: "Ratio of teachers to students in different grades."
    },
    {
        title: "Course Offerings",
        name: "Extracurricular Activities:",
        quote: "Clubs and organizations.Sports teams and achievements."
    },
    {
        title: "Additional Features",
        name: "Interactive Elements:",
        quote: "Notable alumni achievements and career paths.Charts and graphs to visualize data."
    },
    {
        title: "Additional Features",
        name: "Testimonials:",
        quote: "Student and parent testimonials about academic experiences."
    }
]

function Academic() {
    return (
        <div className="h-[50rem] w-full dark:bg-white bg-black  dark:bg-grid-black/[0.2] bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden mt-4">
            <h2 className="text-center font-bold text-4xl mb-8 z-10 text-white">
                The Information Section : Our Academic Highlights
            </h2>
            <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8 ">
                <div className="w-full max-w-6xl">
                    <InfiniteMovingCards
                        items={Academic_cards}
                        direction="right"
                        speed="slow"
                    />
                </div>

            </div>

        </div>
    )
}

export default Academic;
