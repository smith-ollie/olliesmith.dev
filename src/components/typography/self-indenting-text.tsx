import clsx from "clsx";

interface SelfIndentingTextProps {
  children?: React.ReactNode[];
  "set:html"?: any;
}

function SelfIndentingText(props: SelfIndentingTextProps) {
  const words =
    Array.isArray(props.children) &&
    props.children.length === 1 &&
    typeof props.children[0] === "string"
      ? props.children[0].split(",").map((word) => word.trim())
      : props.children;

  return words?.map((word, index) => (
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
