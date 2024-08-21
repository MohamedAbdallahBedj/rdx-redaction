import React from "react";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section id="contact" className="contact section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Contact</h2>
        <p>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </div>
      {/* End Section Title */}
      <div className="container" data-aos="fade-up" data-aos-delay={100}>
        <div className="row gy-4">
          <div className="col-lg-6">
            <div
              className="info-item d-flex flex-column justify-content-center align-items-center"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <i className="bi bi-geo-alt" />
              <h3>Adresse</h3>
              <p>A108 Adam Street, New York, NY 535022</p>
            </div>
          </div>
          {/* End Info Item */}
          <div className="col-lg-3 col-md-6">
            <div
              className="info-item d-flex flex-column justify-content-center align-items-center"
              data-aos="fade-up"
              data-aos-delay={300}
            >
              <i className="bi bi-telephone" />
              <h3>Appelez-nous </h3>
              <p>+1 5589 55488 55</p>
            </div>
          </div>
          {/* End Info Item */}
          <div className="col-lg-3 col-md-6">
            <div
              className="info-item d-flex flex-column justify-content-center align-items-center"
              data-aos="fade-up"
              data-aos-delay={400}
            >
              <i className="bi bi-envelope" />
              <h3>Envoyez-nous un email</h3>
              <p>info@example.com</p>
            </div>
          </div>
          {/* End Info Item */}
        </div>
        <div className="row gy-4 mt-1">
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay={300}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d183.6305701160336!2d3.0553023071148324!3d36.767969782760396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fb3d6cdd989e3%3A0xf3313bb1fbfbd103!2z2KfZhNis2YXYudmK2Kkg2KfZhNir2YLYp9mB2YrYqSDYp9mE2KzYp9it2LjZitip!5e1!3m2!1sen!2sdz!4v1723038723277!5m2!1sen!2sdz"
              frameBorder={0}
              style={{ border: 0, width: "100%", height: 400 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          {/* End Google Maps */}
          <div className="col-lg-6">
            <ContactForm />
          </div>
          {/* End Contact Form */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
