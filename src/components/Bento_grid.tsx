import mission from "../images/mission.jpg"
import academics from "../images/academics.jpeg"
import achievment from "../images/achievment.png"
import extra from "../images/extra.jpeg"
import faculty from "../images/faculty.jpeg"
import history from "../images/history.jpeg"
import vision from "../images/vision.jpg"
import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid";
import {
    IconArrowWaveRightUp,
    IconBoxAlignRightFilled,
    IconBoxAlignTopLeft,
    IconClipboardCopy,
    IconFileBroken,
    IconSignature,
    IconTableColumn,
} from "@tabler/icons-react";

export function BentoGridDemo() {
    return (
        <BentoGrid className="max-w-7xl mx-auto">
            {items.map((item, i) => (
                <BentoGridItem
                    key={i}
                    title={item.title}
                    description={item.description}
                    header={item.header}
                    icon={item.icon}
                    className={i === 3 || i === 6 ? "md:col-span-2" : ""}
                />
            ))}
        </BentoGrid>
    );
}
const Skeleton = () => (
    <div className="flex flex-1 w-100  h-5 rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
        <img
            alt="content"
            className="object-cover object-center h-full w-full"
            src={mission}
        />
    </div>
);
const Skeleton1 = () => (
    <div className="flex flex-1 w-100  h-5 rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
        <img
            alt="content"
            className="object-cover object-center h-full w-full"
            src={history}
        />
    </div>
);
const Skeleton2 = () => (
    <div className="flex flex-1 w-100  h-5 rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
        <img
            alt="content"
            className="object-cover object-center h-full w-full"
            src={vision}
        />
    </div>
);
const Skeleton3 = () => (
    <div className="flex flex-1 w-100  h-5 rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
        <img
            alt="content"
            className="object-cover object-center h-full w-full"
            src={academics}
        />
    </div>
);
const Skeleton4 = () => (
    <div className="flex flex-1 w-100  h-5 rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
        <img
            alt="content"
            className="object-cover object-center h-full w-full"
            src={extra}
        />
    </div>
);
const Skeleton5 = () => (
    <div className="flex flex-1 w-full  h-6 rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
        <img
            alt="content"
            className="object-cover object-center h-full w-full"
            src={faculty}
        />
    </div>
);
const Skeleton6 = () => (
    <div className="flex flex-1 w-100  h-5 rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
        <img
            alt="content"
            className="object-cover object-center h-full w-full"
            src={achievment}
        />
    </div>
);
const items = [
    {
        title: "Mission Statement:",
        description: "Our mission is to foster a diverse and inclusive learning environment that nurtures academic excellence, personal growth, and responsible citizenship.",
        header: <Skeleton />,
        icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "History and Legacy:",
        description: "Established in 2000, our school has a rich history of providing quality education and shaping future leaders.",
        header: <Skeleton1 />,
        icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Vision:",
        description: "Our vision is to inspire and empower every student to achieve their highest potential and make a positive impact in the world.",
        header: <Skeleton2 />,
        icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Academic Programs:",
        description:
            "We offer a comprehensive curriculum that includes advanced placement courses, STEM programs, arts, and humanities to cater to diverse interests and academic goals.",
        header: <Skeleton3 />,
        icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Extracurricular Activities:",
        description: "Our school provides a wide range of extracurricular activities, including sports, music, drama, to promote holistic development.",
        header: <Skeleton4 />,
        icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Faculty and Staff:",
        description: "Our dedicated and experienced faculty are committed to providing personalized attention and support to each student, ensuring their academic and personal growth.",
        header: <Skeleton5 />,
        icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Achievements and Recognitions:",
        description: "Our school has been recognized for its outstanding academic performance, innovative teaching methods, and contributions to community service.",
        header: <Skeleton6 />,
        icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },
];
