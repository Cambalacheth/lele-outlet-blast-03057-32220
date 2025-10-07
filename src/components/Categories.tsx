import CategoryCard from "./CategoryCard";
import { Shirt, Laptop, Home, Watch, Baby, Dumbbell } from "lucide-react";

const Categories = () => {
  const categories = [
    {
      icon: Shirt,
      title: "Moda",
      discount: "Hasta 70%",
      products: "500+ productos"
    },
    {
      icon: Laptop,
      title: "Electrónica",
      discount: "Hasta 60%",
      products: "300+ productos"
    },
    {
      icon: Home,
      title: "Hogar",
      discount: "Hasta 55%",
      products: "400+ productos"
    },
    {
      icon: Watch,
      title: "Accesorios",
      discount: "Hasta 65%",
      products: "250+ productos"
    },
    {
      icon: Baby,
      title: "Bebé",
      discount: "Hasta 50%",
      products: "200+ productos"
    },
    {
      icon: Dumbbell,
      title: "Deportes",
      discount: "Hasta 60%",
      products: "350+ productos"
    }
  ];

  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-black md:text-5xl">
            Categorías en <span className="text-primary">Oferta</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Descubre increíbles descuentos en todas nuestras categorías
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <div
              key={category.title}
              className="animate-in fade-in slide-in-from-bottom-4"
              style={{
                animationDelay: `${index * 100}ms`,
                animationDuration: "600ms",
                animationFillMode: "backwards"
              }}
            >
              <CategoryCard {...category} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
