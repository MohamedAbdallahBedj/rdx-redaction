import React from "react";
import ArtistesPagination from "./ui/ArtistesPagination";
import { fetchItems } from "@/utils/utils";

const Artistes = async () => {
  const artistes = await fetchItems('/artist?_fields=id,name,title,slug,acf&acf_format=standard');
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
