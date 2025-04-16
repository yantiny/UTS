export default function Paragraph({ children }: { children: React.ReactNode }) {
    return (
      <p className="text-gray-600 mt-4">
        {children}
      </p>
    );
  }
  