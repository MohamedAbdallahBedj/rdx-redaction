import React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const YtLightbox = ({ slides, currentEvent, open, setOpen }) => {
  return (
    <Lightbox
      open={open}
      close={() => setOpen(false)}
      slides={slides}
      index={currentEvent}
      carousel={{
        padding: 72,
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
              src={slide.src}
              title={slide.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : undefined,
      }}
    />
  );
};

export default YtLightbox;
