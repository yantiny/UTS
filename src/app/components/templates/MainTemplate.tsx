'use client';

import Navbar from "../organisms/Navbar";
import Hero from "../organisms/Hero";
import ChooseSection from "../organisms/Choose";
import ProductSection from "../organisms/ProductSection";
import ExperienceSection from "../organisms/ExperienceSection";
import MaterialsSection from "../organisms/MaterialSection";
import Footer from "../organisms/Footer";

export default function MainTemplate() {
  return (
    <>
      <Navbar />
      <Hero />
      <ChooseSection />
      <ProductSection />
      <ExperienceSection />
      <MaterialsSection />
      <Footer />
    </>
  );
}
