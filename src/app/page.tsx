import { Posts } from '@/src/features/Posts/components/Posts';
import { dateShort } from '@/src/features/Posts/formatter/dateShort';
import { ExternalPost } from '@/src/features/Posts/types';
import RssParser from 'rss-parser';

export default async function Page() {
  const externalPosts = await getZennPosts();

  return <Posts externalPosts={externalPosts} />;
}

async function getZennPosts(): Promise<ExternalPost[]> {
  const res = await fetch('https://zenn.dev/makotot/feed', {
    cache: 'force-cache',
    next: { revalidate: 86400 },
  });
  const text = await res.text();

  const parser = new RssParser();
  const feed = await parser.parseString(text);

  const result = feed.items
    .map((item) => {
      return {
        title: item.title,
        date: item.pubDate ? dateShort(item.pubDate) : '',
        tags: [] as string[],
        draft: false,
        code: '',
        path: item.link,
        type: 'zenn',
      };
    })
    .filter(
      (post): post is ExternalPost =>
        !!post.title && !!post.date && !!post.path,
    );

  return result;
}
