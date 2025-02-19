import { posts } from '#site/content';
import Link from 'next/link';
import { sva } from 'styled-system/css';
import { dateISO8601 } from '../../formatter/dateISO8601';

export function Posts() {
  const styles = style();

  return (
    <ol className={styles.root}>
      {getPublishedPosts().map((post) => (
        <li key={post.title} className={styles.item}>
          <time className={styles.time} dateTime={dateISO8601(post.date)}>
            {post.date}
          </time>
          <Link href={post.path} className={styles.link}>
            {post.title}
          </Link>
        </li>
      ))}
    </ol>
  );
}

function getPublishedPosts() {
  return posts
    .filter((post) => !post.draft)
    .sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
}

const style = sva({
  slots: ['root', 'item', 'time', 'link'],
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
      color: 'gray.400',
      whiteSpace: 'nowrap',
    },
    link: {
      textWrapStyle: 'pretty',
      _hover: {
        textDecoration: 'underline',
      },
    },
  },
});
