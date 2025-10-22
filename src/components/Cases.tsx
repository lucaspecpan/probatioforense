import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const cases = [
  {
    title: "Autenticação de Assinaturas Digitais",
    description: "Validação técnica de assinaturas eletrônicas e biométricas em contratos digitais, verificando integridade e autoria.",
    applications: ["Contratos eletrônicos", "Documentos judiciais", "Acordos digitais"]
  },
  {
    title: "Análise de Manipulação de Imagens",
    description: "Detecção de adulteração em fotografias através de análise de metadados, padrões de compressão JPEG e ruído digital.",
    applications: ["Processos trabalhistas", "Casos civis", "Investigações corporativas"]
  },
  {
    title: "Recuperação de Metadados em Documentos",
    description: "Extração e análise de metadados ocultos em documentos judiciais, revelando histórico de edição e autoria.",
    applications: ["Perícia judicial", "Investigação de fraude", "Auditorias técnicas"]
  },
  {
    title: "Transcrição e Análise de Áudio",
    description: "Transcrição forense de áudio com análise de autenticidade, identificação de cortes e edições digitais.",
    applications: ["Processos criminais", "Disputas trabalhistas", "Investigações internas"]
  },
  {
    title: "Comparação de Locutores",
    description: "Análise biométrica de voz através de métodos aural-acústicos e automáticos para identificação de locutor.",
    applications: ["Verificação de identidade", "Processos criminais", "Investigações corporativas"]
  },
  {
    title: "Validação de Cadeia de Custódia",
    description: "Verificação técnica da integridade e preservação de evidências multimídia durante todo o processo investigativo.",
    applications: ["Perícia judicial", "Investigações corporativas", "Auditoria forense"]
  },
];

export const Cases = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Casos e Aplicações</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Exemplos de análises forenses digitais aplicadas a situações reais (casos anonimizados)
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {cases.map((caseItem, index) => (
            <Card 
              key={index} 
              className="border-border hover:shadow-[var(--shadow-elegant)] transition-[var(--transition-smooth)] bg-card/50 backdrop-blur-sm"
            >
              <CardHeader>
                <CardTitle className="text-xl">{caseItem.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed pt-2">
                  {caseItem.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-primary mb-3">Aplicações:</p>
                  {caseItem.applications.map((app, appIndex) => (
                    <div key={appIndex} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{app}</span>
                    </div>
                  ))}
                </div>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="group text-primary hover:text-primary hover:bg-primary/10 mt-4 w-full"
                >
                  Ver detalhes
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
