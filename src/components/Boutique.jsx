import React from "react";
import BoutiqueSlider from "./ui/BoutiqueSlider";
import { fetchItems } from "@/utils/utils";

const Boutique = async () => {
  const categories = await fetchItems(
    "/item_category?_fields=id,name,slug,acf&acf_format=standard"
  );
  const merche = await fetchItems(
    "/item?_fields=id,name,title,slug,acf&acf_format=standard"
  );
  return <BoutiqueSlider categories={categories} slides={merche} />;
};

export default Boutique;
