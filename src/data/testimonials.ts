export interface Testimonials {
  name: string;
  role: string;
  content: string;
  rating: number;
}

export const testimonials: Testimonials[] = [
  {
    name: "Sarah Chen",
    role: "CEO, TechStart Inc.",
    content:
      "This platform transformed our payment processing. We've seen 40% faster transactions and our customers love the seamless experience.",
    rating: 5,
  },
  {
    name: "Marcus Rodriguez",
    role: "CFO, Global Ventures",
    content:
      "The analytics dashboard gives us insights we never had before. It's like having a financial advisor built into our banking platform.",
    rating: 5,
  },
  {
    name: "Elena Kozlov",
    role: "Founder, RetailFlow",
    content:
      "Security was our biggest concern, but their bank-level protection and compliance features exceeded our expectations completely.",
    rating: 5,
  },
];
