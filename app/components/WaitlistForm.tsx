'use client';

import { useState, useCallback } from 'react';
import { getUTMParams } from '@/lib/utm';
import { getDeviceType } from '@/lib/device';
import { trackEmailSignup } from '@/lib/analytics';
import FormMessage from './FormMessage';

type MessageState = {
  type: 'success' | 'duplicate' | 'rate-limit' | 'error' | null;
  title: string;
  body: string;
  buttonText?: string;
};

export default function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<MessageState>({
    type: null,
    title: '',
    body: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [emailError, setEmailError] = useState('');

  const validateEmail = (value: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    // Clear error when user starts typing
    if (emailError) {
      setEmailError('');
    }
  };

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (!email.trim()) {
        setEmailError('Email address is required');
        setMessage({
          type: 'error',
          title: 'Email required',
          body: 'Please enter your email address to join the waitlist.',
        });
        trackEmailSignup('error', {
          error_reason: 'empty_email',
        });
        return;
      }

      if (!validateEmail(email)) {
        setEmailError('Please enter a valid email address');
        setMessage({
          type: 'error',
          title: 'Invalid email',
          body: 'Please enter a valid email address.',
        });
        trackEmailSignup('error', {
          error_reason: 'invalid_email',
        });
        return;
      }

      setIsLoading(true);
      setMessage({ type: null, title: '', body: '' });
      setEmailError('');

      try {
        const utmParams = getUTMParams();
        const device = getDeviceType();

        const response = await fetch('/api/leads', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: email.trim(),
            first_name: firstName.trim() || null,
            utm_source: utmParams.utm_source,
            utm_medium: utmParams.utm_medium,
            utm_campaign: utmParams.utm_campaign,
            device,
          }),
        });

        if (response.status === 201) {
          setMessage({
            type: 'success',
            title: 'Thanks, you\'re signed up',
            body: 'We saved your email and sent the app link. Open PawWalk to set your preferences and book a walk.',
            buttonText: 'Open in App',
          });
          trackEmailSignup('success', {
            email_domain: email.split('@')[1],
          });
          setEmail('');
          setFirstName('');
          setIsSubmitted(true);
        } else if (response.status === 409) {
          setMessage({
            type: 'duplicate',
            title: 'Email already on file',
            body: 'We have this address already. Check your inbox for the app link, or use the download link on the page.',
            buttonText: 'Resend link',
          });
          trackEmailSignup('duplicate', {
            email_domain: email.split('@')[1],
          });
        } else if (response.status === 429) {
          setMessage({
            type: 'rate-limit',
            title: 'Slow down, please',
            body: 'Too many requests. Try again in one minute.',
          });
          trackEmailSignup('rate_limit');
        } else {
          setMessage({
            type: 'error',
            title: 'Something went wrong',
            body: 'We couldn\'t save your email. Please try again.',
          });
          trackEmailSignup('error', {
            error_reason: 'server_error',
            status_code: response.status,
          });
        }
      } catch (error) {
        setMessage({
          type: 'error',
          title: 'Connection error',
          body: 'Please check your internet connection and try again.',
        });
        trackEmailSignup('error', {
          error_reason: 'network_error',
        });
      } finally {
        setIsLoading(false);
      }
    },
    [email, firstName]
  );

  const handleResendClick = useCallback(() => {
    setMessage({
      type: 'success',
      title: 'Link sent',
      body: 'Check your inbox for the app download link.',
    });
  }, []);

  const handleOpenAppClick = useCallback(() => {
    window.location.href = 'https://apps.apple.com/app/pawwalk';
  }, []);

  return (
    <section
      id="email-signup"
      aria-label="Email signup"
      className="px-[var(--space-md)] py-[var(--space-lg)] bg-[var(--color-bg-base)] md:px-[var(--space-lg)] md:py-[var(--space-xxl)]"
    >
      <div className="max-w-2xl mx-auto">
        <h2 className="text-[32px] leading-[40px] font-[600] font-[var(--font-display)] text-[var(--color-text-primary)] mb-[var(--space-md)] md:text-[36px] md:leading-[44px] md:mb-[var(--space-lg)]">
          Get early access
        </h2>
        <p className="text-[16px] leading-[24px] font-[400] font-[var(--font-body)] text-[var(--color-text-secondary)] mb-[var(--space-lg)] md:text-[18px] md:leading-[26px] md:mb-[var(--space-xl)]">
          Join our waitlist and be among the first to book a walk.
        </p>

        <form onSubmit={handleSubmit} className="space-y-[var(--space-md)]" noValidate>
          {/* Email Field */}
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="text-[16px] leading-[24px] font-[500] font-[var(--font-body)] text-[var(--color-text-primary)] mb-[var(--space-sm)]"
            >
              Email address
              <span className="text-[var(--color-brand-negative)] ml-[4px]" aria-label="required">*</span>
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              disabled={isLoading}
              placeholder="you@example.com"
              required
              aria-required="true"
              aria-describedby={emailError ? 'email-error' : undefined}
              className="px-[var(--space-md)] py-[var(--space-sm)] text-[16px] leading-[24px] font-[400] font-[var(--font-body)] text-[var(--color-text-primary)] bg-[var(--color-bg-surface)] border-[1px] border-[var(--color-border-default)] rounded-[var(--radius-sm)] transition-all duration-150 ease-out focus:outline-none focus:border-[var(--color-brand-accent)] focus:shadow-[0_0_0_3px_rgba(255,180,75,0.1)] disabled:opacity-50 disabled:cursor-not-allowed md:text-[18px] md:leading-[26px]"
            />
            {emailError && (
              <p id="email-error" className="text-[13px] leading-[20px] font-[400] font-[var(--font-body)] text-[var(--color-brand-negative)] mt-[var(--space-sm)]">
                {emailError}
              </p>
            )}
          </div>

          {/* First Name Field (Optional) */}
          <div className="flex flex-col">
            <label
              htmlFor="firstName"
              className="text-[16px] leading-[24px] font-[500] font-[var(--font-body)] text-[var(--color-text-primary)] mb-[var(--space-sm)]"
            >
              First name (optional)
            </label>
            <input
              id="firstName"
              type="text"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              disabled={isLoading}
              placeholder="Your name"
              className="px-[var(--space-md)] py-[var(--space-sm)] text-[16px] leading-[24px] font-[400] font-[var(--font-body)] text-[var(--color-text-primary)] bg-[var(--color-bg-surface)] border-[1px] border-[var(--color-border-default)] rounded-[var(--radius-sm)] transition-all duration-150 ease-out focus:outline-none focus:border-[var(--color-brand-accent)] focus:shadow-[0_0_0_3px_rgba(255,180,75,0.1)] disabled:opacity-50 disabled:cursor-not-allowed md:text-[18px] md:leading-[26px]"
            />
          </div>

          {/* Privacy Text */}
          <p className="text-[13px] leading-[20px] font-[400] font-[var(--font-body)] text-[var(--color-text-secondary)]">
            We'll keep your email safe and never share it. Read our{' '}
            <a
              href="/privacy"
              className="text-[var(--color-brand-accent)] hover:text-[var(--color-brand-accent-strong)] transition-colors duration-150 ease-out underline focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-[var(--color-brand-accent)] focus-visible:outline-offset-[2px] rounded-[2px]"
            >
              privacy policy
            </a>
            .
          </p>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading || !email.trim()}
            className="w-full px-[var(--space-lg)] py-[var(--space-md)] text-[16px] leading-[24px] font-[500] font-[var(--font-body)] text-[var(--color-text-primary)] bg-[var(--color-brand-accent)] rounded-[var(--radius-sm)] transition-all duration-150 ease-out hover:bg-[var(--color-brand-accent-strong)] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-[var(--color-brand-accent)] focus-visible:outline-offset-[2px] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed min-h-[var(--touch-cta)] flex items-center justify-center whitespace-nowrap md:py-[var(--space-lg)] md:text-[18px] md:leading-[26px]"
            aria-label="Sign up for waitlist"
          >
            {isLoading ? (
              <span className="inline-block w-[16px] h-[16px] border-[2px] border-[var(--color-text-primary)] border-t-[var(--color-brand-accent-strong)] rounded-full animate-spin" />
            ) : (
              'Sign up'
            )}
          </button>
        </form>

        {/* Message Display */}
        <FormMessage
          type={message.type as any}
          title={message.title}
          body={message.body}
          buttonText={message.buttonText}
          onButtonClick={
            message.type === 'success'
              ? handleOpenAppClick
              : message.type === 'duplicate'
                ? handleResendClick
                : undefined
          }
          isVisible={message.type !== null}
        />
      </div>
    </section>
  );
}
