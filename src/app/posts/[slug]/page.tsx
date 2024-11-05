import { posts } from "#site/content"
import { MDXContent } from "@/components/MDXContent"
import { Metadata } from "next"
import { notFound } from 'next/navigation'

function getPostBySlug(slug: string) {
  return posts.find(post => {
    return post.path.split('posts/').at(-1) === slug
  })
}

type PageProps ={
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata(  { params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  
  if (!post) {
    return {
      title: 'Not Found',
    }
  }

  return {
    title: `${post.title}`,
  }
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) {
    return notFound()
  }

  return (
    <div className="prose">
      <article>
        <h1>{post.title}</h1>
        <p>{post.date}</p>
        <MDXContent code={post.code} />
      </article>
    </div>
  )
}