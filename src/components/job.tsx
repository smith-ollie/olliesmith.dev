import type { CollectionEntry } from "astro:content";
import dayjs from "dayjs";
import Typography from "./typography";

type JobProps = React.PropsWithChildren<{}> & CollectionEntry<"jobs">;

export function Job(props: JobProps) {
  return (
    <div className="flex flex-col gap-2 p-3">
      <Typography variant="heading" size="small">
        {props.data.company}
      </Typography>
      <div className="flex flex-col">
        <Typography variant="body" size="large" className="">
          {props.data.role}
        </Typography>
        <Typography variant="body" size="medium">
          {`${dayjs(props.data.startDate).format("MMM YYYY")} - ${
            props.data.endDate
              ? dayjs(props.data.endDate).format("MMM YYYY")
              : "Present"
          }`}
        </Typography>
      </div>
      <Typography variant="body" size="medium">
        {props.children}
      </Typography>
    </div>
  );
}
