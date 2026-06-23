import { til } from '#site/content';
import { TilPost } from '@/src/features/Til/components/TilPost';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

function getTilBySlug(slug: string) {
  return til.find((t) => {
    return t.path.split('til/').at(-1) === slug;
  });
}

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const t = getTilBySlug(slug);

  if (!t) {
    return {
      title: 'Not Found',
    };
  }

  return {
    title: `${t.title}`,
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const t = getTilBySlug(slug);
  if (!t) {
    return notFound();
  }

  return <TilPost til={t} />;
}
