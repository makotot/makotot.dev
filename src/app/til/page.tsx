import { TilPosts } from '@/src/features/Til/components/TilPosts';
import { til } from '#site/content';

export default function Page() {
  const publishedTils = til
    .filter((t) => !t.draft)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return <TilPosts tils={publishedTils} />;
}
