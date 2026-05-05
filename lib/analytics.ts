/**
 * Analytics utility for PawWalk landing page
 * Provides event tracking interface compatible with GA4
 * Defensive: missing gtag config does not break rendering
 */

export type AnalyticsEvent = 'page_view' | 'cta_appstore_click' | 'email_signup';

export interface EventParams {
  [key: string]: string | number | boolean | undefined;
}

/**
 * Track an analytics event
 * Safely handles missing gtag configuration
 */
export function trackEvent(
  eventName: AnalyticsEvent,
  params?: EventParams
): void {
  // Defensive: check if gtag is available
  if (typeof window === 'undefined') {
    return;
  }

  if (typeof window.gtag === 'undefined') {
    // GA4 not loaded yet; silently continue
    return;
  }

  try {
    window.gtag('event', eventName, {
      ...params,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    // Silently fail; analytics errors should not break the page
    if (process.env.NODE_ENV === 'development') {
      console.warn('[Analytics] Event tracking failed:', error);
    }
  }
}

/**
 * Track page view event
 * Called once on page load
 */
export function trackPageView(params?: EventParams): void {
  trackEvent('page_view', {
    page_title: typeof document !== 'undefined' ? document.title : undefined,
    page_location: typeof window !== 'undefined' ? window.location.href : undefined,
    ...params,
  });
}

/**
 * Track App Store CTA click
 */
export function trackAppStoreClick(params?: EventParams): void {
  trackEvent('cta_appstore_click', {
    button_text: 'Download on App Store',
    ...params,
  });
}

/**
 * Track email signup submission
 */
export function trackEmailSignup(
  status: 'success' | 'duplicate' | 'error' | 'rate_limit',
  params?: EventParams
): void {
  trackEvent('email_signup', {
    signup_status: status,
    ...params,
  });
}

// Extend Window interface to include gtag
declare global {
  interface Window {
    gtag?: (
      command: string,
      eventName: string,
      params?: Record<string, any>
    ) => void;
    dataLayer?: any[];
  }
}
