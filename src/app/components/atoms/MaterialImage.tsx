import Image from 'next/image';

interface MaterialImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

export default function MaterialImage({ src, alt, width, height, className }: MaterialImageProps) {
  return (
    <Image 
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={`rounded-xl shadow-lg ${className}`}
      unoptimized
    />
  );
}
