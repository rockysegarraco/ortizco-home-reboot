import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import LogoCarousel from "@/components/LogoCarousel";
import FeaturedProducts from "@/components/FeaturedProducts";
import DataEnrichmentSection from "@/components/DataEnrichmentSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <LogoCarousel />
      <FeaturedProducts />
      <DataEnrichmentSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
