"use client";
import Link from "next/link";
import { teacherInfo } from "../info/teacher_info";
import { BackgroundGradient } from "@/components/ui/background-gradient";

interface Faculty {
  id: number;
  name: string;
  department: string;
  description: string;
  slug: string;
  isFeatured: boolean;
}

export const FacultyMember = () => {
  const featuredFaculty = teacherInfo.filter(
    (teacherInfo: Faculty) => teacherInfo.isFeatured,
  );

  return (
    <div className="py-12 bg-black dark:bg-zinc-900">
      <div>
        <div className="text-center">
          <h2 className="text-teal-600 font-semibold tracking-wide uppercase text-xl">
            Faculty Member
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Learn With The Best Instructors
          </p>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 justify-center gap-8">
            {featuredFaculty.map((teacherInfo: Faculty) => (
              <div key={teacherInfo.id} className="flex justify-center">
                <BackgroundGradient className="flex flex-col rounded-[22px] bg-black dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                  <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                    <h2 className="text-3xl sm:text-3xl font-bold text-white dark:text-white">
                      {teacherInfo.name}
                    </h2>
                    <p className="text-lg sm:text-xl text-white mt-4 mb-2 dark:text-neutral-200">
                      {" "}
                      {teacherInfo.department}
                    </p>
                    <p className="text-sm sm:text-xl text-neutral-600 dark:text-neutral-400">
                      {" "}
                      {teacherInfo.description}
                    </p>
                    <p className="text-sm sm:text-xl text-neutral-600 dark:text-neutral-400">
                      {" "}
                      {teacherInfo.slug}
                    </p>
                  </div>
                </BackgroundGradient>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-20 text-center">
          <Link
            href={"/"}
            className="px-4 py-2 rounded-full border border-black text-gray-800 bg-white hover:bg-black hover:text-white transition duration-200"
          >
            Show All
          </Link>
        </div>
      </div>
    </div>
  );
};
