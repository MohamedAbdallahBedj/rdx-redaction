"use client";
import ToastContext from "@/context/ToastContext";
import React from "react";

import params from "@/app/params.json";
const { NODE_API_URL } = params;

const wilayas = [
  "Adrar",
  "Chlef",
  "Laghouat",
  "OumElBouaghi",
  "Batna",
  "Béjaïa",
  "Biskra",
  "Béchar",
  "Blida",
  "Bouira",
  "Tamanrasset",
  "Tébessa",
  "Tlemcen",
  "Tiaret",
  "TiziOuzou",
  "Alger",
  "Djelfa",
  "Jijel",
  "Sétif",
  "Saïda",
  "Skikda",
  "SidiBelAbbès",
  "Annaba",
  "Guelma",
  "Constantine",
  "Médéa",
  "Mostaganem",
  "M’sila",
  "Mascara",
  "Ouargla",
  "Oran",
  "ElBayadh",
  "Illizi",
  "BordjBouArreridj",
  "Boumerdès",
  "ElTaref",
  "Tindouf",
  "Tissemsilt",
  "ElOued",
  "Khenchela",
  "Souk Ahras",
  "Tipaza",
  "Mila",
  "AïnDefla",
  "Naâma",
  "AïnTémouchent",
  "Ghardaïa",
  "Relizane",
  "ElMGhair",
  "ElMeniaa",
  "OuledDjellal",
  "BordjBadjiMokhtar",
  "BéniAbbès",
  "Timimoun",
  "Touggourt",
  "Djanet",
  "InSalah",
  "InGuezzam",
];

const OrderForm = ({ product }) => {
  const [quantity, setQuantity] = React.useState(1);
  const [loading, setLoading] = React.useState(false);
  const { notificationHandler } = React.useContext(ToastContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      name: event.target.name.value,
      phone: event.target.phone.value,
      wilaya: event.target.wilaya.value,
      quantity: event.target.quantity.value,
      addresse: event.target.addresse.value,
      product: product.slug,
    };
    setLoading(true);
    const response = await fetch(`${NODE_API_URL}/api/mail/order`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    setLoading(false);
    notificationHandler({
      type: response.ok ? "success" : "error",
      message: response.ok
        ? "Votre commande a été enregistrée avec succès."
        : "L'opération a échoué. Veuillez réessayer.",
    });
    if (response.ok) event.target.reset();
  };
  return (
    <form
      className="php-email-form"
      data-aos="fade-up"
      data-aos-delay={400}
      onSubmit={handleSubmit}
    >
      <div className="row gy-4">
        <div className="col-md-12">
          <label className="mb-2" htmlFor="name">
            Nom et prénom
          </label>

          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Nom et prénom"
            required
          />
        </div>
        <div className="col-md-12">
          <label className="mb-2" htmlFor="phone">
            Numero de téléphone <small>(00-00-00-00-00)</small>
          </label>

          <input
            type="tel"
            className="form-control"
            name="phone"
            placeholder="Numéro de téléphone"
            required
            pattern="[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}"
          />
        </div>
        <div className="col-md-4">
          <label className="mb-2" htmlFor="wilaya">
            Wilaya
          </label>

          <select required className="form-select" name="wilaya" id="wilaya">
            {wilayas.map((item, index) => (
              <option key={`Wilaya ${index}`} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-4">
          <label className="mb-2" htmlFor="quantity">
            Quantité
          </label>

          <select
            required
            className="form-select"
            value={quantity}
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
            name="quantity"
            id="quantity"
          >
            {[1, 2, 3, 4, 5].map((item, index) => (
              <option key={`Quantite ${index}`} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-4">
          <label className="mb-2" htmlFor="prix">
            Prix Total
          </label>
          <input
            type="text"
            className="form-control"
            name="prix"
            value={`${quantity * parseInt(product?.acf?.price)} DA`}
            disabled
          />
        </div>
        <div className="col-md-12">
          <label className="mb-2" htmlFor="Addresse">
            Addresse
          </label>

          <input
            type="text"
            className="form-control"
            name="addresse"
            placeholder="Addresse"
            required
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
          )}{" "}
        </div>
      </div>
    </form>
  );
};

export default OrderForm;
