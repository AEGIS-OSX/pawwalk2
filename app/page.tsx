import Header from './components/Header';
import Hero from './components/Hero';
import Screenshots from './components/Screenshots';
import Testimonials from './components/Testimonials';
import WaitlistForm from './components/WaitlistForm';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';

export default function Page() {
  return (
    <>
      <Header />
      <Hero />
      <Screenshots />
      <Testimonials />
      <WaitlistForm />

      {/* Privacy & Legal Section */}
      <section
        id="privacy"
        aria-label="Privacy and legal information"
        className="px-[var(--space-md)] py-[var(--space-lg)] bg-[var(--color-bg-surface)] md:px-[var(--space-lg)] md:py-[var(--space-xxl)]"
      >
        <div className="max-w-2xl mx-auto">
          <h2 className="text-[24px] leading-[32px] font-[600] font-[var(--font-display)] text-[var(--color-text-primary)] mb-[var(--space-md)] md:text-[28px] md:leading-[36px]">
            Privacy & Security
          </h2>
          <p className="text-[16px] leading-[24px] font-[400] font-[var(--font-body)] text-[var(--color-text-secondary)] mb-[var(--space-md)]">
            Your email and personal information are encrypted at rest and stored securely in our database. We never share your data with third parties. For more details, see our{' '}
            <a
              href="/privacy"
              className="text-[var(--color-brand-accent)] hover:text-[var(--color-brand-accent-strong)] transition-colors duration-150 ease-out underline focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-[var(--color-brand-accent)] focus-visible:outline-offset-[2px] rounded-[2px]"
            >
              full privacy policy
            </a>
            .
          </p>
          <p className="text-[13px] leading-[20px] font-[400] font-[var(--font-body)] text-[var(--color-text-secondary)]">
            By signing up, you agree to receive occasional updates about PawWalk. You can unsubscribe at any time.
          </p>
        </div>
      </section>

      <Footer />
      <CookieBanner />
    </>
  );
}
