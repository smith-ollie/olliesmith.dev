import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const Icon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 8 8"
    ref={ref}
    {...props}
  >
    <path fill="#000" fillRule="nonzero" d="M5 1v1h1v5H1V1zM2 2v4h3V3H4V2z" />
  </svg>
);

export const File = forwardRef(Icon);
