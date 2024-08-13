"use client";
import React from "react";
const ITEMS_PER_PAGE = 4;

const EvenementsPagination = ({ events = [] }) => {
  const [currentPage, setCurrentPage] = React.useState(1);

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
              data-aos="fade-up"
              data-aos-delay={100}
              style={{ height: 350 }}
            >
              <div className="card h-100">
                <div className="card-img">
                  <img src={event?.acf?.image} alt="" className="img-fluid" />
                </div>
                <h3>
                  <a
                    href={event?.acf?.Video}
                    target="_blank"
                    className="stretched-link"
                  >
                    {event?.acf?.title}
                  </a>
                </h3>
                <p>{event?.acf?.addresse}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
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
              {`<`}
            </button>
          </li>
          <li>
            <span
              style={{
                color: "black",
                marginInline: 5,
              }}
            >
              Page {currentPage} de {totalPages}
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
              {`>`}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default EvenementsPagination;
