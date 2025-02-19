import { type Post } from '#site/content';
import { MDXContent } from '@/components/MDXContent';
import { Prose } from '@/components/Prose';
import { Heading } from '@/features/Posts/components/Post/Heading';
import { dateISO8601 } from '@/features/Posts/formatter/dateISO8601';
import { PropsWithChildren } from 'react';

type Props = {
  post: Post;
};

export function Post({ post }: Props) {
  return (
    <Prose>
      <Heading>{post.title}</Heading>
      <p>
        <time dateTime={dateISO8601(post.date)}>{post.date}</time>
      </p>
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
