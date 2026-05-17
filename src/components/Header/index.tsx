import { sva } from '@/styled-system/css';
import { Logo } from '../Logo';
import { Nav } from '../Nav';

export function Header() {
  const styles = style();

  return (
    <header className={styles.root}>
      <div className={styles.inner}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <Nav />
      </div>
    </header>
  );
}

const style = sva({
  slots: ['root', 'inner', 'logo'],
  base: {
    root: {
      marginInline: 'auto',
      width: 'full',
      maxWidth: '3xl',
      padding: '4',
      md: {
        width: '2/3',
        padding: '8',
      },
    },
    inner: {
      display: 'flex',
      alignItems: 'center',
      gap: '6',
    },
    logo: {
      display: 'flex',
      alignItems: 'center',
      gap: '2',
    },
  },
});
