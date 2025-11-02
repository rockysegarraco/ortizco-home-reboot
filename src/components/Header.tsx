import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Menu, Search, ShoppingCart, User, ChevronDown, LogIn, UserPlus, Lock, UserCircle, Book, Heart } from "lucide-react";
import oacLogo from "@/assets/oac-logo-horizontal-white.svg";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setShowMegaMenu(true);
  };
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowMegaMenu(false);
    }, 150);
  };
  const navigation = [{
    name: "About Us",
    href: "#about"
  }, {
    name: "Services & Solutions",
    href: "#services"
  }, {
    name: "Shows & Events",
    href: "#events"
  }, {
    name: "Contact",
    href: "#contact"
  }];
  const megaMenuData = {
    furniture: {
      title: "Furniture & Displays",
      categories: [{
        name: "Tables",
        href: "#tables"
      }, {
        name: "Chairs",
        href: "#chairs"
      }, {
        name: "Flooring",
        href: "#flooring"
      }, {
        name: "Drapes",
        href: "#drapes"
      }, {
        name: "Exhibit Booth Rental",
        href: "#booth-rental"
      }, {
        name: "Specialty Furniture",
        href: "#specialty-furniture"
      }, {
        name: "Display Cases",
        href: "#display-cases"
      }, {
        name: "Fixtures",
        href: "#fixtures"
      }, {
        name: "Supplies",
        href: "#supplies"
      }]
    },
    customFurniture: {
      title: "Custom Furniture",
      categories: [{
        name: "Accent and Cafe Tables",
        href: "#accent-tables"
      }, {
        name: "Accessories And Office Furnishings",
        href: "#office-furnishings"
      }, {
        name: "Bar Table",
        href: "#bar-table"
      }, {
        name: "Barstool Chair",
        href: "#barstool"
      }, {
        name: "Lounge Chairs",
        href: "#lounge-chairs"
      }, {
        name: "Loveseat",
        href: "#loveseat"
      }, {
        name: "Office Chair",
        href: "#office-chair"
      }, {
        name: "Ottoman and Cubes",
        href: "#ottoman"
      }, {
        name: "Sofa",
        href: "#sofa"
      }]
    },
    laborServices: {
      title: "Labor Services",
      categories: [{
        name: "Labor (Installation, Dismantle, and Spotting)",
        href: "#labor-installation"
      }, {
        name: "Forklift Labor",
        href: "#forklift-labor"
      }, {
        name: "Unload Cart Service",
        href: "#unload-cart"
      }, {
        name: "Shrink Wrap Labor Service",
        href: "#shrink-wrap"
      }, {
        name: "Hanging Sign Services (Installation and Dismantle)",
        href: "#hanging-signs"
      }, {
        name: "Porter Services (Trash Disposal)",
        href: "#porter-services"
      }, {
        name: "Vacuum",
        href: "#vacuum"
      }]
    },
    audioVisual: {
      title: "Audio Visual",
      categories: [{
        name: "Flatscreen Monitor",
        href: "#flatscreen-monitor"
      }, {
        name: "Speaker System",
        href: "#speaker-system"
      }]
    }
  };
  return <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <img src={oacLogo} alt="Ortiz&Co." className="h-6" />
              <span className="rounded bg-primary px-2 py-1 text-xs font-bold text-primary-foreground">
                SHOP
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {/* Shop Mega Menu */}
            <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <button className="flex items-center text-sm font-medium text-white transition-colors hover:text-[#ffdf6c]">
                Shop
                <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200" style={{
                transform: showMegaMenu ? 'rotate(180deg)' : 'rotate(0deg)'
              }} />
              </button>
              
              {/* Mega Menu Dropdown */}
              {showMegaMenu && <div className="fixed inset-x-0 top-16 z-50" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                  <div className="w-screen bg-card/95 backdrop-blur-md border-t border-border shadow-premium">
                    <div className="container mx-auto px-6 py-8">
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {Object.values(megaMenuData).map((section, index) => <div key={index} className="space-y-4">
                            <h3 className="font-semibold text-lg text-white border-b border-border pb-2">
                              {section.title}
                            </h3>
                            <ul className="space-y-3">
                              {section.categories.map((category, catIndex) => <li key={catIndex}>
                                  <a href={category.href} className="text-sm text-white hover:text-[#ffdf6c] transition-colors duration-200 block py-1">
                                    {category.name}
                                  </a>
                                </li>)}
                            </ul>
                          </div>)}
                      </div>

                      {/* Featured Section */}
                      <div className="mt-8 pt-6 border-t border-border">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                          <div>
                            <h4 className="font-semibold text-white mb-2">Need Help Choosing?</h4>
                            <p className="text-sm text-white">
                              Our exhibition experts can help you select the perfect items for your booth.
                            </p>
                          </div>
                          <Button className="bg-gold-gradient hover:opacity-90 transition-opacity">
                            Get Expert Help
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>}
            </div>
            
            {navigation.map(item => <a key={item.name} href={item.href} className="text-sm font-medium text-white hover:text-[#ffdf6c] transition-colors">
                {item.name}
              </a>)}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="h-9 w-9 p-0">
              <Search className="h-4 w-4" />
              <span className="sr-only">Search</span>
            </Button>
            
            {/* User Account Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="h-9 w-9 p-0">
                  <User className="h-4 w-4" />
                  <span className="sr-only">Account</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem>
                  <LogIn className="mr-2 h-4 w-4" />
                  <span>Login</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <UserPlus className="mr-2 h-4 w-4" />
                  <span>Register</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Lock className="mr-2 h-4 w-4" />
                  <span>Forgotten Password</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <UserCircle className="mr-2 h-4 w-4" />
                  <span>My Account</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Book className="mr-2 h-4 w-4" />
                  <span>Address Book</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Heart className="mr-2 h-4 w-4" />
                  <span>Wish List</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Button variant="ghost" size="sm" className="h-9 w-9 p-0 relative">
              <ShoppingCart className="h-4 w-4" />
              <span className="sr-only">Cart</span>
              <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-xs font-bold text-primary-foreground flex items-center justify-center">
                0
              </span>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="sm" className="h-9 w-9 p-0">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 p-0">
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="px-6 py-4 border-b border-border">
                  <div className="flex items-center space-x-2">
                    <img src={oacLogo} alt="Ortiz&Co." className="h-5" />
                    <span className="rounded bg-primary px-2 py-0.5 text-xs font-bold text-primary-foreground">
                      SHOP
                    </span>
                  </div>
                </div>

                {/* Navigation Content */}
                <div className="flex-1 overflow-y-auto px-6 py-6">
                  {/* Shop Categories */}
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                      Shop by Category
                    </h3>
                    <Accordion type="multiple" className="space-y-2">
                      {Object.values(megaMenuData).map((section, index) => (
                        <AccordionItem key={index} value={`category-${index}`} className="border-none">
                          <AccordionTrigger className="py-3 hover:no-underline hover:text-[#ffdf6c]">
                            <span className="font-semibold text-white">{section.title}</span>
                          </AccordionTrigger>
                          <AccordionContent>
                            <ul className="space-y-2 pl-4">
                              {section.categories.map((category, catIndex) => (
                                <li key={catIndex}>
                                  <a 
                                    href={category.href} 
                                    onClick={() => setIsOpen(false)} 
                                    className="block py-1 text-sm text-white hover:text-[#ffdf6c] transition-colors"
                                  >
                                    {category.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>

                  {/* Main Navigation */}
                  <nav className="border-t border-border pt-6 space-y-1">
                    {navigation.map(item => (
                      <a 
                        key={item.name} 
                        href={item.href} 
                        onClick={() => setIsOpen(false)} 
                        className="block py-3 text-base font-medium text-white hover:text-[#ffdf6c] transition-colors"
                      >
                        {item.name}
                      </a>
                    ))}
                  </nav>
                </div>

                {/* Footer Actions */}
                <div className="border-t border-border px-6 py-4 space-y-2">
                  <Button 
                    variant="ghost" 
                    className="w-full justify-start" 
                    size="lg"
                  >
                    <Search className="h-4 w-4 mr-3" />
                    Search
                  </Button>
                  <Button 
                    variant="ghost" 
                    className="w-full justify-start" 
                    size="lg"
                  >
                    <User className="h-4 w-4 mr-3" />
                    Account
                  </Button>
                  <Button 
                    variant="ghost" 
                    className="w-full justify-start relative" 
                    size="lg"
                  >
                    <ShoppingCart className="h-4 w-4 mr-3" />
                    Cart
                    <span className="ml-auto text-xs bg-primary text-primary-foreground rounded-full h-5 w-5 flex items-center justify-center">
                      0
                    </span>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>;
};
export default Header;