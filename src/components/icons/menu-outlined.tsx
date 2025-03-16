import type { SVGProps } from "react";
import { type Ref, forwardRef } from "react";

const MenuOutlined = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fillRule="evenodd"
    strokeLinejoin="round"
    strokeMiterlimit={2}
    clipRule="evenodd"
    viewBox="0 0 24 24"
    ref={ref}
    {...props}
  >
    <path
      fillRule="nonzero"
      d="M12.002 2.005c5.518 0 9.998 4.48 9.998 9.997C22 17.52 17.52 22 12.002 22s-9.997-4.48-9.997-9.998 4.48-9.997 9.997-9.997m0 1.5c-4.69 0-8.497 3.807-8.497 8.497S7.312 20.5 12.002 20.5s8.498-3.808 8.498-8.498-3.808-8.497-8.498-8.497M17 15.25a.75.75 0 0 0-.75-.75h-8.5a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 .75-.75m0-3.248a.75.75 0 0 0-.75-.75h-8.5a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 .75-.75m0-3.252a.75.75 0 0 0-.75-.75h-8.5a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 .75-.75"
    />
  </svg>
);

const ForwardRef = forwardRef(MenuOutlined);
export default ForwardRef;
