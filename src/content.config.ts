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
  }),
});

export const collections = { 'case-studies': caseStudies };
