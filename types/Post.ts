export type Post = {
  data: {
    title: string
    draft: boolean
    date: string
    tags: string[]
  }
  content: string
  slug: string
}