import { useEffect, useState, useCallback } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const testimonials = [
  {
    quote: "I don't believe that we would have been successful without our collaboration with InvCode 29.",
    author: "John Dumas",
    role: "CTO, Tech Corp",
  },
  {
    quote: "They plug in seamlessly to a team and can handle the full project end-to-end.",
    author: "Ken Isaacson",
    role: "VP of Project Management",
  },
  {
    quote: "They're honorable, reputable, and easy to work with. They genuinely care about the outcome and want to do a good job.",
    author: "Matt Owings",
    role: "President",
  },
  {
    quote: "InvCode 29 successfully built efficiencies into our prototype and delivered a high-quality platform.",
    author: "Logan Gerber",
    role: "Marketing Director",
  },
  {
    quote: "Their technical expertise and commitment to our success exceeded all expectations.",
    author: "Lisa Kim",
    role: "CEO, InnovateCo",
  },
];

const ServicesTestimonials = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 2000);
    return () => clearInterval(timer);
  }, [next]);

  const getIndex = (offset: number) =>
    (current + offset + testimonials.length) % testimonials.length;

  return (
    <section className="py-20 bg-secondary overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-black text-foreground text-center mb-4 leading-tight">
          Our client relationships go beyond{" "}
          <span className="text-accent-highlight">technology</span>.
        </h2>

        <div className="relative mt-16">
          <div className="flex items-center justify-center">
            <button
              onClick={prev}
              className="shrink-0 w-12 h-12 flex items-center justify-center text-foreground hover:text-accent transition-colors z-10"
            >
              <ChevronLeft size={36} strokeWidth={3} />
            </button>

            <div className="flex items-center justify-center gap-4 md:gap-6 mx-4 flex-1 max-w-6xl">
              {/* Left blurred */}
              <div className="hidden lg:block w-[340px] shrink-0 opacity-40 blur-[1.5px] scale-[0.88] transition-all duration-700">
                <TestimonialCard t={testimonials[getIndex(-1)]} />
              </div>

              {/* Center bright */}
              <div className="w-full max-w-[440px] shrink-0 transition-all duration-700 z-10 shadow-2xl rounded-xl">
                <TestimonialCard t={testimonials[current]} />
              </div>

              {/* Right blurred */}
              <div className="hidden lg:block w-[340px] shrink-0 opacity-40 blur-[1.5px] scale-[0.88] transition-all duration-700">
                <TestimonialCard t={testimonials[getIndex(1)]} />
              </div>
            </div>

            <button
              onClick={next}
              className="shrink-0 w-12 h-12 flex items-center justify-center text-foreground hover:text-accent transition-colors z-10"
            >
              <ChevronRight size={36} strokeWidth={3} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ t }: { t: (typeof testimonials)[0] }) => (
  <div className="bg-background rounded-xl p-8 h-full">
    {/* Clutch header */}
    <div className="flex items-center gap-2 mb-0.5">
      <span className="text-[10px] text-muted-foreground font-semibold uppercase tracking-[0.15em]">Reviewed on</span>
      <span className="font-black text-foreground text-xl tracking-tight">Clutch</span>
      <div className="flex items-center gap-0.5 ml-2">
        {[...Array(5)].map((_, s) => (
          <svg key={s} width="14" height="14" viewBox="0 0 24 24" fill="hsl(65, 99%, 42%)">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ))}
      </div>
    </div>
    <p className="text-[11px] text-muted-foreground mb-6">71 REVIEWS</p>

    {/* Quote */}
    <div className="relative mb-4">
      <span className="text-accent text-6xl font-black leading-none absolute -top-2 -left-1">&#x201C;</span>
      <blockquote className="text-lg md:text-xl font-semibold text-foreground italic leading-relaxed pl-10 pr-6 min-h-[120px]">
        {t.quote}
      </blockquote>
      <span className="text-accent text-6xl font-black leading-none absolute -bottom-6 right-4">&#x201D;</span>
    </div>

    <Link
      to="/results"
      className="mt-6 text-sm font-bold text-accent-highlight flex items-center gap-1 hover:gap-2 transition-all"
    >
      See the project <ArrowRight size={14} />
    </Link>

    {/* Author */}
    <div className="mt-6 pt-4 border-t border-border flex items-center gap-3">
      <div>
        <p className="font-bold text-foreground text-sm">{t.author}</p>
        <p className="text-xs text-muted-foreground">{t.role}</p>
      </div>
    </div>
  </div>
);

export default ServicesTestimonials;
