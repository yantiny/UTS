import FooterTitle from "../atoms/FooterTitle";
import SocialLink from "../atoms/SocialLink";
import { Facebook, Twitter, Instagram } from "lucide-react";

export default function SocialLinks() {
  return (
    <div>
      <FooterTitle>Follow Us</FooterTitle>
      <ul className="space-y-2">
        <SocialLink icon={Facebook} label="Facebook" />
        <SocialLink icon={Twitter} label="Twitter" />
        <SocialLink icon={Instagram} label="Instagram" />
      </ul>
    </div>
  );
}
