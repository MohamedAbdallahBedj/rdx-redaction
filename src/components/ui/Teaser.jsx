"use client";
import React from "react";
import "glightbox/dist/css/glightbox.css";
import GLightbox from "glightbox";

const Teaser = () => {
  React.useEffect(() => {
    if (window) {
      GLightbox();
    }
  }, []);

  return (
    <div data-aos="fade-up" data-aos-delay={200} className="">
      <a
        href="https://www.youtube.com/watch?v=cU6rQF4mNEA"
        className="glightbox pulsating-play-btn mt-3"
      />
    </div>
  );
};

export default Teaser;
