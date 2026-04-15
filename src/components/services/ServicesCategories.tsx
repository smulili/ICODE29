import { ArrowRight, Code2, Globe, Smartphone, Palette, CheckCircle, GraduationCap, Link2, Building2, Cpu, BarChart3, Bot } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceCategory {
  icon: React.ElementType;
  title: string;
  id: string;
  description: string;
  linkText: string;
  items: string[];
  bgLight?: boolean;
}

const categories: ServiceCategory[] = [
  {
    icon: Code2,
    title: "Software Development",
    id: "software-development",
    description: "Our software development solutions allow companies to bring their ideas to life as quickly and efficiently as possible. We are committed to helping organizations grow through the creation of unique software that can be used to benefit individuals, families, industries or the entire business landscape.",
    linkText: "View Software Development Services",
    items: ["Custom Software", "Human Machine Interface", "Big Data", "AI & Machine Learning", "Blockchain", "Data Analytics & Visualization", "Internet of Things", "Business Intelligence"],
    bgLight: true,
  },
  {
    icon: Globe,
    id: "web-app-development",
    title: "Web App Development",
    description: "InvCode 29 creates tailor-made, highly functional applications that cater to our clients' unique needs. We employ cutting-edge technologies to develop custom web applications that feature seamless integration, enhanced user experience and robust security to drive digital transformation.",
    linkText: "View Web App Development Services",
    items: ["Asset Management Software", "Audit Software", "Automated Billing Software", "Business Process Automation", "Case Management Software", "Claims Management Software", "Cloud App Development", "CRM Software", "E-Commerce Applications", "EHR Software", "Enterprise Applications", "ERP Software", "ETO Software", "Grant Management Software", "HIPAA Compliant Applications", "Inventory Management Software", "Laboratory Information Management Systems", "Manufacturing Execution Systems", "Order Management Systems", "Patient Engagement Software", "Payment Processing Software", "Production Scheduling Software", "Route Optimization Software", "SaaS Applications", "SaaS Integration Platforms", "Supply Chain Management Software", "Telemedicine Software", "Transportation Management Software", "Warehouse Management Systems", "Yard Management Software"],
  },
  {
    icon: Smartphone,
    id: "mobile-app-development",
    title: "Mobile App Development",
    description: "We know what it takes to build an ideal mobile app. With over 300+ successful projects under our belts, InvCode 29 is a mobile app development company that offers full-cycle development services tailored to your business needs. From ideation to publishing — we have you covered all the way.",
    linkText: "View Mobile App Development Services",
    items: ["Android", "Cross Platform", "Hybrid", "iOS", "Native", "Payment", "SaaS", "Social Media"],
    bgLight: true,
  },
  {
    icon: Palette,
    id: "ui-ux-design",
    title: "UI/UX Design",
    description: "Our UX/UI Development and Design team holds over ten years of experience in web application development. We strive to provide the optimal experience for your target audience. Based on market knowledge of users interacting with apps, our team uses proven and efficient methods to provide end-users an easy and enjoyable experience.",
    linkText: "View UI/UX Development Services",
    items: ["AI & ML PoC Development", "Software Design", "Software Prototyping", "User Experience / UX Design", "User Interface / UI Design", "Web Design"],
  },
  {
    icon: CheckCircle,
    id: "qa-testing", // Fixed to match navbar slugify "QA & Testing"
    title: "Testing & QA",
    description: "The testing & QA services we provide give businesses the ability to focus on their operations, knowing their software is up and functional at all times. We also provide support and maintenance to ensure continuous success and improvements to your software.",
    linkText: "View Testing & QA Services",
    items: ["Maintenance & Support", "Testing & QA", "Third-Party Applications"],
    bgLight: true,
  },
  {
    icon: GraduationCap,
    id: "consulting-advisory",
    title: "Consulting & Advisory",
    description: "Through our professional advisory services, businesses are provided with the benefit of receiving expert consulting from experienced IT specialists on how to utilize new technologies, improve business processes with custom software, set up or migrate to new IT infrastructures and much more.",
    linkText: "View Consulting & Advisory Services",
    items: ["AI & ML Solution Delivery", "Artificial Intelligence & Machine Learning", "Business Intelligence", "Business Technology", "Cloud Strategy", "Cybersecurity", "Database", "Data Science", "Healthcare Data Analytics", "Integration", "Product Strategy", "Software-as-a-Service", "Software Expert Witness"],
  },
  {
    icon: Link2,
    id: "apis-integration", // Fixed to match navbar slugify "APIs & Integration"
    title: "Integration & Modernization",
    description: "Our expert software integration & modernization services help businesses seamlessly connect legacy systems with modern applications. By leveraging the latest technologies, we enable clients to optimize workflows, reduce complexities and enhance overall system performance.",
    linkText: "View Integration & Modernization Services",
    items: ["Application Modernization", "Application Modernization Consulting Services", "Application Reengineering Services", "Data Modernization Services", "EHR Integration", "Legacy Systems", "Product Enhancements", "Product Modernization", "Replatforming", "System Integration"],
    bgLight: true,
  },
  {
    icon: Building2,
    id: "infrastructure-management", // Fixed to match navbar slugify "Infrastructure Management"
    title: "Infrastructure Services",
    description: "Our infrastructure management services help businesses effectively manage their IT infrastructures and IT-related processes by providing guidance and assistance when planning, managing or changing their IT infrastructure.",
    linkText: "View Infrastructure Services",
    items: ["Cloud Infrastructure", "DevOps & DevSecOps", "Hybrid Infrastructure", "IoT Solutions", "IoT Solutions (Healthcare)", "Network Security", "On-Premises Infrastructure", "Security & Compliance"],
  },
  {
    icon: Cpu,
    id: "ai-ml-development", // Fixed to match navbar slugify "AI & ML Development"
    title: "AI & Machine Learning Services",
    description: "Our expert AI & machine learning services help businesses leverage cutting-edge technologies to automate processes, gain insights, and drive innovation. We enable clients to optimize workflows, reduce complexities and enhance overall performance.",
    linkText: "View AI & Machine Learning Services",
    items: ["AI Data Management", "Big Data Development & Consulting", "Business Intelligence", "Data Analytics & Visualization", "Data Science", "Generative AI Readiness & Strategy", "RAG-as-a-Service (RaaS)"],
    bgLight: true,
  },
  {
    icon: BarChart3,
    id: "data-strategy",
    title: "Data Strategy Services",
    description: "InvCode 29 helps organizations turn data into a strategic asset by building tailored strategies that enhance decision-making, streamline operations, and enable innovation. From data governance to AI readiness, we provide the tools and expertise needed to unlock the full potential of your data.",
    linkText: "View Data Strategy Services",
    items: ["Data Governance Program", "Data Strategy Refinement & Execution", "Data Strategy Workshop", "Executive Advisory Services", "Tool, Technology & Architecture Recommendations"],
  },
  {
    icon: Bot,
    id: "ai-agent-development",
    title: "AI Agent Development",
    description: "Take your business operations to the next level with custom AI agents that learn, adapt, and optimize across your organization. From simple task automation to sophisticated multi-agent systems, InvCode 29 develops intelligent solutions that tighten processes, simplify decision-making, and drive organizational results.",
    linkText: "View AI Agent Development Services",
    items: [],
    bgLight: true,
  },
];

const ServicesCategories = () => {
  return (
    <div>
      {categories.map((cat) => (
        <section
          key={cat.title}
          id={cat.id}
          className={cat.bgLight ? "bg-card py-16" : "bg-background py-16"}
        >
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex items-center gap-4 mb-12">
              <div className="icon-circle shrink-0">
                <cat.icon size={24} />
              </div>
              <div className="flex-1 h-px bg-border" />
            </div>

            <div className="flex flex-col lg:flex-row gap-12">
              <div className="lg:w-5/12">
                <h2 className="text-3xl md:text-5xl font-black text-foreground mb-16 leading-tight">
                  {cat.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  {cat.description}
                </p>
                <Link
                  to={`/services#${cat.id}`}
                  className="inline-flex items-center gap-2 font-bold text-sm text-accent-highlight hover:gap-3 transition-all"
                >
                  {cat.linkText} <ArrowRight size={16} />
                </Link>
              </div>

              {cat.items.length > 0 && (
                <div className="lg:w-7/12">
                  <div className="grid grid-cols-2 gap-x-12 gap-y-4">
                    {cat.items.map((item) => (
                      <Link
                        key={item}
                        to={`/services#${cat.id}`}
                        className="flex items-start gap-4 group"
                      >
                        <span className="w-2 h-2 rounded-full bg-accent shrink-0 mt-[10px]" />
                        <span className="text-[#2590b1] text-sm font-bold leading-tight group-hover:underline decoration-1 underline-offset-4">
                          {item}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default ServicesCategories;