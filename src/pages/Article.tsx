import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useParams, Link } from "react-router-dom";
import { Calendar, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { articles } from "./Blog";

const Article = () => {
  const { slug } = useParams();
  const article = articles.find(a => a.id === slug);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Artigo não encontrado</h1>
          <Link to="/blog">
            <Button>Voltar ao Blog</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link to="/blog">
              <Button variant="ghost" size="sm" className="mb-8">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar ao Blog
              </Button>
            </Link>

            <article className="prose prose-invert max-w-none">
              <div className="mb-8">
                <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {article.category}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-6">{article.title}</h1>
              
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{article.date}</span>
                </div>
                <span>•</span>
                <span>{article.readTime} de leitura</span>
              </div>

              <div className="bg-card border border-border rounded-lg p-8 mb-8">
                <p className="text-lg text-muted-foreground italic">
                  {article.excerpt}
                </p>
              </div>

              <div className="space-y-6 text-foreground">
                <p className="text-lg leading-relaxed">
                  Este artigo está em desenvolvimento e será publicado em breve com conteúdo técnico detalhado 
                  sobre {article.title.toLowerCase()}.
                </p>

                <p className="leading-relaxed">
                  Nosso blog técnico tem como objetivo compartilhar conhecimento especializado em perícia forense digital, 
                  metodologias científicas, legislação aplicável e melhores práticas na área.
                </p>

                <div className="bg-primary/10 border border-primary/30 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3">O que você encontrará neste artigo:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">▪</span>
                      <span>Fundamentos técnicos e científicos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">▪</span>
                      <span>Aplicações práticas em contextos jurídicos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">▪</span>
                      <span>Conformidade com normas e legislação</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">▪</span>
                      <span>Casos de uso e exemplos reais (anonimizados)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">▪</span>
                      <span>Referências bibliográficas e técnicas</span>
                    </li>
                  </ul>
                </div>

                <p className="leading-relaxed">
                  Para mais informações sobre este tema ou para solicitar uma análise forense especializada, 
                  entre em contato através do nosso formulário.
                </p>
              </div>
            </article>

            <div className="mt-12 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/30 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Precisa de uma Análise Forense?</h3>
              <p className="text-muted-foreground mb-6">
                Entre em contato para discutir seu caso e receber orientação técnica especializada
              </p>
              <Link to="/contato">
                <Button size="lg" className="bg-primary hover:bg-primary-glow">
                  Solicitar Análise
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Article;
