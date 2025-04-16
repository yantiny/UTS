import FooterTitle from "../atoms/FooterTitle";
import FooterText from "../atoms/FooterText";

interface FooterSectionProps {
  title: string;
  items: string[];
}

export default function FooterSection({ title, items }: FooterSectionProps) {
  return (
    <div>
      <FooterTitle>{title}</FooterTitle>
      <ul className="space-y-1">
        {items.map((item, index) => (
          <FooterText key={index}>{item}</FooterText>
        ))}
      </ul>
    </div>
  );
}
