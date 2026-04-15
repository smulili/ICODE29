import { Clock, Users, Award, Star, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const stats = [
  { icon: Clock, label: "Established", value: "2000", link: "/about", linkLabel: "About us" },
  { icon: Users, label: "Client Retention Rate", value: "96%", link: "/about", linkLabel: "Approach" },
  { icon: Award, label: "Clients", value: "950", link: "/results", linkLabel: "Results" },
  { icon: Star, label: "Net Promoter Score", value: "84", link: "/about", linkLabel: "Awards" },
  { icon: MapPin, label: "USA Based", value: "100%", link: "/about", linkLabel: "Culture" },
];

const StatsSection = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-black text-foreground mb-16">
          You'll be in <span className="text-accent-highlight">Good</span> Hands
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center ${i > 0 ? "border-l border-border" : ""} px-4`}
            >
              <div className="icon-circle mx-auto mb-4">
                <stat.icon size={22} />
              </div>
              <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
              <p className="text-3xl font-black text-accent-highlight mb-3">{stat.value}</p>
              <Link
                to={stat.link}
                className="text-sm font-semibold text-foreground hover:text-highlight transition-colors flex items-center justify-center gap-1"
              >
                {stat.linkLabel} <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
