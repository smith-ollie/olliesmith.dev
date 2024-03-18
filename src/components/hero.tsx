import { Animation } from "./animation";
import SelfIndentingText from "./self-indenting-text";
import Typography from "./typography";

interface HeroProps {
  heading: React.ComponentPropsWithoutRef<typeof SelfIndentingText>["children"];
  body: React.ReactNode;
}

export function Hero({ heading, body }: HeroProps) {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content grid grid-cols-12">
        <div className="col-span-7 row-start-1 col-start-1">
          <Animation />
        </div>
        <div className="col-span-5 col-start-7 row-start-1">
          <Typography
            as="h1"
            variant="heading"
            size="large"
            className="-ml-[2ch] font-bold"
          >
            <SelfIndentingText>{heading}</SelfIndentingText>
          </Typography>
          <Typography as="p" className="py-6">
            {body}
          </Typography>
        </div>
      </div>
    </div>
  );
}
