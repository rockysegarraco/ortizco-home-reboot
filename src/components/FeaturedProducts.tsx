import { Card, CardContent } from "@/components/ui/card";
import carpetSamples from "@/assets/carpet-samples.png";
import chair from "@/assets/chair.png";
import monitor from "@/assets/monitor.png";
import tableDrape from "@/assets/table-drape.png";
import carpetPadding from "@/assets/carpet-padding.png";

const FeaturedProducts = () => {
  const products = [{
    id: 1,
    name: "Booth Carpet",
    price: "$280",
    image: carpetSamples
  }, {
    id: 2,
    name: "Gray Padded Side Chair",
    price: "$105",
    image: chair
  }, {
    id: 3,
    name: "Flatscreen Monitor",
    price: "$300",
    image: monitor
  }, {
    id: 4,
    name: "Table Drape",
    price: "$165.00",
    image: tableDrape
  }, {
    id: 5,
    name: "Carpet Padding",
    price: "$175",
    image: carpetPadding
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