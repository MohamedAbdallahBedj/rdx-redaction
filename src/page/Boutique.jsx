import React from "react";
import { fetchItems } from "@/utils/utils";
import BoutiqueUI from "@/components/BoutiqueUI";

const Boutique = async () => {
  const categories = await fetchItems(
    "/item_category?_fields=id,name,slug,acf&acf_format=standard"
  );
  const merche = await fetchItems(
    "/item?_fields=id,name,title,slug,acf&acf_format=standard"
  );
  return (
    <section id="boutique" className="gallery section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Boutique</h2>
        <p>
          Explorez le merch RDX ! Découvrez des articles uniques et stylés qui
          reflètent notre créativité. Trouvez votre pièce coup de cœur dès
          maintenant !
        </p>
      </div>
      <BoutiqueUI categories={categories} slides={merche} />
    </section>
  );
};

export default Boutique;
