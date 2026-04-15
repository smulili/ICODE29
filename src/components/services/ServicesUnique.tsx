import { 
  ArrowRight, Code2, Globe, Smartphone, Palette, 
  CheckCircle, GraduationCap, Link2, Building2, 
  Cpu, BarChart3, Bot 
} from "lucide-react";

const serviceLinks = [
  { icon: Code2, title: "Software Development", id: "software-development" },
  { icon: Globe, title: "Web App Development", id: "web-app-development" },
  { icon: Smartphone, title: "Mobile App Development", id: "mobile-app-development" },
  { icon: Palette, title: "UI/UX Design", id: "ui-ux-design" },
  { icon: CheckCircle, title: "Testing & QA", id: "testing-qa" },
  { icon: GraduationCap, title: "Consulting & Advisory", id: "consulting-advisory" },
  { icon: Link2, title: "Integration & Modernization", id: "integration-modernization" },
  { icon: Building2, title: "Infrastructure Services", id: "infrastructure-services" },
  { icon: Cpu, title: "AI & ML Services", id: "ai-ml-services" },
  { icon: BarChart3, title: "Data Strategy Services", id: "data-strategy" },
  { icon: Bot, title: "AI Agent Development", id: "ai-agent-development" },
];

const ServicesUnique = () => {
  return (
    <section className="py-20 bg-white font-sans overflow-hidden">
      <div className="container mx-auto px-4 lg:px-12">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row gap-8 mb-16">
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-6xl font-black text-foreground mb-16 leading-tight">
              Your <span className="text-accent-highlight">business</span> is unique.
            </h2>
            <p className="text-xl text-muted-foreground italic font-medium">
              We tailor our services to treat it that way.
            </p>
          </div>
          
          <div className="lg:w-1/2 flex flex-col justify-start pt-2">
            {/* The "Slim Font" Body Text from your screenshot */}
            <p className="text-[#475569] text-xl font-light leading-relaxed mb-8 max-w-xl">
              Digital technology means something different to each business (and often every person in each business). The scope of what constitutes digital services and solutions is wide and ever-changing.
            </p>
            
            <button className="flex items-center gap-2 font-bold text-base group w-fit transition-colors">
              <div className="relative">
                <span className="text-foreground">Why Choose InvCode 29?</span>
                <div className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#33A7B5] transform origin-left transition-transform duration-300 scale-x-100 group-hover:scale-x-110"></div>
              </div>
              <ArrowRight size={18} className="text-[#33A7B5] transition-transform group-hover:translate-x-2" />
            </button>
          </div>
        </div>

        {/* ORASES GRID: Left-aligned icon, one-line titles, reduced height */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {serviceLinks.map((service, index) => {
            const isLastInRowLg = (index + 1) % 3 === 0;
            const isLastInRowMd = (index + 1) % 2 === 0;

            return (
              <a
                key={service.id}
                href={`#${service.id}`}
                className={`
                  group flex flex-col items-start justify-center px-10 py-10 transition-all duration-300 
                  cursor-pointer bg-white hover:bg-[#F8FAFB] border-b border-gray-200
                  ${!isLastInRowMd ? "md:border-r" : "md:border-r-0"}
                  ${!isLastInRowLg ? "lg:border-r" : "lg:border-r-0"}
                `}
              >
                {/* Icon Circle - Now aligned to the start of the title */}
                <div className="w-14 h-14 rounded-full border-[3px] border-accent-highlight flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-accent-highlight group-hover:scale-105">
                  <service.icon size={24} className="text-accent-highlight group-hover:text-white transition-colors duration-300" />
                </div>
                
                {/* Single Line Text Grouping - Left Aligned */}
                <div className="flex items-center gap-3 whitespace-nowrap">
                  <span className="text-lg md:text-xl xl:text-2xl font-black text-[#33A7B5] tracking-tight">
                    {service.title}
                  </span>
                  <ArrowRight 
                    size={22} 
                    className="text-accent-highlight shrink-0 transition-transform duration-300 group-hover:translate-x-2" 
                  />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesUnique;