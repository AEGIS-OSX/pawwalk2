import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | PawWalk',
  description: 'PawWalk privacy policy and data protection information.',
  robots: 'index, follow',
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[var(--color-bg-base)]">
      {/* Header with back link */}
      <div className="bg-[var(--color-bg-surface)] border-b border-[var(--color-border-default)] py-[var(--space-lg)] px-[var(--space-md)]">
        <div className="max-w-3xl mx-auto">
          <a
            href="/"
            className="inline-flex items-center gap-[var(--space-sm)] text-[16px] leading-[24px] font-[500] font-[var(--font-body)] text-[var(--color-brand-accent)] hover:text-[var(--color-brand-accent-strong)] transition-colors duration-150 ease-out mb-[var(--space-md)]"
          >
            <svg
              className="w-[20px] h-[20px]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to PawWalk
          </a>
          <h1 className="text-[34px] leading-[40px] font-[600] font-[var(--font-display)] text-[var(--color-text-primary)]">
            Privacy Policy
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="py-[var(--space-lg)] px-[var(--space-md)]">
        <div className="max-w-3xl mx-auto prose prose-sm">
          {/* Introduction */}
          <section className="mb-[var(--space-lg)]">
            <p className="text-[16px] leading-[24px] font-[400] font-[var(--font-body)] text-[var(--color-text-secondary)] mb-[var(--space-md)]">
              Last updated: January 2025
            </p>
            <p className="text-[16px] leading-[24px] font-[400] font-[var(--font-body)] text-[var(--color-text-primary)] mb-[var(--space-md)]">
              PawWalk ("we," "us," or "our") operates the PawWalk mobile application and website. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
            </p>
          </section>

          {/* Information We Collect */}
          <section className="mb-[var(--space-lg)]">
            <h2 className="text-[32px] leading-[40px] font-[600] font-[var(--font-display)] text-[var(--color-text-primary)] mb-[var(--space-md)]">
              Information We Collect
            </h2>
            <h3 className="text-[24px] leading-[32px] font-[600] font-[var(--font-display)] text-[var(--color-text-primary)] mb-[var(--space-sm)]">
              Email and Waitlist Information
            </h3>
            <p className="text-[16px] leading-[24px] font-[400] font-[var(--font-body)] text-[var(--color-text-secondary)] mb-[var(--space-md)]">
              When you sign up for our waitlist, we collect your email address and optional first name. This information is stored securely in our database and used to send you updates about PawWalk and the app launch.
            </p>

            <h3 className="text-[24px] leading-[32px] font-[600] font-[var(--font-display)] text-[var(--color-text-primary)] mb-[var(--space-sm)]">
              Analytics and Usage Data
            </h3>
            <p className="text-[16px] leading-[24px] font-[400] font-[var(--font-body)] text-[var(--color-text-secondary)] mb-[var(--space-md)]">
              We use Google Analytics 4 to track page views, user interactions, and conversion events. This helps us understand how visitors use our site and improve the user experience. Analytics data is anonymized and does not identify you personally.
            </p>

            <h3 className="text-[24px] leading-[32px] font-[600] font-[var(--font-display)] text-[var(--color-text-primary)] mb-[var(--space-sm)]">
              Device and Browser Information
            </h3>
            <p className="text-[16px] leading-[24px] font-[400] font-[var(--font-body)] text-[var(--color-text-secondary)] mb-[var(--space-md)]">
              We automatically collect information about your device type, browser, operating system, and IP address to optimize our site for different platforms and diagnose technical issues.
            </p>
          </section>

          {/* How We Use Your Information */}
          <section className="mb-[var(--space-lg)]">
            <h2 className="text-[32px] leading-[40px] font-[600] font-[var(--font-display)] text-[var(--color-text-primary)] mb-[var(--space-md)]">
              How We Use Your Information
            </h2>
            <ul className="list-disc list-inside space-y-[var(--space-sm)] text-[16px] leading-[24px] font-[400] font-[var(--font-body)] text-[var(--color-text-secondary)]">
              <li>To send you updates about PawWalk and app availability</li>
              <li>To measure conversion rates and track App Store visits</li>
              <li>To improve our website and user experience</li>
              <li>To comply with legal obligations</li>
              <li>To prevent fraud and ensure security</li>
            </ul>
          </section>

          {/* Data Security */}
          <section className="mb-[var(--space-lg)]">
            <h2 className="text-[32px] leading-[40px] font-[600] font-[var(--font-display)] text-[var(--color-text-primary)] mb-[var(--space-md)]">
              Data Security
            </h2>
            <p className="text-[16px] leading-[24px] font-[400] font-[var(--font-body)] text-[var(--color-text-secondary)] mb-[var(--space-md)]">
              We implement industry-standard security measures to protect your personal information. All data is encrypted at rest using Supabase's built-in encryption. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          {/* Data Retention */}
          <section className="mb-[var(--space-lg)]">
            <h2 className="text-[32px] leading-[40px] font-[600] font-[var(--font-display)] text-[var(--color-text-primary)] mb-[var(--space-md)]">
              Data Retention
            </h2>
            <p className="text-[16px] leading-[24px] font-[400] font-[var(--font-body)] text-[var(--color-text-secondary)] mb-[var(--space-md)]">
              We retain your email and waitlist information for 24 months from the date of collection. After this period, your data will be securely deleted. You may request deletion of your data at any time by contacting us.
            </p>
          </section>

          {/* Cookies */}
          <section className="mb-[var(--space-lg)]">
            <h2 className="text-[32px] leading-[40px] font-[600] font-[var(--font-display)] text-[var(--color-text-primary)] mb-[var(--space-md)]">
              Cookies
            </h2>
            <p className="text-[16px] leading-[24px] font-[400] font-[var(--font-body)] text-[var(--color-text-secondary)] mb-[var(--space-md)]">
              We use cookies to remember your cookie consent preference and to enable analytics. You can control cookie settings in your browser. Rejecting cookies may limit some functionality of our site.
            </p>
          </section>

          {/* Third-Party Services */}
          <section className="mb-[var(--space-lg)]">
            <h2 className="text-[32px] leading-[40px] font-[600] font-[var(--font-display)] text-[var(--color-text-primary)] mb-[var(--space-md)]">
              Third-Party Services
            </h2>
            <p className="text-[16px] leading-[24px] font-[400] font-[var(--font-body)] text-[var(--color-text-secondary)] mb-[var(--space-md)]">
              We use the following third-party services:
            </p>
            <ul className="list-disc list-inside space-y-[var(--space-sm)] text-[16px] leading-[24px] font-[400] font-[var(--font-body)] text-[var(--color-text-secondary)] mb-[var(--space-md)]">
              <li><strong>Supabase</strong> for secure data storage and authentication</li>
              <li><strong>Google Analytics 4</strong> for usage analytics</li>
              <li><strong>Vercel</strong> for hosting and deployment</li>
            </ul>
            <p className="text-[16px] leading-[24px] font-[400] font-[var(--font-body)] text-[var(--color-text-secondary)]">
              These services have their own privacy policies. We encourage you to review them.
            </p>
          </section>

          {/* Your Rights */}
          <section className="mb-[var(--space-lg)]">
            <h2 className="text-[32px] leading-[40px] font-[600] font-[var(--font-display)] text-[var(--color-text-primary)] mb-[var(--space-md)]">
              Your Rights
            </h2>
            <p className="text-[16px] leading-[24px] font-[400] font-[var(--font-body)] text-[var(--color-text-secondary)] mb-[var(--space-md)]">
              You have the right to:
            </p>
            <ul className="list-disc list-inside space-y-[var(--space-sm)] text-[16px] leading-[24px] font-[400] font-[var(--font-body)] text-[var(--color-text-secondary)] mb-[var(--space-md)]">
              <li>Access your personal data</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt out of marketing communications</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </section>

          {/* Contact Us */}
          <section id="contact" className="mb-[var(--space-lg)]">
            <h2 className="text-[32px] leading-[40px] font-[600] font-[var(--font-display)] text-[var(--color-text-primary)] mb-[var(--space-md)]">
              Contact Us
            </h2>
            <p className="text-[16px] leading-[24px] font-[400] font-[var(--font-body)] text-[var(--color-text-secondary)] mb-[var(--space-md)]">
              If you have questions about this Privacy Policy or our privacy practices, please contact us at:
            </p>
            <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border-default)] rounded-[var(--radius-sm)] p-[var(--space-md)]">
              <p className="text-[16px] leading-[24px] font-[500] font-[var(--font-body)] text-[var(--color-text-primary)] mb-[var(--space-sm)]">
                PawWalk Support
              </p>
              <p className="text-[16px] leading-[24px] font-[400] font-[var(--font-body)] text-[var(--color-text-secondary)]">
                Email:{' '}
                <a
                  href="mailto:privacy@pawwalk.app"
                  className="text-[var(--color-brand-accent)] hover:text-[var(--color-brand-accent-strong)] transition-colors duration-150 ease-out"
                >
                  privacy@pawwalk.app
                </a>
              </p>
            </div>
          </section>

          {/* Terms of Service */}
          <section id="terms" className="mb-[var(--space-lg)]">
            <h2 className="text-[32px] leading-[40px] font-[600] font-[var(--font-display)] text-[var(--color-text-primary)] mb-[var(--space-md)]">
              Terms of Service
            </h2>
            <p className="text-[16px] leading-[24px] font-[400] font-[var(--font-body)] text-[var(--color-text-secondary)] mb-[var(--space-md)]">
              By using PawWalk, you agree to:
            </p>
            <ul className="list-disc list-inside space-y-[var(--space-sm)] text-[16px] leading-[24px] font-[400] font-[var(--font-body)] text-[var(--color-text-secondary)] mb-[var(--space-md)]">
              <li>Use the service only for lawful purposes</li>
              <li>Not engage in any conduct that restricts or inhibits anyone's use or enjoyment of the service</li>
              <li>Not attempt to gain unauthorized access to our systems</li>
              <li>Provide accurate information when signing up</li>
              <li>Comply with all applicable laws and regulations</li>
            </ul>
            <p className="text-[16px] leading-[24px] font-[400] font-[var(--font-body)] text-[var(--color-text-secondary)]">
              We reserve the right to modify these terms at any time. Continued use of our service constitutes acceptance of any changes.
            </p>
          </section>

          {/* Changes to Policy */}
          <section className="mb-[var(--space-lg)]">
            <h2 className="text-[32px] leading-[40px] font-[600] font-[var(--font-display)] text-[var(--color-text-primary)] mb-[var(--space-md)]">
              Changes to This Privacy Policy
            </h2>
            <p className="text-[16px] leading-[24px] font-[400] font-[var(--font-body)] text-[var(--color-text-secondary)]">
              We may update this Privacy Policy from time to time. We will notify you of any changes by updating the "Last updated" date at the top of this page. Your continued use of our service after any modifications constitutes your acceptance of the updated Privacy Policy.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
