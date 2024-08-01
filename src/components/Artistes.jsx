import React from "react";

const members = [
  {
    name: "El 7itist",
    detailsLink: "speaker-details.html",
    description: "Quas alias incidunt",
    imageUrl: "/img/artistes/El 7itist.jpg",
    socialLinks: {
      twitter: "",
      facebook: "",
      instagram: "",
      linkedin: "",
    },
  },
  {
    name: "Narcos",
    detailsLink: "speaker-details.html",
    description: "Quas alias incidunt",
    imageUrl: "/img/artistes/Narcos.jpg",
    socialLinks: {
      twitter: "",
      facebook: "",
      instagram: "",
      linkedin: "",
    },
  },
  {
    name: "The7hands",
    detailsLink: "speaker-details.html",
    description: "Quas alias incidunt",
    imageUrl: "/img/artistes/The7hands.jpg",
    socialLinks: {
      twitter: "",
      facebook: "",
      instagram: "",
      linkedin: "",
    },
  },
  // {
    // name: "Dassine",
    // detailsLink: "speaker-details.html",
    // description: "Quas alias incidunt",
    // imageUrl: "/img/artistes/Dassine.jpg",
    // socialLinks: {
      // twitter: "",
      // facebook: "",
      // instagram: "",
      // linkedin: "",
    // },
  // },
  {
    name: "Art-fiq-luni",
    detailsLink: "speaker-details.html",
    description: "Quas alias incidunt",
    imageUrl: "/img/artistes/Art-fiq-luni.jpg",
    socialLinks: {
      twitter: "",
      facebook: "",
      instagram: "",
      linkedin: "",
    },
  },
  {
    name: "Merya",
    detailsLink: "speaker-details.html",
    description: "Quas alias incidunt",
    imageUrl: "/img/artistes/Merya.jpg",
    socialLinks: {
      twitter: "",
      facebook: "",
      instagram: "",
      linkedin: "",
    },
  },
  // {
    // name: "Sayd",
    // detailsLink: "speaker-details.html",
    // description: "Quas alias incidunt",
    // imageUrl: "/img/artistes/Sayd.jpg",
    // socialLinks: {
      // twitter: "",
      // facebook: "",
      // instagram: "",
      // linkedin: "",
    // },
  // },
  {
    name: "Manel Boufenaz",
    detailsLink: "speaker-details.html",
    description: "Quas alias incidunt",
    imageUrl: "/img/artistes/Manel Boufenaz.jpg",
    socialLinks: {
      twitter: "",
      facebook: "",
      instagram: "",
      linkedin: "",
    },
  },
  {
    name: "BACH BACCHUS",
    detailsLink: "speaker-details.html",
    description: "Quas alias incidunt",
    imageUrl: "/img/artistes/BACH BACCHUS.jpg",
    socialLinks: {
      twitter: "",
      facebook: "",
      instagram: "",
      linkedin: "",
    },
  },
  {
    name: "Dj chakour",
    detailsLink: "speaker-details.html",
    description: "Quas alias incidunt",
    imageUrl: "/img/artistes/Dj chakour.jpg",
    socialLinks: {
      twitter: "",
      facebook: "",
      instagram: "",
      linkedin: "",
    },
  },
];

const Artistes = () => {
  return (
    <section id="artistes" className="speakers section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>
          Artistes
          <br />
        </h2>
      </div>
      {/* End Section Title */}
      <div className="container">
        <div className="row gy-4">
          {members.map((member, index) => (
            <div
              key={`Member ${index}`}
              className="col-xl-3 col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <div className="member">
                <img src={member.imageUrl} className="img-fluid" alt="" />
                <div className="member-info">
                  <div className="member-info-content">
                    <h4>
                      <a href="speaker-details.html">{member.name}</a>
                    </h4>
                    {/* <span>{member.description}</span> */}
                  </div>
                  <div className="social">
                    <a href={member?.socialLinks?.instagram}>
                      <i className="bi bi-instagram" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Artistes;
