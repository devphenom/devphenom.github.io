import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";

export default function Home() {
  return (
    <main className="relative w-full bg-background">
      <Navbar />
      <Hero />
      <About />
    </main>
  );
}
