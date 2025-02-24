import { PropsWithChildren } from 'react';
import { prose } from '@/styled-system/recipes';

export function Prose(props: PropsWithChildren) {
  return <article className={prose()}>{props.children}</article>;
}
