/**
 * App Store link handler
 * Detects iOS and returns appropriate App Store link
 */

const APP_STORE_ID = 'pawwalk'; // Replace with actual app ID from App Store
const APP_STORE_URL = `https://apps.apple.com/app/${APP_STORE_ID}`;
const APP_STORE_SCHEME = `itms-apps://apps.apple.com/app/${APP_STORE_ID}`;

export function getAppStoreLink(): string {
  // Check if running in browser
  if (typeof window === 'undefined') {
    return APP_STORE_URL;
  }

  // Detect iOS
  const isIOS =
    /iPad|iPhone|iPod/.test(navigator.userAgent) &&
    !window.MSStream;

  // Return appropriate link
  return isIOS ? APP_STORE_SCHEME : APP_STORE_URL;
}

export function handleAppStoreClick(e: React.MouseEvent<HTMLButtonElement>): void {
  e.preventDefault();
  const link = getAppStoreLink();
  
  if (link.startsWith('itms-apps://')) {
    // For iOS, use the scheme directly
    window.location.href = link;
  } else {
    // For non-iOS, open in new tab
    window.open(link, '_blank', 'noopener,noreferrer');
  }
}
