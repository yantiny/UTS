"use client";
import Image from "next/image";

export default function ProductImage({ src, alt }: { src: string; alt: string }) {
  return (
    <Image
      src={src}
      alt={alt}
      width={200}
      height={200}
      className="mx-auto mb-4"
      unoptimized
    />
  );
}
