import type { Metadata } from 'next';
import AnalyticsProvider from './components/AnalyticsProvider';
import './globals.css';

export const metadata: Metadata = {
  title: 'PawWalk | Book a Vetted Dog Walker in Two Taps',
  description:
    'Schedule walks with background-checked local walkers. GPS-tracked walks with photo proof after every visit.',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
  robots: 'index, follow',
  metadataBase: new URL('https://pawwalk.app'),
  openGraph: {
    title: 'PawWalk | Book a Vetted Dog Walker in Two Taps',
    description:
      'Schedule walks with background-checked local walkers. GPS-tracked walks with photo proof after every visit.',
    type: 'website',
    locale: 'en_US',
    url: 'https://pawwalk.app',
    siteName: 'PawWalk',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'PawWalk - Book a vetted dog walker in two taps',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PawWalk | Book a Vetted Dog Walker in Two Taps',
    description:
      'Schedule walks with background-checked local walkers. GPS-tracked walks with photo proof after every visit.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#FFF8EE" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#0B1220" media="(prefers-color-scheme: dark)" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        {/* Preload critical fonts */}
        <link
          rel="preload"
          href="/fonts/aeonik-display.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/geist.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        {/* Preload hero image for LCP optimization */}
        <link rel="preload" as="image" href="/images/hero-bg.png" />
      </head>
      <body suppressHydrationWarning>
        <AnalyticsProvider gaId={gaId}>
          <header role="banner">
            <nav aria-label="Primary navigation">
              {/* Header content is now in Header component */}
            </nav>
          </header>
          <main role="main">
            {children}
          </main>
          <footer role="contentinfo">
            {/* Footer content is now in Footer component */}
          </footer>
        </AnalyticsProvider>
      </body>
    </html>
  );
}
