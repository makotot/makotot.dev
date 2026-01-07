import { ImageResponse } from 'next/og';

export const alt = 'makotot.dev';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 128,
        background: '#fff',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#1f2937',
        fontWeight: 'bold',
      }}
    >
      makotot.dev
    </div>,
    {
      ...size,
    },
  );
}
