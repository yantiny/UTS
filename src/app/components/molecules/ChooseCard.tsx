'use client';

import Heading3 from "../atoms/Heading3";
import Paragraph2 from "../atoms/Paragraph2";
import LinkMoreInfo from "../atoms/LinkMoreInfo";

export default function ChooseCard({ title, description }: { title: string; description: string; }) {
  return (
    <div>
      <Heading3>{title}</Heading3>
      <Paragraph2>{description}</Paragraph2>
      <LinkMoreInfo />
    </div>
  );
}
