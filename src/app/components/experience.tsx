"use client";

import Image from "next/image";

export default function ExperienceSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-6 py-12">
      {/* Gambar dengan Overlay */}
      <div className="relative w-full md:w-1/2">
        {/* Overlay Putih Transparan */}
        <div className="absolute -left-6 -top-6 w-full h-full bg-white opacity-50 rounded-lg"></div>
        
        <Image
          src="/experience.png"
          alt="Living Room"
          width={600}
          height={400}
          className="rounded-lg shadow-lg relative"
          unoptimized
        />
      </div>

      {/* Teks */}
      <div className="w-full md:w-1/2 md:pl-12 mt-6 md:mt-0">
        <h4 className="text-orange-500 font-semibold uppercase tracking-widest">
          Experiences
        </h4>
        <h2 className="text-3xl font-bold mt-2">
          We Provide You The Best Experience
        </h2>
        <p className="text-gray-600 mt-4">
          You don’t have to worry about the result because all of these interiors are 
          made by people who are professionals in their fields with an elegant and luxurious 
          style and with premium quality materials.
        </p>

        {/* Tombol More Info */}
        <a href="#" className="text-orange-500 font-semibold mt-4 inline-flex items-center">
          More Info →
        </a>
      </div>
    </section>
  );
}
