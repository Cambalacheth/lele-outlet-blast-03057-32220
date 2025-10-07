import { useRef } from "react";
import Hero from "@/components/Hero";
import ProductShowcase from "@/components/ProductShowcase";
import TrustSection from "@/components/TrustSection";
import RegistrationForm from "@/components/RegistrationForm";
import LocationContact from "@/components/LocationContact";
import Footer from "@/components/Footer";

const Index = () => {
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen">
      <Hero onScrollToForm={scrollToForm} />
      <ProductShowcase />
      <TrustSection />
      <div ref={formRef}>
        <RegistrationForm />
      </div>
      <LocationContact />
      <Footer />
    </div>
  );
};

export default Index;
