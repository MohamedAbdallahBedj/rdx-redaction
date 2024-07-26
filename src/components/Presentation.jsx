import React from 'react'

const events = [
    {
        time: "",
        title: "Planification d'Événements.",
        description: "Conception et coordination d'événements sur mesure.",
        speaker: "",
    },
    {
        time: "",
        title: "Organisation de Concerts.",
        description: "Promotion et communication de l'événement.",
        speaker: "",
    },
    {
        time: "",
        title: "Gestion de Manifestations.",
        description: "Organisation de manifestations culturelles, sportives ou communautaires.",
        speaker: "",
    },

];


const Presentation = () => {
    return (
        <section id="qui-somme-nous" className="schedule section">
            {/* Section Title */}
            <div className="container section-title" data-aos="fade-up">
                <h2>
                    Qui somme nous?
                </h2>
                <h3 class="sub-heading">Chez <strong>RDX Rédaction</strong>, nous sommes passionnés par l'organisation et la gestion d'événements inoubliables. Nous nous engageons à transformer vos idées en réalité et à offrir des expériences mémorables qui captivent et inspirent. Nos services incluent: </h3>

            </div>
            {/* End Section Title */}
            <div class="tab-content row justify-content-center" data-aos="fade-up" data-aos-delay="100">

                <div role="tabpanel" className="col-lg-9 tab-pane fade show active" id="day-1">
                    {events.map(event => <div className="row schedule-item">
                        <div className="col-md-2">
                            <time>{event.time}</time>
                        </div>
                        <div className="col-md-10">
                            {/* <div className="speaker">
                                <img src={event.speakerImage} alt={event.speaker} />
                            </div> */}
                            <h4>
                                {event.title} <span>{event.speaker}</span>
                            </h4>
                            <p>{event.description}</p>
                        </div>
                    </div>)}
                </div>
            </div>

        </section>

    )
}

export default Presentation