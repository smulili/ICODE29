import { ArrowRight, Car, Leaf, Lightbulb, Landmark, Heart, Building2, Shield, Truck, Film, Factory, Droplets, Briefcase, UtensilsCrossed, ShoppingCart, ShoppingBag, Trophy, Plane } from "lucide-react";
import { Link } from "react-router-dom";
import automotiveImg from "@/assets/industry-automotive.jpg";
import cannabisImg from "@/assets/industry-cannabis.jpg";
import energyImg from "@/assets/industry-energy.jpg";
import fintechImg from "@/assets/industry-fintech.jpg";
import healthcareImg from "@/assets/industry-healthcare.jpg";
import hospitalityImg from "@/assets/industry-hospitality.jpg";
import insuranceImg from "@/assets/industry-insurance.jpg";
import logisticsImg from "@/assets/industry-logistics.jpg";
import manufacturingImg from "@/assets/industry-manufacturing.jpg";
import sportsImg from "@/assets/industry-sports.jpg";
import retailImg from "@/assets/industry-retail.jpg";

const industries = [
  { icon: Car, name: "Automotive", id: "automotive", image: automotiveImg, description: "Whether it's integrating advanced ERP systems, developing CRM platforms, or implementing cutting-edge manufacturing execution systems, our services and solutions are designed to meet the dynamic needs of the automotive sector.", link: "View All Services & Solutions For The Automotive Industry", items: [] },
  { icon: Lightbulb, name: "Energy & Utilities", id: "energy", image: energyImg, description: "From managing complex grid systems to optimizing resource allocation, our software solutions and IT services enable energy companies to harness the power of technology for sustainable growth.", link: "View All Services & Solutions For The Energy & Utilities Industry", items: [] },
  { icon: Landmark, name: "FinTech", id: "fintech", image: fintechImg, description: "From developing advanced payment systems and blockchain technologies to integrating sophisticated data analytics and customer management platforms, our IT services and software solutions are designed to drive innovation and efficiency.", link: "View All Services & Solutions For The FinTech Industry", items: [] },
  { icon: Heart, name: "Healthcare", id: "healthcare", image: healthcareImg, description: "Our custom software developers have years of experience designing and developing unique and secure healthcare software which improves internal process efficiency, patient experience and adheres to regulations set for the healthcare industry.", link: "View All Services & Solutions For The Healthcare Industry", items: ["Software Development", "Mobile App Development", "IT Consulting", "Data Analytics", "IoT Solutions", "EHR Integration", "Billing Software", "Claims Management Software", "Condition Monitoring Software", "EHR Software", "EMR Software", "HIPAA Compliant Applications", "Patient Engagement Solutions", "Patient Portals", "Telemedicine Software", "Workflow Automation Software"] },
  { icon: Building2, name: "Hospitality", id: "hospitality", image: hospitalityImg, description: "Hospitality organizations can gain a significant advantage with a custom software solution that enables customers to connect directly with their brand and encourages customer loyalty.", link: "View All Services & Solutions For The Hospitality Industry", items: [] },
  { icon: Shield, name: "Insurance", id: "insurance", image: insuranceImg, description: "Our insurance solutions and services improve upon the way insurance agencies are able to process claims and serve policyholders. Our custom software enhances user experience and streamlines policy management and claims processes.", link: "View All Services & Solutions For The Insurance Industry", items: ["Claims Management Software", "CRM Software", "ERP Software", "Mobile Applications", "Policy Administration Systems", "Policy Management Systems", "Quoting Software", "Workflow Automation Software"] },
  { icon: Truck, name: "Logistics & Transportation", id: "logistics", image: logisticsImg, description: "Our custom software solutions improve the way businesses within the logistics industry are able to plan and execute the delivery and shipment of their products.", link: "View All Services & Solutions For Logistics & Transportation", items: [] },
  { icon: Film, name: "Media & Entertainment", id: "media", image: sportsImg, description: "The ability to engage audiences and spread content in mass is vitally important for companies within the media & entertainment industry. Our custom software streamlines the content distribution process and provides companies with useful analytics.", link: "View All Services & Solutions For The Media & Entertainment Industry", items: [] },
  { icon: Factory, name: "Manufacturing", id: "manufacturing", image: manufacturingImg, description: "Here at InvCode 29, we have years of experience developing custom software solutions which streamline processes and workflows for companies which operate within the manufacturing industry.", link: "View All Services & Solutions For The Manufacturing Industry", items: ["EDI Software", "Equipment Management Software", "Equipment Monitoring Systems", "ETO Manufacturing Software", "Inventory Management Software", "Manufacturing CRM Software", "Manufacturing ERP Software", "Manufacturing Execution Systems", "Order Management Systems", "Production Scheduling Software", "Supply Chain Management Software", "Warehouse Management Systems"] },
  { icon: Droplets, name: "Oil & Gas", id: "oil-gas", image: energyImg, description: "InvCode 29 develops custom software for the oil & gas industry that meets their specific regulations and requirements, as well as enhances operations such as inventory management and data analytics to make informed decisions.", link: "View All Services & Solutions For The Oil & Gas Industry", items: [] },
  { icon: Briefcase, name: "Professional Services", id: "professional-services", image: insuranceImg, description: "Professionals who work within the professional services sector need to be able to effectively communicate and continuously increase their client base. Our custom software solutions provide professionals the ability to streamline communication, convert leads and much more.", link: "View All Services & Solutions For The Professional Services Industry", items: [] },
  { icon: UtensilsCrossed, name: "Restaurants", id: "restaurants", image: hospitalityImg, description: "Our custom software developers have an extensive history of developing custom software and providing services to the restaurant industry. With our innovative custom software, restaurants are able to streamline processes and continuously increase profits.", link: "View All Services & Solutions For The Restaurant Industry", items: [] },
  { icon: ShoppingCart, name: "Retail", id: "retail", image: retailImg, description: "The custom software we develop for the retail industry is designed with the user in mind and is developed to convert users into leads. We have years of experience developing software which promotes customer acquisition and is highly responsive across all types of devices.", link: "View All Services & Solutions For The Retail Industry", items: [] },
  { icon: ShoppingBag, name: "Shopper Marketing", id: "shopper-marketing", image: retailImg, description: "At InvCode 29, our experts have an extensive history collaborating with major retailers and consumer packaged goods companies creating and executing strategic shopper marketing programs that effectively address client needs while integrating both brand and retailer goals and objectives.", link: "View Our Shopper Marketing Services", items: [] },
  { icon: Trophy, name: "Sports", id: "sports", image: sportsImg, description: "Our services we offer give sports organizations a leg up on the competition and the custom software we develop for the sports industry provide an unparalleled level of features and functionality.", link: "View All Services & Solutions For The Sports Industry", items: [] },
  { icon: Plane, name: "Travel", id: "travel", image: hospitalityImg, description: "From airlines to travel agencies, InvCode 29 can provide a comprehensive software solution for any specialty organization in the travel industry.", link: "View All Services & Solutions For The Travel Industry", items: [] },
];

const IndustriesDetails = () => {
  return (
    <section>
      {industries.map((ind, index) => (
        <div
          key={ind.name}
          id={ind.id}
          className={`py-16 ${index % 2 === 0 ? "bg-background" : "bg-secondary"}`}
        >
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Left: content */}
              <div className={index % 2 !== 0 ? "md:order-2" : ""}>
                <div className="icon-circle mb-6">
                  <ind.icon size={28} />
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-foreground mb-4">{ind.name}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{ind.description}</p>
                <Link to="#p" className="text-[#2590b1]  font-bold flex items-center gap-2 hover:gap-3 transition-all mb-6">
                  {ind.link} <ArrowRight size={16} />
                </Link>
                {ind.items.length > 0 && (
                  <div className="grid grid-cols-2 gap-x-6 gap-y-2 mt-4">
                    {ind.items.map((item) => (
                      <Link key={item} to="#p" className="flex items-start gap-2 text-sm text-[#2590b1]  font-semibold hover:underline py-1">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                        {item}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Right: image */}
              <div className={`rounded-xl overflow-hidden ${index % 2 !== 0 ? "md:order-1" : ""}`}>
                <img
                  src={ind.image}
                  alt={ind.name}
                  className="w-full h-64 md:h-80 object-cover rounded-xl"
                  loading="lazy"
                  width={768}
                  height={512}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default IndustriesDetails;
