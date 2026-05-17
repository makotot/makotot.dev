import Link from 'next/link';
import { sva } from '@/styled-system/css';
import { dateISO8601 } from '@/src/features/Posts/formatter/dateISO8601';
import { dateShort } from '@/src/features/Posts/formatter/dateShort';
import { Til } from '../../../../../.velite';
import { Route } from 'next';

type Props = {
  tils: Til[];
};

export function TilPosts({ tils }: Props) {
  const styles = style();

  return (
    <ol className={styles.root}>
      {tils.map((til) => (
        <li key={til.title} className={styles.item}>
          <time className={styles.time} dateTime={dateISO8601(til.date)}>
            {dateShort(til.date)}
          </time>
          <Link
            href={`/til/${til.path.split('til/').at(-1)}` as Route}
            className={styles.link}
          >
            <span>{til.title}</span>
          </Link>
        </li>
      ))}
    </ol>
  );
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
      color: 'gray.500',
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
