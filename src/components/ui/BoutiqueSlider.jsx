"use client";
import Link from "next/link";
import { register } from "swiper/element/bundle";
import React from "react";

const BoutiqueSlider = ({ categories, slides }) => {
  const [state, setState] = React.useState(categories[0].slug);
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
                className={`nav-link ${item.slug === state ? "active" : ""}`}
                onClick={() => {
                  setState(item.slug);
                }}
                role="tab"
                data-bs-toggle="tab"
              >
                {item.name}
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
            .filter((item) => item?.acf?.categorie?.slug === state)
            .map((slide, index) => (
              <swiper-slide
                key={`Slide ${index}`}
                style={{
                  width: 300,
                  height: 300,
                }}
              >
                <Link
                  className="product-link"
                  href={`/boutique/${slide?.slug}`}
                >
                  <img
                    className="product"
                    src={slide?.acf?.image_principale}
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

export default BoutiqueSlider;
