import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const cases = [
  {
    title: "Autenticação de Documentos Eletrônicos",
    description: "Verificação de autenticidade e integridade de documentos digitais apresentados como prova judicial",
    applications: [
      "Validação de prints de conversas (WhatsApp, Telegram, e-mail)",
      "Análise de autenticidade de contratos digitalizados",
      "Verificação de boletos e documentos fiscais",
      "Detecção de montagens em PDFs",
      "Validação de assinaturas eletrônicas e digitais",
      "Análise de metadados e timestamps"
    ]
  },
  {
    title: "Perícia em Imagens e Fotografias",
    description: "Análise técnica de fotografias e imagens digitais para detectar manipulações e garantir autenticidade",
    applications: [
      "Detecção de manipulações em fotos de acidentes de trânsito",
      "Análise de autenticidade de imagens em processos trabalhistas",
      "Verificação de adulterações em documentos fotografados",
      "Identificação de deepfakes e conteúdo gerado por IA",
      "Fotogrametria para medições e perícias de local",
      "Recuperação de imagens deletadas ou danificadas"
    ]
  },
  {
    title: "Análise Forense de Áudios",
    description: "Exame de gravações de áudio para verificar autenticidade e realizar comparação de locutores",
    applications: [
      "Detecção de cortes e edições em gravações judiciais",
      "Comparação biométrica de vozes (voiceprint)",
      "Verificação de autenticidade de áudios de WhatsApp",
      "Transcrição técnica e análise de inteligibilidade",
      "Redução de ruído para melhoria de qualidade",
      "Identificação de origem de gravações"
    ]
  },
  {
    title: "Recuperação de Dados Digitais",
    description: "Extração e recuperação de dados apagados, corrompidos ou ocultos em dispositivos eletrônicos",
    applications: [
      "Recuperação de mensagens deletadas em celulares",
      "Extração de dados de dispositivos danificados",
      "Recuperação de arquivos de HDs formatados",
      "Análise de histórico de navegação e atividades digitais",
      "Extração forense de cartões de memória e pendrives",
      "Preservação de evidências com cadeia de custódia"
    ]
  },
  {
    title: "Validação de Cadeia de Custódia",
    description: "Garantia de integridade e rastreabilidade de evidências digitais através de hash criptográfico",
    applications: [
      "Geração de hash MD5 e SHA-256 de evidências",
      "Validação temporal através de carimbo de tempo (timestamp)",
      "Certificação via Verifact e DataCertify",
      "Documentação completa da cadeia de custódia",
      "Verificação de integridade de mídias forenses",
      "Conformidade com ISO/IEC 27037 e 27043"
    ]
  },
  {
    title: "Consultoria em Cibersegurança e LGPD",
    description: "Assessoria técnica em segurança da informação, proteção de dados e conformidade legal",
    applications: [
      "Análise de incidentes de segurança (data breach)",
      "Resposta a incidentes (DFIR)",
      "Auditoria de conformidade com LGPD",
      "Análise de vulnerabilidades e teste de invasão",
      "Elaboração de políticas de segurança da informação",
      "Consultoria em proteção de dados pessoais"
    ]
  }
];

const Casos = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold">Casos e Aplicações</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Exemplos práticos de aplicação da perícia forense digital em contextos judiciais e corporativos
              </p>
              <p className="text-sm text-muted-foreground italic">
                * Casos apresentados de forma anonimizada, respeitando o sigilo profissional
              </p>
            </div>

            <div className="grid gap-8">
              {cases.map((caso, index) => (
                <Card key={index} className="p-8 border-border hover:border-primary/50 transition-[var(--transition-smooth)]">
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold mb-3">{caso.title}</h2>
                    <p className="text-muted-foreground">{caso.description}</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-sm text-primary mb-4">Aplicações Práticas:</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {caso.applications.map((app, idx) => (
                        <div key={idx} className="flex items-start gap-3 bg-muted/20 rounded-lg p-4">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{app}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="mt-16 grid md:grid-cols-3 gap-6">
              <Card className="p-6 text-center border-primary/30 bg-primary/5">
                <div className="text-4xl font-bold text-primary mb-2">100+</div>
                <p className="text-sm text-muted-foreground">Análises Realizadas</p>
              </Card>
              <Card className="p-6 text-center border-primary/30 bg-primary/5">
                <div className="text-4xl font-bold text-primary mb-2">95%</div>
                <p className="text-sm text-muted-foreground">Taxa de Admissibilidade Judicial</p>
              </Card>
              <Card className="p-6 text-center border-primary/30 bg-primary/5">
                <div className="text-4xl font-bold text-primary mb-2">ISO</div>
                <p className="text-sm text-muted-foreground">Conformidade com Normas Internacionais</p>
              </Card>
            </div>

            <div className="mt-12 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/30 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4 text-center">Áreas de Atuação</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  "Direito Civil",
                  "Direito Trabalhista",
                  "Direito Criminal",
                  "Direito Digital",
                  "Direito Empresarial",
                  "Investigações Corporativas",
                  "Compliance e LGPD",
                  "Arbitragem",
                  "Consultoria Preventiva"
                ].map((area, index) => (
                  <div key={index} className="flex items-center gap-2 bg-card rounded-lg p-3">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Casos;
