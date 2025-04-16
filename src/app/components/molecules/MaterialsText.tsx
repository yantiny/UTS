import SectionLabel from "../atoms/SectionLabel";
import Heading2 from "../atoms/HeadingExperience2";
import Paragraph from "../atoms/ParagraphExperience";
import MoreInfoLink from "../atoms/MoreInfoLink";

export default function MaterialsText() {
  return (
    <div className="flex-1">
      <SectionLabel>Materials</SectionLabel>
      <Heading2 >Very Serious Materials For Making Furniture</Heading2>
      <Paragraph>
        Because Panto was very serious about designing furniture for our environment, 
        using a very expensive and famous capital but at a relatively low price.
      </Paragraph>
      <MoreInfoLink />
    </div>
  );
}
