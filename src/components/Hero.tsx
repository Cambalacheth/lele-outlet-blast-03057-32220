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
      <div className="relative z-10 container mx-auto px-4 py-8 md:py-12 text-center">
        {/* Main Title - Fondo blanco sólido para máxima legibilidad */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black mb-4 md:mb-6 leading-tight px-2">
          <div className="inline-block bg-white px-4 py-2 sm:px-6 sm:py-3 md:px-10 md:py-5 rounded-xl md:rounded-2xl shadow-strong">
            <span className="block text-primary text-3xl sm:text-4xl md:text-6xl lg:text-7xl">
              OUTLET DAY
            </span>
          </div>
        </h1>

        {/* Dates - Super Prominent */}
        <div className="mb-6 md:mb-8 inline-block gradient-accent px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-4 rounded-xl md:rounded-2xl shadow-strong transform hover:scale-105 transition-all mx-2">
          <p className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black">
            📅 ¡Sábados y Domingos!
          </p>
        </div>

        {/* Location and Hours */}
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center mb-6 md:mb-10 text-sm sm:text-base md:text-lg px-4">
          <div className="flex items-center gap-2 bg-card px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 rounded-lg shadow-soft w-full sm:w-auto justify-center">
            <MapPin className="text-primary flex-shrink-0" size={18} />
            <span className="font-semibold">Puerto de Sagunto, Valencia</span>
          </div>
          <div className="flex items-center gap-2 bg-card px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 rounded-lg shadow-soft w-full sm:w-auto justify-center">
            <Clock className="text-primary flex-shrink-0" size={18} />
            <span className="font-semibold text-center">9:00-14:00 / 16:30-19:30</span>
          </div>
        </div>

        {/* CTA Button */}
        <Button 
          variant="accent" 
          size="xl"
          onClick={onScrollToForm}
          className="mb-4 md:mb-6 text-sm sm:text-base md:text-lg px-6 py-3 md:px-8 md:py-4 mx-4"
        >
          🎯 APÚNTATE Y ASEGURA TU OFERTA
        </Button>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
          Descuentos <span className="font-bold text-accent">exclusivos</span> en stock limitado.{" "}
          <span className="font-bold text-primary">¡Solo hasta agotar existencias!</span>
        </p>
      </div>
    </section>
  );
};

export default Hero;
