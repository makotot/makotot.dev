import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/src/components/Header';
import { Footer } from '@/src/components/Footer';
import { Main } from '@/src/components/Main';

export const metadata: Metadata = {
  title: 'makotot.dev',
  description: '',
  openGraph: {
    title: 'makotot.dev',
    description: '',
    url: 'https://makotot.dev',
    siteName: 'makotot.dev',
    locale: 'ja_JP',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <Header />

        <Main>{children}</Main>

        <Footer />
      </body>
    </html>
  );
}
