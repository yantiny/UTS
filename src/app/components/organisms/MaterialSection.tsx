"use client";

import MaterialsText from "../molecules/MaterialsText";
import MaterialsImages from "../molecules/MaterialsImage";

export default function MaterialsSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center gap-8 md:gap-12">
      <MaterialsText />
      <MaterialsImages />
    </section>
  );
}
