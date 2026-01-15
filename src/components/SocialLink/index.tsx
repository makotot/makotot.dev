'use client';
import { Link } from 'react-aria-components';
import { Tooltip } from '@/src/components/Tooltip';

type Props = {
  href: string;
  label: string;
  icon: React.ReactNode;
};

export function SocialLink({ href, label, icon }: Props) {
  return (
    <Tooltip content={label}>
      <Link href={href} aria-label={label}>
        {icon}
      </Link>
    </Tooltip>
  );
}
