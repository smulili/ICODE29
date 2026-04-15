import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ResultsHero = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h1 className="text-4xl md:text-6xl font-black text-foreground leading-tight">
              Transforming<br />
              Vision into<br />
              <span className="text-accent-highlight">Business Results</span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground italic">
              Explore real client results.
            </p>
          </div>
          <div>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              We earn trust through outcomes, not promises. Our 5-star reviews and client testimonials reflect the impact we deliver to our clients every day.
            </p>
            <Link
              to="/services"
              className="mt-6 text-accent-highlight font-bold flex items-center gap-2 hover:gap-3 transition-all text-lg"
            >
              Work With Us <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsHero;
