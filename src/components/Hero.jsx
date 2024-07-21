"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="hero" className="hero section dark-background">
      <img src="/img/hero-bg.jpg" alt="" data-aos="fade-in" className="" />
      <div className="container d-flex flex-column align-items-center text-center mt-auto">
        <h2 data-aos="fade-up" data-aos-delay={100} className="">
          Expertise. Créativité. Excellence.
          <br />
          <span>Votre succès est notre priorité absolue</span>
        </h2>
        <p data-aos="fade-up" data-aos-delay={200}>
          Planifiez Votre Événement Maintenant
        </p>
        <div data-aos="fade-up" data-aos-delay={300} className="">
          <a
            href="https://www.youtube.com/watch?v=LXb3EKWsInQ"
            className="glightbox pulsating-play-btn mt-3"
          />
        </div>
      </div>
      <div className="about-info mt-auto position-relative">
        <div className="container position-relative" data-aos="fade-up">
          <div className="row">
            <div className="col-lg-6">
              <h2>Prochain événement </h2>
              <p>
                Sed nam ut dolor qui repellendus iusto odit. Possimus inventore
                eveniet accusamus error amet eius aut accusantium et. Non odit
                consequatur repudiandae sequi ea odio molestiae. Enim possimus
                sunt inventore in est ut optio sequi unde.
              </p>
            </div>
            <div className="col-lg-3">
              <h3>Lieu</h3>
              <p> accusamus error amet eius</p>
            </div>
            <div className="col-lg-3">
              <h3>Horaire</h3>
              <p>
                Dimanche à lundi
                <br />
                10-12 Decembre
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
