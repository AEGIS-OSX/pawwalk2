'use client';

import { useRef, useState } from 'react';

interface Screenshot {
  id: string;
  src: string;
  alt: string;
  title: string;
}

const screenshots: Screenshot[] = [
  {
    id: 'screenshot-1',
    src: '/images/screenshot-1.png',
    alt: 'PawWalk app home screen showing available walkers and booking interface',
    title: 'Book a walker in seconds',
  },
  {
    id: 'screenshot-2',
    src: '/images/screenshot-2.png',
    alt: 'PawWalk app live GPS tracking screen showing dog walker location in real-time',
    title: 'Live GPS tracking during walks',
  },
  {
    id: 'screenshot-3',
    src: '/images/screenshot-3.png',
    alt: 'PawWalk app photo proof screen displaying photos from completed walk',
    title: 'Photo proof after every walk',
  },
];

export default function Screenshots() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
      setTimeout(checkScroll, 300);
    }
  };

  return (
    <section
      id="screenshots"
      aria-label="App screenshots carousel"
      className="px-[var(--space-md)] py-[var(--space-lg)] bg-[var(--color-bg-base)]"
    >
      {/* Section Heading */}
      <h2 className="text-[32px] leading-[40px] font-[600] font-[var(--font-display)] text-[var(--color-text-primary)] mb-[var(--space-lg)] text-center">
        See PawWalk in action
      </h2>

      {/* Carousel Container */}
      <div className="relative">
        {/* Scrollable carousel */}
        <div
          ref={scrollContainerRef}
          onScroll={checkScroll}
          className="flex gap-[var(--space-md)] overflow-x-auto snap-x snap-mandatory scroll-smooth pb-[var(--space-md)]"
          role="region"
          aria-label="App screenshots carousel"
        >
          {screenshots.map((screenshot) => (
            <div
              key={screenshot.id}
              className="flex-shrink-0 w-[280px] snap-center"
            >
              {/* Screenshot Card */}
              <div className="flex flex-col items-center">
                {/* Image Container */}
                <div className="w-full bg-[var(--color-bg-surface)] rounded-[var(--radius-md)] overflow-hidden border border-[var(--color-border-default)] mb-[var(--space-md)]">
                  <img
                    src={screenshot.src}
                    alt={screenshot.alt}
                    className="w-full h-auto object-cover aspect-[9/16]"
                    loading="lazy"
                  />
                </div>
                {/* Caption */}
                <p className="text-[16px] leading-[24px] font-[500] font-[var(--font-body)] text-[var(--color-text-primary)] text-center">
                  {screenshot.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-[var(--space-sm)] justify-center mt-[var(--space-lg)]">
          <button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className="px-[var(--space-md)] py-[var(--space-sm)] text-[16px] leading-[24px] font-[500] font-[var(--font-body)] text-[var(--color-text-primary)] bg-[var(--color-bg-surface)] border border-[var(--color-border-default)] rounded-[var(--radius-sm)] transition-all duration-150 ease-out hover:bg-[var(--color-border-default)] disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-[var(--color-brand-accent)] focus-visible:outline-offset-[2px] min-h-[44px] flex items-center justify-center"
            aria-label="Scroll screenshots left"
          >
            ← Previous
          </button>
          <button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className="px-[var(--space-md)] py-[var(--space-sm)] text-[16px] leading-[24px] font-[500] font-[var(--font-body)] text-[var(--color-text-primary)] bg-[var(--color-bg-surface)] border border-[var(--color-border-default)] rounded-[var(--radius-sm)] transition-all duration-150 ease-out hover:bg-[var(--color-border-default)] disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-[var(--color-brand-accent)] focus-visible:outline-offset-[2px] min-h-[44px] flex items-center justify-center"
            aria-label="Scroll screenshots right"
          >
            Next →
          </button>
        </div>
      </div>
    </section>
  );
}
