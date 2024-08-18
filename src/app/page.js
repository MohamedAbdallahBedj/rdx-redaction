import Artistes from "@/components/Artistes";
import Boutique from "@/components/Boutique";
import Contact from "@/components/Contact/Contact";
import Events from "@/components/Events";
import Hero from "@/components/Hero";
import Presentation from "@/components/Presentation";

export default function Home() {
  return (
    <main className="main">
      <Hero />
      <Presentation />
      <Artistes />
      <Events />
      <Boutique />
      <Contact />


    </main>

  );
}
