import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Shield, Award, BookOpen, Target } from "lucide-react";
import profilePhoto from "@/assets/lucas-perfil-placeholder.jpg";

const Perito = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold">
                Quem é o Perito Lucas Henrique Pecazevicz Pancioni
              </h1>
              
              {/* Profile Photo */}
              <div className="flex justify-center mb-5">
                <div className="relative w-[220px] h-[220px] rounded-full p-[3px] bg-gradient-to-r from-[#00A8C5] to-[#1EC6DF]">
                  <img 
                    src={profilePhoto}
                    alt="Perito Lucas Henrique Pecazevicz Pancioni"
                    className="w-full h-full rounded-full object-cover shadow-[0_0_20px_rgba(0,168,197,0.35)]"
                  />
                </div>
              </div>
              
              <p className="text-xl text-muted-foreground">
                Especialista em Perícia Forense Digital e Consultor Técnico
              </p>
            </div>

            <div className="prose prose-invert max-w-none space-y-8">
              <div className="bg-card border border-border rounded-lg p-8">
                <p className="text-lg leading-relaxed mb-6">
                  Perito Digital e Consultor Técnico, fundador da <strong className="text-primary">PROBATIO FORENSE DIGITAL</strong>, 
                  instituição especializada em análise forense de evidências digitais com aplicação 
                  em processos judiciais e investigações corporativas.
                </p>
                
                <p className="text-lg leading-relaxed mb-6">
                  Atua na análise de imagens, vídeos, áudios, dados e documentos eletrônicos, elaborando 
                  laudos e pareceres técnicos baseados em metodologias reconhecidas internacionalmente 
                  (ABNT NBR ISO/IEC, SWGDE, ENFSI e FISWG).
                </p>

                <p className="text-lg leading-relaxed">
                  Pós-graduando em <strong>Perícia Criminal e Judicial</strong>, <strong>Direito Digital e Proteção de Dados (LGPD)</strong>, 
                  e <strong>Perícia em Imagens e Documentos Digitais</strong> pelo Instituto de Pós-Graduação (IPOG).
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card border border-border rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Shield className="h-8 w-8 text-primary" />
                    <h2 className="text-2xl font-bold">Missão</h2>
                  </div>
                  <p className="text-muted-foreground">
                    Aplicar rigor científico e imparcialidade técnica na análise de evidências digitais, 
                    garantindo a integridade probatória e a confiabilidade dos resultados perante a Justiça.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Target className="h-8 w-8 text-primary" />
                    <h2 className="text-2xl font-bold">Princípios</h2>
                  </div>
                  <p className="text-muted-foreground">
                    Neutralidade técnica, conformidade com normas internacionais, sigilo profissional 
                    e compromisso com a verdade dos fatos através da ciência forense.
                  </p>
                </div>
              </div>

              <div className="bg-card border border-primary/20 rounded-lg p-8">
                <div className="flex items-center gap-3 mb-6">
                  <BookOpen className="h-8 w-8 text-primary" />
                  <h2 className="text-2xl font-bold">Capacitação Contínua</h2>
                </div>
                <p className="text-lg leading-relaxed mb-4">
                  Em processo de capacitação contínua através dos cursos <strong>MP Forense</strong>, 
                  ministrados pelo Perito Criminal Federal Marcos Pitanga, abrangendo:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">▪</span>
                    <span>Criptografia e Assinaturas Digitais (ICP-Brasil, CAdES, PAdES, XAdES)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">▪</span>
                    <span>Perícia em Celulares Android e Computadores</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">▪</span>
                    <span>IPED (Indexador e Processador de Evidências Digitais) e Autopsy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">▪</span>
                    <span>DFIR (Digital Forensics and Incident Response)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">▪</span>
                    <span>Teste de Invasão Ética e Segurança da Informação</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card border border-border rounded-lg p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Award className="h-8 w-8 text-primary" />
                  <h2 className="text-2xl font-bold">Ferramentas e Tecnologias</h2>
                </div>
                <p className="text-muted-foreground mb-4">
                  Utilização de softwares forenses reconhecidos internacionalmente:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    "FTK Imager",
                    "Magnet Axiom",
                    "Avilla Forensic",
                    "Autopsy",
                    "IPED",
                    "Wireshark",
                    "Dr. Fone",
                    "Verifact",
                    "DataCertify"
                  ].map((tool) => (
                    <div key={tool} className="bg-muted/30 rounded px-3 py-2 text-sm text-center">
                      {tool}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/30 rounded-lg p-8 text-center">
                <p className="text-xl font-semibold mb-2">
                  Comprometido com a verdade técnica, a imparcialidade e o reconhecimento da perícia digital 
                  como ciência essencial à Justiça.
                </p>
                <p className="text-sm text-muted-foreground italic mt-4">
                  "Onde a ciência encontra a verdade jurídica."
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Perito;
