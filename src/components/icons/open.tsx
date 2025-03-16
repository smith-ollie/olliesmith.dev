import type { SVGProps } from "react";
import { type Ref, forwardRef } from "react";

const Icon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    ref={ref}
    {...props}
  >
    <path d="M6 17C8.269 7.119 17 5.333 17 5.333V2l7 6.637-7 6.696V12s-6.17-.171-11 5m12 .145V20H2V8h6.598a17 17 0 0 1 2.339-2H0v16h20v-6.769z" />
  </svg>
);

export const Open = forwardRef(Icon);
