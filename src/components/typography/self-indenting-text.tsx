import clsx from "clsx";

interface SelfIndentingTextProps {
  children: React.ReactNode[];
}

function SelfIndentingText(props: SelfIndentingTextProps) {
  return props.children.map((word, index) => (
    <span
      key={index}
      className={clsx("block", {
        "indent-[0.5ch]": index === 1,
        "indent-[1ch]": index === 2,
        "indent-[1.5ch]": index === 3,
      })}
    >
      {word}
    </span>
  ));
}

export default SelfIndentingText;
