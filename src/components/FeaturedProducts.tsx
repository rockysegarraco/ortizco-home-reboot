import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Eye } from "lucide-react";

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Premium Exhibition Booth Carpet",
      price: "$280.00",
      originalPrice: "$350.00",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop",
      rating: 4.8,
      reviews: 24,
      category: "Flooring",
      featured: true
    },
    {
      id: 2,
      name: "Executive Conference Chair",
      price: "$450.00",
      image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400&h=400&fit=crop",
      rating: 4.9,
      reviews: 15,
      category: "Seating",
      featured: false
    },
    {
      id: 3,
      name: "Modern Display Table",
      price: "$320.00",
      image: "https://images.unsplash.com/photo-1549497538-303791108f95?w=400&h=400&fit=crop",
      rating: 4.7,
      reviews: 31,
      category: "Tables",
      featured: false
    },
    {
      id: 4,
      name: "LED Exhibition Lighting Kit",
      price: "$180.00",
      image: "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=400&h=400&fit=crop",
      rating: 4.6,
      reviews: 18,
      category: "Lighting",
      featured: true
    },
    {
      id: 5,
      name: "Professional Display Stand",
      price: "$225.00",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
      rating: 4.8,
      reviews: 22,
      category: "Displays",
      featured: false
    },
    {
      id: 6,
      name: "Modular Reception Counter",
      price: "$890.00",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=400&fit=crop",
      rating: 4.9,
      reviews: 12,
      category: "Furniture",
      featured: true
    }
  ];

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Frequently Requested Items & Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Browse for popular items and services to feature in your booth. 
            Each piece is carefully selected for professional exhibitions and events.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product) => (
            <Card 
              key={product.id} 
              className="group cursor-pointer border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-premium bg-card/50 backdrop-blur-sm"
            >
              <CardContent className="p-6">
                 <div className="relative mb-4 overflow-hidden rounded-lg">
                   <img
                     src={product.image}
                     alt={product.name}
                     className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                   />
                   <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                     <Button size="sm" variant="secondary" className="h-8 w-8 p-0 rounded-full">
                       <Eye className="h-4 w-4" />
                     </Button>
                   </div>
                 </div>

                 <div className="space-y-3">
                   <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                     {product.name}
                   </h3>

                   <div className="flex items-center space-x-2">
                     <span className="text-2xl font-bold text-primary">{product.price}</span>
                     {product.originalPrice && (
                       <span className="text-sm text-muted-foreground line-through">
                         {product.originalPrice}
                       </span>
                     )}
                   </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg font-semibold rounded-lg"
          >
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;