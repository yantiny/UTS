'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Bang Upin',
    role: 'Pedagang Asongan',
    review: 'Terima kasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal!',
    rating: 4,
    image: '/pp1.png',
    background: '/testi1.png',
  },
  {
    name: 'Ibuk Sukijan',
    role: 'Ibu Rumah Tangga',
    review: 'Makasih Pantio, aku sekarang berasa tinggal di apartemen karena barang-barang yang terlihat mewah!',
    rating: 5,
    image: '/pp2.png',
    background: '/testi2.png',
  },
  {
    name: 'Mpok Ina',
    role: 'Karyawan Swasta',
    review: 'Sangat terjangkau untuk kantor saya yang tidak terlalu banyak',
    rating: 4,
    image: '/pp3.png',
    background: '/testi3.png',
  },
];

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full flex flex-col items-center py-10">
      <h2 className="text-orange-500 text-sm uppercase mb-2 tracking-wide">Testimonials</h2>
      <h1 className="text-3xl font-bold mb-15">Our Client Reviews</h1>
      <div className="relative flex items-center w-full max-w-6xl px-6">
        <button onClick={prevSlide} className="absolute left-[-30px] bg-white p-3 rounded-full shadow-lg z-10 hover:scale-110 transition">
          <ChevronLeft size={24} />
        </button>
        <div className="flex gap-8 overflow-hidden w-full justify-center">
          {testimonials.map((testimony, index) => (
            <div
              key={index}
              className={`relative w-[300px] h-[400px] p-6 rounded-3xl transition-all duration-500 shadow-lg bg-white flex flex-col items-center overflow-hidden ${
                index === currentIndex ? 'scale-105 opacity-100' : 'scale-95 opacity-100'
              }`}
              style={{ backgroundImage: `url(${testimony.background})`, backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '20px' }}
            >
              <div className="absolute bottom-4 bg-white w-[90%] p-1 rounded-xl text-center shadow-md flex flex-col items-center">
                <div className="w-20 h-20 border-4 border-white rounded-full overflow-hidden shadow-lg mb-4">
                  <Image src={testimony.image} alt={testimony.name} width={80} height={80} className="object-cover" quality={100} priority />
                </div>
                <h3 className="font-semibold text-lg">{testimony.name}</h3>
                <p className="text-sm text-gray-500">{testimony.role}</p>
                <p className="mt-2 text-gray-700 text-sm">"{testimony.review}"</p>
                <div className="mt-2 flex justify-center text-orange-400 text-lg">
                  {'★'.repeat(testimony.rating) + '☆'.repeat(5 - testimony.rating)}
                </div>
              </div>
            </div>
          ))}
        </div>
        <button onClick={nextSlide} className="absolute right-[-30px] bg-white p-3 rounded-full shadow-lg z-10 hover:scale-110 transition">
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}

