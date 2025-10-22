import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Image, Mic, FileText, HardDrive, Fingerprint, Scale } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Image,
    title: "Perícia em Imagens e Vídeos Digitais",
    description: "Análise técnica de autenticidade, detecção de manipulações, montagens e adulterações em fotografias e vídeos digitais.",
    details: [
      "Detecção de manipulações através de análise de ruído, compressão e padrões de CFA",
      "Extração e análise de metadados (EXIF, XMP, IPTC)",
      "Identificação de origem de equipamentos através de sensor fingerprinting",
      "Análise de deepfakes e conteúdo gerado por IA",
      "Fotogrametria e medições espaciais",
      "Análise de codecs, frames e integridade de vídeos"
    ],
    standards: "ABNT NBR ISO/IEC 27037, 27042 | SWGDE Best Practices"
  },
  {
    icon: Mic,
    title: "Perícia em Áudio e Biometria da Voz",
    description: "Comparação de locutores, análise de autenticidade de gravações e verificação de manipulações em áudios.",
    details: [
      "Comparação forense de locutores (métodos aural-acústico e automático)",
      "Verificação biométrica de voz (voiceprint)",
      "Detecção de cortes, edições e adulterações em áudios",
      "Redução de ruído e melhoria de inteligibilidade",
      "Análise de autenticidade de gravações",
      "Transcrição técnica e análise de confiabilidade"
    ],
    standards: "SWGDE Audio Authentication | ENFSI Guidelines | ISO/IEC 19794-13"
  },
  {
    icon: FileText,
    title: "Perícia em Documentos e Assinaturas Digitais",
    description: "Verificação de autenticidade de documentos eletrônicos, assinaturas digitais e certificados ICP-Brasil.",
    details: [
      "Análise de documentos eletrônicos e digitalizados",
      "Verificação de assinaturas eletrônicas e digitais (ICP-Brasil)",
      "Validação de certificados CAdES, PAdES, XAdES conforme Lei 14.063/2020",
      "Detecção de montagens e falsificações em PDFs",
      "Análise de metadados e estrutura de arquivos",
      "Exame grafoscópico de assinaturas digitalizadas"
    ],
    standards: "ISO/IEC 19794-7 | ISO 32000-1 | ABNT NBR ISO/IEC 27043"
  },
  {
    icon: HardDrive,
    title: "Recuperação e Análise de Dados Digitais",
    description: "Extração forense de dados, recuperação de arquivos deletados e preservação de evidências digitais.",
    details: [
      "Recuperação de arquivos apagados, corrompidos ou ocultos",
      "Extração forense de dispositivos móveis (Android/iOS)",
      "Análise de mídias de armazenamento (HD, SSD, pendrive, cartões SD)",
      "Preservação da cadeia de custódia digital",
      "Validação de integridade através de hash criptográfico",
      "Análise de metadados e consistência temporal"
    ],
    standards: "ISO/IEC 27037, 27041 | ABNT NBR ISO/IEC 27050"
  },
  {
    icon: Fingerprint,
    title: "Análise Biométrica e Facial",
    description: "Comparação facial morfológica, análise de progressão etária e extração de características biométricas.",
    details: [
      "Comparação facial forense (métodos morfológico e holístico)",
      "Análise de progressão etária",
      "Correlação anatômica e antropométrica",
      "Extração e matching de características biométricas",
      "Conformidade com diretrizes FISWG"
    ],
    standards: "FISWG Guidelines | ISO/IEC 19794"
  },
  {
    icon: Scale,
    title: "Consultoria e Assistência Técnica Judicial",
    description: "Apoio técnico a escritórios de advocacia, elaboração de quesitos e pareceres técnicos.",
    details: [
      "Elaboração de laudos periciais e pareceres técnicos",
      "Atuação como perito judicial ou assistente técnico",
      "Formulação de quesitos técnicos",
      "Impugnação de laudos",
      "Consultoria em cybersegurança e LGPD",
      "Suporte técnico em audiências e sustentações"
    ],
    standards: "CPC Art. 156, 465, 473 | Lei 13.709/2018 (LGPD)"
  }
];

const Servicos = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">Serviços Forenses Digitais</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Análises técnicas especializadas com metodologia científica reconhecida e admissibilidade judicial
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-8">
            {services.map((service, index) => (
              <Card key={index} className="p-8 border-border hover:border-primary/50 transition-[var(--transition-smooth)]">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="p-4 rounded-lg bg-primary/10">
                      <service.icon className="h-12 w-12 text-primary" />
                    </div>
                  </div>
                  
                  <div className="flex-1 space-y-4">
                    <div>
                      <h2 className="text-2xl font-bold mb-2">{service.title}</h2>
                      <p className="text-muted-foreground">{service.description}</p>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-semibold text-sm text-primary">Serviços Inclusos:</h3>
                      <ul className="grid md:grid-cols-2 gap-2">
                        {service.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="text-primary mt-1">▪</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <span className="text-xs text-muted-foreground">
                        <strong>Normas:</strong> {service.standards}
                      </span>
                      <Link to="/contato">
                        <Button variant="outline" size="sm" className="hover:bg-primary/10">
                          Solicitar Análise
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Card className="max-w-2xl mx-auto p-8 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/30">
              <h3 className="text-2xl font-bold mb-4">Precisa de uma análise personalizada?</h3>
              <p className="text-muted-foreground mb-6">
                Entre em contato para discutir seu caso específico e receber orientação técnica especializada
              </p>
              <Link to="/contato">
                <Button size="lg" className="bg-primary hover:bg-primary-glow">
                  Solicitar Contato
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Servicos;
