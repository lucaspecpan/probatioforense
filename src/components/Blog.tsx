import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

const articles = [
  {
    title: "Entendendo Evidências Digitais e Cadeia de Custódia",
    excerpt: "Como garantir a integridade e admissibilidade de provas digitais em processos judiciais através da cadeia de custódia adequada.",
    date: "15 de Março, 2025",
    category: "Fundamentos"
  },
  {
    title: "IA, Deepfakes e o Futuro da Forense Digital",
    excerpt: "Os desafios emergentes na detecção de manipulações geradas por inteligência artificial e técnicas avançadas de autenticação.",
    date: "10 de Março, 2025",
    category: "Tecnologia"
  },
  {
    title: "Biometria de Voz em Análise Forense",
    excerpt: "Métodos científicos de comparação de locutores e sua aplicação em investigações e processos judiciais.",
    date: "5 de Março, 2025",
    category: "Técnicas"
  },
  {
    title: "Como Identificar Falsificação em Documentos Digitais",
    excerpt: "Técnicas forenses para detecção de adulteração em PDFs, imagens escaneadas e documentos eletrônicos.",
    date: "1 de Março, 2025",
    category: "Documentoscopia"
  },
  {
    title: "LGPD e o Papel do Perito Forense Digital",
    excerpt: "A interseção entre proteção de dados pessoais e perícia forense digital no contexto da Lei Geral de Proteção de Dados.",
    date: "25 de Fevereiro, 2025",
    category: "Legal"
  },
  {
    title: "Grafoscopia vs. Análise de Assinatura Eletrônica",
    excerpt: "Diferenças e complementaridades entre exame grafotécnico tradicional e análise de assinaturas digitais e biométricas.",
    date: "20 de Fevereiro, 2025",
    category: "Técnicas"
  },
];

export const Blog = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Blog e Conteúdo Técnico</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Artigos especializados sobre forense digital, legislação e tecnologia
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {articles.map((article, index) => (
            <Card 
              key={index} 
              className="border-border hover:shadow-[var(--shadow-glow)] transition-[var(--transition-smooth)] hover:-translate-y-1 bg-card/50 backdrop-blur-sm"
            >
              <CardHeader>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                    {article.category}
                  </span>
                </div>
                <CardTitle className="text-xl leading-tight">{article.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base leading-relaxed">
                  {article.excerpt}
                </CardDescription>
                <div className="flex items-center gap-2 pt-2 text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  <span>{article.date}</span>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="group text-primary hover:text-primary hover:bg-primary/10 w-full"
                >
                  Ler artigo
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="font-semibold border-primary/30 hover:border-primary hover:bg-primary/10"
          >
            Ver todos os artigos
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};
