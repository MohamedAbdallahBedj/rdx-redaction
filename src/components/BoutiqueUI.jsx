"use client";
import React from "react";
import Link from "next/link";
import { register } from "swiper/element/bundle";
import Image from "next/image";

const BoutiqueUI = ({ categories, slides }) => {
  const [state, setState] = React.useState(categories[0].id);
  React.useEffect(() => {
    register();
  }, []);
  return (
    <>
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
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="container" data-aos="fade-up" data-aos-delay={100}>
        <swiper-container slides-per-view="4" navigation="true" loop="true">
          {slides
            .filter((item) => item?.acf?.category === state)
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
                  href={{
                    pathname: `/commande`,
                    query: { item: slide?.slug },
                  }}
                >
                  <Image
                    fill
                    style={{ objectFit: "cover" }}
                    className="product"
                    src={slide?.acf?.image}
                    alt={slide?.acf?.description}
                  />
                </Link>
              </swiper-slide>
            ))}
        </swiper-container>
      </div>
    </>
  );
};

export default BoutiqueUI;
