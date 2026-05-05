export default function Page() {
  return (
    <>
      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <div className="hero-content">
          <h1>PawWalk for busy dog owners: Schedule walks, get live GPS updates</h1>
          <ul className="trust-bullets">
            <li>Background-checked walkers, locally verified.</li>
            <li>GPS-tracked walks with photo proof after every visit.</li>
          </ul>
          <button className="btn-primary cta-appstore" aria-label="Download PawWalk from App Store">
            Download on App Store
          </button>
        </div>
      </section>

      {/* Screenshots Carousel Section */}
      <section id="screenshots" aria-label="App screenshots">
        <h2>See PawWalk in action</h2>
        <div className="carousel" role="region" aria-label="App screenshots carousel">
          {/* Carousel content will be added in next phase */}
        </div>
      </section>

      {/* Social Proof / Testimonials Section */}
      <section id="testimonials" aria-label="Customer testimonials">
        <h2>Trusted by dog owners</h2>
        <div className="testimonials-grid">
          {/* Testimonial cards will be added in next phase */}
        </div>
      </section>

      {/* Email Waitlist Section */}
      <section id="email-signup" aria-label="Email signup">
        <h2>Get early access</h2>
        <form id="email-form" aria-label="Email signup form">
          {/* Form fields will be added in next phase */}
        </form>
      </section>

      {/* Privacy & Legal Section */}
      <section id="privacy" aria-label="Privacy and legal information">
        {/* Privacy content will be added in next phase */}
      </section>
    </>
  );
}
