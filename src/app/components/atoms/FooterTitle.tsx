export default function FooterTitle({ children }: { children: React.ReactNode }) {
    return (
      <h3 className="text-orange-500 font-semibold mb-2">
        {children}
      </h3>
    );
  }
  