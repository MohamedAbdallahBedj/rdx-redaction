"use client";
import React from "react";
import YtLightbox from "./Lightbox";

const Teaser = ({ videoObject }) => {
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
            src: videoObject?.acf?.value,
            title: "Teaser",
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
