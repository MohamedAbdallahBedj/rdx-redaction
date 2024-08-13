import React from "react";
import BoutiqueSlider from "./ui/BoutiqueSlider";

async function fetchItems(tag) {
  const res = await fetch(
    `${process.env.BASE_API_URL}/${tag}?_fields=id,name,title,slug,acf&acf_format=standard`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch items");
  }
  return await res.json();
}

const Boutique = async () => {
  const categories = await fetchItems("produits_categories");
  const merche = await fetchItems("produits");

  return <BoutiqueSlider categories={categories} slides={merche} />;
};

export default Boutique;
