import { ImageResponse } from 'next/og';
import { posts } from '#site/content';

export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return new ImageResponse(
      <div
        style={{
          fontSize: 48,
          background: '#222222',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#FFFFFF',
        }}
      >
        Post not found
      </div>,
      { ...size },
    );
  }

  return new ImageResponse(
    <div
      style={{
        backgroundColor: '#FFFFFF',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        padding: '80px',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '20px',
        }}
      >
        <div
          style={{
            width: '60px',
            height: '60px',
            backgroundColor: '#FFFFFF',
            color: '#222222',
            border: '2px solid #222222',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '40px',
            fontWeight: 'bold',
          }}
        >
          M
        </div>
        <div
          style={{
            fontSize: 32,
            backgroundColor: '#FFFFFF',
          }}
        >
          makotot.dev
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          maxWidth: '100%',
        }}
      >
        <div
          style={{
            fontSize: 56,
            fontWeight: 'bold',
            backgroundColor: '#FFFFFF',
            lineHeight: 1.2,
            display: 'flex',
            flexWrap: 'wrap',
          }}
        >
          {post.title}
        </div>
      </div>
    </div>,
    { ...size },
  );
}

function getPostBySlug(slug: string) {
  return posts.find((post) => {
    return post.path.split('posts/').at(-1) === slug;
  });
}
