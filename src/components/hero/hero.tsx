import SelfIndentingText from "../typography/self-indenting-text";
import Typography from "../typography/typography";
import { Animation } from "./animation";

interface HeroProps {
  heading: React.ComponentPropsWithoutRef<typeof SelfIndentingText>["children"];
  body: React.ReactNode;
}

export function Hero({ heading, body }: HeroProps) {
  return (
    <div className="hero bg-primary px-5 @[1000px]:px-10 pb-14 relative flex-1">
      <div className="hero-content lg:grid grid-cols-12 flex-col">
        <div className="col-span-6 row-start-1 col-start-1 min-h-[30vh] w-3/4 @[1000px]:w-full">
          <Animation />
        </div>
        <div className="col-span-6 col-start-7 row-start-1">
          <Typography
            as="h2"
            variant="heading"
            size="large"
            className="@[1000px]:-ml-[1ch] font-bold text-left @[1000px]:text-left [filter:brightness(0)_saturate(100%)_invert(10%)_sepia(14%)_saturate(1963%)_hue-rotate(176deg)_brightness(93%)_contrast(85%)]"
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
