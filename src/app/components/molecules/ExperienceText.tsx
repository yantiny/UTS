import Heading4 from "../atoms/HeadingExperience";
import Heading2 from "../atoms/HeadingExperience2";
import Paragraph from "../atoms/ParagraphExperience";
import MoreInfoLink from "../atoms/MoreInfoLink";

export default function ExperienceText() {
  return (
    <div className="w-full md:w-1/2 md:pl-12 mt-6 md:mt-0">
      <Heading4>Experiences</Heading4>
      <Heading2>We Provide You The Best Experience</Heading2>
      <Paragraph>
        You don’t have to worry about the result because all of these interiors are 
        made by people who are professionals in their fields with an elegant and luxurious 
        style and with premium quality materials.
      </Paragraph>
      <MoreInfoLink />
    </div>
  );
}
