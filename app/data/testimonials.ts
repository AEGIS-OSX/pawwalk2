export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "I used to stress about finding reliable dog walkers. PawWalk changed everything—I can see my dog's location in real-time and get photos after every walk. Total peace of mind.",
    author: "Sarah Chen",
    role: "Dog owner, San Francisco",
  },
  {
    quote:
      "The background-checked walkers are a game-changer. I trust them with my golden retriever completely. Booking is so easy, and the GPS tracking is honestly genius.",
    author: "Marcus Johnson",
    role: "Dog owner, Brooklyn",
  },
  {
    quote:
      "As a busy professional, PawWalk lets me give my dog the exercise and attention she needs without guilt. The walkers are vetted, the app is intuitive, and my pup comes home happy every time.",
    author: "Elena Rodriguez",
    role: "Dog owner, Austin",
  },
];
