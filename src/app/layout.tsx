import type { Metadata } from 'next';
import './globals.css';
import Link from 'next/link';

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
      <body className="flex min-h-screen flex-col">
        <header className="mx-auto w-full max-w-3xl p-4 md:w-2/3 md:p-8">
          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="inline-flex size-8 items-center justify-center border border-solid hover:bg-white hover:text-gray-700"
            >
              M
            </Link>
            {/* <div className="ml-auto">
              <div className="flex items-center gap-1">
                <Link href="/posts">Posts</Link>
              </div>
            </div> */}
          </div>
        </header>

        <main className="mx-auto w-full max-w-3xl p-4 md:w-2/3 md:p-8">
          {children}
        </main>
      </body>
    </html>
  );
}
