import fs from "node:fs"
import path from "node:path"
import matter from "gray-matter"
import { Post } from "../types/Post"

export const getPosts = (): Post[] => {
  const dirFiles = fs.readdirSync(path.join(process.cwd(), "content"), {
    withFileTypes: true,
  })

  const posts = dirFiles
    .map((file) => {
      const fileContent = fs.readFileSync(
        path.join(process.cwd(), "content", file.name),
        "utf-8"
      )
      const { data, content } = matter(fileContent)
      const slug = file.name.replace(/.mdx$/, "")

      const postData = data as Post["data"]

      return {
        data: postData,
        content,
        slug,
      }
    })
    .filter((post) => !post.data.draft)
    .sort((a, b) => {
      return new Date(b.data.date).getTime() - new Date(a.data.date).getTime()
    })

  return posts
}
