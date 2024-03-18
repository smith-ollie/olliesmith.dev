import clsx from "clsx";
import { Play } from "./play";
import { Rewind } from "./rewind";

interface TimelineProps {
  children: React.ReactNode[];
}

export function Timeline(props: TimelineProps) {
  return (
    <ul className="timeline timeline-snap-icon timeline-vertical timeline-compact ">
      {props.children.map((item, index) => {
        const IconForIndex = index === 0 ? Play : Rewind;

        return (
          <li key={index}>
            <div className="timeline-middle">
              <div className="mask mask-circle bg-primary-tint p-3 flex flex-col items-center justify-center">
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
              <hr className="bg-primary-tint" />
            ) : null}
          </li>
        );
      })}
    </ul>
  );
}
