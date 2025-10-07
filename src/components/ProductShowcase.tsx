import { Smartphone, Headphones, Zap, Package } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ProductShowcase = () => {
  const products = [
    {
      icon: Smartphone,
      title: "Electrónica & Telefonía",
      description: "Los mejores smartphones, tablets y accesorios",
    },
    {
      icon: Headphones,
      title: "Gadgets & Audio",
      description: "Auriculares, altavoces y tecnología inteligente",
    },
    {
      icon: Zap,
      title: "Tecnología del Hogar",
      description: "Productos Cecotec y electrodomésticos",
    },
    {
      icon: Package,
      title: "Paquetes Sorpresa",
      description: "Devoluciones de Amazon, Shein y AliExpress",
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 text-foreground">
            ¿Qué Encontrarás?
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Una selección increíble de productos con descuentos de locura
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-strong transition-all duration-300 hover:-translate-y-1 md:hover:-translate-y-2 border-2 hover:border-primary"
            >
              <CardContent className="pt-5 md:pt-6 pb-5 md:pb-6 text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full gradient-hero mb-3 md:mb-4 group-hover:scale-110 transition-transform">
                  <product.icon className="text-primary-foreground" size={28} />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2">{product.title}</h3>
                <p className="text-sm md:text-base text-muted-foreground">{product.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Special Offers Banner */}
        <div className="mt-8 md:mt-12 gradient-accent rounded-xl md:rounded-2xl p-6 md:p-8 text-center shadow-strong mx-2">
          <p className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black mb-2">
            🔥 PRECIOS DE LOCURA 🔥
          </p>
          <p className="text-white text-base sm:text-lg md:text-xl font-semibold">
            ¡Solo hasta agotar stock!
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
