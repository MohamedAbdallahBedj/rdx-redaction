import React from "react";

const hotels = [
  {
    name: "Non quibusdam blanditiis",
    imageUrl: "img/event.jpg",
    distanceFromVenue: "Petite Description ",
    link: "#",
  },
  {
    name: "Aspernatur assumenda",
    imageUrl: "img/event.jpg",
    distanceFromVenue: "Petite Description ",
    link: "#",
  },
  {
    name: "Dolores ut ut voluptatibu",
    imageUrl: "img/event.jpg",
    distanceFromVenue: "Petite Description ",
    link: "#",
  },
];

const Events = () => {
  return (
    <>
      <section id="événements" className="hotels section">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <h2>Événements</h2>
          <p>
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>
        {/* End Section Title */}
        <div className="container">
          <div className="row gy-4">
            {hotels.map((event, index) => (
              <div
                key={`Event ${index}`}
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                <div className="card h-100">
                  <div className="card-img">
                    <img src={event.imageUrl} alt="" className="img-fluid" />
                  </div>
                  <h3>
                    <a href="#" className="stretched-link">
                      {event.name}
                    </a>
                  </h3>
                  <p>{event.distanceFromVenue}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* /Hotels Section */}
    </>
  );
};

export default Events;
