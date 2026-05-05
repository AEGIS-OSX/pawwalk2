/**
 * Detect device type from user agent.
 * Returns 'ios', 'android', or 'other'.
 */
export function getDeviceType(): 'ios' | 'android' | 'other' {
  if (typeof window === 'undefined') {
    return 'other';
  }

  const ua = window.navigator.userAgent.toLowerCase();

  if (/iphone|ipad|ipod/.test(ua)) {
    return 'ios';
  }
  if (/android/.test(ua)) {
    return 'android';
  }
  return 'other';
}
