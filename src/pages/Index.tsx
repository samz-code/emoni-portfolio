import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import RateCardSection from "@/components/RateCardSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import TermsSection from "@/components/TermsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <RateCardSection />
       <TestimonialsSection />
      <TermsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;