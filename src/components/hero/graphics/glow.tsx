import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const SvgGlow = (props: SVGProps<SVGGElement>, ref: Ref<SVGSVGElement>) => (
  <g {...props} ref={ref}>
    <path d="m54.23 12.032-33.7 19-.6 32.2 76.9 95.2 61.1-94.8z" />
  </g>
);

const ForwardRef = forwardRef(SvgGlow);

export default ForwardRef;
