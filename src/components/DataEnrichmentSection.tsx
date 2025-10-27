import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import workspaceImage from "@/assets/data-enrichment-workspace.jpg";
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
            <h2 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">E</h2>

            {/* Description */}
            <p className="text-lg text-muted-foreground leading-relaxed">Our inline booth options include 10’ x 8’ and 20’ x 8’ structures.

The 10’ x 8’ option has a branded counter with stools, a tall back wall panel, and a 40” monitor, ensuring comfort and convenience during the event.

The 20’ x 8’ option includes a branded counter with stools, a tall back wall panel, a 50” monitor, and a table with executive chairs.

Ortiz&amp;Co&amp;Co. offers 20’ x 20’ and larger booth structures for more significant events. Please contact the Ortiz&amp;Co Events Team at events@ortizandco.com for a quote tailored to your requirements.

Keep in mind that our custom booths are carefully curated packages that include furniture pieces. Any modifications to these packages may incur a restocking fee at the warehouse. We strive to provide the best service and transparency in our offerings.</p>

            {/* Action Buttons */}
            <div className="flex items-center gap-4 pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">Shop Booth Rentals</Button>
              
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-[600px] lg:h-[700px]">
            <img src={workspaceImage} alt="Modern workspace with laptop and ergonomic chair" className="absolute inset-0 w-full h-full object-cover rounded-2xl" />
          </div>
        </div>
      </div>
    </section>;
};
export default DataEnrichmentSection;