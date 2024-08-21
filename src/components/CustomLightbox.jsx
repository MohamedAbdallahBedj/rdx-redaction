import React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const DEFAULT_ID = "evjlt38J-lA";

const CustomLightbox = ({
  slides = [],
  currentSlide = 0,
  open = false,
  setOpen = () => {},
  padding = 0,
}) => {
  return (
    <Lightbox
      open={open}
      close={() => setOpen(false)}
      slides={slides}
      index={currentSlide}
      carousel={{
        padding,
      }}
      controller={{ closeOnPullDown: true, closeOnBackdropClick: true }}
      render={{
        slide: ({ slide, rect }) =>
          slide.type === "youtube" ? (
            <iframe
              width={Math.min(
                slide.width,
                rect.width,
                (slide.width * rect.height) / slide.height
              )}
              height={Math.min(
                slide.height,
                rect.height,
                (slide.height * rect.width) / slide.width
              )}
              src={`https://www.youtube-nocookie.com/embed/${
                slide?.src || DEFAULT_ID
              }?autoplay=1`}
              title={slide.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : undefined,
      }}
    />
  );
};

export default CustomLightbox;
