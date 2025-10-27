import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, LinkedinIcon } from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "Shop Categories",
      links: [
        { name: "Exhibition Furniture", href: "#furniture" },
        { name: "Lighting Solutions", href: "#lighting" },
        { name: "Display Systems", href: "#displays" },
        { name: "Flooring & Carpets", href: "#flooring" },
        { name: "Technology", href: "#technology" }
      ]
    },
    {
      title: "Services",
      links: [
        { name: "Exhibition Design", href: "#design" },
        { name: "Project Management", href: "#management" },
        { name: "Logistics & Setup", href: "#logistics" },
        { name: "Creative Services", href: "#creative" },
        { name: "Technical Support", href: "#support" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#about" },
        { name: "Our Process", href: "#process" },
        { name: "Case Studies", href: "#cases" },
        { name: "Careers", href: "#careers" },
        { name: "News & Events", href: "#news" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Contact Us", href: "#contact" },
        { name: "Help Center", href: "#help" },
        { name: "Shipping Info", href: "#shipping" },
        { name: "Returns", href: "#returns" },
        { name: "Privacy Policy", href: "#privacy" }
      ]
    }
  ];

  return (
    <footer className="bg-secondary/50 border-t border-border/50">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <span className="text-3xl font-bold text-foreground">Ortiz&Co.</span>
              <span className="rounded bg-primary px-2 py-1 text-xs font-bold text-primary-foreground">
                SHOP
              </span>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Creating exceptional exhibition experiences through innovative design, 
              premium products, and comprehensive services. Your success is our mission.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-sm">
                <Phone className="h-4 w-4 mr-3 text-primary" />
                <span className="text-muted-foreground">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-sm">
                <Mail className="h-4 w-4 mr-3 text-primary" />
                <span className="text-muted-foreground">shop@ortizandco.com</span>
              </div>
              <div className="flex items-center text-sm">
                <MapPin className="h-4 w-4 mr-3 text-primary" />
                <span className="text-muted-foreground">Miami, FL</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold text-foreground mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-muted-foreground">
            © 2024 Ortiz&Co. All rights reserved. Creating experiences, not just exhibits.
          </div>
          
          <div className="flex items-center space-x-6">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
              <LinkedinIcon className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Button>
            <div className="flex items-center space-x-4 text-sm">
              <a href="#terms" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
              <span className="text-border">•</span>
              <a href="#privacy" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;