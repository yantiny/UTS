"use client";
import Image from "next/image";
import ImageOverlay from "../atoms/ImageOverlay";

export default function ExperienceImage() {
  return (
    <div className="relative w-full md:w-1/2">
      <ImageOverlay />
      <Image
        src="/experience.png"
        alt="Living Room"
        width={600}
        height={400}
        className="rounded-lg shadow-lg relative"
        unoptimized
      />
    </div>
  );
}
