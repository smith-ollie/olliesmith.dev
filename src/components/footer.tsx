export function Footer(props: React.PropsWithChildren<{}>) {
  return (
    <div className="footer footer-center gap-0">
      <div
        className="min-h-[20vh] bg-gradient-to-b from-primary to-accent-hue w-full [--mask:linear-gradient(red, #{rgba(red, .45)}, red) 
				0 calc(var(--j0)*20vh)/ 100% 20vh)] before:bg-gradient-to-b before:from-primary before:to-accent-hue relative before:absolute before:left-0 before:top-0 before:right-0 before:bottom-0 gradient-mask-t-0"
      >
        <div className="mix-blend-multiply contrast-[7] place-self-stretch before:absolute before:left-0 before:top-0 before:right-0 before:bottom-0 before:bg-[radial-gradient(var(--tw-gradient-stops))] before:bg-repeat-round before:bg-left-top before:bg-[size:1em_1em] before:from-accent-hue before:to-primary" />
      </div>
      <div className="min-h-[50vh] bg-accent-hue w-full">{props.children}</div>
    </div>
  );
}
