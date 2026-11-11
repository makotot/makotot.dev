import { posts } from '#site/content';
import { Post } from '@/src/features/Posts/components/Post';
import {
  getPublishedPostBySlug,
  getPublishedSlugs,
} from '@/src/features/Posts/utils/publishedPosts';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export const dynamicParams = false;

export function generateStaticParams() {
  return getPublishedSlugs(posts);
}

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPublishedPostBySlug(posts, slug);

  if (!post) {
    return {
      title: 'Not Found',
    };
  }

  return {
    title: `${post.title}`,
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const post = getPublishedPostBySlug(posts, slug);
  if (!post) {
    return notFound();
  }

  return <Post post={post} />;
}
