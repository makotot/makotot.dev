import { defineCollection, z } from "astro:content"

const posts = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    draft: z.boolean(),
    date: z.string(),
    tags: z.array(z.string()),
  }),
})

const notes = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    draft: z.boolean(),
    date: z.string(),
    tags: z.array(z.string()),
  }),
})

export const collections = { posts, notes }
