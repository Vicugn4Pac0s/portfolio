import { defineCollection, z } from 'astro:content';

const caseStudies = defineCollection({
  type: 'content',
  schema: z.object({
    number: z.string(),
    title: z.string(),
    description: z.string(),
    period: z.string(),
    role: z.string(),
    tags: z.array(z.string()),
    image: z.string(),
  }),
});

export const collections = { 'case-studies': caseStudies };
