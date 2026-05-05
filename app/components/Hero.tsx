'use client';

import { handleAppStoreClick } from '@/lib/appStore';
import { trackAppStoreClick } from '@/lib/analytics';
import { getUTMParams } from '@/lib/utm';

export default function Hero() {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const utmParams = getUTMParams();
    trackAppStoreClick({
      utm_source: utmParams.utm_source,
      utm_medium: utmParams.utm_medium,
      utm_campaign: utmParams.utm_campaign,
    });
    handleAppStoreClick(e);
  };

  return (
    <section
      id="hero"
      className="pt-[calc(var(--space-xxxl)+var(--space-lg))] pb-[var(--space-xxxl)] px-[var(--space-md)] bg-[var(--color-bg-base)] md:pt-[calc(var(--space-xxxl)+var(--space-xxl))] md:pb-[var(--space-xxxl)] md:px-[var(--space-lg)]"
      aria-label="Hero section"
    >
      <div className="max-w-2xl mx-auto flex flex-col items-center text-center">
        {/* Headline */}
        <h1 className="text-[34px] leading-[40px] font-[600] font-[var(--font-display)] text-[var(--color-text-primary)] mb-[var(--space-lg)] md:text-[40px] md:leading-[48px] md:mb-[var(--space-xl)]">
          PawWalk for busy dog owners: Schedule walks, get live GPS updates
        </h1>

        {/* Trust Bullets */}
        <ul className="list-none mb-[var(--space-xl)] text-[16px] leading-[24px] font-[400] font-[var(--font-body)] text-[var(--color-text-secondary)] md:mb-[var(--space-xxl)] md:text-[18px] md:leading-[26px]">
          <li className="mb-[var(--space-md)] flex items-start justify-center">
            <span className="mr-[var(--space-sm)] text-[var(--color-brand-positive)] font-[600] flex-shrink-0">✓</span>
            <span>Background-checked walkers, locally verified.</span>
          </li>
          <li className="flex items-start justify-center">
            <span className="mr-[var(--space-sm)] text-[var(--color-brand-positive)] font-[600] flex-shrink-0">✓</span>
            <span>GPS-tracked walks with photo proof after every visit.</span>
          </li>
        </ul>

        {/* Primary CTA - App Store Button */}
        <button
          onClick={handleClick}
          className="px-[var(--space-lg)] py-[var(--space-md)] text-[16px] leading-[24px] font-[500] font-[var(--font-body)] text-[var(--color-text-primary)] bg-[var(--color-brand-accent)] rounded-[var(--radius-sm)] transition-all duration-150 ease-out hover:bg-[var(--color-brand-accent-strong)] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-[var(--color-brand-accent)] focus-visible:outline-offset-[2px] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed min-h-[var(--touch-cta)] flex items-center justify-center whitespace-nowrap md:px-[var(--space-xl)] md:py-[var(--space-lg)] md:text-[18px] md:leading-[26px]"
          aria-label="Download PawWalk from App Store"
        >
          Download on App Store
        </button>
      </div>
    </section>
  );
}
