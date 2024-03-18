import clsx from "clsx";
import SelfIndentingText from "./self-indenting-text";
import Typography from "./typography";

interface WordmarkProps {
  value: string;
}

export function Wordmark(props: WordmarkProps) {
  return (
    <Typography
      variant="heading"
      size="medium"
      className="leading-[2rem] font-bold"
    >
      <SelfIndentingText>
        {props.value.split(" ").map((word, index) => (
          <span
            className={clsx({
              "after:w-[30px] after:h-[30px] after:block after:absolute relative after:-right-[30px] after:top-1/2 after:-translate-y-1/2 after:bg-[url('/pixel-sparkle-tr.svg')] after:bg-cover after:bg-no-repeat":
                index === 0,
              "after:w-[30px] after:h-[30px] after:block after:absolute relative after:-left-[30px] after:top-1/2 after:-translate-y-1/2 after:bg-[url('/pixel-sparkle-bl.svg')] after:bg-cover after:bg-no-repeat":
                index === 1,
            })}
          >
            {word}
          </span>
        ))}
      </SelfIndentingText>
    </Typography>
  );
}
