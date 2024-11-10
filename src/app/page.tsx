import { posts } from '#site/content';
import Link from 'next/link';

const getPublishedPosts = () =>
  posts
    .filter((post) => !post.draft)
    .sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

export default function Page() {
  return (
    <ol className="mt-4 space-y-5">
      {getPublishedPosts().map((post) => (
        <li key={post.title} className="flex gap-6 align-top">
          <time className="text-sm text-gray-400 whitespace-nowrap">
            {post.date}
          </time>
          <Link href={post.path} className="hover:underline">
            {post.title}
          </Link>
        </li>
      ))}
    </ol>
  );
}
