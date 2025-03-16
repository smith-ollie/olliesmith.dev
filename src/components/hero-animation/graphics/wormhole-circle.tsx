import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const SvgWormholeCircle = (
  props: SVGProps<SVGGElement>,
  ref: Ref<SVGGElement>,
) => (
  <g {...props} ref={ref}>
    <path d="M66.4 18.2c2.3-15.8-7-21.9-21.2-13.7-14.9 8.6-30 29.8-33.1 47.4-3.2 18 7.6 24 23.4 13.5" />
  </g>
);

const ForwardRef = forwardRef(SvgWormholeCircle);

export default ForwardRef;
