"use client";
import ExperienceImage from "../molecules/ExperienceImage";
import ExperienceText from "../molecules/ExperienceText";

export default function ExperienceSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-6 py-12">
      <ExperienceImage />
      <ExperienceText />
    </section>
  );
}
