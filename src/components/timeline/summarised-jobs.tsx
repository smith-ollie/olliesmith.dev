import type { CollectionEntry } from "astro:content";
import dayjs from "dayjs";
import Typography from "../typography/typography";

interface SummarisedJobsProps {
  jobs: CollectionEntry<"jobs">[];
}

export function SummarisedJobs(props: SummarisedJobsProps) {
  return (
    <div className="flex flex-col gap-8 @[650px]:p-3">
      <Typography variant="heading" size="small">
        Earlier years
      </Typography>
      {props.jobs.map((job) => (
        <div className="flex flex-col gap-2" key={job.id}>
          <div className="flex flex-col @[700px]:flex-row gap-0 @[700px]:gap-6 items-baseline">
            <Typography
              variant="heading"
              size="x-small"
              as="span"
              className="font-medium"
            >
              {job.data.company}
            </Typography>
            <Typography
              variant="body"
              size="medium"
              as="span"
              className="font-medium"
            >
              {job.data.role}
            </Typography>
            <Typography variant="body" size="medium" className="leading-5">
              {`${dayjs(job.data.startDate).format("MMM YYYY")} - ${
                job.data.endDate
                  ? dayjs(job.data.endDate).format("MMM YYYY")
                  : "Present"
              }`}
            </Typography>
          </div>
          <Typography variant="body" size="medium">
            {job.body.trim()}
          </Typography>
          <div className="flex flex-row gap-3 mt-2">
            {job.data.tech.map((tech) => (
              <span
                className="badge badge-outline badge-secondary p-3"
                key={tech.toLowerCase()}
              >
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
      ))}
    </div>
  );
}
