import NavLink from "../atoms/NavLink";

export default function Navigation() {
  return (
    <nav className="hidden md:flex space-x-6 text-white pr-8">
      <NavLink href="#" label="Furniture" />
      <NavLink href="#" label="Shop" />
      <NavLink href="#" label="About Us" />
      <NavLink href="#" label="Contact" />
    </nav>
  );
}
