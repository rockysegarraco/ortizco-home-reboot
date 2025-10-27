import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm tracking-[0.3em] text-black mb-6 uppercase">
            Passion for Planning
          </p>
          
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-8 leading-tight">
            Seamless Expos & Productions with Cutting-Edge Solutions
          </h2>

          <Button 
            size="lg" 
            className="bg-gold-gradient hover:opacity-90 transition-opacity text-lg px-8 py-6 rounded-full font-semibold"
          >
            Contact us Today!
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
