import React from "react";
import { fetchItems } from "@/utils/utils";
import ArtistesUI from "@/components/ArtistesUI";

const Artistes = async () => {
  const artistes = await fetchItems(
    "/artist?_fields=id,name,title,slug,acf&acf_format=standard"
  );
  return (
    <section id="artistes" className="speakers section">
      <div className="container section-title" data-aos="fade-up">
        <h2>
          Artistes
        </h2>
      </div>
      <ArtistesUI artists={artistes} />
    </section>
  );
};

export default Artistes;
