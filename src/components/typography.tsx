import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";

const typography = cva("typography", {
  variants: {
    variant: {
      heading: ["font-Kanit"],
      body: ["font-Poppins leading-7"],
    },
    size: {
      "x-small": [],
      small: [],
      medium: [],
      large: ["text-lg"],
    },
  },
  compoundVariants: [
    {
      variant: "heading",
      size: "medium",
      className: "text-4xl",
    },
    {
      variant: "heading",
      size: "large",
      className: "!text-6xl",
    },
    {
      variant: "heading",
      size: "small",
      className: "text-2xl",
    },
    {
      variant: "heading",
      size: "x-small",
      className: "text-xl",
    },
  ],
  defaultVariants: {
    variant: "body",
    size: "medium",
  },
});

export interface TypographyProps
  extends VariantProps<typeof typography>,
    React.HTMLAttributes<HTMLSpanElement> {
  as?: React.ElementType;
}

function Typography({
  as,
  variant,
  size,
  children,
  className,
  ...props
}: TypographyProps) {
  const T = as || "span";

  return (
    <T
      className={typography({
        variant,
        size,
        className: clsx(className, "whitespace-pre-line"),
      })}
      {...props}
    >
      {children}
    </T>
  );
}

export default Typography;
