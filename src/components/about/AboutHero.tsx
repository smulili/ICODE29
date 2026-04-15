import { Link } from "react-router-dom";
// Corrected import path
import aboutVideoSource from "@/assets/aboutvideo.mp4"; 

const AboutHero = () => {
  return (
    // Only added id="hero" and scroll-mt-24 here
    <section id="hero" className="relative h-[600px] min-h-[600px] flex items-center bg-primary overflow-hidden scroll-mt-24">
      {/* Video Background Container - Locked to Section Size */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={aboutVideoSource} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Overlay: Blur + Brand Tint (Primary 60%) */}
        <div className="absolute inset-0 bg-primary/60 backdrop-blur-[3px] z-[1]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-8 py-20">
        {/* Accent Color: Lime Green (#d4e157) */}
        <p className="text-[#d4e157] text-lg font-bold mb-4 tracking-wider uppercase">
          About InvCode 29
        </p>
        
        <h1 className="text-5xl md:text-5xl font-black text-white leading-tight max-w-3xl drop-shadow-2xl">
          Custom Software to<br />
          <span className="text-[#d4e157]">Reach Your Vision</span>
        </h1>
        
        <p className="mt-8 text-lg md:text-xl text-white/90 max-w-3xl leading-relaxed font-medium">
          Derived from the Ancient Greek word for "vision," InvCode 29 transforms ideas into tangible realities through custom software and AI solutions.
        </p>
        
        <Link 
          to="/services" 
          className="btn-accent mt-10 inline-flex px-8 py-4 text-lg font-bold transition-all hover:scale-105 active:scale-95"
        >
          Turn Your Vision into Reality
        </Link>
      </div>
    </section>
  );
};

export default AboutHero;