"use client";

import Image from "next/image";
import Logo from "../atoms/Logo";
import Navigation from "../molecules/Navigation";

export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 w-full px-8 py-6 flex justify-between items-center z-20">
      <Logo />
      <Navigation />
      <Image src="/Bag.png" alt="tas" width={30} height={30} />
    </header>
  );
}
