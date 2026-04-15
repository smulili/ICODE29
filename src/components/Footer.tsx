import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { useNavigate, useLocation, Link } from "react-router-dom";

// Helper to convert text to URL-friendly IDs (matching Navbar logic)
const slugify = (text: string) => 
  text.toLowerCase()
    .replace(/[&\/\\#,+()$~%.'":*?<>{} ]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Helper function to handle same-page or cross-page navigation
  const handleNav = (targetPath: string, hashId?: string) => {
    const isSamePage = location.pathname === targetPath;

    if (isSamePage) {
      if (hashId) {
        const element = document.getElementById(hashId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else {
      navigate(hashId ? `${targetPath}#${hashId}` : targetPath);
      if (!hashId) window.scrollTo(0, 0);
    }
  };

  const services = [
    "Software Development", "Web App Development", "Mobile App Development",
    "APIs & Integration", "AI Consulting", "AI & ML Development",
    "Data Science & Engineering", "UI/UX Design", "Legacy App Modernization",
    "Infrastructure Support"
  ];

  const industries = [
    "Agriculture", "Construction", "Energy & Utilities", "FinTech", 
    "Healthcare", "Hospitality", "Manufacturing", "Nonprofit", 
    "Professional Services", "Restaurant | F&B", "Retail"
  ];

  const aboutLinks = [
    { name: "Approach", path: "/", id: "process" },
    { name: "Awards", path: "/about", id: "awards" },
    { name: "Careers", path: "/about", id: "careers" },
    { name: "Community", path: "/about", id: "community" },
    { name: "Culture", path: "/about", id: "culture" },
    { name: "Locations", path: "/about", id: "locations" },
    { name: "Sitemap", path: "/about", id: "sitemap" },
    { name: "Team", path: "/about", id: "team" },
  ];

  return (
    <footer className="bg-section-dark text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Contact column */}
          <div>
            <h4 className="font-bold mb-4 text-accent-highlight text-lg uppercase tracking-wide">Contact</h4>
            <div className="flex gap-4 mb-6">
              {["facebook", "twitter", "instagram", "linkedin", "youtube"].map((social) => (
                <a key={social} href={`https://${social}.com`} target="_blank" rel="noopener noreferrer" className="text-primary-foreground/60 hover:text-accent transition-colors">
                  <div className="w-8 h-8 rounded-full border border-primary-foreground/30 flex items-center justify-center text-xs uppercase font-bold">
                    {social.charAt(0).toUpperCase()}
                  </div>
                </a>
              ))}
            </div>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-center gap-2"><Phone size={14} /> +254 (702) 276-873</li>
              <li className="flex items-center gap-2"><Mail size={14} /> Email Us</li>
              <li className="flex items-start gap-2"><MapPin size={14} className="shrink-0 mt-0.5" /> 167 Tech Drive, Suite 190<br />Frederick, MD 21794</li>
              <li className="flex items-start gap-2"><MapPin size={14} className="shrink-0 mt-0.5" /> Thika Road Mall, Suite 100- Nairobi<br />Mirema, NB 00100</li>
            </ul>

            <h4 className="font-bold mt-8 mb-2 text-accent-highlight text-sm uppercase tracking-wide">Newsletter</h4>
            <p className="text-sm text-primary-foreground/60 italic mb-3">Get exclusive AI, tech, industry & InvCode 29 news.</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Your email" className="bg-primary-foreground/10 border border-primary-foreground/20 rounded px-3 py-2 text-sm text-primary-foreground placeholder:text-primary-foreground/40 flex-1" />
            </div>
            <button className="btn-accent mt-3 text-xs px-6 py-2 uppercase tracking-wider font-bold">
              Sign Up
            </button>
          </div>

          {/* Services column */}
          <div>
            <h4 className="font-bold mb-4 text-accent-highlight text-lg uppercase tracking-wide">Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              {services.map(s => (
                <li key={s}>
                  <button onClick={() => handleNav("/services", slugify(s))} className="hover:text-primary-foreground transition-colors text-left">
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries column */}
          <div>
            <h4 className="font-bold mb-4 text-accent-highlight text-lg uppercase tracking-wide">Industries</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              {industries.map(i => (
                <li key={i}>
                  <button onClick={() => handleNav("/industries", slugify(i))} className="hover:text-primary-foreground transition-colors text-left">
                    {i}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* About column */}
          <div>
            <h4 className="font-bold mb-4 text-accent-highlight text-lg uppercase tracking-wide">About</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              {aboutLinks.map(link => (
                <li key={link.name}>
                  <button onClick={() => handleNav(link.path, link.id)} className="hover:text-primary-foreground transition-colors text-left">
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex items-center gap-2">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="hsl(65, 99%, 42%)">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <span className="text-xs text-primary-foreground/60">71 REVIEWS</span>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-primary-foreground/40">
          <p>© {new Date().getFullYear()} InvCode 29. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <button onClick={() => handleNav("/privacy")} className="hover:text-primary-foreground transition-colors">Privacy Policy</button>
            <button onClick={() => handleNav("/terms")} className="hover:text-primary-foreground transition-colors">Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;