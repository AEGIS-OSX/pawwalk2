'use client';

import { useEffect, useState } from 'react';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAccepted = localStorage.getItem('pawwalk-cookies-accepted');
    if (!hasAccepted) {
      setIsVisible(true);
    }
    setIsLoading(false);
  }, []);

  const handleAccept = () => {
    localStorage.setItem('pawwalk-cookies-accepted', 'true');
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('pawwalk-cookies-accepted', 'false');
    setIsVisible(false);
  };

  if (isLoading || !isVisible) {
    return null;
  }

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 bg-[var(--color-bg-surface)] border-t border-[var(--color-border-default)] shadow-lg"
      role="region"
      aria-label="Cookie consent banner"
      aria-live="polite"
    >
      <div className="max-w-4xl mx-auto px-[var(--space-md)] py-[var(--space-md)] flex flex-col gap-[var(--space-md)] sm:flex-row sm:items-center sm:justify-between">
        {/* Cookie message */}
        <div className="flex-1">
          <p className="text-[16px] leading-[24px] font-[400] font-[var(--font-body)] text-[var(--color-text-primary)] mb-[var(--space-sm)]">
            We use cookies to improve your experience and measure analytics.
          </p>
          <p className="text-[13px] leading-[20px] font-[400] font-[var(--font-body)] text-[var(--color-text-secondary)]">
            By continuing, you agree to our{' '}
            <a
              href="/privacy"
              className="text-[var(--color-brand-accent)] hover:text-[var(--color-brand-accent-strong)] transition-colors duration-150 ease-out underline"
            >
              privacy policy
            </a>
            .
          </p>
        </div>

        {/* Actions */}
        <div className="flex gap-[var(--space-sm)] flex-shrink-0">
          <button
            onClick={handleReject}
            className="px-[var(--space-md)] py-[var(--space-sm)] text-[16px] leading-[24px] font-[500] font-[var(--font-body)] text-[var(--color-text-primary)] bg-[var(--color-bg-base)] border border-[var(--color-border-default)] rounded-[var(--radius-sm)] transition-all duration-150 ease-out hover:bg-[var(--color-border-default)] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-[var(--color-brand-accent)] focus-visible:outline-offset-[2px] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed min-h-[44px] flex items-center justify-center whitespace-nowrap"
            aria-label="Reject cookies"
          >
            Reject
          </button>
          <button
            onClick={handleAccept}
            className="px-[var(--space-md)] py-[var(--space-sm)] text-[16px] leading-[24px] font-[500] font-[var(--font-body)] text-[var(--color-text-primary)] bg-[var(--color-brand-accent)] rounded-[var(--radius-sm)] transition-all duration-150 ease-out hover:bg-[var(--color-brand-accent-strong)] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-[var(--color-brand-accent)] focus-visible:outline-offset-[2px] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed min-h-[44px] flex items-center justify-center whitespace-nowrap"
            aria-label="Accept cookies"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
