import Link from 'next/link';
import { css } from '@/styled-system/css';

export function Logo() {
  return (
    <Link href="/" className={style} aria-label="Home">
      M
    </Link>
  );
}

const style = css({
  display: 'inline-flex',
  width: '8',
  height: '8',
  alignItems: 'center',
  justifyContent: 'center',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: 'gray.800',
  _hover: {
    backgroundColor: 'gray.700',
    color: 'white',
  },
});
