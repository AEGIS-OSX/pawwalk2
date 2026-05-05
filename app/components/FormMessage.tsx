'use client';

import { ReactNode } from 'react';

type MessageType = 'success' | 'duplicate' | 'rate-limit' | 'error' | 'loading';

interface FormMessageProps {
  type: MessageType;
  title: string;
  body: string;
  buttonText?: string;
  onButtonClick?: () => void;
  isVisible: boolean;
}

const messageStyles: Record<MessageType, { bgColor: string; borderColor: string; textColor: string; accentColor: string }> = {
  success: {
    bgColor: 'bg-[var(--color-bg-surface)]',
    borderColor: 'border-[var(--color-brand-positive)]',
    textColor: 'text-[var(--color-text-primary)]',
    accentColor: 'text-[var(--color-brand-positive)]',
  },
  duplicate: {
    bgColor: 'bg-[var(--color-bg-surface)]',
    borderColor: 'border-[var(--color-brand-accent)]',
    textColor: 'text-[var(--color-text-primary)]',
    accentColor: 'text-[var(--color-brand-accent)]',
  },
  'rate-limit': {
    bgColor: 'bg-[var(--color-bg-surface)]',
    borderColor: 'border-[var(--color-brand-negative)]',
    textColor: 'text-[var(--color-text-primary)]',
    accentColor: 'text-[var(--color-brand-negative)]',
  },
  error: {
    bgColor: 'bg-[var(--color-bg-surface)]',
    borderColor: 'border-[var(--color-brand-negative)]',
    textColor: 'text-[var(--color-text-primary)]',
    accentColor: 'text-[var(--color-brand-negative)]',
  },
  loading: {
    bgColor: 'bg-[var(--color-bg-surface)]',
    borderColor: 'border-[var(--color-text-muted)]',
    textColor: 'text-[var(--color-text-primary)]',
    accentColor: 'text-[var(--color-text-muted)]',
  },
};

export default function FormMessage({
  type,
  title,
  body,
  buttonText,
  onButtonClick,
  isVisible,
}: FormMessageProps) {
  if (!isVisible) return null;

  const styles = messageStyles[type];

  return (
    <div
      role="status"
      aria-live="polite"
      aria-atomic="true"
      className={`mt-[var(--space-lg)] p-[var(--space-lg)] border-l-[4px] rounded-[var(--radius-sm)] ${styles.bgColor} ${styles.borderColor} ${styles.textColor} transition-all duration-200 ease-out`}
    >
      <h3 className={`text-[18px] leading-[26px] font-[600] font-[var(--font-display)] mb-[var(--space-sm)] ${styles.accentColor}`}>
        {type === 'loading' && (
          <span className="inline-block mr-[var(--space-sm)]">
            <span className="inline-block w-[16px] h-[16px] border-[2px] border-[var(--color-text-muted)] border-t-[var(--color-brand-accent)] rounded-full animate-spin" />
          </span>
        )}
        {title}
      </h3>
      <p className="text-[16px] leading-[24px] font-[400] font-[var(--font-body)] mb-[var(--space-md)]">{body}</p>
      {buttonText && onButtonClick && (
        <button
          onClick={onButtonClick}
          className="px-[var(--space-lg)] py-[var(--space-sm)] text-[16px] leading-[24px] font-[500] font-[var(--font-body)] text-[var(--color-text-primary)] bg-[var(--color-brand-accent)] rounded-[var(--radius-sm)] transition-all duration-150 ease-out hover:bg-[var(--color-brand-accent-strong)] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-[var(--color-brand-accent)] focus-visible:outline-offset-[2px] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed min-h-[var(--touch-min)] inline-flex items-center justify-center whitespace-nowrap"
          aria-label={buttonText}
        >
          {buttonText}
        </button>
      )}
    </div>
  );
}
