export function Footer(props: React.PropsWithChildren<{}>) {
  return (
    <footer className="footer footer-center gap-0 text-accent-hue container">
      <div className="min-h-[10vh] w-full relative top-[1px] before:absolute before:left-0 before:top-0 before:right-0 before:bottom-0 gradient-mask-t-0">
        <div className="hue-rotate-[238deg] saturate-[0.25] contrast-[7] place-self-stretch efore:contrast-[6] before:gradient-mask-t-0 before:absolute before:left-0 before:top-0 before:right-0 before:bottom-0 before:bg-[radial-gradient(var(--tw-gradient-stops))] before:bg-repeat-round before:bg-left-top before:bg-[size:1em_1em] before:from-primary before:opacity-50 before:to-accent-white before:animate-[shimmer_30s_linear_infinite]" />
      </div>
      <div className="min-h-[35vh] bg-secondary w-full">{props.children}</div>
    </footer>
  );
}
