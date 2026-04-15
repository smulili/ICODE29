import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

// Standardized Image Imports
import nflCaseImg from "@/assets/case-nfl.jpg";
import nprCaseImg from "@/assets/case-npr.jpg";
import healthcareCaseImg from "@/assets/case-healthcare.jpg";
import fintechCaseImg from "@/assets/case-fintech.jpg";
import consultingCaseImg from "@/assets/case-consulting.jpg";
import cannabisCaseImg from "@/assets/industry-cannabis.jpg";

const ResultsSection = () => {
  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="flex flex-col gap-6">
            <div className="bg-section-dark rounded-xl p-12 flex flex-col justify-center flex-1">
              <h2 className="text-3xl md:text-4xl font-black text-primary-foreground leading-tight">
                Proven <span className="text-accent-highlight">Results</span><br />
                Executed at Speed
              </h2>
              <Link
                to="/results"
                className="mt-6 text-accent-highlight font-semibold flex items-center gap-2 hover:gap-3 transition-all"
              >
                All Results <ArrowRight size={16} />
              </Link>
            </div>
            
            {/* Case 1: NFL */}
            <Link to="/results" className="group relative rounded-xl overflow-hidden h-64 block bg-black">
              {/* This inner div handles the fast hover zoom */}
              <div className="w-full h-full transition-transform duration-[1000ms] ease-out group-hover:scale-110">
                <img 
                  src={nflCaseImg} 
                  alt="NFL" 
                  className="w-full h-full object-cover animate-slow-pan" 
                />
              </div>
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-10 text-primary-foreground">
                <span className="bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded">NFL</span>
                <h3 className="text-xl font-bold mt-2 flex items-center gap-2">
                  Software Development <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                </h3>
              </div>
            </Link>
          </div>

          {/* Big Featured Case: MLB */}
          <Link to="/results" className="group relative rounded-xl overflow-hidden min-h-[500px] block bg-black">
            <div className="w-full h-full transition-transform duration-[1500ms] ease-out group-hover:scale-110">
              <img 
                src={nprCaseImg} 
                alt="MLB" 
                className="w-full h-full object-cover animate-slow-pan" 
              />
            </div>
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-700" />
            <div className="absolute bottom-0 left-0 right-0 p-8 z-10 text-primary-foreground">
              <span className="bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded">MLB Pitch, Hit & Run</span>
              <h3 className="text-2xl font-bold mt-3">Registration System</h3>
              <p className="text-sm text-white/70 mt-2 max-w-sm">High-performance digital infrastructure for major league events.</p>
            </div>
          </Link>
        </div>

        {/* Small Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { tag: "Healthcare", title: "Patient Portal", img: healthcareCaseImg },
            { tag: "FinTech", title: "Trading Platform", img: fintechCaseImg },
            { tag: "Consulting", title: "Analytics Hub", img: consultingCaseImg },
            { tag: "Retail", title: "E-Commerce", img: cannabisCaseImg },
          ].map((item) => (
            <Link 
              key={item.title} 
              to="/results" 
              className="group relative rounded-xl overflow-hidden h-48 bg-black flex flex-col justify-end p-4 block"
            >
              <div className="absolute inset-0 transition-transform duration-1000 group-hover:scale-110">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover opacity-50 animate-slow-pan"
                />
              </div>
              <div className="relative z-10 text-primary-foreground">
                <span className="bg-accent text-accent-foreground text-xs font-bold px-2 py-0.5 rounded w-fit mb-2 block">{item.tag}</span>
                <h3 className="text-sm font-bold">{item.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;