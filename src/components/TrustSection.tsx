import { Card, CardContent } from "@/components/ui/card";
import { Award, Heart, Headphones, Shield } from "lucide-react";

const TrustSection = () => {
  const benefits = [
    {
      icon: Award,
      title: "Cercanía Local",
      description: "Tu tienda de confianza en Puerto de Sagunto",
    },
    {
      icon: Heart,
      title: "Variedad Real",
      description: "Productos auténticos y de calidad garantizada",
    },
    {
      icon: Headphones,
      title: "Asesoría Personalizada",
      description: "Te ayudamos a encontrar las mejores ofertas",
    },
    {
      icon: Shield,
      title: "Soporte Postventa",
      description: "Estamos aquí después de tu compra",
    },
  ];

  const testimonials = [
    {
      text: "Los mejores precios que he encontrado en la zona. ¡Volveré seguro!",
      author: "María G.",
    },
    {
      text: "Atención excelente y productos de calidad. Muy recomendable.",
      author: "Carlos R.",
    },
    {
      text: "Encontré exactamente lo que buscaba a un precio increíble.",
      author: "Laura M.",
    },
  ];

  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Why Choose Us */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            ¿Por qué elegir LeLe Center?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center hover:shadow-soft transition-all">
              <CardContent className="pt-6">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                  <benefit.icon className="text-primary" size={24} />
                </div>
                <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials */}
        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-bold">
            Lo que dicen nuestros clientes
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-2 hover:border-primary transition-all">
              <CardContent className="pt-6">
                <div className="text-4xl text-primary mb-4">"</div>
                <p className="text-foreground mb-4 italic">{testimonial.text}</p>
                <p className="text-sm font-semibold text-primary">— {testimonial.author}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
