import { Card, CardContent } from "@/components/ui/card";
const FeaturedProducts = () => {
  const products = [{
    id: 1,
    name: "Booth Carpet",
    price: "$280",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop"
  }, {
    id: 2,
    name: "Gray Padded Side Chair",
    price: "$105",
    image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400&h=400&fit=crop"
  }, {
    id: 3,
    name: "Flatscreen Monitor",
    price: "$300",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=400&fit=crop"
  }, {
    id: 4,
    name: "Booth Table",
    price: "$165.00",
    image: "https://images.unsplash.com/photo-1549497538-303791108f95?w=400&h=400&fit=crop"
  }, {
    id: 5,
    name: "Carpet Padding",
    price: "$175",
    image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=400&h=400&fit=crop"
  }];
  return <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-foreground mb-6 font-medium">
            Frequently Requested Items & Services
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Browse for popular items and services to feature in your booth. 
            Each piece is carefully selected for professional exhibitions and events.
          </p>
        </div>

        <div className="grid grid-cols-5 gap-3">
          {products.map(product => <Card key={product.id} className="group cursor-pointer border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-premium bg-card/50 backdrop-blur-sm">
              <CardContent className="p-4">
                 <div className="relative mb-3 overflow-hidden rounded-lg">
                   <img src={product.image} alt={product.name} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" />
                 </div>
                 <div className="space-y-2 text-center">
                   <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                     {product.name}
                   </h3>
                   <span className="text-2xl font-bold text-primary block">{product.price}</span>
                </div>
              </CardContent>
            </Card>)}
        </div>
      </div>
    </section>;
};
export default FeaturedProducts;