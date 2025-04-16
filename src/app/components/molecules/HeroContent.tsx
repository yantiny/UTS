import Heading from "../atoms/Heading";
import Paragraph from "../atoms/Paragraph";
import SearchInput from "../atoms/SearchInput";


export default function HeroContent() {
  return (
    <>
      <div className="relative py-20 text-center max-w-3xl text-white pb-50 px-6">
        <Heading text="Make Your Interior More Minimalistic & Modern" />
        <Paragraph text="Turn your room with Panto into a lot more minimalist and modern with ease and speed" />
        <SearchInput />
      </div>

    </>
  );
}
