import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";
const SvgClippingMask = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 158.7 158.7"
    ref={ref}
    {...props}
  />
);
const ForwardRef = forwardRef(SvgClippingMask);
export default ForwardRef;
