import { GraduationCap, Award, Shield, FileCheck } from "lucide-react";

const credentials = [
  {
    icon: GraduationCap,
    title: "Pós-Graduação em Perícia Forense de Imagem e Documentos Digitais",
    institution: "IPOG"
  },
  {
    icon: GraduationCap,
    title: "Pós-Graduação em Direito Digital e Proteção de Dados (LGPD)",
    institution: "Instituição Especializada"
  },
  {
    icon: GraduationCap,
    title: "Pós-Graduação em Perícia Criminal e Judicial",
    institution: "Instituição Especializada"
  },
  {
    icon: Award,
    title: "Estudos em Segurança da Informação e Investigação Digital",
    institution: "Em andamento"
  },
];

const certifications = [
  "ABNT NBR ISO/IEC 27037, 27041, 27042, 27043",
  "SWGDE - Scientific Working Group on Digital Evidence",
  "ENFSI - European Network of Forensic Science Institutes",
  "FISWG - Facial Identification Scientific Working Group"
];

export const Credentials = () => {
  return (
    <section className="py-24 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Credenciais e Formação</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Expertise técnica fundamentada em formação especializada e conformidade com padrões internacionais
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {credentials.map((credential, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-[var(--shadow-elegant)] transition-[var(--transition-smooth)]"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <credential.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-base mb-2 leading-tight">{credential.title}</h3>
                    <p className="text-sm text-muted-foreground">{credential.institution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-card border border-primary/20 rounded-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="h-8 w-8 text-primary" />
              <h3 className="text-2xl font-bold">Certificações e Normas</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-start gap-3">
                  <FileCheck className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
