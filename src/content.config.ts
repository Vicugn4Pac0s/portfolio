import { defineCollection, z } from 'astro:content';

const caseStudies = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()),
    image: z.string().optional().default(''),
    projectDuration: z.string().optional(),
    projectDurationLabel: z.string().optional(),
    responsibilities: z.string().optional(),
    developmentType: z.string().optional(),
  }),
});

export const collections = { 'case-studies': caseStudies };
