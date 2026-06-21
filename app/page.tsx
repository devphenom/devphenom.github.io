import { Spotlight } from "@/components/ui/spotlight-new";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-black/[0.96] antialiased">
      <Spotlight />
      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-4 text-center">
        <span className="mb-6 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-neutral-300">
          Next.js · Tailwind · shadcn/ui · Aceternity UI
        </span>
        <h1 className="bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-4xl font-bold text-transparent sm:text-6xl md:text-7xl">
          Build something great
        </h1>
        <p className="mt-6 max-w-xl text-base text-neutral-400 sm:text-lg">
          A fresh starter wired up with Tailwind CSS, shadcn/ui components, and
          Aceternity UI effects. Start editing{" "}
          <code className="rounded bg-white/10 px-1.5 py-0.5 text-neutral-200">
            app/page.tsx
          </code>{" "}
          to make it yours.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button size="lg">Get started</Button>
          <Button size="lg" variant="outline">
            Documentation
          </Button>
        </div>
      </div>
    </div>
  );
}
