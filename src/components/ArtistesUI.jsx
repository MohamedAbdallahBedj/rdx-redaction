"use client";
import Image from "next/image";
import React from "react";
const ITEMS_PER_PAGE = 4;

const ArtistesUI = ({ artists = [] }) => {
  const [currentPage, setCurrentPage] = React.useState(1);

  const totalPages = Math.ceil(artists.length / ITEMS_PER_PAGE);
  // Determine the index range of items to display on the current page
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentArtists = artists.slice(startIndex, endIndex);

  // Handler to change the page
  const handlePageChange = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) setCurrentPage(pageNumber);
  };

  return (
    <div data-aos="fade-up" data-aos-delay={100}>
      <div className="container">
        <div className="row gy-4">
          {currentArtists.flat().map((artiste, index) => (
            <div key={`Member ${index}`} className="col-xl-3 col-lg-4 col-md-6">
              <div className="member">
                <Image
                  fill
                  style={{ objectFit: "cover" }}
                  src={artiste?.acf?.picture || "/img/user.jpg"}
                  className="img-fluid"
                  alt={artiste?.acf?.name}
                />
                <div className="member-info">
                  <div className="member-info-content">
                    <h4>
                      <a>{artiste?.acf?.name || ""}</a>
                    </h4>
                  </div>
                  <div className="social">
                    {artiste?.acf?.instagram ? (
                      <a href={artiste?.acf?.instagram || ""} target="_blank">
                        <i className="bi bi-instagram" />
                      </a>
                    ) : (
                      <></>
                    )}
                    {artiste?.acf?.portfolio ? (
                      <a href={artiste?.acf?.portfolio || ""} target="_blank">
                        <i className="bi bi-brush" />
                      </a>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
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

export default ArtistesUI;
