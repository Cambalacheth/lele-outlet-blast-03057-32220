import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, MessageCircle } from "lucide-react";

const LocationContact = () => {
  const partners = [
    { name: "DIGI", color: "text-blue-600" },
    { name: "O2", color: "text-blue-500" },
    { name: "LEBARA", color: "text-green-600" },
    { name: "RIA", color: "text-red-600" },
  ];

  const handleWhatsAppClick = () => {
    window.open("https://chat.whatsapp.com/EVxHQFEZcRxF5oFMZOBgQb", "_blank");
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            Encuéntranos
          </h2>
          <p className="text-lg text-muted-foreground">
            Visítanos en nuestro centro de Puerto de Sagunto
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="shadow-soft">
              <CardContent className="pt-6 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full gradient-hero flex-shrink-0">
                    <MapPin className="text-primary-foreground" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Dirección</h3>
                    <p className="text-muted-foreground">
                      Av. Hispanidad 22<br />
                      Puerto de Sagunto, Valencia
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full gradient-hero flex-shrink-0">
                    <Clock className="text-primary-foreground" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Horario Outlet Day</h3>
                    <p className="text-muted-foreground">
                      Sábado y Domingo<br />
                      9:00 - 14:00 / 16:30 - 19:30
                    </p>
                  </div>
                </div>

                <Button 
                  variant="hero" 
                  size="lg" 
                  className="w-full"
                  onClick={handleWhatsAppClick}
                >
                  <MessageCircle className="mr-2" size={20} />
                  Abrir WhatsApp
                </Button>
              </CardContent>
            </Card>

            {/* Partners */}
            <Card className="shadow-soft">
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg mb-4 text-center">
                  Nuestros Partners
                </h3>
                <div className="flex flex-wrap justify-center items-center gap-6">
                  {partners.map((partner, index) => (
                    <div 
                      key={index}
                      className={`text-2xl font-black ${partner.color}`}
                    >
                      {partner.name}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Map */}
          <Card className="shadow-soft overflow-hidden h-[400px] lg:h-auto">
            <CardContent className="p-0 h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3075.9776989087847!2d-0.2194!3d39.6247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5ff8c0c0c0c0c0d%3A0x0!2sAv.%20Hispanidad%2C%2022%2C%20Puerto%20de%20Sagunto%2C%20Valencia!5e0!3m2!1ses!2ses!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Lele Center"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LocationContact;
