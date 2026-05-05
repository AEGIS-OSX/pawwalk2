import Header from './components/Header';
import Hero from './components/Hero';

export default function Page() {
  return (
    <>
      <Header />
      <Hero />

      {/* Screenshots Carousel Section */}
      <section id="screenshots" aria-label="App screenshots" className="px-[var(--space-md)] py-[var(--space-lg)]">
        <h2 className="text-[32px] leading-[40px] font-[600] font-[var(--font-display)] text-[var(--color-text-primary)] mb-[var(--space-lg)]">See PawWalk in action</h2>
        <div className="carousel" role="region" aria-label="App screenshots carousel">
          {/* Carousel content will be added in next phase */}
        </div>
      </section>

      {/* Social Proof / Testimonials Section */}
      <section id="testimonials" aria-label="Customer testimonials" className="px-[var(--space-md)] py-[var(--space-lg)]">
        <h2 className="text-[32px] leading-[40px] font-[600] font-[var(--font-display)] text-[var(--color-text-primary)] mb-[var(--space-lg)]">Trusted by dog owners</h2>
        <div className="testimonials-grid">
          {/* Testimonial cards will be added in next phase */}
        </div>
      </section>

      {/* Email Waitlist Section */}
      <section id="email-signup" aria-label="Email signup" className="px-[var(--space-md)] py-[var(--space-lg)]">
        <h2 className="text-[32px] leading-[40px] font-[600] font-[var(--font-display)] text-[var(--color-text-primary)] mb-[var(--space-lg)]">Get early access</h2>
        <form id="email-form" aria-label="Email signup form">
          {/* Form fields will be added in next phase */}
        </form>
      </section>

      {/* Privacy & Legal Section */}
      <section id="privacy" aria-label="Privacy and legal information" className="px-[var(--space-md)] py-[var(--space-lg)]">
        {/* Privacy content will be added in next phase */}
      </section>
    </>
  );
}
