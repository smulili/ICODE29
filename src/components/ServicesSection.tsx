import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Web App Development",
    description:
      "Engineering powerful, AI-native web applications that solve complex problems and perform flawlessly across every screen to directly impact the metrics that matter most.",
  },
  {
    title: "Mobile App Development",
    description:
      "Developing high-performance native, cross-platform, and hybrid mobile apps designed to deliver seamless user experiences and real business impact on both iOS and Android.",
  },
  {
    title: "APIs & Integrations",
    description:
      "Eliminating data silos and operational friction by integrating core platforms, streamlining data flows, and enabling seamless interoperability across proprietary and third-party systems.",
  },
  {
    title: "User Experience & Design",
    description:
      "Crafting intuitive, data-driven interfaces that elevate adoption, usability, engagement, and retention, transforming every interaction into a seamless software experience.",
  },
  {
    title: "Legacy Modernization",
    description:
      "Transforming legacy technology into scalable digital platforms that power innovation, unlock new revenue, and accelerate business velocity.",
  },
  {
    title: "Data Strategy & Analytics",
    description:
      "Unlocking the full value of your data with AI-ready frameworks, fortified integrity, and clear visual analytics that power confident, data-driven decisions.",
  },
  {
    title: "AI Strategy & Consulting",
    description:
      "Helping organizations cut through AI confusion and FOMO to deliver a feasible, high-impact implementation roadmap that turns AI from a buzzword into a business advantage.",
  },
  {
    title: "AI Solution Development",
    description:
      "Designing and deploying custom AI features & functionality using advanced prompt engineering, RAG systems, and fine-tuned machine learning models built on your data.",
  },
  {
    title: "Custom AI Agents",
    description:
      "Automating business processes with intelligent AI agents that integrate seamlessly within your systems, from simple task automation to sophisticated multi-agent operations.",
  },
];

const ServicesSection = () => {
  return (
    // Section background uses your --secondary (Grey: hsl(210 20% 97%))
    <section id="services" className="py-24 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-black text-foreground mb-16 leading-tight">
          Software Development & AI <span className="text-highlight">Services</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              // Tiles use your --background (White: hsl(0 0% 100%))
              className="bg-background rounded-[2.5rem] p-10 shadow-sm hover:shadow-xl transition-all duration-300 border border-border group"
            >
              {/* Title color uses your blended blue HSL */}
              <h3 className="text-2xl font-bold text-[hsl(190,60%,45%)] mb-4 leading-tight">
                {service.title}
              </h3>
              
              {/* Line uses your --highlight (Lime: hsl(65 99% 42%)) */}
              <div className="w-12 h-1 bg-highlight mb-8 rounded-full" />
              
              <p className="text-muted-foreground leading-relaxed text-lg">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link 
            to="/services" 
            // Button Base: bg-primary (#243846 equivalent in your root)
            // Hover: bg-highlight (The green blend) and shifts text to primary color
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:bg-highlight hover:text-primary hover:scale-105 group shadow-sm hover:shadow-lg"
          >
            Explore All Services 
            <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;