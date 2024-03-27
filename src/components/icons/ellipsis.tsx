import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const Icon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 30 30"
    fill="none"
    ref={ref}
    {...props}
  >
    <path
      fill="#000"
      d="M9.714 13H6v3.714h3.714zM16.714 13H13v3.714h3.714zM23.857 13.143h-3.714v3.714h3.714z"
    />
  </svg>
);

export const Ellipsis = forwardRef(Icon);
