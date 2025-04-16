import { LucideIcon } from "lucide-react";

interface SocialLinkProps {
  icon: LucideIcon;
  label: string;
}

export default function SocialLink({ icon: Icon, label }: SocialLinkProps) {
  return (
    <li className="flex items-center gap-2 text-gray-600">
      <Icon size={18} /> {label}
    </li>
  );
}
