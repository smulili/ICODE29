import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const IndustriesIntro = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-foreground leading-tight">
              Custom Solutions<br />For Unique<br />Challenges
            </h2>
            <p className="mt-6 text-lg text-muted-foreground italic leading-relaxed">
              IT services & software solutions designed to address the specific needs and requirements of your industry.
            </p>
          </div>
          <div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Our deep industry knowledge allows us to understand and address your specific challenges effectively, ensuring our IT services and custom software we develop lead to increased efficiencies and unlimited growth potential.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              InvCode 29's seasoned industry teams bring years of experience across various sectors, equipping them with insights into your industry's unique challenges and pain points.
            </p>
            <Link to="/#process" className="text-accent-highlight font-bold flex items-center gap-2 hover:gap-3 transition-all">
              See how we approach these challenges <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesIntro;
