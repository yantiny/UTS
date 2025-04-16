interface HeadingProps {
    text: string;
  }
  
  export default function Heading({ text }: HeadingProps) {
    return (
      <h1 className="text-4xl md:text-6xl font-bold leading-tight">
        {text}
      </h1>
    );
  }
  