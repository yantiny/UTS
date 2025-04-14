"use client";

import { useRef } from "react";
import Image from "next/image";
import { Plus } from "lucide-react";

const categories = ["Chair", "Beds", "Sofa", "Lamp"];

const products = [
  { id: 1, name: "Sakarias Armchair", price: "$392", image: "/chair1.png" },
  { id: 2, name: "Baltsar Chair", price: "$299", image: "/chair2.png" },
  { id: 3, name: "Anjay Chair", price: "$519", image: "/chair3.png" },
  { id: 4, name: "Nyantuy Chair", price: "$921", image: "/chair4.png" },
];

export default function product() {
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
    <section className="py-12 px-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold text-center">Best Selling Product</h2>

      {/* Categories */}
      <div className="flex justify-center space-x-4 my-6">
        {categories.map((category) => (
          <button
            key={category}
            className="px-4 py-2 rounded-full border border-gray-300 hover:bg-gray-200 transition"
          >
            {category}
          </button>
        ))}
      </div>

      {/* Slider */}
      <div className="relative">
        {/* Left Button */}
        <button
          onClick={scrollLeft}
          className="absolute left-[-20px] top-1/2 -translate-y-1/2 bg-gray-300 p-2 rounded-full shadow-md"
        >
          ⬅
        </button>

        {/* Product Container */}
        <div
          ref={sliderRef}
          className="flex overflow-x-auto scroll-smooth space-x-6 scrollbar-hide p-2"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="min-w-[250px] flex-shrink-0 rounded-lg shadow-lg p-4 bg-white scroll-snap-align-start relative"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={200}
                height={200}
                className="mx-auto mb-4"
                unoptimized
              />
              
              {/* Text Container (Semua rata kiri) */}
              <div className="text-left">
                <span className="text-gray-400 text-sm">Chair</span>
                <h3 className="font-semibold text-lg">{product.name}</h3>
                <div className="text-yellow-400 mb-8">★★★★★</div> {/* Tambahkan margin bawah */}
                <p className="text-xl font-bold">{product.price}</p>
              </div>

              {/* Tombol Plus di Kanan Bawah */}
              <button className="absolute bottom-4 right-4 bg-black text-white w-10 h-10 flex items-center justify-center rounded-full text-2xl shadow-lg">
                <Plus size={24} />
              </button>
            </div>
          ))}
        </div>

        {/* Right Button */}
        <button
          onClick={scrollRight}
          className="absolute right-[-20px] top-1/2 -translate-y-1/2 bg-gray-300 p-2 rounded-full shadow-md"
        >
          ➡
        </button>
      </div>

      {/* View All */}
      <div className="text-center mt-6">
        <a href="#" className="text-orange-500 font-semibold">
          View All →
        </a>
      </div>
    </section>
  );
}
