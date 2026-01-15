'use client';
import {
  Tooltip as AriaTooltip,
  TooltipTrigger,
  OverlayArrow,
} from 'react-aria-components';
import { sva } from '@/styled-system/css';

type Props = {
  content: React.ReactNode;
  children: React.ReactNode;
};

export function Tooltip({ content, children }: Props) {
  return (
    <TooltipTrigger>
      {children}
      <AriaTooltip className={styles.root} offset={6}>
        <OverlayArrow className={styles.arrow}>
          <svg width={8} height={8} viewBox="0 0 8 8">
            <path d="M0 0 L4 4 L8 0" />
          </svg>
        </OverlayArrow>
        {content}
      </AriaTooltip>
    </TooltipTrigger>
  );
}

const styles = sva({
  slots: ['root', 'arrow'],
  base: {
    root: {
      backgroundColor: 'black',
      color: 'white',
      paddingBlock: '1',
      paddingInline: '2',
      borderRadius: 'sm',
      fontSize: 'xs',
    },
    arrow: {
      display: 'block',
      fill: 'black',
    },
  },
})();
