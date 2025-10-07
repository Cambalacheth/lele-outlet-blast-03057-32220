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
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            ¿Qué Encontrarás?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Una selección increíble de productos con descuentos de locura
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-strong transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary"
            >
              <CardContent className="pt-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-hero mb-4 group-hover:scale-110 transition-transform">
                  <product.icon className="text-primary-foreground" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                <p className="text-muted-foreground">{product.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Special Offers Banner */}
        <div className="mt-12 gradient-accent rounded-2xl p-8 text-center shadow-strong">
          <p className="text-white text-2xl md:text-4xl font-black mb-2">
            🔥 PRECIOS DE LOCURA 🔥
          </p>
          <p className="text-white text-lg md:text-xl font-semibold">
            ¡Solo hasta agotar stock!
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
