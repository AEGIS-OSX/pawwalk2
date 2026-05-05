'use client';

import { useEffect } from 'react';
import { trackPageView } from '@/lib/analytics';
import { getUTMParams } from '@/lib/utm';
import { getDeviceType } from '@/lib/device';

interface AnalyticsProviderProps {
  children: React.ReactNode;
  gaId?: string;
}

/**
 * AnalyticsProvider: Initializes GA4 and tracks page views
 * Defensive: missing GA_ID does not break rendering
 * Wraps the entire app to ensure analytics is available globally
 */
export default function AnalyticsProvider({
  children,
  gaId,
}: AnalyticsProviderProps) {
  useEffect(() => {
    // Initialize GA4 if ID is provided
    if (gaId) {
      // Load GA4 script
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
      document.head.appendChild(script);

      // Initialize gtag
      window.dataLayer = window.dataLayer || [];
      function gtag(...args: any[]) {
        window.dataLayer?.push(arguments);
      }
      window.gtag = gtag;
      gtag('js', new Date());
      gtag('config', gaId, {
        anonymize_ip: true,
        allow_google_signals: false,
      });
    }

    // Track page view with UTM and device info
    const utmParams = getUTMParams();
    const device = getDeviceType();

    trackPageView({
      utm_source: utmParams.utm_source,
      utm_medium: utmParams.utm_medium,
      utm_campaign: utmParams.utm_campaign,
      device_type: device,
    });
  }, [gaId]);

  return <>{children}</>;
}
