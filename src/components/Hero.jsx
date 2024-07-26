import React from "react";

const Hero = () => {
  return (
    <section id="hero" className="hero section dark-background">
      <img src="/img/hero-bg.jpg" alt="" data-aos="fade-in" className="" />
      <div className="container d-flex flex-column align-items-center text-center">
        <h2 data-aos="fade-up" data-aos-delay={100} className="">
          Expertise. Créativité. Excellence.
          <br />
          <span>Votre succès est notre priorité absolue</span>
        </h2>
        <p data-aos="fade-up" data-aos-delay={200}>
          Planifiez Votre Événement Maintenant
        </p>
        <div data-aos="fade-up" data-aos-delay={200} className="">
          <a
            href="https://www.youtube.com/watch?v=LXb3EKWsInQ"
            className="glightbox pulsating-play-btn mt-3"
          />
        </div>
      </div>

    </section>
  );
};

export default Hero;
