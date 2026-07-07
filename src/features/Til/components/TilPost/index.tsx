import { type Til } from '#site/content';
import { MDXContent } from '@/src/components/MDXContent';
import { Prose } from '@/src/components/Prose';
import { Heading } from '@/src/features/Til/components/TilPost/Heading';
import { dateISO8601 } from '@/src/features/Posts/formatter/dateISO8601';
import { PropsWithChildren } from 'react';

type Props = {
  til: Til;
};

export function TilPost({ til }: Props) {
  return (
    <Prose>
      <Heading>{til.title}</Heading>
      <p>
        <time dateTime={dateISO8601(til.date)}>{til.date}</time>
      </p>
      <MDXContent
        code={til.code}
        components={{
          Callout,
          Tweet,
        }}
      />
    </Prose>
  );
}

function Callout({ children }: PropsWithChildren) {
  return (
    <div
      style={{
        padding: '1rem',
        backgroundColor: 'gray.100',
        borderLeft: '4px solid',
        borderColor: 'gray.500',
      }}
    >
      {children}
    </div>
  );
}

function Tweet({ children }: PropsWithChildren) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      {children}
    </div>
  );
}
