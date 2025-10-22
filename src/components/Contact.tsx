import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Send } from "lucide-react";

export const Contact = () => {
  return (
    <section className="py-24 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Solicite Análise Técnica</h2>
            <p className="text-xl text-muted-foreground">
              Entre em contato para discutir seu caso e solicitar um exame pericial
            </p>
          </div>
          
          <form className="space-y-6 bg-card border border-border rounded-lg p-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Nome Completo *</Label>
                <Input 
                  id="name" 
                  placeholder="Seu nome completo"
                  className="bg-background"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="company">Empresa ou Escritório</Label>
                <Input 
                  id="company" 
                  placeholder="Nome da empresa"
                  className="bg-background"
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="email">E-mail *</Label>
                <Input 
                  id="email" 
                  type="email"
                  placeholder="seu@email.com"
                  className="bg-background"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Telefone / WhatsApp *</Label>
                <Input 
                  id="phone" 
                  placeholder="(00) 00000-0000"
                  className="bg-background"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="analysis-type">Tipo de Análise *</Label>
              <Select>
                <SelectTrigger id="analysis-type" className="bg-background">
                  <SelectValue placeholder="Selecione o tipo de análise" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="image">Perícia em Imagem e Vídeo</SelectItem>
                  <SelectItem value="audio">Perícia em Áudio e Voz</SelectItem>
                  <SelectItem value="document">Documentoscopia Digital</SelectItem>
                  <SelectItem value="recovery">Recuperação de Dados</SelectItem>
                  <SelectItem value="biometric">Análise Biométrica e Facial</SelectItem>
                  <SelectItem value="legal">Consultoria Jurídico-Técnica</SelectItem>
                  <SelectItem value="other">Outro</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="description">Descrição do Caso *</Label>
              <Textarea 
                id="description" 
                placeholder="Descreva brevemente o contexto do caso e o tipo de análise necessária..."
                className="min-h-[150px] bg-background"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="file">Anexar Arquivo (opcional)</Label>
              <Input 
                id="file" 
                type="file"
                className="bg-background"
              />
              <p className="text-xs text-muted-foreground">
                Formatos aceitos: PDF, DOC, JPG, PNG, MP3, MP4 (máx. 10MB)
              </p>
            </div>
            
            <Button 
              type="submit" 
              size="lg" 
              className="w-full font-semibold"
            >
              <Send className="mr-2 h-5 w-5" />
              Enviar Solicitação
            </Button>
            
            <p className="text-xs text-center text-muted-foreground pt-4">
              Seus dados serão tratados com confidencialidade absoluta de acordo com a LGPD
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};
