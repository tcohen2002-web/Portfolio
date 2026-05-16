import { defineCollection, z } from 'astro:content';

const work = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      n: z.string(),
      title: z.string(),
      tagline: z.string(),
      description: z.string(),
      year: z.string(),
      duration: z.string().optional(),
      role: z.string(),
      team: z.string().optional(),
      tools: z.array(z.string()),
      outcome: z.string().default('HD'),
      cover: image(),
      coverAlt: z.string(),
      coverFullBleed: z.boolean().default(false),
      accent: z.string().regex(/^#[0-9A-F]{6}$/i),
      titleColor: z.string().regex(/^#[0-9A-F]{6}$/i).optional(),
      figmaUrl: z.string().url().optional(),
      draft: z.boolean().default(false),
    }),
});

export const collections = { work };
