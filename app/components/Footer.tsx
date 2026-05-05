'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-[var(--color-bg-surface)] border-t border-[var(--color-border-default)] py-[var(--space-lg)] px-[var(--space-md)]"
      role="contentinfo"
    >
      <div className="max-w-4xl mx-auto">
        {/* Main footer content */}
        <div className="grid grid-cols-1 gap-[var(--space-lg)] mb-[var(--space-lg)] sm:grid-cols-2">
          {/* Brand and description */}
          <div>
            <h3 className="text-[20px] leading-[28px] font-[600] font-[var(--font-display)] text-[var(--color-text-primary)] mb-[var(--space-sm)]">
              PawWalk
            </h3>
            <p className="text-[16px] leading-[24px] font-[400] font-[var(--font-body)] text-[var(--color-text-secondary)]">
              Book a vetted dog walker in two taps. Background-checked walkers, GPS-tracked walks, photo proof after every visit.
            </p>
          </div>

          {/* App Store badge */}
          <div className="flex flex-col justify-start gap-[var(--space-md)]">
            <p className="text-[13px] leading-[20px] font-[500] font-[var(--font-body)] text-[var(--color-text-muted)] uppercase tracking-wide">
              Download
            </p>
            <a
              href="https://apps.apple.com/app/pawwalk/id6739012345"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-[var(--space-md)] py-[var(--space-sm)] bg-[var(--color-text-primary)] text-[var(--color-ink-inverse)] rounded-[var(--radius-sm)] transition-all duration-150 ease-out hover:opacity-90 focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-[var(--color-brand-accent)] focus-visible:outline-offset-[2px] active:scale-[0.98] min-h-[44px] max-w-fit"
              aria-label="Download PawWalk on the App Store"
            >
              <svg
                className="w-[20px] h-[20px] mr-[var(--space-sm)]"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M17.05 13.5c-.91 0-1.82.55-2.25 1.51.93.64 1.54 1.65 1.54 2.8 0 1.14-.61 2.16-1.54 2.8.43.96 1.34 1.51 2.25 1.51 1.66 0 3-1.34 3-3-1.66 0-3-1.34-3-3zm-11.08 0c-1.66 0-3 1.34-3 3s1.34 3 3 3c.91 0 1.82-.55 2.25-1.51-.93-.64-1.54-1.65-1.54-2.8 0-1.14.61-2.16 1.54-2.8-.43-.96-1.34-1.51-2.25-1.51zM5.5 5c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm13 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM12 1C6.48 1 2 5.48 2 11s4.48 10 10 10 10-4.48 10-10S17.52 1 12 1zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
              </svg>
              App Store
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[var(--color-border-default)] my-[var(--space-lg)]"></div>

        {/* Legal and links */}
        <div className="flex flex-col gap-[var(--space-md)] sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[13px] leading-[20px] font-[400] font-[var(--font-body)] text-[var(--color-text-muted)]">
            © {currentYear} PawWalk. All rights reserved.
          </p>
          <nav className="flex gap-[var(--space-lg)] flex-wrap" aria-label="Footer links">
            <a
              href="/privacy"
              className="text-[13px] leading-[20px] font-[400] font-[var(--font-body)] text-[var(--color-text-secondary)] hover:text-[var(--color-brand-accent)] transition-colors duration-150 ease-out"
            >
              Privacy Policy
            </a>
            <a
              href="/privacy#terms"
              className="text-[13px] leading-[20px] font-[400] font-[var(--font-body)] text-[var(--color-text-secondary)] hover:text-[var(--color-brand-accent)] transition-colors duration-150 ease-out"
            >
              Terms of Service
            </a>
            <a
              href="/privacy#contact"
              className="text-[13px] leading-[20px] font-[400] font-[var(--font-body)] text-[var(--color-text-secondary)] hover:text-[var(--color-brand-accent)] transition-colors duration-150 ease-out"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
