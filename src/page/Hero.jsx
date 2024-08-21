import React from "react";
import { fetchItems } from "@/utils/utils";
import Teaser from "@/components/Teaser";
import Image from "next/image";

const Hero = async () => {
  const [video] = await fetchItems(
    "/parameter?_fields=id,title,slug,acf&acf_format=standard&slug=the-link-for-the-hero-section-youtube-video"
  );

  return (
    <section id="acceuil" className="hero section dark-background">
      <Image fill src="/img/hero-bg.jpg" alt="" data-aos="fade-in" className="" />
      <div className="container d-flex flex-column align-items-center text-center">
        <h2 data-aos="fade-up" data-aos-delay={100} className="">
          Expertise. Créativité. Excellence.
          <br />
          <span>Votre succès est notre priorité absolue</span>
        </h2>
        <p data-aos="fade-up" data-aos-delay={200}>
          Planifiez Votre Événement Maintenant
        </p>
        <Teaser video={video} />
      </div>
    </section>
  );
};

export default Hero;
