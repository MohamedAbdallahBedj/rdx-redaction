"use client";

// http://localhost/wordpress/wp-json/contact-form-7/v1/contact-forms/98/feedback

import React from "react";

const ContactForm = () => {
  return (
    <form
      action=""
      method="post"
      className="php-email-form"
      data-aos="fade-up"
      data-aos-delay={400}
    >
      <div className="row gy-4">
        <div className="col-md-6">
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Nom et prénom"
            required=""
          />
        </div>
        <div className="col-md-6 ">
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="Email"
            required=""
          />
        </div>
        <div className="col-md-12">
          <input
            type="text"
            className="form-control"
            name="subject"
            placeholder="Sujet"
            required=""
          />
        </div>
        <div className="col-md-12">
          <textarea
            className="form-control"
            name="message"
            rows={6}
            placeholder="Message"
            required=""
            defaultValue={""}
          />
        </div>
        <div className="col-md-12 text-center">
          <button type="submit">Send Message</button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
