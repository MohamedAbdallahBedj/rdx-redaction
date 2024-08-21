"use client";
import React from "react";
import CustomLightbox from "./CustomLightbox";

const Teaser = ({ video }) => {
  const [open, setOpen] = React.useState(false);
  const onOpen = () => setOpen(true);
  return (
    <div data-aos="fade-up" data-aos-delay={200}>
      <button
        className="pulsating-play-btn mt-3 border-0"
        type="button"
        onClick={onOpen}
      ></button>
      <CustomLightbox
        slides={[
          {
            type: "youtube",
            src: video?.acf?.value,
            title: "Teaser",
            width: 1280,
            height: 720,
          },
        ]}
        currentEvent={1}
        open={open}
        setOpen={setOpen}
        padding={50}
      />
    </div>
  );
};

export default Teaser;
