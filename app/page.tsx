import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Projects } from "@/components/projects";

export default function Home() {
  return (
    <main className="relative w-full bg-background">
      <Navbar />
      <Hero />
      <About />
      <Projects />
    </main>
  );
}
