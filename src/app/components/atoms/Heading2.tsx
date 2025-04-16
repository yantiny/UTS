'use client';

export default function Heading2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-3xl font-bold text-gray-900 mb-8 md:mb-0 text-left md:w-1/3">
      {children}
    </h2>
  );
}
