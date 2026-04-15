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

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const getIndex = (offset: number) =>
    (current + offset + testimonials.length) % testimonials.length;

  return (
    <section className="py-20 bg-secondary overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-black text-foreground text-center mb-12 leading-[1.1] tracking-tight">
          Real <span className="text-highlight">Impact</span>.<br />
          Straight from Our Clients.
        </h2>

        <div className="relative flex items-center justify-center min-h-[380px]">
          {/* Navigation Controls: Pulled closer to the cards */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-2 md:px-6 z-30 pointer-events-none">
            <button onClick={prev} className="pointer-events-auto p-2 text-foreground hover:text-highlight transition-all">
              <ChevronLeft size={36} strokeWidth={3} />
            </button>
            <button onClick={next} className="pointer-events-auto p-2 text-foreground hover:text-highlight transition-all">
              <ChevronRight size={36} strokeWidth={3} />
            </button>
          </div>

          {/* Reduced Track Width from max-w-4xl to max-w-3xl */}
          <div className="relative w-full max-w-3xl h-[380px] flex items-center justify-center">
            {testimonials.map((t, i) => {
              const styles = {
                active: "opacity-100 scale-100 z-20 translate-x-0 shadow-lg blur-0",
                // Reduced horizontal translation from 80% to 70% to keep side cards closer
                prev: "opacity-40 scale-90 z-10 -translate-x-[60%] lg:-translate-x-[70%] blur-[1px] pointer-events-none",
                next: "opacity-40 scale-90 z-10 translate-x-[60%] lg:translate-x-[70%] blur-[1px] pointer-events-none",
                hidden: "opacity-0 scale-75 z-0 translate-x-0 blur-xl pointer-events-none"
              };

              const currentStyle = i === current ? styles.active : 
                                   i === getIndex(-1) ? styles.prev : 
                                   i === getIndex(1) ? styles.next : styles.hidden;

              return (
                // Reduced card width from 380px to 340px
                <div key={i} className={`absolute w-full max-w-[340px] transition-all duration-700 ease-out transform-gpu ${currentStyle}`}>
                  <TestimonialCard t={t} />
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1.5 transition-all duration-500 rounded-none ${
                i === current ? "w-8 bg-highlight" : "w-3 bg-muted-foreground/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ t }: { t: (typeof testimonials)[0] }) => (
  <div className="bg-background rounded-none p-6 md:p-8 border border-border h-full flex flex-col justify-between">
    <div>
      <div className="flex items-center gap-2 mb-1">
        <span className="text-[9px] text-muted-foreground font-black uppercase tracking-widest">Reviewed on</span>
        <span className="font-black text-foreground text-base tracking-tighter">Clutch</span>
        <div className="flex items-center gap-0.5 ml-auto">
          {[...Array(5)].map((_, s) => (
            <svg key={s} width="12" height="12" viewBox="0 0 24 24" fill="hsl(65, 99%, 42%)">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          ))}
        </div>
      </div>
      <p className="text-[9px] font-bold text-muted-foreground mb-4">71 REVIEWS</p>

      <div className="relative mb-4">
        <span className="text-highlight text-5xl font-black leading-none absolute -top-5 -left-3 opacity-40 font-serif">“</span>
        <blockquote className="text-sm md:text-base font-bold text-foreground leading-snug italic relative z-10 pl-4">
          {t.quote}
        </blockquote>
      </div>
    </div>

    <div className="mt-4">
      <Link
        to="/results"
        className="inline-flex items-center gap-1 text-[11px] font-black text-[hsl(190,60%,45%)] hover:gap-2 transition-all mb-3"
      >
        See the project <ArrowRight size={12} />
      </Link>
      
      <div className="pt-3 border-t border-border">
        <p className="font-black text-foreground text-xs uppercase tracking-tight">{t.author}</p>
        <p className="text-[10px] text-muted-foreground font-medium">{t.role}</p>
      </div>
    </div>
  </div>
);

export default TestimonialsSection;