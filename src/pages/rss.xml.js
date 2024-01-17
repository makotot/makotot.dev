import rss from "@astrojs/rss"
import { getCollection } from "astro:content"
import { SITE_TITLE } from "../consts"

export async function GET(context) {
  const posts = await getCollection("posts")

  return rss({
    title: SITE_TITLE,
    description: "",
    site: context.site,
    items: posts.map((post) => ({
      ...post.data,
      link: `/posts/${post.slug}/`,
    })),
  })
}
