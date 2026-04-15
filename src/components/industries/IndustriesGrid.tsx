import { 
  ArrowRight, Car, Leaf, Lightbulb, Landmark, Heart, 
  Building2, Shield, Truck, Film, Factory, Droplets, 
  Briefcase, UtensilsCrossed, ShoppingCart, ShoppingBag, 
  Trophy, Plane 
} from "lucide-react";

const industries = [
  { icon: Car, name: "Automotive", id: "automotive" },
  { icon: Leaf, name: "Cannabis", id: "cannabis" },
  { icon: Lightbulb, name: "Energy & Utilities", id: "energy" },
  { icon: Landmark, name: "FinTech", id: "fintech" },
  { icon: Heart, name: "Healthcare", id: "healthcare" },
  { icon: Building2, name: "Hospitality", id: "hospitality" },
  { icon: Shield, name: "Insurance", id: "insurance" },
  { icon: Truck, name: "Logistics & Transportation", id: "logistics" },
  { icon: Film, name: "Media & Entertainment", id: "media" },
  { icon: Factory, name: "Manufacturing", id: "manufacturing" },
  { icon: Droplets, name: "Oil & Gas", id: "oil-gas" },
  { icon: Briefcase, name: "Professional Services", id: "professional-services" },
  { icon: UtensilsCrossed, name: "Restaurant", id: "restaurants" },
  { icon: ShoppingCart, name: "Retail", id: "retail" },
  { icon: ShoppingBag, name: "Shopper Marketing", id: "shopper-marketing" },
  { icon: Trophy, name: "Sports", id: "sports" },
  { icon: Plane, name: "Travel", id: "travel" },
];

const IndustriesGrid = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 bg-white font-sans overflow-hidden">
      <div className="container mx-auto px-4 lg:px-12">
        {/* Orases-Style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind, index) => {
            const isLastInRowLg = (index + 1) % 3 === 0;
            const isLastInRowMd = (index + 1) % 2 === 0;

            return (
              <button
                key={ind.name}
                onClick={() => scrollTo(ind.id)}
                className={`
                  group flex flex-col items-start justify-center px-10 py-12 transition-all duration-300 
                  cursor-pointer bg-white hover:bg-[#F8FAFB] border-b border-gray-200 text-left
                  ${!isLastInRowMd ? "md:border-r" : "md:border-r-0"}
                  ${!isLastInRowLg ? "lg:border-r" : "lg:border-r-0"}
                `}
              >
                {/* Icon Circle: Accent Lime Green (#d4e157) */}
                <div className="w-14 h-14 rounded-full border-[3px] border-[#d4e157] flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-[#d4e157] group-hover:scale-105">
                  <ind.icon size={24} className="text-[#d4e157] group-hover:text-white transition-colors duration-300" />
                </div>
                
                {/* Title & Arrow Grouping */}
                <div className="flex items-center gap-3 whitespace-nowrap">
                  {/* Title: Brand Blue (#2590b1) as in Services */}
                  <span className="text-lg md:text-xl xl:text-2xl font-black text-[#2590b1] tracking-tight uppercase">
                    {ind.name}
                  </span>
                  
                  {/* Arrow: Accent Lime Green (#d4e157) */}
                  <ArrowRight 
                    size={22} 
                    strokeWidth={3}
                    className="text-[#d4e157] shrink-0 transition-transform duration-300 group-hover:translate-x-2" 
                  />
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IndustriesGrid;