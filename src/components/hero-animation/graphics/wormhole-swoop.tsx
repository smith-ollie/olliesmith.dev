import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const SvgWormholeSwoop = (
  props: SVGProps<SVGGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <g {...props} ref={ref}>
    <path
      d="M35.2 65.6c13.3-9.2 28.5-33 31-46.1.1-.5.2-1 .2-1.3"
      className="wormhole-swoop_svg__st4"
    />
  </g>
);

const ForwardRef = forwardRef(SvgWormholeSwoop);

export default ForwardRef;
