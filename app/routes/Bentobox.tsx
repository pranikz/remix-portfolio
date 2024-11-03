
import { json } from "@remix-run/cloudflare";
import {
    IconClipboardCopy,
    IconFileBroken,
    IconSignature,
    IconTableColumn,
} from "@tabler/icons-react";
import { BentoGrid, BentoGridItem } from "~/components/Bento/Bento";
import { BackgroundGradient } from "~/components/BackgroundGradient/BackgroundGradient";
import { cn } from "./../../lib/utils";
import { FlipWords } from "~/components/FlipWords/FlipWords";

// Add the loader function
export async function loader() {
    return json({});
}

export default function Bentobox() {
    const words = ["Brainstorming Ideas", "Coding Projects", "Clicking Pictures", "Learning New"];
    return (
        <div className="mx-auto w-full max-w-full grow lg:flex xl:px-2">
            <div className="flex-1 xl:flex">

                <div className="max-w-sm">
                    <div>
                        <div className="flex flex-col gap-9 items-start mx-auto justify-center  bg-darkGrey   p-6 rounded-lg">
                            <div className="p-4">
                                <img src="https://www.pranikz.dev/avatar-new.png" className="rounded-full size-20 justify-center mx-auto bg-red-300" alt="Avatar image" />
                            </div>
                            <div className="flex flex-col justify-start text-center items-start gap-1">
                                <h1 className="text-white font-inter font-bold text-xl justify-center mx-auto text-center">
                                    Pratyush Mahapatra
                                </h1>
                                {/* <h2 className="text-xs font-bold text-green mb-3">London, United Kingdom</h2> */}
                                <h3 className="text-gray-300 text-xs mb-3">
                                    "Software Engineer"
                                </h3>
                            </div>

                            {/* <div className="flex flex-col gap-3 items-center mx-auto justify-center text-center mt-3 mb-5">
                                <button className="bg-grey font-semibold text-sm text-white w-[260px] p-[6px] h-[35px] rounded-lg">Github</button>
                                <button className="bg-grey font-semibold text-sm text-white w-[260px] p-[6px] h-[35px] rounded-lg">Frontend Mentor</button>
                                <button className="bg-grey font-semibold text-sm text-white w-[260px] p-[6px] h-[35px] rounded-lg">Linkedin</button>
                                <button className="bg-grey font-semibold text-sm text-white w-[260px] p-[6px] h-[35px] rounded-lg">Twitter</button>
                                <button className="bg-grey font-semibold text-sm text-white w-[260px] p-[6px] h-[35px] rounded-lg">Instagram</button>
                            </div> */}
                        </div>
                    </div>
                    <div className="shrink-0 border-t mx-auto border-gray-200 px-4 py-6 sm:px-6   lg:border-t-0 lg:pr-8 xl:pr-6">
                        <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
                            <FlipWords words={words} /> <br />
                            Everytime!
                        </div>

                    </div>
                </div>


                <div className=" py-6 sm:px-6  xl:flex-1  ">
                    <div className="h-screen md:flex md:items-center md:justify-center">
                        <BentoGrid className=" mx-auto md:auto-rows-[20rem] p-4 md:p-0  ">
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
                </div>
            </div>


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