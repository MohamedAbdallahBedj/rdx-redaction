"use client";
import React from "react";
import YtLightbox from "./CustomLightbox";
import Image from "next/image";
const ITEMS_PER_PAGE = 4;

const EvenementsUI = ({ events = [] }) => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [open, setOpen] = React.useState(false);
  const [currentEvent, setCurrentEvent] = React.useState(null);

  const totalPages = Math.ceil(events.length / ITEMS_PER_PAGE);
  // Determine the index range of items to display on the current page
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentEvents = events.slice(startIndex, endIndex);

  // Handler to change the page
  const handlePageChange = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) setCurrentPage(pageNumber);
  };

  return (
    <div data-aos="fade-up" data-aos-delay={100}>
      <div className="container">
        <div className="row gy-4">
          {currentEvents.map((event, index) => (
            <div
              key={`Event ${index}`}
              className="col-lg-3 col-md-6"
              style={{ height: 350 }}
            >
              <div className="card h-100">
                <div className="card-img">
                  <Image
                    height={150}
                    width={300}
                    src={event?.acf?.cover || "/img/noimage.jpg"}
                    alt={event?.acf?.title}
                    className="img-fluid"
                  />
                </div>
                <h3>
                  <button
                    style={{
                      background: "none",
                      border: 0,
                    }}
                    onClick={() => {
                      setCurrentEvent(index);
                      setOpen(true);
                    }}
                  >
                    <a className="stretched-link">{event?.acf?.title}</a>
                  </button>
                </h3>
                <p>{event?.acf?.date}</p>
                <p>{event?.acf?.localisation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <YtLightbox
        currentEvent={currentEvent}
        slides={events.map((event) => ({
          type: "youtube",
          src: event?.acf?.youtube,
          title: event?.acf?.title,
          width: 1280,
          height: 720,
        }))}
        open={open}
        setOpen={setOpen}
      />
      <div className="container schedule" style={{ marginTop: 20 }}>
        <ul className="nav nav-tabs" role="tablist">
          <li className="nav-item">
            <button
              className={`nav-link`}
              onClick={() => {
                handlePageChange(currentPage - 1);
              }}
              role="tab"
              data-bs-toggle="tab"
              style={{
                padding: "10px 10px",
              }}
            >
              <i className="bi bi-caret-left-fill"></i>
            </button>
          </li>
          <li>
            <span
              style={{
                color: "black",
                marginInline: 5,
              }}
            >
              Page {currentPage} / {totalPages}
            </span>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link`}
              onClick={() => {
                handlePageChange(currentPage + 1);
              }}
              role="tab"
              data-bs-toggle="tab"
              style={{
                padding: "10px 10px",
              }}
            >
              <i className="bi bi-caret-right-fill"></i>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default EvenementsUI;
