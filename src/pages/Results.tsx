import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ResultsHero from "@/components/results/ResultsHero";
import ResultsCaseStudies from "@/components/results/ResultsCaseStudies";
import ServicesContact from "@/components/services/ServicesContact";

const Results = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <ResultsHero />
      <ResultsCaseStudies />
      <ServicesContact sourcePage="results" />
      <Footer />
    </div>
  );
};

export default Results;
