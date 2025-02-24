import { posts } from '#site/content';
import Link from 'next/link';
import { sva } from '@/styled-system/css';
import { dateISO8601 } from '../../formatter/dateISO8601';
import { ExternalPost } from '../../types';

type Props = {
  externalPosts: ExternalPost[];
};

export function Posts({ externalPosts }: Props) {
  const styles = style();

  return (
    <ol className={styles.root}>
      {getPublishedPosts({ externalPosts }).map((post) => (
        <li key={post.title} className={styles.item}>
          <time className={styles.time} dateTime={dateISO8601(post.date)}>
            {post.date}
          </time>
          <Link href={post.path} className={styles.link}>
            {post.title}
            {'type' in post && post.type === 'zenn' ? (
              <>
                &nbsp;
                <span className={styles.external}>Zenn</span>
              </>
            ) : null}
          </Link>
        </li>
      ))}
    </ol>
  );
}

function getPublishedPosts({
  externalPosts,
}: {
  externalPosts: ExternalPost[];
}) {
  const allPosts = [...externalPosts, ...posts] as const;
  return allPosts
    .filter((post) => !post.draft)
    .sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
}

const style = sva({
  slots: ['root', 'item', 'time', 'link', 'external'],
  base: {
    root: {
      spaceY: '5',
    },
    item: {
      display: 'grid',
      gridTemplateColumns: 'auto 1fr',
      gap: '6',
    },
    time: {
      fontSize: 'sm',
      color: 'gray.500',
      whiteSpace: 'nowrap',
    },
    link: {
      textWrapStyle: 'pretty',
      _hover: {
        textDecoration: 'underline',
      },
    },
    external: {
      padding: '0.5',
      backgroundColor: 'gray.700',
      color: 'gray.100',
      fontSize: 'xs',
    },
  },
});
