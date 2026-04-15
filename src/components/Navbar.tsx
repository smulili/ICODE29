import { useState, useRef, useEffect } from "react";
import { ChevronDown, ChevronUp, ArrowRight, Menu, X } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";

// Helper to convert text to URL-friendly IDs
const slugify = (text: string) => 
  text.toLowerCase()
    .replace(/[&\/\\#,+()$~%.'":*?<>{} ]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');

const Logo = ({ className }: { className?: string }) => (
  <svg viewBox="0 60 920 280" xmlns="http://www.w3.org/2000/svg" className={className}>
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;800&display=swap');
      .terminal-bold { font-family: 'JetBrains Mono', monospace; font-weight: 800; }
      .terminal-light { font-family: 'JetBrains Mono', monospace; font-weight: 300; letter-spacing: 0.5px; }
      @keyframes terminalSnap {
        0%, 49% { fill: #C2D501; opacity: 1; }
        50%, 100% { fill: #777777; opacity: 0.3; }
      }
      .green-blink { animation: terminalSnap 0.8s infinite step-end; }
    `}</style>
    <g transform="translate(45, 10)">
      <circle cx="110" cy="175" r="70" fill="#101C28"/>
      <circle cx="128" cy="75" r="14" fill="#C2D501"/> 
      <rect x="93" y="120" width="22" height="100" className="green-blink" rx="5" transform="rotate(15, 110, 175)"/>
      <text x="112" y="215" className="terminal-bold" fontSize="12" fill="#C2D501">_code29</text>
      <text x="220" y="170" className="terminal-bold" fontSize="95" fill="currentColor">InvCode</text>
      <text x="665" y="170" className="terminal-bold" fontSize="95" fill="#C2D501">29</text>
      <text x="220" y="230" className="terminal-light" fontSize="19" fill="currentColor" opacity="0.8">
        &gt; CONSULTING • INTEGRATIONS • DEVELOPMENT
      </text>
      <rect x="220" y="245" width="560" height="3" fill="#C2D501" opacity="0.2"/>
      <text x="220" y="275" className="terminal-light" fontSize="12" fill="currentColor" opacity="0.7">
        <tspan className="green-blink">[SYSTEM_ACTIVE]</tspan>
        <tspan fill="#777777">: SUPPORT_SERVICES_ONLINE</tspan>
        <tspan className="green-blink">_</tspan>
      </text>
    </g>
  </svg>
);

const whatWeDo = [
  { title: "Strategize", desc: "Define the right outcomes." },
  { title: "Consult", desc: "Turn vision into execution." },
  { title: "Develop", desc: "Build scalable, secure systems." },
  { title: "Manage", desc: "Deliver on time, on budget." },
  { title: "Optimize", desc: "Maximize efficiency & ROI." },
  { title: "Support", desc: "Sustain long-term success." },
];

const servicesList = [
  "Software Development", "Web App Development", "Mobile App Development",
  "APIs & Integration", "AI Consulting", "AI & ML Development",
  "Data Science & Engineering", "UI/UX Design", "Legacy App Modernization",
  "Infrastructure Management", "Rapid Prototyping", "QA & Testing",
];

const customSolutions = [
  "ERP", "CRM", "Web Portals", "E-Commerce", "AI Agents",
  "Workflow Automation", "Analytics & Reporting", "Payment Processing",
  "Security & Compliance", "Cloud", "Internet of Things (IoT)", "Asset Management",
];

const industriesList = [
  { name: "Automotive", id: "automotive" },
  { name: "Energy & Utilities", id: "energy" },
  { name: "FinTech", id: "fintech" },
  { name: "Healthcare", id: "healthcare" },
  { name: "Hospitality", id: "hospitality" },
  { name: "Insurance", id: "insurance" },
  { name: "Logistics & Transportation", id: "logistics" },
  { name: "Manufacturing", id: "manufacturing" },
  { name: "Media & Entertainment", id: "media" },
  { name: "Oil & Gas", id: "oil-gas" },
  { name: "Professional Services", id: "professional-services" },
  { name: "Restaurants", id: "restaurants" },
  { name: "Retail", id: "retail" },
  { name: "Shopper Marketing", id: "shopper-marketing" },
  { name: "Sports", id: "sports" },
  { name: "Travel", id: "travel" },
];

const aboutList = [
  { name: "Approach", id: "process", path: "/" },
  { name: "Awards", id: "awards", path: "/about" },
  { name: "Careers", id: "careers", path: "/about" },
  { name: "Community", id: "community", path: "/about" },
  { name: "Culture", id: "culture", path: "/about" },
  { name: "Locations", id: "locations", path: "/about" },
  { name: "Strategic Vision Workshop", id: "strategic-vision-workshop", path: "/about" },
  { name: "Team", id: "team", path: "/about" },
  { name: "Why InvCode 29?", id: "why-invcode-29", path: "/about" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMobileSub, setActiveMobileSub] = useState<string | null>(null);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  
  const navigate = useNavigate();
  const location = useLocation();

  // Helper function to handle same-page or cross-page navigation with refresh logic
  const handleNav = (targetPath: string, hashId?: string) => {
    setMobileOpen(false);
    setOpenDropdown(null);
    setActiveMobileSub(null);

    const isSamePage = location.pathname === targetPath;

    if (isSamePage && hashId) {
      const element = document.getElementById(hashId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      } else {
        // If element doesn't exist yet or we want a hard scroll to top
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else {
      navigate(hashId ? `${targetPath}#${hashId}` : targetPath);
      // Optional: Force a scroll to top if target path doesn't have a hash
      if (!hashId) window.scrollTo(0, 0);
    }
  };

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  const navItems = ["Home", "Services", "Industries", "About", "Results", "Insights"];
  const hasDropdown = (label: string) => ["Services", "Industries", "About"].includes(label);

  const toggleMobileSub = (label: string) => {
    setActiveMobileSub(activeMobileSub === label ? null : label);
  };

  return (
    <nav className="bg-navbar sticky top-0 z-50 shadow-sm border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-3 px-4 lg:px-8">
        
        <Link to="/" onClick={() => handleNav("/")} className="flex items-center group overflow-visible">
          <Logo className="h-10 lg:h-16 w-auto text-foreground transition-all duration-300 group-hover:opacity-80" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((label) => (
            <div
              key={label}
              className="relative"
              onMouseEnter={() => hasDropdown(label) && handleMouseEnter(label)}
              onMouseLeave={hasDropdown(label) ? handleMouseLeave : undefined}
            >
              <button
                onClick={() => handleNav(label === "Home" ? "/" : `/${label.toLowerCase()}`)}
                className="flex items-center gap-1 text-foreground text-sm font-medium hover:text-accent transition-colors py-2"
              >
                {label}
                {hasDropdown(label) && (
                  openDropdown === label ? <ChevronUp size={14} /> : <ChevronDown size={14} />
                )}
              </button>

              {/* Mega Dropdown: Services */}
              {openDropdown === "Services" && label === "Services" && (
                <div 
                  className="absolute top-full -left-40 mt-0 bg-secondary border-t-4 border-t-accent shadow-xl rounded-b-lg py-6 px-8 z-50 w-[780px]"
                  onMouseEnter={() => handleMouseEnter("Services")}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="grid grid-cols-3 gap-8">
                    <div>
                      <h4 className="font-bold text-foreground text-xs tracking-widest mb-4 uppercase border-b border-border pb-2">What We Do</h4>
                      <div className="space-y-4">
                        {whatWeDo.map(item => (
                          <button key={item.title} onClick={() => handleNav("/services")} className="block text-left group">
                            <span className="font-bold text-sm text-foreground group-hover:text-accent transition-colors">{item.title}</span>
                            <p className="text-[11px] text-muted-foreground">{item.desc}</p>
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-xs tracking-widest mb-4 uppercase border-b border-border pb-2">Services</h4>
                      <div className="space-y-1">
                        {servicesList.map(s => (
                          <button key={s} onClick={() => handleNav("/services", slugify(s))} className="block text-left text-sm text-foreground py-1 hover:text-accent w-full">{s}</button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-xs tracking-widest mb-4 uppercase border-b border-border pb-2">Custom Solutions</h4>
                      <div className="space-y-1">
                        {customSolutions.map(s => (
                          <button key={s} onClick={() => handleNav("/services")} className="block text-left text-sm text-foreground py-1 hover:text-accent w-full">{s}</button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Mega Dropdown: Industries */}
              {openDropdown === "Industries" && label === "Industries" && (
                <div 
                  className="absolute top-full -left-60 mt-0 bg-secondary border-t-4 border-t-accent shadow-xl rounded-b-lg py-6 px-8 z-50 w-[800px]"
                  onMouseEnter={() => handleMouseEnter("Industries")}
                  onMouseLeave={handleMouseLeave}
                >
                  <h4 className="font-bold text-foreground text-xs tracking-widest mb-4 uppercase border-b border-border pb-2">Industries We Serve</h4>
                  <div className="grid grid-cols-4 gap-x-4 gap-y-2">
                    {industriesList.map(item => (
                      <button 
                        key={item.id} 
                        onClick={() => handleNav("/industries", item.id)} 
                        className="text-left text-sm text-foreground py-1 hover:text-accent"
                      >
                        {item.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Mega Dropdown: About */}
              {openDropdown === "About" && label === "About" && (
                <div 
                  className="absolute top-full left-0 mt-0 bg-secondary border-t-4 border-t-accent shadow-xl rounded-b-lg py-6 px-8 z-50 w-[260px]"
                  onMouseEnter={() => handleMouseEnter("About")}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="space-y-1">
                    {aboutList.map(item => (
                      <button 
                        key={item.id} 
                        onClick={() => handleNav(item.path, item.id)} 
                        className="block w-full text-left text-sm text-foreground py-2 hover:text-accent transition-colors"
                      >
                        {item.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button onClick={() => handleNav("/services", "contact")} className="hidden lg:flex items-center gap-2 bg-[hsl(190,60%,45%)] hover:bg-[hsl(190,60%,40%)] text-white font-bold text-sm px-4 py-3 rounded-lg shadow-lg transition-all">
            Let's Talk <ArrowRight size={14} />
          </button>
          <button className="lg:hidden text-foreground p-2" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-navbar border-t border-border shadow-2xl h-[calc(100vh-70px)] flex flex-col">
          <div className="flex-1 overflow-y-auto px-6 py-8">
            <div className="flex flex-col gap-2">
              {navItems.map((label) => (
                <div key={label} className="border-b border-border/50 last:border-0">
                  <div className="flex items-center justify-between">
                    <button
                      className="block py-4 text-left text-foreground text-lg font-normal tracking-tight w-full"
                      onClick={() => handleNav(label === "Home" ? "/" : `/${label.toLowerCase()}`)}
                    >
                      {label}
                    </button>
                    {hasDropdown(label) && (
                      <button onClick={() => toggleMobileSub(label)} className="p-4 text-muted-foreground">
                        {activeMobileSub === label ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                      </button>
                    )}
                  </div>

                  {activeMobileSub === label && (
                    <div className="bg-secondary/30 rounded-lg mb-4 p-4 animate-in slide-in-from-top-2 duration-200">
                      <div className="grid grid-cols-1 gap-2">
                        {label === "Services" && servicesList.map(item => (
                          <button key={item} onClick={() => handleNav("/services", slugify(item))} className="text-left text-sm py-2 text-muted-foreground font-normal">{item}</button>
                        ))}
                        {label === "Industries" && industriesList.map(item => (
                          <button key={item.id} onClick={() => handleNav("/industries", item.id)} className="text-left text-sm py-2 text-muted-foreground font-normal">{item.name}</button>
                        ))}
                        {label === "About" && aboutList.map(item => (
                          <button key={item.id} onClick={() => handleNav(item.path, item.id)} className="text-left text-sm py-2 text-muted-foreground font-normal">{item.name}</button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 bg-secondary/50 border-t border-border mt-auto">
            <button onClick={() => handleNav("/services", "contact")} className="w-full flex items-center justify-center gap-3 bg-[hsl(190,60%,45%)] text-white font-bold text-base py-4 rounded-xl shadow-lg">
              Let's Talk <ArrowRight size={20} />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;