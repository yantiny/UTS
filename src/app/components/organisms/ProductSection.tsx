"use client";
import { useState } from "react";
import ProductSlider from "../organisms/ProductSlider";
import ProductCategories from "../organisms/ProductCategories";

const categories = ["Chair", "Beds", "Sofa", "Lamp"];
const products = [
  { id: 1, name: "Sakarias Armchair", price: "$392", image: "/chair1.png" },
  { id: 2, name: "Baltsar Chair", price: "$299", image: "/chair2.png" },
  { id: 3, name: "Anjay Chair", price: "$519", image: "/chair3.png" },
  { id: 4, name: "Nyantuy Chair", price: "$921", image: "/chair4.png" },
];

export default function ProductSection() {
  const [activeCategory, setActiveCategory] = useState("Chair");

  return (
    <section className="py-12 px-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold text-center">Best Selling Product</h2>
      <ProductCategories 
        categories={categories} 
        activeCategory={activeCategory} 
        setActiveCategory={setActiveCategory} 
      />
      <ProductSlider products={products} />
      <div className="text-center mt-6">
        <a href="#" className="text-orange-500 font-semibold">View All →</a>
      </div>
    </section>
  );
}
