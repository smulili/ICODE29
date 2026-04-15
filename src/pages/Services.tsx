import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesUnique from "@/components/services/ServicesUnique";
import ServicesCategories from "@/components/services/ServicesCategories";
import TestimonialsSection from "@/components/TestimonialsSection";
import ServicesContact from "@/components/services/ServicesContact";

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <ServicesHero title="Services" sourcePage="services" />
      <ServicesUnique />
      <ServicesCategories />
      <TestimonialsSection heading={<>Our client relationships go beyond <span className="text-accent-highlight">technology</span>.</>} />
      <ServicesContact sourcePage="services" />
      <Footer />
    </div>
  );
};

export default Services;
