'use client';

import Image from 'next/image';
import HeroContent from "../molecules/HeroContent";

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-gray-900">
      <Image
        src="/hero-img.png"
        alt="Hero Image"
        objectFit="cover"
        layout="fill"
      />
      <HeroContent />
    </section>
  );
}
