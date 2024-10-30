// routes/Bentobox.jsx
import { json } from "@remix-run/node";
import {
    IconClipboardCopy,
    IconFileBroken,
    IconSignature,
    IconTableColumn,
} from "@tabler/icons-react";
import { BentoGrid, BentoGridItem } from "~/components/Bento/Bento";
import { BackgroundGradient } from "~/components/BackgroundGradient/BackgroundGradient";
import { cn } from "./../../lib/utils";

// Add the loader function
export async function loader() {
    return json({});
}

// Remove the "use client" directive as it's not needed in Remix
export default function Bentobox() {
    return (
        <div className="h-screen md:flex md:items-center md:justify-center">
            <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem] p-4 md:p-0  ">
                {items.map((item, i) => (
                    <BentoGridItem
                        key={i}
                        title={item.title}
                        description={item.description}
                        header={item.header}
                        className={item.className}
                        icon={item.icon}
                        beam={item.beam}
                    />
                ))}
            </BentoGrid>
        </div>
    );
}

const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)] border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);

const items = [
    {
        title: "The Dawn of Innovation",
        description: "Explore the birth of groundbreaking ideas and inventions.",
        header: <Skeleton />,
        className: "md:col-span-2 pt-10 md:pt-0",
        icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
        beam: true,
    },
    {
        title: "The Digital Revolution",
        description: "Dive into the transformative power of technology.",
        header: <Skeleton />,
        className: "md:col-span-1",
        icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "The Art of Design",
        description: "Discover the beauty of thoughtful and functional design.",
        header: <Skeleton />,
        className: "md:col-span-1",
        icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "The Power of Communication",
        description:
            "Understand the impact of effective communication in our lives.",
        header: <Skeleton />,
        className: "md:col-span-2",
        icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    },
];