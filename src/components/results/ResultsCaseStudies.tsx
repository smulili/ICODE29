import { useState, useMemo } from "react";
import { ArrowRight, Bell, Search, ArrowDown, Settings, Shield, Zap, Database, CheckCircle, Smartphone, Code, Layout, ShoppingCart, Users, Globe, FileText } from "lucide-react";
import { Link } from "react-router-dom";

// Standardized Image Imports
import usInjuryLawImg from "@/assets/Scolaro.png";
import wodenImg from "@/assets/Woden-Render.png";
import randyPetersImg from "@/assets/RPCClipped.png";
import bogleWineryImg from "@/assets/Bogleclipped-1.png";
import m3ComponentsImg from "@/assets/M3clipped-1.png";
import mikuniSushiImg from "@/assets/Mikuniclipped-2x.png";
import sprigImg from "@/assets/Sprigclipped-1-1.png";
import threeDogBakeryImg from "@/assets/ThreeDogClipped-1.png";
import creTelligentImg from "@/assets/CREclipped-1.png";
import barianiOliveOilImg from "@/assets/barianiClipped.png";
import eocImg from "@/assets/EOCClipped-1.png";
import mcWongImg from "@/assets/McWong-Connect.png";
import kodiakRoofingImg from "@/assets/Kodiakclipped-1.png";
import placerFilmImg from "@/assets/PlacerfilmClip.png";
import watsonCompaniesImg from "@/assets/Watson-Companies-Inc.png";
import dtFiberglassImg from "@/assets/DT.png";
import nprImg from "@/assets/NPR-Laptopmock.webp";
import nflImg from "@/assets/NFL-Laptopmock.webp";
import sylvanLearningImg from "@/assets/SylvanTabVert.webp";
import kidneyFundImg from "@/assets/AKF-LapMock.webp";
import luxorStaffingImg from "@/assets/Luxor-TabMock.webp";
import medelImg from "@/assets/MEDEL-lapMock.webp";
import communityPlaythingsImg from "@/assets/CP-LapMock.webp";
import ptcbImg from "@/assets/PTCB-LapMock.webp";
import nextDayDumpstersImg from "@/assets/NDD_TabHorzmock.webp";
import spectrumScienceImg from "@/assets/Spectrum-LapMock.webp";
import worstPillsImg from "@/assets/WorstPills-Computer.webp";
import aamiImg from "@/assets/AAMI-Lapmocks.webp";
import solmaxImg from "@/assets/Solmax-lapMock.webp";
import homeParamountImg from "@/assets/HP-Laptopmock.webp";

const testimonials = [
  {
    quote: "Orases has an insatiable desire to meet or exceed our goals.",
    name: "Scott Morgan",
    role: "Director of Software Development, Sylvan Learning",
  },
  {
    quote: "We're impressed with their positivity and desire to tackle difficult problems.",
    name: "Jesse Frase",
    role: "Operations Manager",
  },
  {
    quote: "They took our vision and made it into a coherent solution.",
    name: "Jill Spivey",
    role: "Marketing & Comm Director, PTCB",
  },
];

const caseStudies = [
  {
    image: usInjuryLawImg,
    tag: "Web Design / SEO",
    overlayTag: "UsInjury.Law",
    title: "Scolaro Law Comprehensive Website Redesign and SEO Overhaul",
    description: "Partnered for a total digital transformation, clarifying their legal expertise and delivering a polished, high-performance platform optimized for search.",
    link: "#",
    stats: [
      { icon: Search, bold: "SEO Overhaul", text: "completed in 2024." },
      { icon: Layout, bold: "Modern UX", text: "designed for conversion." },
    ],
  },
  {
    image: wodenImg,
    tag: "Web Design",
    overlayTag: "Woden",
    title: "Clarifying Storytelling Expertise Through a Polished Digital Presence",
    description: "A full website redesign that clarified Woden's storytelling expertise and delivered a polished, client-ready digital presence.",
    link: "#",
    stats: [
      { icon: CheckCircle, bold: "Brand Clarity", text: "fully reimagined." },
      { icon: Zap, bold: "Client-Ready", text: "digital presence." },
    ],
  },
  {
    image: randyPetersImg,
    tag: "Web Design",
    overlayTag: "Randy Peters Catering",
    title: "Transforming Branding from Physical Presence to Online Image",
    description: "A complete rebrand transforming every aspect of their identity, from physical location aesthetics to a high-end online image.",
    link: "#",
    stats: [
      { icon: Shield, bold: "Total Rebrand", text: "across all platforms." },
      { icon: Layout, bold: "Online Image", text: "completely transformed." },
    ],
  },
  {
    image: bogleWineryImg,
    tag: "Web Development / Design",
    overlayTag: "Bogle Winery",
    title: "Custom WordPress Solution for Iconic Tasting Room Promotion",
    description: "Enhanced the flagship winery's online presence and brand promotion through a custom-designed WordPress experience.",
    link: "#",
    stats: [
      { icon: Code, bold: "Custom WP", text: "website development." },
      { icon: Zap, bold: "Brand Growth", text: "accelerated via web." },
    ],
  },
  {
    image: m3ComponentsImg,
    tag: "Web Development / Design",
    overlayTag: "M3Components",
    title: "Simplifying Brand Interaction with Approachable Product Discovery",
    description: "Clean and approachable design simplifying the way visitors interact with the brand and discover turn-key building products.",
    link: "#",
    stats: [
      { icon: Settings, bold: "Clean Design", text: "for better UX." },
      { icon: Search, bold: "Easy Discovery", text: "of core products." },
    ],
  },
  {
    image: mikuniSushiImg,
    tag: "Web Development / Design",
    overlayTag: "Mikuni Sushi",
    title: "Unifying Website, POS, and Reservation Systems into One Ecosystem",
    description: "Realized a new website and mobile app that tied the physical restaurant operations, point-of-sale, and reservations together.",
    link: "#",
    stats: [
      { icon: Code, bold: "POS Integration", text: "seamlessly linked." },
      { icon: Smartphone, bold: "Mobile App", text: "synced with web." },
    ],
  },
  {
    image: sprigImg,
    tag: "Web Design",
    overlayTag: "Sprig",
    title: "Launching a New eCommerce Store with Custom Order Forms",
    description: "Transformed Sprig's online presence in just 30 days by launching a new WooCommerce store with a custom order flow.",
    link: "#",
    stats: [
      { icon: ShoppingCart, bold: "30 Days", text: "to launch store." },
      { icon: Layout, bold: "Custom Form", text: "for easy ordering." },
    ],
  },
  {
    image: threeDogBakeryImg,
    tag: "Web Design / Development",
    overlayTag: "Three Dog Bakery",
    title: "Modernizing a Fun Brand for Better Mobile Performance",
    description: "Developed a custom WordPress site to improve navigation, mobile performance, and modernize the design for an engaging brand.",
    link: "#",
    stats: [
      { icon: Smartphone, bold: "Mobile First", text: "performance boost." },
      { icon: Zap, bold: "Modern Design", text: "reflects brand fun." },
    ],
  },
  {
    image: creTelligentImg,
    tag: "Web Design / Custom Dev",
    overlayTag: "CREtelligent",
    title: "Reimagining UI/UX for Commercial Real Estate Solutions",
    description: "Worked on the Radius platform to reimagine their UI/UX, providing a modern interface for complex real estate solutions.",
    link: "#",
    stats: [
      { icon: Layout, bold: "Radius Platform", text: "UI/UX overhaul." },
      { icon: Code, bold: "Custom Dev", text: "for real estate." },
    ],
  },
  {
    image: barianiOliveOilImg,
    tag: "Web Design",
    overlayTag: "Bariani Olive Oil",
    title: "Intuitive E-commerce Functionality for a Heritage Brand",
    description: "Enhanced site functionality to make learning about and purchasing heritage products as intuitive as possible for customers.",
    link: "#",
    stats: [
      { icon: CheckCircle, bold: "Intuitive Flow", text: "for purchases." },
      { icon: Search, bold: "Discovery", text: "made easier." },
    ],
  },
  {
    image: eocImg,
    tag: "Web Design / Development",
    overlayTag: "EOC",
    title: "Streamlining Information for Critical Assistance Programs",
    description: "Redesigned with improved content structure, helping users quickly access information on the assistance programs they need.",
    link: "#",
    stats: [
      { icon: Users, bold: "Streamlined", text: "content structure." },
      { icon: Zap, bold: "Fast Access", text: "to vital info." },
    ],
  },
  {
    image: mcWongImg,
    tag: "Web Design / Custom Dev",
    overlayTag: "McWong Inc.",
    title: "Modernizing a Global Lighting Manufacturer's Digital Hub",
    description: "Transformed their website into a streamlined, modern, and user-friendly experience for international lighting control equipment.",
    link: "#",
    stats: [
      { icon: Globe, bold: "International", text: "user experience." },
      { icon: Settings, bold: "Streamlined", text: "product catalog." },
    ],
  },
  {
    image: kodiakRoofingImg,
    tag: "Web Development / Design",
    overlayTag: "Kodiak Roofing",
    title: "Enhancing Visibility for Sacramento’s Trusted Roofing Experts",
    description: "Introduced a sleek, user-friendly design that significantly enhanced online visibility and customer engagement.",
    link: "#",
    stats: [
      { icon: Layout, bold: "Sleek Design", text: "increases engagement." },
      { icon: Search, bold: "Visibility", text: "boosted in search." },
    ],
  },
  {
    image: placerFilmImg,
    tag: "Web Design / Development",
    overlayTag: "Placer Film Office",
    title: "Simplifying Film Permitting and Location Research",
    description: "Created a modern website that made film permitting and location research more accessible to production teams.",
    link: "#",
    stats: [
      { icon: FileText, bold: "Permit Portal", text: "highly accessible." },
      { icon: Layout, bold: "Modern Hub", text: "for filmmakers." },
    ],
  },
  {
    image: watsonCompaniesImg,
    tag: "Web Design / Development",
    overlayTag: "Watson Companies Inc.",
    title: "Long-Overdue Redesign for Established Commercial Roofing",
    description: "A comprehensive refresh for a well-established company, bringing their online presence up to modern standards.",
    link: "#",
    stats: [
      { icon: Shield, bold: "Legacy Brand", text: "modernized." },
      { icon: CheckCircle, bold: "Professional", text: "digital presence." },
    ],
  },
  {
    image: dtFiberglassImg,
    tag: "Web Design / SEO",
    overlayTag: "DT Fiberglass",
    title: "Strengthening Search Position for Industry Manufacturers",
    description: "Refreshed online presence and strengthened search position for a trusted custom fiberglass manufacturer.",
    link: "#",
    stats: [
      { icon: Search, bold: "SEO Growth", text: "strengthened position." },
      { icon: Zap, bold: "Refreshed", text: "online presence." },
    ],
  },
  {
    image: nprImg,
    tag: "Software Development",
    overlayTag: "NPR",
    title: "Creating a Flexible and Scalable Digital Asset Management Platform",
    description: "Intuitive media storage platform enhances internal collaboration and productivity while maintaining digital rights control.",
    link: "#",
    stats: [
      { icon: Zap, bold: "3x faster access", text: "to approved media." },
      { icon: Search, bold: "3 petabytes", text: "instantly searchable." },
    ],
  },
  {
    image: nflImg,
    tag: "Software Development",
    overlayTag: "NFL",
    title: "Purpose-Built Solutions Power the NFL’s Mission to Support Athletes",
    description: "Integrated Learning and Grant Management Systems safely scale youth football grants through education-driven technology.",
    link: "#",
    stats: [
      { icon: ArrowDown, bold: "7-fold decrease", text: "in grant evaluation." },
      { icon: Settings, bold: "350% increase", text: "in completion." },
    ],
  },
  {
    image: sylvanLearningImg,
    tag: "App Modernization",
    overlayTag: "Sylvan Learning",
    title: "Rebuilding the Foundation that Elevates Personalized Learning",
    description: "Modern course authoring and device-agnostic LMS restores the ability to deliver engaging educational experiences at scale.",
    link: "#",
    stats: [
      { icon: Settings, bold: "2 systems", text: "seamlessly integrated." },
      { icon: Smartphone, bold: "100% agnostic", text: "access to courses." },
    ],
  },
  {
    image: kidneyFundImg,
    tag: "Application Modernization",
    overlayTag: "American Kidney Fund",
    title: "Modernized Grant Management System Streamlines Staff Workflows",
    description: "GMS 2.0 uses a modular, cloud-native architecture to speed grant processing and scale support for $350M in annual grants.",
    link: "#",
    stats: [
      { icon: Zap, bold: "25% decrease", text: "in evaluation time." },
      { icon: Search, bold: "94,000+ requests", text: "processed per year." },
    ],
  },
  {
    image: luxorStaffingImg,
    tag: "Custom Web Portal",
    overlayTag: "Luxor Staffing",
    title: "Replacing Off-the-Shelf System with a Custom Biometric Platform",
    description: "Multilingual workforce management platform that dual-captures payroll and customer billing through context-aware interfaces.",
    link: "#",
    stats: [
      { icon: ArrowDown, bold: "$100K+ saved", text: "in yearly licensing." },
      { icon: CheckCircle, bold: "500,000+ punches", text: "processed." },
    ],
  },
  {
    image: medelImg,
    tag: "Software Development",
    overlayTag: "MED-EL",
    title: "Improving Healthcare Provider Experiences for Global Hearing Implant Company",
    description: "Custom web portal unifies fragmented workflows to deliver faster access to data and improved patient care.",
    link: "#",
    stats: [
      { icon: Settings, bold: "3 systems", text: "unified into one hub." },
      { icon: Zap, bold: "100% automated", text: "interactions." },
    ],
  },
  {
    image: communityPlaythingsImg,
    tag: "Software Development",
    overlayTag: "Community Playthings",
    title: "Maximizing Productivity and Visibility with a Custom ERP",
    description: "Comprehensive insights through visualized workflows that map each part’s journey across manufacturing processes.",
    link: "#",
    stats: [
      { icon: Database, bold: "20,000+ workflows", text: "digitally managed." },
      { icon: Search, bold: "42,000+ parts", text: "tracked." },
    ],
  },
  {
    image: ptcbImg,
    tag: "UI/UX Design",
    overlayTag: "PTCB",
    title: "Creating a Digital Experience that Advances Credentialing Safety",
    description: "A responsive, user-friendly web experience to make applying for critical credentials faster, easier, and accessible.",
    link: "#",
    stats: [
      { icon: Zap, bold: "30% increase", text: "in completed apps." },
      { icon: Bell, bold: "28% higher", text: "engagement time." },
    ],
  },
  {
    image: nextDayDumpstersImg,
    tag: "Custom CRM",
    overlayTag: "Next Day Dumpsters",
    title: "Centralizing Ordering, Pricing & Dispatching into a Single Platform",
    description: "API-driven custom solutions replaced siloed systems, unifying work order management across the entire lifecycle.",
    link: "#",
    stats: [
      { icon: Shield, bold: "100% paperless", text: "workflows." },
      { icon: Zap, bold: "< 1-second", text: "order updates." },
    ],
  },
  {
    image: spectrumScienceImg,
    tag: "Data Strategy",
    overlayTag: "Spectrum Science",
    title: "Harmonizing Disparate Data into Comprehensive Dashboards",
    description: "Automate ETL pipelines with standardized operational data to deliver a single view while reducing reporting time.",
    link: "#",
    stats: [
      { icon: Zap, bold: "20+ hours saved", text: "on weekly reporting." },
      { icon: CheckCircle, bold: "0 manual", text: "reporting workflows." },
    ],
  },
  {
    image: worstPillsImg,
    tag: "Application Modernization",
    overlayTag: "Worst Pills, Best Pills",
    title: "Transforming Subscriber Engagement with Updated E-commerce",
    description: "Re-architected legacy codebase into a fast, flexible digital platform, driving higher engagement and site performance.",
    link: "#",
    stats: [
      { icon: ArrowDown, bold: "63% decrease", text: "in maintenance costs." },
      { icon: Users, bold: "12% increase", text: "in subscriptions." },
    ],
  },
  {
    image: aamiImg,
    tag: "Web App Development",
    overlayTag: "AAMI",
    title: "Web-Based Self-Assessment Tool for Healthcare Technology",
    description: "Interactive surveys that evaluate HTM department performance using an SME-designed algorithm.",
    link: "#",
    stats: [
      { icon: Zap, bold: "15 minute", text: "case processing." },
      { icon: Search, bold: "Algorithm", text: "driven insights." },
    ],
  },
  {
    image: solmaxImg,
    tag: "Web App Development",
    overlayTag: "Solmax",
    title: "Custom Quoting & Efficiency Calculators for Infrastructure",
    description: "Web-based system accurately estimates requirements for global projects and highlights environmental benefits.",
    link: "#",
    stats: [
      { icon: CheckCircle, bold: "100% standard", text: "wizard-based data." },
      { icon: Code, bold: "3 specialized", text: "calculators." },
    ],
  },
  {
    image: homeParamountImg,
    tag: "Custom ERP",
    overlayTag: "Home Paramount",
    title: "Replacing Off-the-Shelf Software with a Custom Solution",
    description: "Unifies pest control operations by connecting field technicians and clients through automated digital workflows.",
    link: "#",
    stats: [
      { icon: Shield, bold: "0 Paper", text: "dependency." },
      { icon: CheckCircle, bold: "Multiple", text: "contracts per signature." },
    ],
  },
];

type CaseStudy = (typeof caseStudies)[number];

const ResultsCaseStudies = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filterOptions = [
    { label: "All", value: "All" },
    { label: "Web App", value: "Web" },
    { label: "Software Development", value: "Software" },
    { label: "CRM & ERP", value: "CRM" },
  ];

  const filteredCaseStudies = useMemo(() => {
    if (activeFilter === "All") return caseStudies;
    return caseStudies.filter((study) => {
      const tag = study.tag.toLowerCase();
      if (activeFilter === "Web") return tag.includes("web") || tag.includes("app");
      if (activeFilter === "Software") return tag.includes("software");
      if (activeFilter === "CRM") return tag.includes("crm") || tag.includes("erp");
      return false;
    });
  }, [activeFilter]);

  const pairs = useMemo(() => {
    const p: CaseStudy[][] = [];
    for (let i = 0; i < filteredCaseStudies.length; i += 2) {
      p.push(filteredCaseStudies.slice(i, i + 2));
    }
    return p;
  }, [filteredCaseStudies]);

  return (
    <section className="bg-secondary min-h-screen">
      <div className="bg-background border-b border-border sticky top-0 z-20 py-6">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <h2 className="text-xl font-black uppercase tracking-tight flex items-center gap-2">
              <Search size={20} className="text-accent" /> Filter Results
            </h2>
            <div className="flex flex-wrap gap-2">
              {filterOptions.map((f) => (
                <button
                  key={f.label}
                  onClick={() => setActiveFilter(f.value)}
                  className={`px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all border-2 ${
                    activeFilter === f.value
                      ? "bg-accent border-accent text-primary"
                      : "bg-transparent border-border text-muted-foreground hover:border-accent"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {pairs.length > 0 ? (
        pairs.map((pair, pairIdx) => (
          <div key={`${activeFilter}-${pairIdx}`}>
            <div className="container mx-auto px-4 lg:px-8 pt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {pair.map((cs) => (
                  <Link key={cs.overlayTag} to={cs.link} className="relative rounded-lg overflow-hidden h-64 md:h-80 group">
                    <img
                      src={cs.image}
                      alt={cs.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-primary/80 to-transparent">
                      <span className="text-primary-foreground/70 text-sm font-bold">{cs.overlayTag}</span>
                    </div>
                    {pair.indexOf(cs) === 1 && (
                      <span className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                        <ArrowDown size={16} className="text-primary" />
                      </span>
                    )}
                  </Link>
                ))}
              </div>
            </div>

            <div className="container mx-auto px-4 lg:px-8 py-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {pair.map((cs, csIdx) => (
                  <div key={cs.overlayTag} className={`flex gap-6 ${csIdx === 0 && pair.length > 1 ? "md:border-r md:border-border md:pr-8" : ""}`}>
                    <div className="flex-1">
                      <p className="text-sm italic text-muted-foreground mb-1">{cs.tag}</p>
                      <h3 className="text-xl md:text-2xl font-black text-foreground leading-tight mb-3">
                        {cs.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        {cs.description}
                      </p>
                      <Link to={cs.link} className="text-accent-highlight font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                        View The Result <ArrowRight size={14} />
                      </Link>
                    </div>
                    <div className="flex flex-col gap-4 justify-start shrink-0 w-40 md:w-48">
                      {cs.stats.map((stat, si) => (
                        <div key={si} className="flex items-start gap-3">
                          <div className="w-10 h-10 rounded-full border-2 border-accent flex items-center justify-center flex-shrink-0">
                            <stat.icon size={16} className="text-accent" />
                          </div>
                          <p className="text-sm text-foreground">
                            <span className="font-black">{stat.bold}</span> {stat.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {pairIdx < pairs.length - 1 && (
              <div className="py-16 bg-background">
                <div className="container mx-auto px-4 lg:px-8">
                  <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start md:items-center">
                    <div className="flex items-start gap-6 flex-1">
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-accent flex items-center justify-center flex-shrink-0">
                        <span className="text-3xl md:text-4xl text-muted-foreground/30 font-serif">"</span>
                      </div>
                      <div>
                        <p className="text-xl md:text-3xl italic text-muted-foreground/40 leading-relaxed font-serif">
                          {testimonials[pairIdx % testimonials.length].quote}
                        </p>
                        <p className="mt-4 md:mt-6 text-foreground text-sm md:text-base">
                          <span className="font-black">{testimonials[pairIdx % testimonials.length].name}</span>
                          {" / "}
                          {testimonials[pairIdx % testimonials.length].role}
                        </p>
                      </div>
                    </div>
                    <div className="border-l-2 border-border pl-6 md:pl-8 shrink-0">
                      <p className="italic text-muted-foreground text-sm">Reviewed on</p>
                      <p className="text-2xl md:text-3xl font-black text-foreground mt-1">Clutch</p>
                      <div className="flex gap-0.5 mt-2">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#f59e0b">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                          </svg>
                        ))}
                        <span className="text-sm text-muted-foreground ml-2">71 reviews</span>
                      </div>
                      <a href="#" className="text-accent-highlight text-sm font-bold flex items-center gap-1 mt-2 hover:gap-2 transition-all">
                        Visit Clutch <ArrowRight size={12} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))
      ) : (
        <div className="py-20 text-center container mx-auto">
          <p className="text-muted-foreground text-lg">No results found for this category.</p>
          <button onClick={() => setActiveFilter("All")} className="mt-4 text-accent font-bold underline">
            View All Projects
          </button>
        </div>
      )}
    </section>
  );
};

export default ResultsCaseStudies;