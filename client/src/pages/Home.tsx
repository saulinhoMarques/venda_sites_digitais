import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, ArrowRight, MessageCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

/**
 * Design Philosophy: Modern Professional + Growth Mindset
 * - Paleta: Azul profundo (#0066CC) + Verde suave (#10B981) + Cinzas neutros
 * - Tipografia: Playfair Display para headlines, Inter para body
 * - Layout: Assimétrico, orientado a ação, com CTAs bem definidas
 * - Animações: Suaves, rápidas, orientadas a feedback
 */

export default function Home() {
  const [formData, setFormData] = useState({
    company: "",
    name: "",
    whatsapp: "",
    businessType: "",
    objective: "",
    colors: "",
    hasAssets: "",
    sections: "",
    budget: "",
    timeline: "",
  });

  const handleFormChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleWhatsAppClick = () => {
    const message = `Olá! Tenho interesse em contratar um site. Empresa: ${formData.company || "Não informado"}, Tipo: ${formData.businessType || "Não informado"}, Objetivo: ${formData.objective || "Não informado"}`;
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const plans = [
    {
      name: "Básico",
      price: "R$ 250 a R$ 350",
      description: "Perfeito para autônomos e pequenas lojas",
      features: [
        "Site de 1 página",
        "Botão WhatsApp integrado",
        "Informações principais",
        "Design responsivo",
        "Suporte por 3 meses",
      ],
      highlighted: false,
    },
    {
      name: "Profissional",
      price: "R$ 500 a R$ 800",
      description: "O mais escolhido por pequenos negócios",
      features: [
        "Até 5 seções",
        "Formulário de contato",
        "Mapa de localização",
        "Redes sociais integradas",
        "SEO básico",
        "Design personalizado",
        "Suporte por 3 meses",
      ],
      highlighted: true,
    },
    {
      name: "Premium",
      price: "R$ 1.000+",
      description: "Para empresas maiores e projetos complexos",
      features: [
        "Várias páginas",
        "Formulário avançado",
        "Painel de login simples",
        "Integração com banco de dados",
        "Animações customizadas",
        "Copy profissional",
        "Suporte por 3 meses",
      ],
      highlighted: false,
    },
  ];

  const templates = [
    {
      title: "Barbearia",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663032124700/4C9QkDMSnrNdyapLJGqCSc/template-showcase-1-Yoxzg7PQEHJi68CMaN8RYH.webp",
      description: "Design premium com galeria e agendamento",
    },
    {
      title: "Restaurante",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663032124700/4C9QkDMSnrNdyapLJGqCSc/template-showcase-2-ffzimmqTJmaBbMRuhnygzK.webp",
      description: "Cardápio digital e reservas online",
    },
    {
      title: "Estética",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663032124700/4C9QkDMSnrNdyapLJGqCSc/template-showcase-3-H9xkmPvGi8zjJiySfGTBhm.webp",
      description: "Elegância e sofisticação para seu negócio",
    },
  ];

  const faqs = [
    {
      question: "Como funciona o processo de compra?",
      answer:
        "Você escolhe um plano, preenche o briefing, conversa comigo no WhatsApp, e fechamos o orçamento. Cobro 50% de entrada e 50% após aprovação final.",
    },
    {
      question: "Quanto tempo leva para entregar o site?",
      answer:
        "Plano Básico: 3-5 dias. Plano Profissional: 7-10 dias. Plano Premium: 15-20 dias. Prazos podem variar conforme complexidade.",
    },
    {
      question: "Posso fazer alterações após a entrega?",
      answer:
        "Sim! Oferço 3 meses de suporte inclusos para ajustes simples, correções e pequenas alterações. Mudanças maiores são cobradas à parte.",
    },
    {
      question: "Preciso ter logo e fotos prontas?",
      answer:
        "Não é obrigatório, mas ajuda muito. Se não tiver, posso orientar sobre como conseguir ou usar recursos gratuitos.",
    },
    {
      question: "Qual é a garantia do site?",
      answer:
        "Garantia de 3 meses para ajustes simples, correções e pequenas alterações. Não inclui refazer o site inteiro ou adicionar sistemas novos.",
    },
    {
      question: "Vocês oferecem manutenção contínua?",
      answer:
        "Sim, oferço pacotes de manutenção mensal. Converse comigo no WhatsApp para detalhes.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container flex items-center justify-between py-4">
          <div className="text-2xl font-bold text-primary">Saulo Marques</div>
          <nav className="hidden md:flex gap-8">
            <a href="#servicos" className="text-foreground hover:text-primary transition-colors">
              Serviços
            </a>
            <a href="#modelos" className="text-foreground hover:text-primary transition-colors">
              Modelos
            </a>
            <a href="#faq" className="text-foreground hover:text-primary transition-colors">
              FAQ
            </a>
          </nav>
          <Button onClick={handleWhatsAppClick} className="bg-green-600 hover:bg-green-700">
            <MessageCircle className="w-4 h-4 mr-2" />
            WhatsApp
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-white py-20 md:py-32">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-3">
              <p className="text-primary font-semibold text-sm uppercase tracking-wide">Presença Digital Profissional</p>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Seu negócio precisa de um site bonito, rápido e profissional?
              </h1>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              Eu crio sites profissionais para pequenos negócios que querem aparecer melhor na internet, passar mais confiança e receber clientes pelo WhatsApp. Sem estoque, sem complicação.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                onClick={() => document.getElementById("planos")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-primary hover:bg-blue-700"
              >
                Ver Planos <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => document.getElementById("briefing")?.scrollIntoView({ behavior: "smooth" })}
              >
                Preencher Briefing
              </Button>
            </div>
          </div>
          <div className="hidden md:block">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310419663032124700/4C9QkDMSnrNdyapLJGqCSc/hero-background-nmQL6mZ47WAHVvJaFXMdCv.webp"
              alt="Hero Background"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Planos Section */}
      <section id="planos" className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Escolha o Plano Ideal</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Três opções de serviço para diferentes necessidades. O Profissional é o mais escolhido.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, idx) => (
              <Card
                key={idx}
                className={`relative transition-all duration-300 hover:shadow-xl ${
                  plan.highlighted ? "md:scale-105 border-primary shadow-lg" : ""
                }`}
              >
                {plan.highlighted && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-600">
                    Mais Popular
                  </Badge>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="text-3xl font-bold text-primary mt-4">{plan.price}</div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    onClick={handleWhatsAppClick}
                    className={`w-full ${
                      plan.highlighted
                        ? "bg-primary hover:bg-blue-700"
                        : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                    }`}
                  >
                    Contratar {plan.name}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Modelos Section */}
      <section id="modelos" className="py-20 md:py-32 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Modelos Prontos</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Veja exemplos de templates que usamos como base para acelerar a entrega.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {templates.map((template, idx) => (
              <Card key={idx} className="overflow-hidden hover:shadow-lg transition-all duration-300">
                <img
                  src={template.image}
                  alt={template.title}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-2">{template.title}</h3>
                  <p className="text-gray-600">{template.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Briefing Section */}
      <section id="briefing" className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Preencha o Briefing</h2>
              <p className="text-lg text-gray-600">
                Essas informações me ajudam a entender melhor seu projeto antes da conversa no WhatsApp.
              </p>
            </div>

            <Card className="border-2 border-primary/10">
              <CardContent className="pt-8">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Coluna 1 */}
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="company">Nome da Empresa/Projeto</Label>
                      <Input
                        id="company"
                        placeholder="Ex: Barbearia do João"
                        value={formData.company}
                        onChange={(e) => handleFormChange("company", e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="name">Seu Nome</Label>
                      <Input
                        id="name"
                        placeholder="Ex: João Silva"
                        value={formData.name}
                        onChange={(e) => handleFormChange("name", e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="whatsapp">WhatsApp</Label>
                      <Input
                        id="whatsapp"
                        placeholder="Ex: (11) 99999-9999"
                        value={formData.whatsapp}
                        onChange={(e) => handleFormChange("whatsapp", e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="businessType">Tipo de Negócio</Label>
                      <Select value={formData.businessType} onValueChange={(value) => handleFormChange("businessType", value)}>
                        <SelectTrigger id="businessType">
                          <SelectValue placeholder="Selecione..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="barbearia">Barbearia</SelectItem>
                          <SelectItem value="restaurante">Restaurante</SelectItem>
                          <SelectItem value="estetica">Estética/Salão</SelectItem>
                          <SelectItem value="loja">Loja</SelectItem>
                          <SelectItem value="servicos">Prestação de Serviços</SelectItem>
                          <SelectItem value="outro">Outro</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="objective">Objetivo do Site</Label>
                      <Select value={formData.objective} onValueChange={(value) => handleFormChange("objective", value)}>
                        <SelectTrigger id="objective">
                          <SelectValue placeholder="Selecione..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="vender">Vender</SelectItem>
                          <SelectItem value="divulgar">Divulgar</SelectItem>
                          <SelectItem value="captar">Captar Contatos</SelectItem>
                          <SelectItem value="apresentar">Apresentar Serviços</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Coluna 2 */}
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="colors">Cores Preferidas</Label>
                      <Input
                        id="colors"
                        placeholder="Ex: Azul, branco e cinza"
                        value={formData.colors}
                        onChange={(e) => handleFormChange("colors", e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="hasAssets">Já possui logo e fotos?</Label>
                      <Select value={formData.hasAssets} onValueChange={(value) => handleFormChange("hasAssets", value)}>
                        <SelectTrigger id="hasAssets">
                          <SelectValue placeholder="Selecione..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="sim">Sim</SelectItem>
                          <SelectItem value="nao">Não</SelectItem>
                          <SelectItem value="parcial">Parcialmente</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="sections">Quais seções deseja?</Label>
                      <Textarea
                        id="sections"
                        placeholder="Ex: Home, Sobre, Serviços, Contato"
                        value={formData.sections}
                        onChange={(e) => handleFormChange("sections", e.target.value)}
                        rows={3}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="budget">Orçamento Aproximado</Label>
                      <Select value={formData.budget} onValueChange={(value) => handleFormChange("budget", value)}>
                        <SelectTrigger id="budget">
                          <SelectValue placeholder="Selecione..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="250-350">R$ 250 a R$ 350</SelectItem>
                          <SelectItem value="500-800">R$ 500 a R$ 800</SelectItem>
                          <SelectItem value="1000+">R$ 1.000+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="timeline">Prazo Desejado</Label>
                      <Select value={formData.timeline} onValueChange={(value) => handleFormChange("timeline", value)}>
                        <SelectTrigger id="timeline">
                          <SelectValue placeholder="Selecione..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="urgente">Urgente (3-5 dias)</SelectItem>
                          <SelectItem value="normal">Normal (7-10 dias)</SelectItem>
                          <SelectItem value="flexivel">Flexível (15+ dias)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <Button
                  onClick={handleWhatsAppClick}
                  size="lg"
                  className="w-full mt-8 bg-green-600 hover:bg-green-700"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Enviar Briefing via WhatsApp
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 md:py-32 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Perguntas Frequentes</h2>
              <p className="text-lg text-gray-600">Tire suas dúvidas sobre o processo e os serviços.</p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`} className="border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="hover:no-underline py-4">
                    <span className="text-left font-semibold text-foreground">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-4">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Final Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-primary to-blue-700 text-white">
        <div className="container text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Pronto para transformar seu negócio?</h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              Escolha um plano, preencha o briefing e vamos conversar sobre como criar a presença digital perfeita para você.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              onClick={() => document.getElementById("planos")?.scrollIntoView({ behavior: "smooth" })}
            >
              Ver Planos
            </Button>
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-gray-100"
              onClick={handleWhatsAppClick}
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Falar no WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold mb-4">Saulo Marques</h3>
              <p className="text-sm">Desenvolvedor Web | Venda de Sites Digitais</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Navegação</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#servicos" className="hover:text-white transition-colors">
                    Serviços
                  </a>
                </li>
                <li>
                  <a href="#modelos" className="hover:text-white transition-colors">
                    Modelos
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-white transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contato</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Garantia</h4>
              <p className="text-sm">3 meses de suporte inclusos para ajustes simples e correções.</p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2026 Saulo Marques. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
