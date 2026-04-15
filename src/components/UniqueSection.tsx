import { useEffect } from "react"; // Added for scroll logic
import { useLocation } from "react-router-dom"; // Added for scroll logic
import { ClipboardList, Heart, Users, Zap } from "lucide-react";

const values = [
  {
    icon: ClipboardList,
    title: "Business-First Approach",
    description:
      "Our strategic technology consulting centers on understanding your overall business goals and challenges, both inside and out, before writing a single line of code.",
  },
  {
    icon: Heart,
    title: "Innovation with Intention",
    description:
      "We strike the right balance between technical innovation and business impact, delivering custom solutions that are practical for your team and valuable to your users.",
  },
  {
    icon: Users,
    title: "Authentic & Caring Partner",
    description:
      "We build lasting, trust-based relationships by staying closely engaged throughout the entire project, treating your challenges as our own and your successes as shared victories.",
  },
  {
    icon: Zap,
    title: "Accelerate Time to Market",
    description:
      "We earn trust through outcomes, not promises. Orases accelerates your time-to-ROI with intelligent strategy and disciplined execution, delivering speed without sacrificing quality.",
  },
];

const UniqueSection = () => {
  // Logic to handle cross-page scrolling
  const { hash } = useLocation();

  useEffect(() => {
    if (hash === "#unique") {
      const element = document.getElementById("unique");
      if (element) {
        // Timeout handles the slight delay in page rendering
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [hash]);

  return (
    // Added id="unique" and scroll-mt-24
    <section id="unique" className="py-24 bg-background font-sans scroll-mt-24">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header Section */}
        <div className="grid md:grid-cols-2 gap-10 lg:gap-20 mb-20 items-start">
          <h2 className="text-4xl md:text-6xl font-black text-foreground mb-16 leading-tight">
            Your Business<br />
            is <span className="text-highlight">Unique</span>. So Are<br />
            We.
          </h2>
          
          <p className="text-xl md:text-2xl font-light text-muted-foreground leading-relaxed mt-2">
            The right software development partner <br className="hidden lg:block" />
            can change everything.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-14">
          {values.map((val) => (
            <div key={val.title} className="flex gap-6">
              <div className="shrink-0 w-14 h-14 rounded-full border-2 border-highlight flex items-center justify-center text-highlight shadow-sm">
                <val.icon size={26} strokeWidth={2.5} />
              </div>
              
              <div className="space-y-3">
                <h3 className="text-2xl font-black text-foreground tracking-tight">
                  {val.title}
                </h3>
                
                <p className="text-lg text-muted-foreground font-medium leading-relaxed">
                  {val.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UniqueSection;