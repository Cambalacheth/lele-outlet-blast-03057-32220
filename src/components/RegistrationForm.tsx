import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, User } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";

// Temporary type definition until Supabase types regenerate
type OutletRegistration = {
  nombre: string;
  whatsapp: string;
  email: string;
  privacy_accepted: boolean;
};

const registrationSchema = z.object({
  nombre: z.string().trim().min(1, "El nombre es obligatorio").max(100, "El nombre es demasiado largo"),
  whatsapp: z.string().trim().min(1, "El WhatsApp es obligatorio").max(20, "El número es demasiado largo"),
  email: z.string().trim().email("Email inválido").max(255, "El email es demasiado largo"),
  privacyAccepted: z.boolean().refine(val => val === true, "Debes aceptar la política de privacidad"),
});

const RegistrationForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nombre: "",
    whatsapp: "",
    email: "",
    privacyAccepted: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Validate form data
      const validatedData = registrationSchema.parse(formData);
      
      // Save to database - Type assertion until Supabase types regenerate
      const registrationData: OutletRegistration = {
        nombre: validatedData.nombre,
        whatsapp: validatedData.whatsapp,
        email: validatedData.email,
        privacy_accepted: validatedData.privacyAccepted,
      };
      
      const { error } = await (supabase as any)
        .from('outlet_registrations')
        .insert(registrationData);

      if (error) throw error;

      toast({
        title: "¡Registro exitoso! 🎉",
        description: "Te hemos apuntado al Outlet Day. ¡Nos vemos pronto!",
      });

      // Reset form
      setFormData({
        nombre: "",
        whatsapp: "",
        email: "",
        privacyAccepted: false,
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Error de validación",
          description: error.errors[0].message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Error",
          description: "No se pudo completar el registro. Por favor, intenta de nuevo.",
          variant: "destructive",
        });
      }
    }
  };

  return (
    <section id="registro" className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8 md:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 text-foreground">
              ¡Apúntate Ahora!
            </h2>
            <p className="text-base md:text-lg text-muted-foreground px-4">
              Regístrate y sé el primero en conocer las ofertas exclusivas
            </p>
          </div>

          <Card className="shadow-strong border-2 border-primary/20">
            <CardHeader className="gradient-hero text-center rounded-t-lg px-4 py-5 md:px-6 md:py-6">
              <CardTitle className="text-xl md:text-2xl text-primary-foreground">
                Formulario de Registro
              </CardTitle>
              <CardDescription className="text-sm md:text-base text-primary-foreground/90">
                Completa tus datos para no perderte nada
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-5 md:pt-6 px-4 md:px-6">
              <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="nombre" className="flex items-center gap-2">
                    <User size={16} className="text-primary" />
                    Nombre Completo *
                  </Label>
                  <Input
                    id="nombre"
                    type="text"
                    placeholder="Tu nombre completo"
                    value={formData.nombre}
                    onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                    required
                    className="border-2 focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="whatsapp" className="flex items-center gap-2">
                    <Phone size={16} className="text-primary" />
                    WhatsApp *
                  </Label>
                  <Input
                    id="whatsapp"
                    type="tel"
                    placeholder="+34 600 000 000"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    required
                    className="border-2 focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center gap-2">
                    <Mail size={16} className="text-primary" />
                    Email *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="tu@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="border-2 focus:border-primary"
                  />
                </div>

                <div className="flex items-start space-x-2 p-4 bg-muted/50 rounded-lg">
                  <Checkbox
                    id="privacy"
                    checked={formData.privacyAccepted}
                    onCheckedChange={(checked) =>
                      setFormData({ ...formData, privacyAccepted: checked as boolean })
                    }
                    className="mt-1"
                  />
                  <Label htmlFor="privacy" className="text-sm leading-relaxed cursor-pointer">
                    Acepto la política de privacidad y el tratamiento de mis datos para recibir
                    información sobre eventos y ofertas de Lele Center. *
                  </Label>
                </div>

                <Button 
                  type="submit" 
                  variant="hero" 
                  size="xl" 
                  className="w-full text-sm sm:text-base md:text-lg py-3 md:py-4"
                >
                  APUNTARME AL OUTLET
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  * Campos obligatorios
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;
