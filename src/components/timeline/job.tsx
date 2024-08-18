import type { CollectionEntry } from "astro:content";
import dayjs from "dayjs";
import Typography from "../typography/typography";

type JobProps = React.PropsWithChildren<{}> & CollectionEntry<"jobs">;

export function Job(props: JobProps) {
  return (
    <Typography
      as="div"
      variant="body"
      size="medium"
      className="flex flex-col gap-7 @[650px]:p-3"
    >
      <Typography variant="heading" size="small">
        {props.data.company}
      </Typography>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-0 leading-4 flex-1">
          <Typography variant="body" size="large" className="font-medium">
            {props.data.role}
          </Typography>
          <Typography variant="body" size="medium" className="leading-5">
            {`${dayjs(props.data.startDate).format("MMM YYYY")} - ${
              props.data.endDate
                ? dayjs(props.data.endDate).format("MMM YYYY")
                : "Present"
            }`}
          </Typography>
        </div>
        <div className="flex flex-row flex-wrap justify-start items-start flex-1 gap-x-4 gap-y-2">
          {props.data.tech.map((tech) => (
            <span className="badge py-3 px-4">
              <Typography
                variant="body"
                size="x-small"
                className="text-secondary"
              >
                {tech}
              </Typography>
            </span>
          ))}
        </div>
      </div>
      {props.children}
    </Typography>
  );
}
