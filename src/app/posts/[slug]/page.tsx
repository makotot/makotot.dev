import { posts } from '#site/content';
import { MDXContent } from '@/components/MDXContent';
import { Prose } from '@/components/Prose';
import { Heading } from '@/features/Posts/components/Post/Heading';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PropsWithChildren } from 'react';

function getPostBySlug(slug: string) {
  return posts.find((post) => {
    return post.path.split('posts/').at(-1) === slug;
  });
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
  const post = getPostBySlug(slug);

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
  const post = getPostBySlug(slug);
  if (!post) {
    return notFound();
  }

  return (
    <Prose>
      <Heading>{post.title}</Heading>
      <p>{post.date}</p>
      <MDXContent
        code={post.code}
        components={{
          Callout,
          Tweet,
        }}
      />
    </Prose>
  );
}

function Callout({ children }: PropsWithChildren) {
  return (
    <div
      style={{
        padding: '1rem',
        backgroundColor: 'gray.100',
        borderLeft: '4px solid',
        borderColor: 'gray.500',
      }}
    >
      {children}
    </div>
  );
}

function Tweet({ children }: PropsWithChildren) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      {children}
    </div>
  );
}
