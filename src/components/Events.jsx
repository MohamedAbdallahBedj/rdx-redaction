import React from "react";
import EvenementsPagination from "./ui/EvenementsPagination";

async function fetchItems() {
  const res = await fetch(
    `${process.env.BASE_API_URL}/evenements?_fields=id,name,title,slug,acf&acf_format=standard`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch items");
  }
  return await res.json();
}

const Events = async () => {
  const events = await fetchItems();

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
        <EvenementsPagination events={events} />
      </section>
      {/* /Hotels Section */}
    </>
  );
};

export default Events;
