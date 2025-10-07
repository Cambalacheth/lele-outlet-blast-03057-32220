import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin } from "lucide-react";
import heroImage from "@/assets/outlet-hero.jpg";

interface HeroProps {
  onScrollToForm: () => void;
}

const Hero = ({ onScrollToForm }: HeroProps) => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/85 to-primary/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-12 text-center">
        {/* Logo/Brand */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
            LELE CENTER
          </h2>
          <div className="h-1 w-24 gradient-hero mx-auto rounded-full" />
        </div>

        {/* Main Title - Fondo blanco sólido para máxima legibilidad */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
          <span className="block text-foreground mb-4">¡GRAN</span>
          <div className="inline-block bg-white px-6 py-3 md:px-10 md:py-5 rounded-2xl shadow-strong">
            <span className="block text-primary">
              OUTLET DAY
            </span>
          </div>
        </h1>

        {/* Dates - Super Prominent */}
        <div className="mb-8 inline-block gradient-accent px-8 py-4 rounded-2xl shadow-strong transform hover:scale-105 transition-all">
          <p className="text-white text-xl md:text-2xl font-semibold mb-1">
            📅 SÁBADO Y DOMINGO
          </p>
          <p className="text-white text-3xl md:text-5xl font-black">
            11 y 12 de OCTUBRE
          </p>
        </div>

        {/* Location and Hours */}
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-10 text-base md:text-lg">
          <div className="flex items-center gap-2 bg-card px-6 py-3 rounded-lg shadow-soft">
            <MapPin className="text-primary" size={20} />
            <span className="font-semibold">Puerto de Sagunto, Valencia</span>
          </div>
          <div className="flex items-center gap-2 bg-card px-6 py-3 rounded-lg shadow-soft">
            <Clock className="text-primary" size={20} />
            <span className="font-semibold">9:00-14:00 / 16:30-19:30</span>
          </div>
        </div>

        {/* CTA Button */}
        <Button 
          variant="accent" 
          size="xl"
          onClick={onScrollToForm}
          className="mb-6"
        >
          🎯 APÚNTATE Y ASEGURA TU OFERTA
        </Button>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Descuentos <span className="font-bold text-accent">exclusivos</span> en stock limitado.{" "}
          <span className="font-bold text-primary">¡Solo hasta agotar existencias!</span>
        </p>
      </div>
    </section>
  );
};

export default Hero;
