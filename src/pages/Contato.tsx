import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contato = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold">Solicite Análise Técnica</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Entre em contato para solicitar análise forense especializada ou consultoria técnico-jurídica
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="p-6 text-center border-border">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="font-semibold mb-2">E-mail</h3>
                <p className="text-sm text-muted-foreground">contato@probatioforense.com.br</p>
              </Card>

              <Card className="p-6 text-center border-border">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="font-semibold mb-2">Telefone / WhatsApp</h3>
                <p className="text-sm text-muted-foreground">(41) 99999-9999</p>
              </Card>

              <Card className="p-6 text-center border-border">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="font-semibold mb-2">Localização</h3>
                <p className="text-sm text-muted-foreground">Curitiba – PR – Brasil</p>
              </Card>
            </div>

            <Card className="max-w-3xl mx-auto p-8 border-border">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Nome Completo *
                    </label>
                    <Input 
                      id="name" 
                      placeholder="Seu nome completo" 
                      required
                      className="bg-background"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium">
                      Empresa ou Escritório
                    </label>
                    <Input 
                      id="company" 
                      placeholder="Nome da empresa" 
                      className="bg-background"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      E-mail *
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="seu@email.com" 
                      required
                      className="bg-background"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Telefone / WhatsApp *
                    </label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      placeholder="(00) 00000-0000" 
                      required
                      className="bg-background"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="analysis-type" className="text-sm font-medium">
                    Tipo de Análise *
                  </label>
                  <Select>
                    <SelectTrigger id="analysis-type" className="bg-background">
                      <SelectValue placeholder="Selecione o tipo de análise" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="image">Perícia em Imagens e Vídeos</SelectItem>
                      <SelectItem value="audio">Perícia em Áudio e Voz</SelectItem>
                      <SelectItem value="document">Perícia em Documentos Digitais</SelectItem>
                      <SelectItem value="data">Recuperação de Dados</SelectItem>
                      <SelectItem value="biometric">Análise Biométrica</SelectItem>
                      <SelectItem value="consultancy">Consultoria Técnica</SelectItem>
                      <SelectItem value="other">Outro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="description" className="text-sm font-medium">
                    Descrição do Caso *
                  </label>
                  <Textarea 
                    id="description" 
                    placeholder="Descreva brevemente o caso, o tipo de análise necessária e prazo desejado..."
                    rows={6}
                    required
                    className="bg-background resize-none"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="file" className="text-sm font-medium">
                    Anexar Arquivo (Opcional)
                  </label>
                  <Input 
                    id="file" 
                    type="file" 
                    className="bg-background"
                  />
                  <p className="text-xs text-muted-foreground">
                    Tamanho máximo: 10MB. Formatos aceitos: PDF, DOC, DOCX, JPG, PNG
                  </p>
                </div>

                <div className="bg-muted/30 border border-border rounded-lg p-4">
                  <p className="text-xs text-muted-foreground">
                    <strong>Aviso de Privacidade:</strong> A PROBATIO FORENSE DIGITAL atua com total independência técnica 
                    e respeito à legislação vigente, garantindo sigilo e ética em todas as análises. Suas informações 
                    serão tratadas conforme a Lei Geral de Proteção de Dados (LGPD - Lei 13.709/2018).
                  </p>
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-primary hover:bg-primary-glow"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Enviar Solicitação
                </Button>
              </form>
            </Card>

            <div className="mt-12 max-w-3xl mx-auto">
              <Card className="p-6 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/30">
                <h3 className="font-bold text-lg mb-3">Atendimento Especializado</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Oferecemos consultoria inicial gratuita para avaliação do caso e viabilidade técnica da análise solicitada. 
                  Respondemos todas as solicitações em até 24 horas úteis.
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Análise de viabilidade técnica</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Proposta comercial personalizada</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Orientação sobre documentação necessária</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Prazos e custos transparentes</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contato;
