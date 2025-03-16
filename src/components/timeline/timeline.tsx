interface TimelineProps {
  children: React.ReactNode[];
  withSummarisedBookend?: boolean;
}

export function Timeline(props: TimelineProps) {
  return (
    <ol className="@[650px]:timeline timeline-snap-icon @[650px]:timeline-vertical timeline-compact @container">
      {props.children.map((item, index) => {
        return (
          <li key={index}>
            <div className="timeline-middle">
              <div className="mask mask-circle bg-primary-tint size-4 flex-col items-center justify-center hidden pt-12 @[650px]:flex" />
            </div>
            <div className="timeline-end mb-10">{item}</div>
            {index !== props.children.length - 1 ? (
              <hr className="relative !w-4 before:contrast-[9] before:gradient-mask-b-0 before:absolute before:left-0 before:top-0 before:right-0 before:bottom-0 before:bg-[radial-gradient(var(--tw-gradient-stops))] before:bg-repeat-round before:bg-left-top before:bg-[size:1em_1em] before:from-primary before:opacity-50 before:to-accent-white before:animate-[shimmer_60s_linear_infinite] hidden @[650px]:block" />
            ) : null}
          </li>
        );
      })}
    </ol>
  );
}
