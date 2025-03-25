import Link from 'next/link';
import { sva } from '@/styled-system/css';
import { dateISO8601 } from '../../formatter/dateISO8601';
import { ExternalPost } from '../../types';
import { Post } from '../../../../../.velite';
import { dateShort } from '../../formatter/dateShort';

type Props = {
  posts: (ExternalPost | Post)[];
};

export function Posts({ posts }: Props) {
  const styles = style();

  return (
    <ol className={styles.root}>
      {posts.map((post) => (
        <li key={post.title} className={styles.item}>
          <time className={styles.time} dateTime={dateISO8601(post.date)}>
            {dateShort(post.date)}
          </time>
          <Link href={post.path} className={styles.link}>
            <span>{post.title}</span>
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
