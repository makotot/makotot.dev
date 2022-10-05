import type { InferGetStaticPropsType } from 'next'
import Link from 'next/link'
import { getPosts } from '../utils/getPosts'

export const getStaticProps = async () => {
  const posts = getPosts(5)

  return {
    props: {
      posts,
    },
  }
}

const Home = ({posts}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <main>
      <h1 className='text-4xl'>Posts</h1>
      <ul className='mt-4'>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/posts/${post.slug}`}>
              <a className='underline hover:text-primary'>
                <span>{post.data.title}</span>
              </a>
            </Link>
            <span className='text-sm'> - {post.data.date}</span>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default Home
