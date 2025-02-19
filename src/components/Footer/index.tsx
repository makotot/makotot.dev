import Link from 'next/link';
import { SiBluesky, SiGithub, SiZenn } from 'react-icons/si';
import { sva } from 'styled-system/css';

export function Footer() {
  const styles = style();

  return (
    <footer className={styles.root}>
      <div className={styles.list}>
        <Link href="https://github.com/makotot/makotot.dev" aria-label="GitHub">
          <SiGithub size={20} aria-hidden />
        </Link>
        <Link
          href="https://bsky.app/profile/makotottn.bsky.social"
          aria-label="BlueSky"
        >
          <SiBluesky size={20} aria-hidden />
        </Link>
        <Link href="https://zenn.dev/makotot" aria-label="Zenn">
          <SiZenn size={20} aria-hidden />
        </Link>
      </div>
    </footer>
  );
}

const style = sva({
  slots: ['root', 'list'],
  base: {
    root: {
      marginTop: 'auto',
      marginInline: 'auto',
      width: 'full',
      maxWidth: '3xl',
      padding: '4',
      md: {
        width: '2/3',
        padding: '8',
      },
    },
    list: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '4',
    },
  },
});
