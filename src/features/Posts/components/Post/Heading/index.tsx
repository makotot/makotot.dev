import { PropsWithChildren } from 'react';
import { cva } from '@/styled-system/css';

export function Heading(props: PropsWithChildren) {
  return <h1 className={style()}>{props.children}</h1>;
}

const style = cva({
  base: {
    textWrapStyle: 'pretty',
  },
});
