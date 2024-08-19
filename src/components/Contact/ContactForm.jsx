"use client";

import ToastContext from "@/context/ToastContext";
import React from "react";
import params from "@/app/params.json";
const { NODE_API_URL } = params;

const ContactForm = () => {
  const [loading, setLoading] = React.useState(false);
  const { notificationHandler } = React.useContext(ToastContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      name: event.target.name.value,
      email: event.target.email.value,
      subject: event.target.subject.value,
      message: event.target.message.value,
    };
    setLoading(true);
    const response = await fetch(`${NODE_API_URL}/api/mail`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    setLoading(false);
    notificationHandler({
      type: response.ok ? "success" : "error",
      message: response.ok
        ? "Votre demande de contact a été enregistrée avec succès."
        : "L'opération a échoué. Veuillez réessayer.",
    });
    if (response.ok) event.target.reset();
  };
  return (
    <form
      onSubmit={handleSubmit}
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
            required={true}
          />
        </div>
        <div className="col-md-6 ">
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="Email"
            required={true}
          />
        </div>
        <div className="col-md-12">
          <input
            type="text"
            className="form-control"
            name="subject"
            placeholder="Sujet"
            required={true}
          />
        </div>
        <div className="col-md-12">
          <textarea
            className="form-control"
            name="message"
            rows={6}
            placeholder="Message"
            required={true}
            defaultValue={""}
          />
        </div>
        <div className="col-md-12 text-center">
          {loading ? (
            <div class="d-flex justify-content-center">
              <div
                class="spinner-border"
                role="status"
                style={{ color: "#ff0000" }}
              >
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            <button type="submit">Send Message</button>
          )}
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
