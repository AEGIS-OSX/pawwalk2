'use client';

import { useEffect, useState } from 'react';

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToEmail = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const emailSection = document.getElementById('email-signup');
    if (emailSection) {
      emailSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-150 ease-out ${
        isSticky
          ? 'bg-[var(--color-bg-base)] border-b border-[var(--color-border-default)] shadow-sm'
          : 'bg-transparent'
      }`}
      role="banner"
    >
      <nav
        className="flex items-center justify-between px-[var(--space-md)] py-[var(--space-md)] max-w-full"
        aria-label="Primary navigation"
      >
        {/* Logo / Brand */}
        <div className="flex items-center">
          <span
            className="text-[20px] leading-[28px] font-[600] font-[var(--font-display)] text-[var(--color-text-primary)]"
            aria-label="PawWalk"
          >
            PawWalk
          </span>
        </div>

        {/* Secondary CTA */}
        <button
          onClick={scrollToEmail}
          className="px-[var(--space-md)] py-[var(--space-sm)] text-[16px] leading-[24px] font-[500] font-[var(--font-body)] text-[var(--color-text-primary)] bg-transparent border border-[var(--color-border-default)] rounded-[var(--radius-sm)] transition-all duration-150 ease-out hover:bg-[var(--color-bg-surface)] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-[var(--color-brand-accent)] focus-visible:outline-offset-[2px] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed min-h-[44px] flex items-center justify-center"
          aria-label="Jump to email signup"
        >
          Email
        </button>
      </nav>
    </header>
  );
}
