import boothDesignImage from "@/assets/category-booth-design.jpg";
import furnitureRentalsImage from "@/assets/category-furniture-rentals.jpg";
import technologyImage from "@/assets/category-technology.jpg";
const CategoryShowcase = () => {
  const categories = [{
    id: 1,
    title: "Custom Furniture",
    image: boothDesignImage,
    link: "Shop",
    alt: "Professional exhibition booth setup with modern furniture"
  }, {
    id: 2,
    title: "Labor Services",
    image: furnitureRentalsImage,
    link: "Shop",
    alt: "Elegant event furniture rental showcase"
  }, {
    id: 3,
    title: "Audio Visual",
    image: technologyImage,
    link: "Shop",
    alt: "Professional event technology and AV equipment"
  }];
  return <section className="py-16 bg-background">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map(category => <div key={category.id} className="group cursor-pointer">
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg mb-4">
                <img src={category.image} alt={category.alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {category.title}
              </h3>
              <a href="#" className="inline-block text-foreground underline underline-offset-4 hover:text-foreground/80 transition-colors">
                {category.link}
              </a>
            </div>)}
        </div>
      </div>
    </section>;
};
export default CategoryShowcase;