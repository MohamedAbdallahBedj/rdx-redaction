"use client";
import React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import YtLightbox from "./Lightbox";

const Teaser = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <div data-aos="fade-up" data-aos-delay={200} className="">
      <button
        className="pulsating-play-btn mt-3 border-0"
        type="button"
        onClick={() => setOpen(true)}
      ></button>
      <YtLightbox
        slides={[
          {
            type: "youtube",
            src: "https://www.youtube.com/embed/N8tnM9KyLos?si=q3DbVfz7cEat0y89",
            title: "TNW Conference 2022 | The official aftermovie",
            width: 1280,
            height: 720,
          },
        ]}
        currentEvent={1}
        open={open}
        setOpen={setOpen}
      />
    </div>
  );
};

export default Teaser;
