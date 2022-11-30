import fs from "node:fs"
import path from "node:path"
import { Feed } from "feed"
import { getPosts } from "../utils/getPosts"
import { AUTHOR, EMAIL, SITE_NAME, SITE_URL } from "../config"

export const generateRSSFeed = async () => {
  const posts = getPosts()
  const date = new Date()
  const author = {
    name: AUTHOR,
    email: EMAIL,
  }

  const feed = new Feed({
    title: SITE_NAME,
    id: SITE_URL,
    link: SITE_URL,
    copyright: `All rights reserved ${date.getFullYear()}, ${AUTHOR}`,
    author,
  })

  posts.forEach((post) => {
    const postUrl = `${SITE_URL}/posts/${post.slug}`
    feed.addItem({
      title: post.data.title,
      id: postUrl,
      link: postUrl,
      description: post.data.title,
      date: new Date(post.data.date),
    })
  })

  const dir = path.resolve(__dirname, "../../../public/rss")
  fs.mkdirSync(dir, { recursive: true })
  fs.writeFileSync(path.resolve(dir, "feed.json"), feed.json1())
}
