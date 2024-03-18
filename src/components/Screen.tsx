import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";
const SvgScreen = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 158.7 158.7"
    ref={ref}
    {...props}
  >
    <defs>
      <path
        id="screen_svg__path"
        d="m127.5 395.6-33.7 19-.6 32.2L128 424z"
        transform="translate(-73.27 -383.568)"
      />
    </defs>
  </svg>
);
const ForwardRef = forwardRef(SvgScreen);
export default ForwardRef;
