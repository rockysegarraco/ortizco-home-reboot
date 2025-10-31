import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import boothRentalsImage from "@/assets/booth-rentals.jpg";
const DataEnrichmentSection = () => {
  return <section className="py-20 bg-background">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Main Heading */}
            <h2 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">Exhibit Booth Rentals</h2>

            {/* Description */}
            <p className="text-lg text-white leading-relaxed">Ready to elevate your presence on the show floor? Whether you need a compact 10' x 8' booth or a more commanding 20' x 20'+ layout, Ortiz&amp;Co. delivers premium, fully-curated structures designed for comfort, functionality, and brand impact. Our turnkey packages include professional furnishings and technology to ensure you're event-ready from day one. Connect with our Events Team today at events@ortizandco.com
 to receive a tailored quote and secure the perfect booth setup for your next show. Let's build your best event experience yet!</p>

            {/* Action Buttons */}
            <div className="flex items-center gap-4 pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">Shop Booth Rentals</Button>
              
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-[600px] lg:h-[700px]">
            <img src={boothRentalsImage} alt="Modern workspace with laptop and ergonomic chair" className="absolute inset-0 w-full h-full object-cover rounded-2xl" />
          </div>
        </div>
      </div>
    </section>;
};
export default DataEnrichmentSection;