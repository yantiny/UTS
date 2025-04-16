'use client';

export default function Heading3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-lg font-semibold text-gray-900">
      {children}
    </h3>
  );
}
