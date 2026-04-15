import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/services/ServicesHero";
import IndustriesIntro from "@/components/industries/IndustriesIntro";
import IndustriesGrid from "@/components/industries/IndustriesGrid";
import IndustriesDetails from "@/components/industries/IndustriesDetails";
import TestimonialsSection from "@/components/TestimonialsSection";
import ServicesContact from "@/components/services/ServicesContact";

const Industries = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <ServicesHero title="Industries" sourcePage="industries" />
      <IndustriesIntro />
      <IndustriesGrid />
      <IndustriesDetails />
      <TestimonialsSection heading={<>Our client relationships go beyond <span className="text-accent-highlight">technology</span>.</>} />
      <ServicesContact sourcePage="industries" />
      <Footer />
    </div>
  );
};

export default Industries;
