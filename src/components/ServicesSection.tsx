import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Lightbulb, 
  Palette, 
  Truck, 
  Wrench, 
  Users, 
  Calendar,
  ArrowRight 
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Exhibition Design",
      description: "Complete booth design and layout planning to maximize your exhibition impact and visitor engagement.",
      features: ["Custom booth layouts", "3D visualization", "Brand integration"]
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Creative Services",
      description: "Graphic design, branding, and visual communications that align with your exhibition goals.",
      features: ["Graphic design", "Brand materials", "Signage solutions"]
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Logistics & Setup",
      description: "End-to-end logistics management including transportation, setup, and breakdown services.",
      features: ["Transportation", "Professional setup", "Post-event breakdown"]
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Technical Solutions",
      description: "Audio-visual equipment, lighting systems, and interactive technology integration.",
      features: ["A/V equipment", "Lighting systems", "Interactive tech"]
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Event Staffing",
      description: "Professional staff to manage your booth, engage visitors, and ensure smooth operations.",
      features: ["Professional hosts", "Technical support", "Multilingual staff"]
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "Project Management",
      description: "Dedicated project managers to oversee every aspect of your exhibition from planning to execution.",
      features: ["Dedicated manager", "Timeline coordination", "Quality assurance"]
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Complete Exhibition Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From initial concept to final execution, we provide comprehensive services 
            to make your exhibition a memorable experience that drives results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group hover:shadow-premium transition-all duration-300 border-border/50 hover:border-primary/30 bg-card/30 backdrop-blur-sm"
            >
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    {service.icon}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant="ghost" 
                  className="w-full group-hover:bg-primary/10 group-hover:text-primary transition-colors duration-300"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button 
            size="lg"
            className="bg-gold-gradient hover:opacity-90 transition-opacity text-lg px-8 py-6 rounded-lg font-semibold"
          >
            Get Custom Quote
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;