import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-exhibition.jpg";
const HeroSection = () => {
  return <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="Professional exhibition setup with modern furniture and lighting" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-hero-gradient" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-12 py-16">
        <div className="max-w-full">
          <h1 className="text-4xl text-white mb-6 leading-tight font-semibold md:text-8xl">
            Creating Experiences,{" "}
            <span className="block">Not Just Exhibits</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white mb-8 leading-relaxed max-w-2xl">
            We integrate cutting edge technology and innovative solutions to ensure your expo 
            or production runs seamlessly and leaves a lasting impact.
          </p>

          <Button size="lg" className="bg-gold-gradient hover:opacity-90 transition-opacity text-lg px-8 py-6 rounded-full font-semibold">
            Contact Us
          </Button>
        </div>
      </div>

    </section>;
};
export default HeroSection;