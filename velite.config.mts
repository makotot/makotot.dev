import { defineConfig, s } from 'velite';
import rehypeShiki from '@shikijs/rehype';
import {
  transformerNotationDiff,
  transformerNotationFocus,
  transformerNotationHighlight,
  transformerNotationErrorLevel,
  transformerMetaHighlight,
} from '@shikijs/transformers';
import { dateShort } from '@/src/features/Posts/formatter/dateShort';

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
          theme: 'vesper',
          transformers: [
            transformerNotationDiff({ matchAlgorithm: 'v3' }),
            transformerNotationHighlight({ matchAlgorithm: 'v3' }),
            transformerNotationFocus({ matchAlgorithm: 'v3' }),
            transformerNotationErrorLevel({ matchAlgorithm: 'v3' }),
            transformerMetaHighlight(),
          ],
        },
      ],
    ],
  },
});
