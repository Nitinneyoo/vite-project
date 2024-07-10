import { Spotlight } from "@/components/ui/Spotlight"
import Link from "next/link"
import { Button } from "@/components/ui/moving-border"
export const Home = () => {
    return (
        <>
            <div className="h-auto md:h-screen w-full rounded-md flex flex-col items-center justify-center relative ">
                <Spotlight
                    className="-top-40 left-0 md:left-60 md:-top-20"
                    fill="white"
                />
                <div className="p-4 relative z-10 w-full text-center">
                    <h1 className=" mt-40 md:mt-0 md:text-7xl font-bold bg-clip-text text-5xl text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">Model Middle School</h1>
                    <p className="font-normal text-base md:text-xl text-neutral-300 max-w-lg mx-auto mt-4 ">
                        Model Middle School, established by Ajayab Lal Singh, offers classes from 1 to 10th grade. With a focus on holistic education, the school provides modern facilities, experienced faculty, and a supportive learning environment to nurture and develop the potential of every student.
                    </p>
                    <div className="mt-4 text-white">
                        <Link href={"/"}>
                            <Button
                                borderRadius="1.75rem"
                                className="bg-black dark:bg-black dark:text-white border-neutral-200 dark:border-slate-800"
                            >Explore More</Button>

                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
} 
