import { 
  ArrowRight, Palmtree, Car, Lightbulb, Image, Heart, Building2, 
  Coins, BedDouble, ShieldCheck, Factory, HandHeart, Briefcase, 
  ShoppingBag, Trophy 
} from "lucide-react";
import { Link } from "react-router-dom";

const industries = [
  { icon: Palmtree, name: "Agriculture" },
  { icon: Car, name: "Automotive" },
  { icon: Lightbulb, name: "Energy & Utilities" },
  { icon: Image, name: "Entertainment" },
  { icon: Coins, name: "FinTech" },
  { icon: Heart, name: "Healthcare" },
  { icon: BedDouble, name: "Hospitality" },
  { icon: ShieldCheck, name: "Insurance" },
  { icon: Factory, name: "Manufacturing" },
  { icon: HandHeart, name: "Nonprofit" },
  { icon: Briefcase, name: "Professional Services" },
  { icon: Building2, name: "Real Estate" },
  { icon: ShoppingBag, name: "Retail" },
  { icon: Trophy, name: "Sports" },
];

const IndustriesSection = () => {
  return (
    <section className="py-24 bg-background font-sans">
      <div className="container mx-auto px-6 lg:px-12">
        
        <div className="grid lg:grid-cols-2 gap-12 mb-20 items-start">
          <div>
            <h2 className="text-4xl md:text-6xl font-black text-foreground mb-16 leading-tight">
              <span className="text-highlight">Solving</span> Complex<br />
              Business Challenges
            </h2>
            
            <p className="mt-8 text-xl md:text-2xl text-muted-foreground italic font-serif leading-snug max-w-xl">
              Your company is unique, and our custom software & AI solutions are designed to fit it perfectly.
            </p>
          </div>
          
          <div className="lg:pt-4">
            <p className="text-2xl md:text-3xl text-slate-500 font-light leading-relaxed tracking-tight max-w-xl">
    We leverage cross-industry experience and hands-on engineering expertise to understand your
              business challenges and build custom software and AI solutions that drive measurable results.
  </p>
          </div>
        </div>

        {/* TABLE UPDATES:
            - Removed outer borders and overflow-hidden.
            - Increased columns to 4/5 for significantly smaller tiles.
        */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {industries.map((ind) => (
            <Link
              key={ind.name}
              to="/industries"
              /* - Reduced padding to p-4.
                 - border-b and border-r create the internal "table" lines.
                 - No background color so it sits transparently on the page.
              */
              className="p-4 md:p-6 flex flex-col items-start gap-4 hover:bg-slate-50 transition-all group border-b border-r border-border min-h-[140px]"
            >
              {/* Scaled down icon to match smaller tile size */}
              <div className="w-10 h-10 rounded-full border-2 border-highlight flex items-center justify-center text-highlight group-hover:scale-110 transition-transform bg-white shadow-sm">
                <ind.icon size={20} strokeWidth={2.5} />
              </div>
              
              <span className="text-[hsl(190,60%,45%)] text-sm font-black flex items-center gap-1 group-hover:gap-3 transition-all leading-tight tracking-tight uppercase">
                {ind.name} 
                <ArrowRight size={14} className="text-highlight" />
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link 
            to="/industries" 
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-12 py-5 rounded-full font-bold text-lg transition-all duration-300 hover:bg-highlight hover:text-primary group shadow-lg"
          >
            Our Industry Experience <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;