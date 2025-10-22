import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Shield, Search, FileCheck, FileText } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Coleta e Preservação das Evidências",
    description: "Identificação, coleta e preservação de evidências digitais seguindo a cadeia de custódia rigorosa",
    details: [
      "Documentação fotográfica e descritiva da cena",
      "Coleta utilizando técnicas não invasivas",
      "Geração de hash criptográfico (MD5, SHA-256)",
      "Armazenamento em mídia forense write-blocker",
      "Registro completo da cadeia de custódia"
    ]
  },
  {
    icon: FileCheck,
    number: "02",
    title: "Análise Técnica Forense",
    description: "Aplicação de metodologias científicas e ferramentas forenses especializadas",
    details: [
      "Verificação de integridade através de hash",
      "Análise de metadados (EXIF, timestamps, geolocalização)",
      "Uso de software forense certificado (IPED, Autopsy, FTK)",
      "Detecção de manipulações e inconsistências",
      "Documentação técnica de todos os procedimentos"
    ]
  },
  {
    icon: Shield,
    number: "03",
    title: "Interpretação e Validação Jurídica",
    description: "Correlação dos achados técnicos com o contexto jurídico e validação científica",
    details: [
      "Interpretação dos resultados técnicos",
      "Correlação com jurisprudência e legislação aplicável",
      "Validação através de metodologias reconhecidas",
      "Análise de confiabilidade estatística",
      "Fundamentação científica das conclusões"
    ]
  },
  {
    icon: FileText,
    number: "04",
    title: "Elaboração de Laudo e Parecer Técnico",
    description: "Documentação formal dos resultados em formato admissível judicialmente",
    details: [
      "Laudo pericial detalhado e fundamentado",
      "Linguagem técnica acessível ao meio jurídico",
      "Anexação de evidências e documentação fotográfica",
      "Assinatura digital do perito",
      "Conformidade com CPC e normas aplicáveis"
    ]
  }
];

const standards = [
  {
    code: "ABNT NBR ISO/IEC 27037",
    title: "Identificação, Coleta e Preservação",
    description: "Diretrizes para identificação, coleta, aquisição e preservação de evidências digitais"
  },
  {
    code: "ABNT NBR ISO/IEC 27041",
    title: "Garantia de Métodos Forenses",
    description: "Validação de métodos e processos utilizados na análise forense digital"
  },
  {
    code: "ABNT NBR ISO/IEC 27042",
    title: "Análise e Interpretação",
    description: "Diretrizes para análise e interpretação de evidências digitais"
  },
  {
    code: "ABNT NBR ISO/IEC 27043",
    title: "Investigação de Incidentes",
    description: "Processos e princípios de investigação de incidentes e cadeia de custódia"
  },
  {
    code: "ABNT NBR ISO/IEC 27050",
    title: "E-Discovery",
    description: "Governança e gerenciamento de descoberta eletrônica de informações"
  }
];

const Metodologia = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold">Metodologia Científica</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Processos rigorosos fundamentados em normas internacionais e melhores práticas forenses
              </p>
            </div>

            <div className="mb-20 space-y-12">
              {steps.map((step, index) => (
                <Card key={index} className="p-8 border-border">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <div className="p-4 rounded-lg bg-primary/10">
                          <step.icon className="h-10 w-10 text-primary" />
                        </div>
                        <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-xs font-bold">
                          {step.number}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex-1 space-y-4">
                      <div>
                        <h2 className="text-2xl font-bold mb-2">{step.title}</h2>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>

                      <ul className="space-y-2">
                        {step.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="text-primary mt-1">✓</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="bg-card border border-primary/20 rounded-lg p-8">
              <div className="flex items-center gap-3 mb-8">
                <Shield className="h-8 w-8 text-primary" />
                <h2 className="text-3xl font-bold">Normas e Padrões Internacionais</h2>
              </div>
              
              <p className="text-lg text-muted-foreground mb-8">
                Todos os exames realizados pela PROBATIO seguem rigorosamente as seguintes normas técnicas:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {standards.map((standard, index) => (
                  <div key={index} className="bg-muted/20 rounded-lg p-6 border border-border">
                    <h3 className="font-bold text-primary mb-2">{standard.code}</h3>
                    <h4 className="font-semibold mb-2 text-sm">{standard.title}</h4>
                    <p className="text-sm text-muted-foreground">{standard.description}</p>
                  </div>
                ))}
              </div>

              <div className="bg-primary/5 border border-primary/30 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-4">Diretrizes Complementares</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-primary">▪</span>
                    <span><strong>SWGDE</strong> — Scientific Working Group on Digital Evidence</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-primary">▪</span>
                    <span><strong>ENFSI</strong> — European Network of Forensic Science Institutes</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-primary">▪</span>
                    <span><strong>FISWG</strong> — Facial Identification Scientific Working Group</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-primary">▪</span>
                    <span><strong>NIST</strong> — National Institute of Standards and Technology</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/30 rounded-lg p-8 text-center">
              <p className="text-lg font-semibold">
                "A conformidade com normas internacionais garante que as evidências analisadas tenham 
                validade científica, reprodutibilidade e admissibilidade em processos judiciais."
              </p>
              <p className="text-sm text-muted-foreground mt-4">
                — Princípio fundamental da Perícia Forense Digital
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Metodologia;
