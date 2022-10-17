import fs from "node:fs"
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

  fs.mkdirSync("./public/rss", { recursive: true })
  fs.writeFileSync("./public/rss/feed.json", feed.json1())
}
