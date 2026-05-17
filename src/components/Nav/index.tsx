import Link from 'next/link';
import { sva } from '@/styled-system/css';

export function Nav() {
  const styles = style();

  return (
    <nav className={styles.root}>
      <ul className={styles.list}>
        <li>
          <Link href="/" className={styles.link}>
            Posts
          </Link>
        </li>
        <li>
          <Link href="/til" className={styles.link}>
            TIL
          </Link>
        </li>
      </ul>
    </nav>
  );
}

const style = sva({
  slots: ['root', 'list', 'link'],
  base: {
    root: {},
    list: {
      display: 'flex',
      gap: '4',
    },
    link: {
      fontSize: 'sm',
      _hover: {
        textDecoration: 'underline',
      },
    },
  },
});
