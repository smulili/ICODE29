import { Handshake, Award, CheckCircle, Users, Building2, Lightbulb } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const values = [
  {
    icon: Handshake,
    title: "100% Transparency & Clarity",
    description: "No surprises. No hidden fees. With full project clarity, you know exactly where your investment goes. Transparency fosters the trust that underpins every successful partnership.",
  },
  {
    icon: Award,
    title: "25+ Years Delivering Results",
    description: "Our depth of experience allows us to tackle complex challenges with confidence, anticipate risks before they arise, and deliver solutions that create lasting value.",
  },
  {
    icon: CheckCircle,
    title: "Quality that Drives ROI",
    description: "Every feature we build is intentional, purposeful, and designed to create measurable value. Success comes from building the right solutions, the right way.",
  },
  {
    icon: Users,
    title: "Passionate US-Based Experts",
    description: "When you work with InvCode 29, you gain an experienced U.S.-based team of passionate problem solvers who thrive on collaboration, creativity, and delivering excellence.",
  },
  {
    icon: Building2,
    title: "Cross-Industry Perspective",
    description: "Our team has solved unique challenges across diverse industries, giving us the insights to bring fresh ideas, proven practices, and innovative approaches to your vision.",
  },
  {
    icon: Lightbulb,
    title: "Committed to Your Success",
    description: "Our commitment extends beyond launch, ensuring your team is realizing value. We make sure your solution evolves, performs, and delivers ROI for years to come.",
  },
];

const AboutValues = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          {values.map((v) => (
            <div key={v.title}>
              <div className="icon-circle mb-6">
                <v.icon size={24} />
              </div>
              <h3 className="text-xl font-black text-foreground mb-4">{v.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{v.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <Link to="/#unique" className="text-[#2590b1] font-bold flex items-center gap-2 hover:gap-3 transition-all">
            Your Business is Unique, So Are We <ArrowRight size={16} />
          </Link>
        </div>

        <div className="mt-12 text-center">
          <Link to="/services" className="inline-flex items-center gap-2 px-12 py-5 rounded-full font-bold text-sm text-primary-foreground bg-primary hover:bg-primary/90 transition-all">
            Let's Build Your Vision Together
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutValues;
