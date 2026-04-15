import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  { 
    value: "84", 
    label: "Net Promoter Score", 
    sub: "(17 is the industry average)", 
    letter: "⏱",
    tip: "Our client satisfaction is 5x higher than the industry norm." 
  },
  { 
    value: "100%", 
    label: "U.S.-Based", 
    sub: "(We never outsource coding)", 
    letter: "🗺",
    tip: "Direct communication with the engineers building your product." 
  },
  { 
    value: "5.0", 
    label: "Clutch Rating", 
    sub: "(First in industry)", 
    letter: "C",
    tip: "Verified reviews from our long-term enterprise partners."
  },
  { 
    value: "4.9", 
    label: "Google Review", 
    sub: "(in business since 2000)", 
    letter: "G",
    tip: "A legacy of reliability and high-performance delivery."
  },
];

const HeroSection = () => {
  // Enhanced logic for a slower, controlled smooth scroll
  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (!element) return;

    const targetPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1500; // 1.5 seconds for a slower, deliberate feel
    let start: number | null = null;

    // Easing function (easeInOutCubic) for a smoother transition
    const ease = (t: number, b: number, c: number, d: number) => {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t * t + b;
      t -= 2;
      return (c / 2) * (t * t * t + 2) + b;
    };

    const animation = (currentTime: number) => {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const nextScrollY = ease(timeElapsed, startPosition, distance, duration);
      
      window.scrollTo(0, nextScrollY);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };

  return (
    <section className="relative">
      <div className="relative min-h-[85vh] flex flex-col">
        <img
          src={heroBg}
          alt="Software development workspace"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-hero-overlay" />

        <div className="flex-1 flex items-start relative z-10 pt-16 lg:pt-24">
          <div className="container mx-auto px-8 lg:px-8">
            <h1 className="text-3xl sm:text-5xl md:text-5xl font-black text-primary-foreground leading mb-12 max-w-3xl uppercase tracking-tight">
              Custom Software &<br />
              <span className="text-accent-highlight">AI Solutions</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-bold text-primary-foreground mt-4 italic">
              Transforming Vision into Business Outcomes
            </h2>
            <p className="mt-5 text-base md:text-lg text-primary-foreground/90 max-w-2xl leading-relaxed">
              InvCode 29 combines advanced engineering, industry experience, and AI expertise 
              to transform your vision into custom innovations that meaningfully improve 
              core business metrics.
            </p>
            
            <button 
              onClick={scrollToServices}
              className="btn-accent mt-8 inline-flex items-center text-sm font-bold uppercase tracking-wider"
            >
              Bring Your Vision to Life <ArrowRight className="ml-2" size={16} />
            </button>
          </div>
        </div>

        <div className="relative z-10 pb-8 pt-8">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`group relative text-center py-2 md:py-4 px-3 md:px-4 ${i < 3 ? 'md:border-r md:border-accent/40' : ''}`}
                >
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-48 p-3 bg-accent text-accent-foreground text-xs font-bold rounded-lg shadow-xl opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 pointer-events-none z-20">
                    {stat.tip}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-accent" />
                  </div>

                  <div className="icon-circle mx-auto mb-3 w-12 h-12 transition-transform group-hover:scale-110 group-hover:border-accent">
                    <span className="text-accent-highlight text-base font-black">{stat.letter}</span>
                  </div>
                  
                  <p className="text-2xl md:text-4xl font-black text-primary-foreground">{stat.value}</p>
                  <p className="text-xs font-semibold text-primary-foreground/90 italic mt-1">{stat.label}</p>
                  <p className="text-[10px] text-primary-foreground/60 italic">{stat.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;