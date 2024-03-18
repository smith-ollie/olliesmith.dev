import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";
const Icon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 30 30"
    xmlSpace="preserve"
    ref={ref}
    {...props}
  >
    <path d="M18.143 16.857h-3.714v3.715h3.714zM10.714 9.429h3.715V5.714h-3.715V2H7v26h3.714v-3.714h3.715V20.57h-3.715zM18.143 9.429h-3.714v3.714h3.714zM21.857 13.143h-3.714v3.714h3.714z" />
  </svg>
);
export const Play = forwardRef(Icon);
