import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import IndustriesSection from "@/components/IndustriesSection";
import ProcessSection from "@/components/ProcessSection";
import UniqueSection from "@/components/UniqueSection";

import TestimonialsSection from "@/components/TestimonialsSection";
import ResultsSection from "@/components/ResultsSection";
import AwardsSection from "@/components/AwardsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <IndustriesSection />
      <ProcessSection />
      <UniqueSection />
      
      <TestimonialsSection />
      <ResultsSection />
      <AwardsSection />
      <Footer />
    </div>
  );
};

export default Index;
