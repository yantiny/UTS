interface ParagraphProps {
    text: string;
  }
  
  export default function Paragraph({ text }: ParagraphProps) {
    return (
      <p className="mt-4 text-lg opacity-70 pb-10">
        {text}
      </p>
    );
  }
  