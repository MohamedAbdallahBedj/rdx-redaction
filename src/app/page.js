import Artistes from "@/components/Artistes";
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


    </main>

  );
}
