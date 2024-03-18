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
    <path d="M22.364 9.428h-3.727v3.715h3.727z" />
    <path d="M26.092 20.571h-3.728v3.715h3.728V28h3.727V2h-3.727v3.714h-3.728V9.43h3.728z" />
    <path d="M22.364 16.857h-3.727v3.715h3.727zM7.455 9.428H3.727v3.715h3.728zM11.182 20.571H7.455v3.715h3.727V28h3.727V16.857h3.728v-3.714h-3.728V2h-3.727v3.714H7.455V9.43h3.727zM7.455 16.857H3.727v3.715h3.728zM3.727 13.143H0v3.714h3.727z" />
  </svg>
);
export const Rewind = forwardRef(Icon);
