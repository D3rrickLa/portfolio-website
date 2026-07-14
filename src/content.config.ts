// src/content.config.ts
import { defineCollection } from 'astro:content';
import { z } from 'zod';
import { glob } from 'astro/loaders';

const resume = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/resume" }),
  schema: z.object({
    name: z.string(),
    location: z.string(),
    email: z.string(),
    linkedin: z.url(),
    github: z.url(),
  })
});

export const collections = { resume };