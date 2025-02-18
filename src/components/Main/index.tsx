import { PropsWithChildren } from 'react';
import { css } from 'styled-system/css';

export function Main(props: PropsWithChildren) {
  return <main className={style}>{props.children}</main>;
}

const style = css({
  marginInline: 'auto',
  width: 'full',
  maxWidth: '3xl',
  padding: '4',
  md: {
    width: '2/3',
    padding: '8',
  },
});
