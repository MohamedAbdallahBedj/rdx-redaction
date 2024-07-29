"use client";
import React from "react";
import { register } from "swiper/element/bundle";

const slides = [
  {
    imageUrl: "img/event-gallery/event-gallery-1.jpg",
  },
  {
    imageUrl: "img/event-gallery/event-gallery-2.jpg",
  },
  {
    imageUrl: "img/event-gallery/event-gallery-3.jpg",
  },
  {
    imageUrl: "img/event-gallery/event-gallery-4.jpg",
  },
  {
    imageUrl: "img/event-gallery/event-gallery-5.jpg",
  },
  {
    imageUrl: "img/event-gallery/event-gallery-6.jpg",
  },
  {
    imageUrl: "img/event-gallery/event-gallery-7.jpg",
  },
  {
    imageUrl: "img/event-gallery/event-gallery-8.jpg",
  },
];

const Boutique = () => {
  React.useEffect(() => {
    // register Swiper custom elements
    register();
  }, []);
  return (
    <section id="boutique" className="gallery section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Boutique</h2>
        <p>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </div>
      <div className="container schedule">
        <ul
          className="nav nav-tabs"
          role="tablist"
          data-aos="fade-up"
          data-aos-delay={100}
        >
          <li className="nav-item">
            <a
              className="nav-link active"
              href="#categorie-1"
              role="tab"
              data-bs-toggle="tab"
            >
              Categorie 1
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="#categorie-2"
              role="tab"
              data-bs-toggle="tab"
            >
              Categorie 2
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="#categorie-3"
              role="tab"
              data-bs-toggle="tab"
            >
              Categorie 3
            </a>
          </li>
        </ul>
      </div>
      {/* End Section Title */}
      <div className="container" data-aos="fade-up" data-aos-delay={100}>
        <swiper-container
          slides-per-view="4"
          navigation="true"
          // pagination="true"
          loop="true"
        >
          {slides.map((slide, index) => (
            <swiper-slide
              key={`Slide ${index}`}
              style={{
                width: 300,
                height: 300,
              }}
            >
              <a href={slide?.imageUrl}>
                <img
                  src={slide?.imageUrl}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                  alt=""
                />
              </a>
            </swiper-slide>
          ))}
        </swiper-container>
      </div>
    </section>
  );
};

export default Boutique;
