import type { Metadata } from 'next';
import AnalyticsProvider from './components/AnalyticsProvider';
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
  // GA4 ID from environment; provider is defensive if missing
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#FFF8EE" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <AnalyticsProvider gaId={gaId}>
          <header role="banner">
            <nav aria-label="Primary navigation">
              {/* Header content is now in Header component */}
            </nav>
          </header>
          <main role="main">{children}</main>
          <footer role="contentinfo">
            {/* Footer content is now in Footer component */}
          </footer>
        </AnalyticsProvider>
      </body>
    </html>
  );
}
