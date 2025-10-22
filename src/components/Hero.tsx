import { Button } from "@/components/ui/button";
import { ArrowRight, FileText } from "lucide-react";
import heroImage from "@/assets/hero-forensic-probatio.jpg";
import logoProbatio from "@/assets/logo-probatio-full.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(12, 12, 13, 0.92), rgba(12, 12, 13, 0.95)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="container mx-auto px-4 z-10 py-20">
        <div className="max-w-5xl mx-auto space-y-8 animate-fade-in">
          <div className="flex justify-center mb-8">
            <img 
              src={logoProbatio} 
              alt="PROBATIO Forense Digital"
              className="h-24 md:h-32 object-contain"
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-center">
            Precisão Técnica Aplicada à
            <span className="block text-primary mt-2">Verdade Digital</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-center leading-relaxed">
            Exames periciais conduzidos com rigor científico, neutralidade e relevância jurídica — garantindo evidências digitais confiáveis em processos judiciais.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button 
              size="lg" 
              variant="default"
              className="group font-semibold"
            >
              Solicitar Exame Técnico
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="font-semibold border-primary/30 hover:border-primary hover:bg-primary/10"
            >
              <FileText className="mr-2 h-5 w-5" />
              Explorar Serviços
            </Button>
          </div>
          
          <div className="pt-8 text-center">
            <p className="text-sm text-muted-foreground/70">
              Perito Lucas Henrique Pecazevicz Pancioni
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
