import { PropsWithChildren } from 'react';
import { cva } from 'styled-system/css';

const style = cva({
  base: {
    textWrapStyle: 'pretty',
  },
});

export function Heading(props: PropsWithChildren) {
  return <h1 className={style()}>{props.children}</h1>;
}
