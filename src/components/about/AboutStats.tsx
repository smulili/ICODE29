import { Clock, Users, UserCheck, Award, MapPin } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const stats = [
  { icon: Clock, label: "Established", value: "2000", link: "About us", href: "/about#hero" },
  { icon: Users, label: "Client Retention Rate", value: "96%", link: "Approach", href: "/#process" },
  { icon: UserCheck, label: "Clients", value: "950", link: "Results", href: "/results" },
  { icon: Award, label: "Net Promoter Score", value: "84", link: "Awards", href: "/about#awards" },
  { icon: MapPin, label: "USA Based", value: "100%", link: "Culture", href: "/about#challenges" },
];

const AboutStats = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-black text-foreground mb-12 md:mb-16">
          You'll be in <span className="text-accent-highlight">Good</span> Hands
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-px md:bg-border">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-background p-4 md:p-8 text-center md:border-l md:border-border md:first:border-l-0">
              <div className="icon-circle mx-auto mb-4">
                <stat.icon size={24} />
              </div>
              <p className="text-sm text-muted-foreground font-semibold mb-2">{stat.label}</p>
              <p className="text-2xl md:text-4xl font-black text-accent-highlight mb-3 md:mb-4">{stat.value}</p>
              
              {/* Changed to <a> tag to support direct anchor navigation to sections */}
              <a href={stat.href} className="text-accent-highlight font-bold text-sm flex items-center justify-center gap-1 hover:gap-2 transition-all">
                {stat.link} <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutStats;