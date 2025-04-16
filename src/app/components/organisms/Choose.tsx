'use client';

import Heading2 from "../atoms/Heading2";
import ChooseContent from "../organisms/CooseContent";

export default function Choose() {
  return (
    <section className="py-16 px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="md:flex md:items-start md:justify-between">
          <Heading2>
            Why <br /> Choosing Us
          </Heading2>
          <ChooseContent />
        </div>
      </div>
    </section>
  );
}
