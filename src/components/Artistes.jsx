import React from "react";
import ArtistesPagination from "./ui/ArtistesPagination";

const ITEMS_PER_PAGE = 8;

async function fetchItems() {
  const res = await fetch(
    `${process.env.BASE_API_URL}/artistes?_fields=id,name,title,slug,acf&acf_format=standard`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch items");
  }
  return await res.json();
}

const Artistes = async () => {
  const artistes = await fetchItems();
  return (
    <section id="artistes" className="speakers section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>
          Artistes
          <br />
        </h2>
      </div>
      {/* End Section Title */}
      <ArtistesPagination artists={artistes} />
    </section>
  );
};

export default Artistes;
