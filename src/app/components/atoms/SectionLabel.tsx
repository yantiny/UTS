export default function SectionLabel({ children }: { children: React.ReactNode }) {
    return (
      <p className="text-orange-500 font-semibold uppercase tracking-wide">
        {children}
      </p>
    );
  }
  