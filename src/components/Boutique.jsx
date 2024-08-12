"use client";
import Link from "next/link";
import React from "react";
import { register } from "swiper/element/bundle";

const categories = [
  {
    id: 1,
    label: "T-shirts",
  },
  {
    id: 2,
    label: "Casquettes",
  },
  {
    id: 3,
    label: "Suites",
  },
  {
    id: 4,
    label: "Mugs",
  },
  {
    id: 5,
    label: "Sacs",
  },
  {
    id: 6,
    label: "Édition Spéciale",
  },
];

const slides = [
  {
    imageUrl: "img/merch/1.jpg",
    category: 3,
  },
  {
    imageUrl: "img/merch/2.jpg",
    category: 1,
  },
  {
    imageUrl: "img/merch/3.jpg",
    category: 1,
  },
  {
    imageUrl: "img/merch/4.jpg",
    category: 1,
  },
  {
    imageUrl: "img/merch/5.jpg",
    category: 1,
  },
  {
    imageUrl: "img/merch/6.jpg",
    category: 3,
  },
  {
    imageUrl: "img/merch/7.jpg",
    category: 1,
  },
  {
    imageUrl: "img/merch/8.jpg",
    category: 1,
  },
  {
    imageUrl: "img/merch/10.jpg",
    category: 4,
  },
  {
    imageUrl: "img/merch/11.jpg",
    category: 4,
  },
  {
    imageUrl: "img/merch/12.jpg",
    category: 4,
  },
  {
    imageUrl: "img/merch/13.jpg",
    category: 1,
  },
  {
    imageUrl: "img/merch/14.jpg",
    category: 5,
  },
  {
    imageUrl: "img/merch/15.jpg",
    category: 3,
  },
  {
    imageUrl: "img/merch/16.jpg",
    category: 4,
  },
  {
    imageUrl: "img/merch/17.jpg",
    category: 1,
  },
  {
    imageUrl: "img/merch/19.jpg",
    category: 4,
  },
  {
    imageUrl: "img/merch/20.jpg",
    category: 2,
  },
  {
    imageUrl: "img/merch/21.jpg",
    category: 6,
  },
  {
    imageUrl: "img/merch/22.jpg",
    category: 2,
  },
  {
    imageUrl: "img/merch/23.jpg",
    category: 2,
  },
  {
    imageUrl: "img/merch/24.jpg",
    category: 5,
  },
  {
    imageUrl: "img/merch/25.jpg",
    category: 5,
  },
  {
    imageUrl: "img/merch/26.jpg",
    category: 1,
  },
];

const Boutique = () => {
  const [state, setState] = React.useState(1);
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
          Explorez le merch RDX ! Découvrez des articles uniques et stylés qui
          reflètent notre créativité. Trouvez votre pièce coup de cœur dès
          maintenant !
        </p>
      </div>
      <div className="container schedule">
        <ul
          className="nav nav-tabs"
          role="tablist"
          data-aos="fade-up"
          data-aos-delay={100}
        >
          {categories.map((item, index) => (
            <li className="nav-item" key={`Cat ${index}`}>
              <button
                className={`nav-link ${item.id === state ? "active" : ""}`}
                onClick={() => {
                  setState(item.id);
                }}
                role="tab"
                data-bs-toggle="tab"
              >
                {item.label}
              </button>
            </li>
          ))}
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
          {slides
            .filter((item) => item.category === state)
            .map((slide, index) => (
              <swiper-slide
                key={`Slide ${index}`}
                style={{
                  width: 300,
                  height: 300,
                }}
              >
                <Link className="product-link" href={slide?.imageUrl}>
                  <img
                    className="product"
                    src={slide?.imageUrl}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                    alt=""
                  />
                </Link>
              </swiper-slide>
            ))}
        </swiper-container>
      </div>
    </section>
  );
};

export default Boutique;
