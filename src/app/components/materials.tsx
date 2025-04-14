'use client';

import Image from 'next/image';

export default function MaterialsSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center gap-12">
      {/* Left Content */}
      <div className="flex-1">

        <p className="text-orange-500 font-semibold uppercase tracking-wide">Materials</p>

        <h2 className="text-3xl font-bold mt-2">
          Very Serious Materials For Making Furniture
        </h2>

        <p className="text-gray-600 mt-4">
          Because Panto was very serious about designing furniture for our environment, using a very expensive and famous capital but at a relatively low price.
        </p>

        <a href="#" className="text-orange-500 font-semibold mt-6 inline-block">
          More Info →
        </a>
      </div>
      
      {/* Right Image Section */}
      <div className="relative flex-1 flex justify-end">
        <div className="relative w-[400px] h-[500px] flex flex-col gap-4 items-end">

          {/* Large Image - Main */}
          <Image 
            src="/material3.png" 
            alt="Dining Set" 
            width={300} 
            height={350} 
            className="rounded-xl shadow-2xl translate-21 -translate-x-3" 
          />
          
          <div className="absolute -left-20 flex flex-col gap-6">
            {/* Small Image 1 - Top Left */}
            <Image 
              src="/material1.png" 
              alt="Chair 1" 
              width={150} 
              height={500} 
              className="shadow-lg -translate-y-3 -translate-x-5" 
              
            />
            {/* Small Image 2 - Bottom Left */}
            <Image 
              src="/material2.png" 
              alt="Sofa" 
              width={150} 
              height={200} 
              className="shadow-lg -translate-x-5" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
