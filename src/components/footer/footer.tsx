export function Footer(props: React.PropsWithChildren<{}>) {
  return (
    <footer className="footer footer-center gap-0 text-primary-tint bg-primary">
      <div className="min-h-[20vh] bg-gradient-to-b from-primary to-secondary w-full before:bg-gradient-to-b before:from-primary before:to-secondary relative top-[1px] before:absolute before:left-0 before:top-0 before:right-0 before:bottom-0 gradient-mask-t-0">
        <div className="mix-blend-multiply contrast-[7] place-self-stretch before:absolute before:left-0 before:top-0 before:right-0 before:bottom-0 before:bg-[radial-gradient(var(--tw-gradient-stops))] before:bg-repeat-round before:bg-left-top before:bg-[size:1em_1em] before:from-accent-white before:to-primary before:animate-[shimmer_45s_linear_infinite]" />
      </div>
      <div className="min-h-[50vh] bg-secondary w-full">{props.children}</div>
    </footer>
  );
}
