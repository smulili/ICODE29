import { useEffect } from "react"; // Added for scroll logic
import { useLocation } from "react-router-dom"; // Added for scroll logic
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import processDiscovery from "@/assets/process-discovery.jpg";
import processPrototype from "@/assets/process-prototype.jpg";
import processDevops from "@/assets/process-devops.jpg";

const steps = [
  {
    num: "01",
    image: processDiscovery,
    title: "Free Pre-Project Discovery",
    description:
      "We provide a complimentary project discovery—an engagement other firms typically charge for—that translates your vision into a practical software solution with a validated scope, cost, and timeline so we can execute with clarity and confidence.",
  },
  {
    num: "02",
    image: processPrototype,
    title: "Rapid Product Prototyping",
    description:
      "Orases rapidly transforms your vision into a clickable prototype to ensure we're solving the right problem from day one. This early alignment drives better software development outcomes, accelerates time-to-market, and gets you to ROI faster.",
  },
  {
    num: "03",
    image: processDevops,
    title: "Feature Development & DevOps",
    description:
      "Our developers turn your prototype into a high-performance platform or application, powered by AI-enabled development practices that elevate code quality, strengthen documentation, accelerate debugging, automate testing, and optimize CI/CD pipelines.",
  },
];

const ProcessSection = () => {
  // Logic to handle cross-page scrolling
  const { hash } = useLocation();

  useEffect(() => {
    if (hash === "#process") {
      const element = document.getElementById("process");
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [hash]);

  return (
    <section id="process" className="py-24 bg-secondary font-sans scroll-mt-24">
      <div className="container mx-auto px-6 lg:px-12">
        
        <div className="max-w-4xl mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-foreground leading-[1.05] tracking-tight">
            Accelerating Your <span className="text-highlight">Vision</span><br />
            from Idea to Launch
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {steps.map((step) => (
            <div key={step.num} className="relative group pt-10">
              
              <div className="absolute top-0 left-10 z-30 w-14 h-14 rounded-full bg-white border-2 border-highlight flex items-center justify-center text-highlight font-black text-xl shadow-md">
                {step.num}
              </div>

              <div className="bg-white rounded-[2.5rem] p-5 pb-12 shadow-sm flex flex-col h-full group-hover:shadow-xl transition-all duration-300">
                
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[1.8rem] mb-10">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover"
                  />
                  
                  <div className="absolute bottom-0 left-0 right-0 bg-[hsl(190,60%,45%)] px-6 py-4 rounded-b-[1.8rem]">
                    <h3 className="text-white font-black text-lg tracking-tight leading-tight">
                      {step.title}
                    </h3>
                  </div>
                </div>

                <div className="px-5 flex-grow">
                  <p className="text-muted-foreground leading-relaxed text-[0.95rem] font-medium">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-12 py-5 rounded-full font-bold text-lg transition-all hover:bg-highlight hover:text-primary group shadow-lg"
          >
            Tell Us Your Vision <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;