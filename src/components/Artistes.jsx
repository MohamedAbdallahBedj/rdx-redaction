import React from "react";

const members = [
  {
    name: "John Doe",
    detailsLink: "speaker-details.html",
    description: "Quas alias incidunt",
    imageUrl: "/img/artistes/speaker-1.jpg",
    socialLinks: {
      twitter: "",
      facebook: "",
      instagram: "",
      linkedin: "",
    },
  },
  {
    name: "Hubert Hirthe",
    detailsLink: "speaker-details.html",
    description: "Consequuntur odio aut",
    imageUrl: "/img/artistes/speaker-2.jpg",
    socialLinks: {
      twitter: "",
      facebook: "",
      instagram: "",
      linkedin: "",
    },
  },
  {
    name: "Amanda Jepson",
    detailsLink: "speaker-details.html",
    description: "Fugiat laborum et",
    imageUrl: "/img/artistes/speaker-3.jpg",
    socialLinks: {
      twitter: "",
      facebook: "",
      instagram: "",
      linkedin: "",
    },
  },
  {
    name: "William Anderson",
    detailsLink: "speaker-details.html",
    description: "Debitis iure vero",
    imageUrl: "/img/artistes/speaker-4.jpg",
    socialLinks: {
      twitter: "",
      facebook: "",
      instagram: "",
      linkedin: "",
    },
  },
  {
    name: "William Anderson",
    detailsLink: "speaker-details.html",
    description: "Debitis iure vero",
    imageUrl: "/img/artistes/speaker-5.jpg",
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
          Nos Artistes
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
                    <span>{member.description}</span>
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
