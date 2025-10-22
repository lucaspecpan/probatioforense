import { Shield, FileCheck, Lock, Scale } from "lucide-react";

const standards = [
  {
    icon: Shield,
    code: "ISO/IEC 27037",
    title: "Identificação e Coleta",
    description: "Identificação, coleta e preservação de evidências digitais"
  },
  {
    icon: FileCheck,
    code: "ISO/IEC 27041",
    title: "Validação de Métodos",
    description: "Validação de métodos e processos forenses"
  },
  {
    icon: Lock,
    code: "ISO/IEC 27042",
    title: "Análise e Interpretação",
    description: "Análise e interpretação de evidências digitais"
  },
  {
    icon: Scale,
    code: "ISO/IEC 27043",
    title: "Cadeia de Custódia",
    description: "Investigação de incidentes e cadeia de custódia"
  },
];

export const Methodology = () => {
  return (
    <section className="py-24 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Metodologia Científica</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Todos os exames realizados pela PROBATIO seguem rigorosas normas internacionais de forense digital. Cada análise é conduzida através de métodos cientificamente validados, garantindo integridade, autenticidade e admissibilidade das evidências em juízo.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {standards.map((standard, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-[var(--shadow-elegant)] transition-[var(--transition-smooth)]"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <standard.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-mono text-primary mb-1">{standard.code}</div>
                    <h3 className="font-semibold text-lg mb-2">{standard.title}</h3>
                    <p className="text-sm text-muted-foreground">{standard.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center space-y-4 pt-8">
            <p className="text-sm text-muted-foreground">
              Conformidade adicional com diretrizes SWGDE, ENFSI e FISWG
            </p>
            <div className="flex flex-wrap justify-center gap-6 pt-4">
              <div className="px-6 py-2 rounded-full border border-primary/30 bg-primary/5">
                <span className="text-xs font-medium text-primary">ABNT NBR ISO/IEC</span>
              </div>
              <div className="px-6 py-2 rounded-full border border-primary/30 bg-primary/5">
                <span className="text-xs font-medium text-primary">SWGDE</span>
              </div>
              <div className="px-6 py-2 rounded-full border border-primary/30 bg-primary/5">
                <span className="text-xs font-medium text-primary">ENFSI</span>
              </div>
              <div className="px-6 py-2 rounded-full border border-primary/30 bg-primary/5">
                <span className="text-xs font-medium text-primary">FISWG</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
