import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/src/components/Header';
import { Footer } from '@/src/components/Footer';
import { Main } from '@/src/components/Main';

export const metadata: Metadata = {
  title: 'makotot.dev',
  description: '',
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
