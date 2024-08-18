import Typography from "../typography/typography";

interface WordmarkProps {
  value: string;
}

export function Wordmark(props: WordmarkProps) {
  return (
    <Typography
      variant="heading"
      size="medium"
      className="!leading-[2rem] font-bold relative text-secondary bg-accent-white/50 p-2 inline"
      as="h1"
    >
      {props.value}
    </Typography>
  );
}
