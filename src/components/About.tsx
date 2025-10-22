import { Shield, CheckCircle2, Clock, Award, Scale, Fingerprint } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Confidencialidade Total",
    description: "Sigilo absoluto no tratamento de dados e evidências sensíveis"
  },
  {
    icon: Scale,
    title: "Conformidade Legal",
    description: "Procedimentos alinhados com normas judiciais brasileiras"
  },
  {
    icon: Clock,
    title: "Agilidade Técnica",
    description: "Prazos compatíveis com demandas processuais urgentes"
  },
  {
    icon: Award,
    title: "Expertise Científica",
    description: "Formação especializada e metodologia validada"
  },
  {
    icon: Fingerprint,
    title: "Neutralidade Pericial",
    description: "Análise imparcial baseada exclusivamente em evidências"
  },
  {
    icon: CheckCircle2,
    title: "Admissibilidade Judicial",
    description: "Laudos tecnicamente fundamentados e juridicamente válidos"
  },
];

export const About = () => {
  return (
    <section className="py-24 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold">
                O que é Perícia Forense Digital?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A perícia forense digital é o processo científico de identificação, preservação, análise e apresentação de evidências digitais de forma legalmente válida.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Aplicamos metodologias internacionalmente reconhecidas para extrair, analisar e documentar dados de dispositivos eletrônicos, documentos digitais, áudio e imagem, garantindo a integridade das provas e sua admissibilidade em processos judiciais.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A PROBATIO atua em conformidade com as normas ABNT NBR ISO/IEC 27037-27043, diretrizes SWGDE, ENFSI e FISWG, assegurando rigor técnico e científico em cada exame pericial.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-card p-5 rounded-lg border border-border hover:shadow-[var(--shadow-elegant)] transition-[var(--transition-smooth)] hover:-translate-y-1"
                >
                  <feature.icon className="h-8 w-8 text-primary mb-3" />
                  <h3 className="font-semibold mb-2 text-sm">{feature.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
