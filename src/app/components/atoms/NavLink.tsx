interface NavLinkProps {
    href: string;
    label: string;
  }
  
  export default function NavLink({ href, label }: NavLinkProps) {
    return (
      <a href={href} className="hover:text-gray-300">
        {label}
      </a>
    );
  }
  