import clsx from "clsx";
import { Ellipsis } from "../icons/ellipsis";
import { Play } from "../icons/play";
import { Rewind } from "../icons/rewind";

interface TimelineProps {
  children: React.ReactNode[];
  withSummarisedBookend?: boolean;
}

export function Timeline(props: TimelineProps) {
  return (
    <ol className="@[650px]:timeline timeline-snap-icon @[650px]:timeline-vertical timeline-compact @container">
      {props.children.map((item, index) => {
        const IconForIndex =
          index === 0
            ? Play
            : props.withSummarisedBookend && index === props.children.length - 1
              ? Ellipsis
              : Rewind;

        return (
          <li key={index}>
            <div className="timeline-middle">
              <div className="mask mask-circle bg-primary-tint p-3 flex-col items-center justify-center hidden @[650px]:flex">
                <IconForIndex
                  className={clsx("w-[25px] h-[25px] relative fill-secondary", {
                    "left-[2px]": index === 0,
                    "-left-[1px]": index === 1,
                  })}
                />
              </div>
            </div>
            <div className="timeline-end mb-10">{item}</div>
            {index !== props.children.length - 1 ? (
              <hr className="bg-primary-tint gradient-mask-t-20 hidden @[650px]:block" />
            ) : null}
          </li>
        );
      })}
    </ol>
  );
}
