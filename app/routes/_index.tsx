import type { MetaFunction } from "@remix-run/cloudflare";
import Badge from "~/components/Badge/Badge";
import BackgroundLines from "~/components/BackgroundLines/BackgroundLines";

export const meta: MetaFunction = () => {
  return [
    { title: "Pratyush Mahapatra" },
    { name: "description", content: "Pratyush Mahapatra" },
  ];
};

export default function Index() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-16">
        <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
          <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-5 relative z-20 font-bold tracking-tight">
            Pratyush Mahapatra
          </h2>
          <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center mb-4">
            Coding from dawn to dusk, capturing sunsets, and exploring the world one commit at a time.
          </p>
          <Badge text="Coming Soon" link="https://www.pranikz.dev" />
        </BackgroundLines>
      </div>
    </div>
  );
}

