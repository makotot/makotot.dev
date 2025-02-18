import { sva } from 'styled-system/css';
import { Logo } from '../Logo';

export function Header() {
  const styles = style();

  return (
    <header className={styles.root}>
      <div className={styles.logo}>
        <Logo />
      </div>
    </header>
  );
}

const style = sva({
  slots: ['root', 'logo'],
  base: {
    root: {
      marginInline: 'auto',
      width: 'full',
      maxWidth: '3xl',
      padding: 4,
      md: {
        width: '2/3',
        padding: 8,
      },
    },
    logo: {
      display: 'flex',
      alignItems: 'center',
      gap: 2,
    },
  },
});
