import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const Icon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox="0 0 100 125" ref={ref} {...props}>
    <path
      d="M72.5 48.91v-5h-5v-15h-5v5h-5v-5h-5v-5h-5v5h-5v5h-5v5h-5v5h-5v5h-5v5h5v20h45v-20h5v-5h-5zm-22.5 20h-2.5v-10h5v10H50zm17.5-12.5v12.5h-10v-15h-15v15h-10v-20h5v-5h5v-5h5v-5h5v5h5v5h5v5h5v7.5z"
      fill="#1d1d1b"
    />
  </svg>
);

export default forwardRef(Icon);
