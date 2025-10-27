import { Card, CardContent } from "@/components/ui/card";

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Booth Carpet",
      price: "$280"
    },
    {
      id: 2,
      name: "Gray Padded Side Chair",
      price: "$105"
    },
    {
      id: 3,
      name: "Flatscreen Monitor",
      price: "$300"
    },
    {
      id: 4,
      name: "Booth Table",
      price: "$165.00"
    },
    {
      id: 5,
      name: "Carpet Padding",
      price: "$175"
    }
  ];

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Frequently Requested Items & Services
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Browse for popular items and services to feature in your booth. 
            Each piece is carefully selected for professional exhibitions and events.
          </p>
        </div>

        <div className="grid grid-cols-5 gap-6">
          {products.map((product) => (
            <Card 
              key={product.id} 
              className="group cursor-pointer border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-premium bg-card/50 backdrop-blur-sm"
            >
              <CardContent className="p-6">
                 <div className="space-y-3 text-center">
                   <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                     {product.name}
                   </h3>
                   <span className="text-2xl font-bold text-primary block">{product.price}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;