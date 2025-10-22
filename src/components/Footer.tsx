import { Mail, MapPin, Phone } from "lucide-react";
import logoProbatio from "@/assets/logo-probatio-full.jpg";

export const Footer = () => {
  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="space-y-4">
              <img 
                src={logoProbatio} 
                alt="PROBATIO Forense Digital"
                className="h-16 object-contain"
              />
              <p className="text-sm text-muted-foreground leading-relaxed">
                Perícia técnica especializada em evidências digitais para processos judiciais, conduzida com rigor científico e conformidade legal.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-primary">Serviços</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Perícia em Imagem e Vídeo</li>
                <li>Perícia em Áudio e Voz</li>
                <li>Documentoscopia Digital</li>
                <li>Recuperação de Dados</li>
                <li>Análise Biométrica e Facial</li>
                <li>Consultoria Jurídico-Técnica</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-primary">Contato</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-primary" />
                  <a href="mailto:contato@probatioforense.com.br" className="hover:text-primary transition-colors">
                    contato@probatioforense.com.br
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <span>(41) 0000-0000</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>Curitiba – PR – Brasil</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-border">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
              <p>© 2025 PROBATIO Forense Digital. Todos os direitos reservados.</p>
              <p className="text-primary/70">
                Perito Forense Lucas Henrique Pecazevicz Pancioni
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
