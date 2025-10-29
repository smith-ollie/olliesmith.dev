import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const Icon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox="0 0 960 1200" ref={ref} {...props}>
    <path d="M600 720h60v30H540v-30zM360 840v-90h30v-30h-60v120zm330-150h-30v30h30v120h30V270h-30zm-30-450h-30v-60h-30v240h30V270h60v-30zm-90-90h-30v-30h-30v270h30V180h60v-30zM420 330h-30v30h30v60h30V120h-30zm60-240h-30v30h60V90zM270 300v30h120v-30zm-30 60h30v-30h-30zm30 330v-30h-30v30zm30 30h30v-30h-60v30zm60-330h-60v30h60zm-60 210h60v-30h-60zm-90-210h30v-30h-30zm30 270v-30h-30v30zm-60-180h30v-90h-30zm0 150h30V510h-30zm120-210h-30v60h30zm-30 90v60h30v-60zm120 60V420h-30v150zm-120-60v-30h-60v30z" />
  </svg>
);

export const OkayGesture = forwardRef(Icon);
