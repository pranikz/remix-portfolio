import { FloatingDock } from "~/components/FloatingDock/FloatingDock";
import {
    IconBrandGithub,
    IconBrandLinkedin,
    IconBrandX,
    IconExchange,
    IconHome,
    IconNewSection,
    IconTerminal2,
} from "@tabler/icons-react";

export function FloatingDockDemo() {
    const links = [
        {
            title: "Home",
            icon: (
                <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://www.pranikz.dev",
        },

        {
            title: "LinkedIn",
            icon: (
                <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://www.linkedin.com/in/pranikz",
        },

        {
            title: "Twitter",
            icon: (
                <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://x.com/pranikz",
        },
        {
            title: "GitHub",
            icon: (
                <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://github.com/pranikz",
        },
    ];
    return (
        <footer className="fixed bottom-4 -right-1 sm:right-auto sm:left-1/2 sm:-translate-x-1/2 max-w-md w-full sm:w-auto">
            <div className=" rounded-full px-4 py-2">
                <FloatingDock
                    items={links}
                />
            </div>
            
        </footer>
    );
}
export default FloatingDockDemo;