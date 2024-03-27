import clsx from "clsx";

interface SelfIndentingTextProps {
  children: React.ReactNode[];
}

function SelfIndentingText(props: SelfIndentingTextProps) {
  return props.children.map((word, index) => (
    <span
      key={index}
      className={clsx("block", {
        "indent-[1ch]": index === 1,
        "indent-[2ch]": index === 2,
        "indent-[3ch]": index === 3,
      })}
    >
      {word}
    </span>
  ));
}

export default SelfIndentingText;
