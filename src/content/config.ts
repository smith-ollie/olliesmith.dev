import { defineCollection, z } from "astro:content";

const jobsCollection = defineCollection({
  type: "content",
  schema: z.object({
    company: z.string(),
    industry: z.string(),
    role: z.string(),
    startDate: z.date(),
    endDate: z
      .date()
      .transform((date) => date.toISOString())
      .nullable(),
    tech: z.array(z.string()),
  }),
});

export const projectsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    url: z.string().url(),
    clickthrough: z.string().url(),
    date: z.date(),
  }),
});

export const collections = {
  jobs: jobsCollection,
};
