import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { GraduationCap, Award, Shield, BookOpen, Wrench } from "lucide-react";

const education = [
  {
    title: "Pós-Graduação em Perícia Forense de Imagem e Documentos Digitais",
    institution: "Instituto de Pós-Graduação (IPOG)",
    status: "Concluída",
    description: "Formação especializada em análise forense de imagens, vídeos e documentos digitais"
  },
  {
    title: "Pós-Graduação em Direito Digital e Proteção de Dados (LGPD)",
    institution: "Instituição Especializada",
    status: "Concluída",
    description: "Especialização em legislação digital, proteção de dados pessoais e compliance"
  },
  {
    title: "Pós-Graduação em Perícia Criminal e Judicial",
    institution: "Gran Pós",
    status: "Em andamento",
    description: "Formação ampla em perícia criminal, procedimentos judiciais e elaboração de laudos"
  }
];

const mpForenseCourses = [
  {
    title: "Criptografia e Assinaturas Digitais",
    topics: [
      "Fundamentos de criptografia simétrica e assimétrica",
      "ICP-Brasil e certificados digitais",
      "Padrões CAdES, PAdES, XAdES",
      "Lei 14.063/2020 sobre assinaturas eletrônicas",
      "Validação de certificados e cadeia de confiança"
    ]
  },
  {
    title: "Perícia em Celulares Android e Computadores",
    topics: [
      "Extração física e lógica de dados",
      "Análise de partições e sistemas de arquivos",
      "Recuperação de dados deletados",
      "Análise de aplicativos e banco de dados SQLite",
      "Ferramentas: Dr. Fone, Magnet Axiom, Cellebrite"
    ]
  },
  {
    title: "IPED e Autopsy",
    topics: [
      "Indexador e Processador de Evidências Digitais (IPED)",
      "Autopsy Digital Forensics Platform",
      "Processamento automatizado de grandes volumes",
      "Análise de timelines e geolocalização",
      "Geração de relatórios forenses"
    ]
  },
  {
    title: "DFIR - Digital Forensics and Incident Response",
    topics: [
      "Resposta a incidentes de segurança",
      "Análise de logs e eventos de sistema",
      "Investigação de malware e ransomware",
      "Preservação de evidências voláteis",
      "Reconstrução de ataques cibernéticos"
    ]
  },
  {
    title: "Teste de Invasão Ética e Segurança da Informação",
    topics: [
      "Metodologias de pentest (OWASP, PTES)",
      "Análise de vulnerabilidades",
      "Testes de invasão em aplicações web",
      "Engenharia social e phishing",
      "Relatórios de segurança e remediação"
    ]
  }
];

const tools = [
  "FTK Imager",
  "Magnet Axiom",
  "Avilla Forensic",
  "Autopsy",
  "IPED",
  "Wireshark",
  "Dr. Fone",
  "Cellebrite",
  "Verifact",
  "DataCertify",
  "EnCase",
  "X-Ways Forensics"
];

const certifications = [
  "ABNT NBR ISO/IEC 27037 — Preservação de Evidências Digitais",
  "ABNT NBR ISO/IEC 27041 — Garantia de Métodos Forenses",
  "ABNT NBR ISO/IEC 27042 — Análise de Evidências Digitais",
  "ABNT NBR ISO/IEC 27043 — Investigação de Incidentes",
  "SWGDE — Scientific Working Group on Digital Evidence",
  "ENFSI — European Network of Forensic Science Institutes",
  "FISWG — Facial Identification Scientific Working Group"
];

const Credenciais = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold">Credenciais e Formação</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Expertise técnica fundamentada em formação especializada, capacitação contínua e conformidade com padrões internacionais
              </p>
            </div>

            {/* Formação Acadêmica */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <GraduationCap className="h-8 w-8 text-primary" />
                <h2 className="text-3xl font-bold">Formação Acadêmica</h2>
              </div>
              
              <div className="grid gap-6">
                {education.map((edu, index) => (
                  <Card key={index} className="p-6 border-border">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="font-bold text-lg mb-2">{edu.title}</h3>
                        <p className="text-sm text-muted-foreground mb-1">{edu.institution}</p>
                        <p className="text-sm text-muted-foreground">{edu.description}</p>
                      </div>
                      <span className={`text-xs px-3 py-1 rounded-full ${
                        edu.status === "Concluída" 
                          ? "bg-primary/20 text-primary" 
                          : "bg-accent/20 text-accent"
                      }`}>
                        {edu.status}
                      </span>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Cursos MP Forense */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <BookOpen className="h-8 w-8 text-primary" />
                <h2 className="text-3xl font-bold">Cursos MP Forense</h2>
              </div>
              
              <p className="text-muted-foreground mb-8">
                Capacitação especializada ministrada pelo <strong>Perito Criminal Federal Marcos Pitanga</strong>, 
                referência nacional em perícia forense digital e resposta a incidentes.
              </p>

              <div className="grid gap-6">
                {mpForenseCourses.map((course, index) => (
                  <Card key={index} className="p-6 border-border">
                    <h3 className="font-bold text-lg mb-4 text-primary">{course.title}</h3>
                    <ul className="space-y-2">
                      {course.topics.map((topic, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-primary mt-1">▪</span>
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                ))}
              </div>
            </div>

            {/* Ferramentas e Tecnologias */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <Wrench className="h-8 w-8 text-primary" />
                <h2 className="text-3xl font-bold">Ferramentas e Tecnologias</h2>
              </div>
              
              <Card className="p-8 border-border">
                <p className="text-muted-foreground mb-6">
                  Utilização de softwares forenses reconhecidos internacionalmente e validados cientificamente:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {tools.map((tool, index) => (
                    <div key={index} className="bg-muted/30 rounded-lg px-4 py-3 text-sm text-center font-medium">
                      {tool}
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Certificações e Normas */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <Shield className="h-8 w-8 text-primary" />
                <h2 className="text-3xl font-bold">Certificações e Normas</h2>
              </div>
              
              <Card className="p-8 border-primary/20 bg-primary/5">
                <p className="text-muted-foreground mb-6">
                  Conformidade com normas técnicas internacionais e diretrizes de boas práticas forenses:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-start gap-3 bg-card rounded-lg p-4">
                      <Award className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{cert}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/30 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Educação Contínua e Atualização Técnica</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A perícia forense digital é uma ciência em constante evolução. Por isso, mantemos compromisso 
                permanente com atualização técnica, participação em congressos e publicações científicas, 
                garantindo que nossas análises reflitam o estado da arte da ciência forense.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Credenciais;
