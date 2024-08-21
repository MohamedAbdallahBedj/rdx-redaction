"use client";
import React, { useEffect } from "react";
import OrderForm from "./OrderForm";
import { useSearchParams } from "next/navigation";
import params from "@/app/params.json";
import NotFound from "@/components/NotFound";
import Image from "next/image";
const { WP_API_URL } = params;

async function fetchItems(slug, setState, setLoading) {
  setLoading(true);
  const res = await fetch(
    `${WP_API_URL}/item?_fields=id,title,slug,%20acf&acf_format=standard&slug=${slug}`
  );
  if (!res.ok) {
    setLoading(false);
    throw new Error("Failed to fetch items");
  }
  const [product] = await res.json();
  setState(product);
  setLoading(false);
}

const OrderUI = () => {
  const searchParams = useSearchParams();
  const slug = searchParams.get("item");
  const [state, setState] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    fetchItems(slug, setState, setLoading);
  }, [slug]);
  if (!state) return <NotFound />;
  if (loading)
    return (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          gap: 5,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="spinner-border text-danger"></div>
        <p>Chargement en cours...</p>
      </div>
    );
  return (
    <section id="contact" className="contact section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Boutique</h2>
        <p style={{ fontSize: "20px" }}>{state?.acf?.description || ""}</p>
        <p style={{ fontSize: "20px" }}>
          <strong>{`Prix : ${state?.acf?.price || ""} Da`}</strong>
        </p>
      </div>
      {/* End Section Title */}
      <div className="container" data-aos="fade-up" data-aos-delay={100}>
        <div className="row gy-4 mt-1">
          <div className="col-lg-5" data-aos="fade-up" data-aos-delay={300}>
            <Image
              width={500}
              height={500}
              alt="Item Pic"
              src={state?.acf?.image || "/img/noimage.jpg"}
              style={{
                border: 0,
                marginBlock: "auto",
                objectFit: "cover",
              }}
            />
          </div>
          {/* End Google Maps */}
          <div className="col-lg-7">
            <OrderForm product={state} />
          </div>
          {/* End Contact Form */}
        </div>
      </div>
    </section>
  );
};

export default OrderUI;
