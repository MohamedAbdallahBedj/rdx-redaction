import React from "react";

const hotels = [
  {
    name: "Enfants de GAZA",
    imageUrl: "img/events/Enfants de GAZA.jpg",
    distanceFromVenue: "EL Djahidiya ",
    link: "#",
  },
  {
    name: "ALGERIE 1830-1962",
    imageUrl: "img/events/ALGERIE 1830-1962.jpg",
    distanceFromVenue: "EL Djahidiya ",
    link: "#",
  },
  {
    name: "ALGERIE 1830-1962 - EVENTIK",
    imageUrl: "img/events/ALGERIE 1830-1962 - EVENTIK.jpg",
    distanceFromVenue: "EVENTIK ",
    link: "#",
  },
  {
    name: "LA PALESTINE D'AVANT",
    imageUrl: "img/events/LA PALESTINE D'AVANT.jpg",
    distanceFromVenue: "EVENTIK ",
    link: "#",
  },
];

const Events = () => {
  return (
    <>
      <section id="evenements" className="hotels section">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <h2>Événements</h2>
          <p>
            Découvrez l'art des événements extraordinaires avec RDX. Explorez
            nos réussites passées et imaginez votre prochain événement avec
            nous.
          </p>
        </div>
        {/* End Section Title */}
        <div className="container">
          <div className="row gy-4">
            {hotels.map((event, index) => (
              <div
                key={`Event ${index}`}
                className="col-lg-3 col-md-6"
                data-aos="fade-up"
                data-aos-delay={100}
                style={{ height: 350}}
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
