import { testimonials } from '@/app/data/testimonials';

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-label="Customer testimonials"
      className="px-[var(--space-md)] py-[var(--space-lg)] bg-[var(--color-bg-base)]"
    >
      {/* Section Heading */}
      <h2 className="text-[32px] leading-[40px] font-[600] font-[var(--font-display)] text-[var(--color-text-primary)] mb-[var(--space-lg)] text-center">
        Trusted by dog owners
      </h2>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 gap-[var(--space-lg)] md:grid-cols-3 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <article
            key={index}
            className="flex flex-col p-[var(--space-lg)] bg-[var(--color-bg-surface)] border border-[var(--color-border-default)] rounded-[var(--radius-sm)]"
          >
            {/* Quote */}
            <blockquote className="mb-[var(--space-lg)] flex-grow">
              <p className="text-[16px] leading-[24px] font-[400] font-[var(--font-body)] text-[var(--color-text-primary)]">
                "{testimonial.quote}"
              </p>
            </blockquote>

            {/* Author Info */}
            <div className="border-t border-[var(--color-border-default)] pt-[var(--space-md)]">
              <p className="text-[16px] leading-[24px] font-[500] font-[var(--font-body)] text-[var(--color-text-primary)] mb-[var(--space-xs)]">
                {testimonial.author}
              </p>
              <p className="text-[13px] leading-[20px] font-[400] font-[var(--font-body)] text-[var(--color-text-secondary)]">
                {testimonial.role}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
