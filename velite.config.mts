import { defineConfig, s } from 'velite';
import rehypeShiki from '@shikijs/rehype';
import {
  transformerMetaHighlight,
  transformerNotationFocus,
  transformerNotationHighlight,
} from '@shikijs/transformers';
import { dateShort } from '@/features/Posts/formatter/dateShort';

export default defineConfig({
  collections: {
    posts: {
      name: 'Post',
      pattern: `posts/**/*.mdx`,
      schema: s
        .object({
          title: s.string(),
          draft: s.boolean(),
          date: s.isodate(),
          tags: s.array(s.string()),
          path: s.path(),
          code: s.mdx(),
        })
        .transform((post) => ({
          ...post,
          date: dateShort(post.date),
        })),
    },
  },
  mdx: {
    rehypePlugins: [
      [
        rehypeShiki,
        {
          theme: 'min-dark',
          transformerNotationHighlight,
          transformerNotationFocus,
          transformerMetaHighlight,
        },
      ],
    ],
  },
});
