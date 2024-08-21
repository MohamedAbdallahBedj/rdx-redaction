import Artistes from "@/page/Artistes";
import Boutique from "@/page/Boutique";
import Contact from "@/page/Contact/Contact";
import Evenements from "@/page/Evenements";
import Hero from "@/page/Hero";
import Presentation from "@/page/Presentation";


export default function Home() {
  return (
    <main className="main">
      <Hero />
      <Presentation />
      <Artistes />
      <Evenements />
      <Boutique />
      <Contact />
    </main>

  );
}
