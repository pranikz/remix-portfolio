import type { MetaFunction } from "@remix-run/cloudflare";
import Badge from "~/components/Badge/Badge";

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
        <Badge text="Coming Soon" link="https://www.pranikz.dev" />
      </div>
    </div>
  );
}

