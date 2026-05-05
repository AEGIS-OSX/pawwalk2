import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'PawWalk | Book a Vetted Dog Walker in Two Taps',
  description:
    'Schedule walks with background-checked local walkers. GPS-tracked walks with photo proof after every visit.',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
  robots: 'index, follow',
  openGraph: {
    title: 'PawWalk | Book a Vetted Dog Walker in Two Taps',
    description:
      'Schedule walks with background-checked local walkers. GPS-tracked walks with photo proof after every visit.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PawWalk | Book a Vetted Dog Walker in Two Taps',
    description:
      'Schedule walks with background-checked local walkers. GPS-tracked walks with photo proof after every visit.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#FFF8EE" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <header role="banner">
          <nav aria-label="Primary navigation">
            {/* Header content is now in Header component */}
          </nav>
        </header>
        <main role="main">{children}</main>
        <footer role="contentinfo">
          {/* Footer content will be added in next phase */}
        </footer>
      </body>
    </html>
  );
}
