import React from "react";
import { fetchItems } from "@/utils/utils";
import EvenementsUI from "@/components/EvenementsUI";

const Evenements = async () => {
  const events = await fetchItems(
    "/event?_fields=id,name,title,slug,acf&acf_format=standard"
  );
  return (
    <section id="evenements" className="hotels section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Événements</h2>
        <p>
          Découvrez l&apos;art des événements extraordinaires avec RDX. Explorez nos
          réussites passées et imaginez votre prochain événement avec nous.
        </p>
      </div>
      <EvenementsUI events={events} />
    </section>
  );
};

export default Evenements;
