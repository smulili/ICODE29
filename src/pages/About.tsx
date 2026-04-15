import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutHero from "@/components/about/AboutHero";
import AboutDrive from "@/components/about/AboutDrive";
import AboutValues from "@/components/about/AboutValues";
import AboutChallenges from "@/components/about/AboutChallenges";
import AboutLocations from "@/components/about/AboutLocations";
import AboutVisionaries from "@/components/about/AboutVisionaries";
import AboutStats from "@/components/about/AboutStats";
import TestimonialsSection from "@/components/TestimonialsSection";
import AwardsSection from "@/components/AwardsSection";
import ServicesContact from "@/components/services/ServicesContact";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Why InvCode 29? */}
      <section id="why-invcode-29" className="scroll-mt-24">
        <AboutHero />
      </section>

      {/* Culture & Approach (Process) */}
      <section id="culture" className="scroll-mt-24">
        {/* Link from Navbar points HERE */}
        <div id="process" className="scroll-mt-24">
          <AboutDrive />
        </div>
      </section>

      <section id="values" className="scroll-mt-24">
        <AboutValues />
      </section>

      {/* Strategic Vision / Challenges */}
      <section id="strategic-vision-workshop" className="scroll-mt-24">
        <div id="challenges" className="scroll-mt-24">
           <AboutChallenges />
        </div>
      </section>

      <section id="locations" className="scroll-mt-24">
        <AboutLocations />
      </section>

      {/* Team / Visionaries */}
      <section id="team" className="scroll-mt-24">
        <AboutVisionaries />
      </section>

      <AboutStats />

      <div className="text-center py-12 bg-background">
        <a 
          href="#contact" 
          className="inline-flex items-center gap-2 px-12 py-5 rounded-full font-bold text-sm text-primary-foreground bg-primary hover:bg-primary/90 transition-all"
        >
          Tell Us Your Vision
        </a>
      </div>

      <TestimonialsSection />

      <section id="awards" className="scroll-mt-24">
        <AwardsSection />
      </section>

      <section id="contact" className="scroll-mt-24">
        <ServicesContact />
      </section>

      <Footer />
    </div>
  );
};

export default About;