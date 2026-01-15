import { SiBluesky, SiGithub, SiZenn, SiX } from 'react-icons/si';
import { sva } from '@/styled-system/css';
import { SocialLink } from '@/src/components/SocialLink';

export function Footer() {
  return (
    <footer className={styles.root}>
      <div className={styles.list}>
        <SocialLink
          href="https://github.com/makotot/makotot.dev"
          label="GitHub"
          icon={<SiGithub size={20} aria-hidden />}
        />
        <SocialLink
          href="https://bsky.app/profile/makotottn.bsky.social"
          label="BlueSky"
          icon={<SiBluesky size={20} aria-hidden />}
        />
        <SocialLink
          href="https://x.com/makototdev"
          label="X"
          icon={<SiX size={20} aria-hidden />}
        />
        <SocialLink
          href="https://zenn.dev/makotot"
          label="Zenn"
          icon={<SiZenn size={20} aria-hidden />}
        />
      </div>
    </footer>
  );
}

const styles = sva({
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
})();
