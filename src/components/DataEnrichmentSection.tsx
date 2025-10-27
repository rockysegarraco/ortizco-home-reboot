import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import boothRentalsImage from "@/assets/booth-rentals.png";
const DataEnrichmentSection = () => {
  return <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Icon */}
            <div className="w-12 h-12 flex items-center justify-center">
              <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
                <path d="M8 20C8 15 12 12 16 10C14 8 12 4 16 4C20 4 22 8 24 10C28 12 32 15 32 20C32 25 28 28 24 30C26 32 28 36 24 36C20 36 18 32 16 30C12 28 8 25 8 20Z" fill="url(#wave-gradient)" />
                <defs>
                  <linearGradient id="wave-gradient" x1="8" y1="4" x2="32" y2="36" gradientUnits="userSpaceOnUse">
                    <stop stopColor="hsl(220 90% 56%)" />
                    <stop offset="1" stopColor="hsl(250 90% 66%)" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Top Link */}
            

            {/* Main Heading */}
            <h2 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">Booth Rentals</h2>

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
