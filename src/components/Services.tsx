import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import iconImage from "@/assets/icon-image-forensics.png";
import iconAudio from "@/assets/icon-audio-forensics.png";
import iconDocument from "@/assets/icon-document-forensics.png";
import iconRecovery from "@/assets/icon-data-recovery.png";
import iconBiometric from "@/assets/icon-biometric-forensics.png";
import iconLegal from "@/assets/icon-legal-consultancy.png";

const services = [
  {
    icon: iconImage,
    title: "Perícia em Imagem e Vídeo",
    description: "Autenticação de imagens, detecção de manipulação (Photoshop, Deepfake), análise de metadados, fotogrametria e identificação de equipamento de origem.",
    standards: "ABNT NBR ISO/IEC 27037, 27042, SWGDE"
  },
  {
    icon: iconAudio,
    title: "Perícia em Áudio e Voz",
    description: "Comparação de locutores, biometria vocal, detecção de autenticidade, redução de ruído, transcrição e análise aural-acústica e automática.",
    standards: "SWGDE, ENFSI, ISO/IEC 19794-13"
  },
  {
    icon: iconDocument,
    title: "Documentoscopia Digital",
    description: "Exame de documentos eletrônicos e digitalizados, detecção de falsificação digital, verificação de assinaturas eletrônicas e biométricas.",
    standards: "ISO/IEC 19794-7, ISO 32000-1, ABNT NBR ISO/IEC 27043"
  },
  {
    icon: iconRecovery,
    title: "Recuperação de Dados",
    description: "Extração segura de dados e cadeia de custódia, recuperação de arquivos deletados ou corrompidos, validação de consistência de metadados.",
    standards: "ISO/IEC 27037, 27041"
  },
  {
    icon: iconBiometric,
    title: "Análise Biométrica e Facial",
    description: "Comparação facial com métodos morfológicos e holísticos, progressão etária, correlação anatômica e extração de características biométricas.",
    standards: "FISWG Guidelines"
  },
  {
    icon: iconLegal,
    title: "Consultoria Jurídico-Técnica",
    description: "Elaboração de laudos periciais, pareceres técnicos, assistência judicial, consultoria em cibersegurança e conformidade com LGPD.",
    standards: "Atuação judicial e extrajudicial"
  },
];

export const Services = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Serviços Forenses Digitais</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Análise técnica especializada com metodologia científica validada e conformidade com normas nacionais e internacionais
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="border-border hover:shadow-[var(--shadow-glow)] transition-[var(--transition-smooth)] hover:-translate-y-1 bg-card/50 backdrop-blur-sm"
            >
              <CardHeader>
                <div className="mb-4 w-16 h-16 flex items-center justify-center">
                  <img 
                    src={service.icon} 
                    alt={service.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
                <div className="pt-2 border-t border-border/50">
                  <p className="text-xs text-primary/80 font-medium">
                    Normas: {service.standards}
                  </p>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="group text-primary hover:text-primary hover:bg-primary/10 mt-2"
                >
                  Saiba mais
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
