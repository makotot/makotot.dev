import type { InferGetStaticPropsType } from "next"
import Link from "next/link"
import { generateRSSFeed } from "../lib/generateRSSFeed"
import { getPosts } from "../utils/getPosts"

export const getStaticProps = async () => {
  await generateRSSFeed()

  const posts = getPosts()

  return {
    props: {
      posts,
    },
  }
}

const Home = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <main>
      <h1 className="text-4xl">Posts</h1>
      <ul className="mt-4 space-y-1">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/posts/${post.slug}`}
              className="underline hover:text-primary"
            >
              <span>{post.data.title}</span>
            </Link>
            <span className="text-sm">
              {" "}
              - <time dateTime={post.data.date}>{post.data.date}</time>
            </span>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default Home
