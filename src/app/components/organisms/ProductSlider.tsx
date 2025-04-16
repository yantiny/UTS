"use client";
import { useRef } from "react";
import ProductCard from "../molecules/ProductCard";

export default function ProductSlider({ products }: { products: any[] }) {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };
  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="relative">
      <div
        ref={sliderRef}
        className="flex overflow-x-auto scroll-smooth space-x-6 scrollbar-hide p-2"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <button
        onClick={scrollRight}
        className="absolute right-[-30px] top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
      >
        →
      </button>
    </div>
  );
}
