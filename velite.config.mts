import { defineConfig, s } from 'velite'
import rehypeShiki from '@shikijs/rehype'
import { transformerMetaHighlight, transformerNotationFocus, transformerNotationHighlight } from '@shikijs/transformers'

const dateFormat = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'short', day: '2-digit' })

export default defineConfig({
  collections: {
    posts: {
      name: 'Post',
      pattern: `posts/**/*.mdx`,
      schema: s.object({
        title: s.string(),
        draft: s.boolean(),
        date: s.isodate(),
        tags: s.array(s.string()),
        path: s.path(),
        code: s.mdx(),
      })
      .transform((post) => ({
        ...post,
        date: dateFormat.format(new Date(post.date)),
      })),
    },
  },
  mdx: {
    rehypePlugins: [[rehypeShiki, { theme: 'min-dark', transformerNotationHighlight, transformerNotationFocus, transformerMetaHighlight }]]
  },
})
