import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";

export const articles = [
  {
    id: "cadeia-custodia-digital",
    title: "Como a Cadeia de Custódia Digital Garante a Validade das Provas",
    excerpt: "Entenda os procedimentos técnicos e legais que garantem a integridade e admissibilidade de evidências digitais em processos judiciais.",
    category: "Metodologia Forense",
    date: "15 de Janeiro de 2025",
    readTime: "8 min"
  },
  {
    id: "biometria-voz",
    title: "Biometria da Voz: Fundamentos e Aplicações Forenses",
    excerpt: "Explore as técnicas de análise biométrica de voz, comparação de locutores e a admissibilidade jurídica deste tipo de perícia.",
    category: "Áudio Forense",
    date: "10 de Janeiro de 2025",
    readTime: "10 min"
  },
  {
    id: "criptografia-assinaturas-digitais",
    title: "Criptografia e Assinaturas Digitais no Contexto Jurídico Brasileiro",
    excerpt: "Análise técnica da ICP-Brasil, padrões CAdES, PAdES, XAdES e a Lei 14.063/2020 sobre assinaturas eletrônicas.",
    category: "Direito Digital",
    date: "5 de Janeiro de 2025",
    readTime: "12 min"
  },
  {
    id: "pericia-celulares-android",
    title: "Perícia em Celulares Android e Extração de Dados com IPED e Autopsy",
    excerpt: "Guia técnico sobre extração forense de dados em dispositivos móveis Android utilizando ferramentas especializadas.",
    category: "Perícia Móvel",
    date: "28 de Dezembro de 2024",
    readTime: "15 min"
  },
  {
    id: "ia-deepfakes",
    title: "A Importância do Perito na Era da Inteligência Artificial e Deepfakes",
    excerpt: "Como a perícia forense digital se adapta aos desafios de conteúdo gerado por IA, deepfakes e manipulações sofisticadas.",
    category: "Tecnologia e Perícia",
    date: "20 de Dezembro de 2024",
    readTime: "10 min"
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold">Blog Técnico</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Artigos técnicos sobre perícia forense digital, direito digital, tecnologia e metodologia científica
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <Card key={article.id} className="p-6 border-border hover:border-primary/50 transition-[var(--transition-smooth)] flex flex-col">
                  <div className="mb-4">
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                  </div>
                  
                  <h2 className="text-xl font-bold mb-3 leading-tight">{article.title}</h2>
                  <p className="text-sm text-muted-foreground mb-4 flex-1">{article.excerpt}</p>
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-3 w-3" />
                      <span>{article.date}</span>
                    </div>
                    <span>{article.readTime} de leitura</span>
                  </div>
                  
                  <Link to={`/artigos/${article.id}`}>
                    <Button variant="outline" size="sm" className="w-full hover:bg-primary/10">
                      Ler artigo
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </Card>
              ))}
            </div>

            <div className="mt-16 text-center">
              <Card className="max-w-2xl mx-auto p-8 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/30">
                <h3 className="text-2xl font-bold mb-4">Quer receber atualizações?</h3>
                <p className="text-muted-foreground mb-6">
                  Entre em contato para receber notificações sobre novos artigos técnicos, 
                  atualizações legislativas e insights sobre perícia forense digital.
                </p>
                <Link to="/contato">
                  <Button size="lg" className="bg-primary hover:bg-primary-glow">
                    Entrar em Contato
                  </Button>
                </Link>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
