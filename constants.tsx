
import React from 'react';
import { Feature, Testimonial, FAQItem } from './types';
import { 
  Bot, 
  Users, 
  LayoutDashboard, 
  Send, 
  Smartphone, 
  Webhook, 
  Code, 
  Globe, 
  BarChart3, 
  Tag, 
  MessageSquareText, 
  ShieldCheck 
} from 'lucide-react';

export const FEATURES: Feature[] = [
  {
    title: "Chatbot com I.A",
    description: "Automação inteligente 24 horas por dia, 7 dias por semana, com ChatGPT integrado.",
    icon: "Bot"
  },
  {
    title: "Multiatendimento",
    description: "Gerencie várias conversas com sua equipe de forma centralizada.",
    icon: "Users"
  },
  {
    title: "CRM Kanban",
    description: "Funil de vendas visual com recurso de arrastar e soltar para máxima organização.",
    icon: "LayoutDashboard"
  },
  {
    title: "Envios em massa",
    description: "Envie milhares de mensagens em massa com segurança e eficiência.",
    icon: "Send"
  },
  {
    title: "Vários WhatsApp",
    description: "Conecte números ilimitados com QR code de maneira simples.",
    icon: "Smartphone"
  },
  {
    title: "API & Webhooks",
    description: "Integração completa com qualquer sistema do mercado via API.",
    icon: "Webhook"
  },
  {
    title: "Código Fonte Editável",
    description: "Código-fonte 100% editável e documentado para você customizar.",
    icon: "Code"
  },
  {
    title: "Software SaaS",
    description: "Multi Usuários com painel de administração completo para revenda.",
    icon: "Globe"
  },
  {
    title: "100% White Label",
    description: "Sua marca, suas cores e seu domínio personalizado.",
    icon: "ShieldCheck"
  },
  {
    title: "Analytics Avançado",
    description: "Métricas e relatórios detalhados em tempo real sobre sua operação.",
    icon: "BarChart3"
  },
  {
    title: "Tags e Filtros",
    description: "Organize seus contatos com tags personalizadas e filtros poderosos.",
    icon: "Tag"
  },
  {
    title: "Respostas Rápidas",
    description: "Biblioteca de mensagens predefinidas para facilitar o atendimento.",
    icon: "MessageSquareText"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Carlos Rodrigues",
    role: "CEO — Agência de Marketing",
    content: "Em 4 meses recuperei meu investimento. Hoje tenho 92 clientes pagando R$297 por mês. Mais de R$27 mil mensais!",
    stars: 5,
    results: "+R$27k/mês"
  },
  {
    name: "Sofia Martins",
    role: "Consultora de Negócios",
    content: "Parei de pagar R$1.800 por mês em ferramentas. O suporte é incrível e o sistema é muito estável.",
    stars: 5,
    results: "Economia de R$1.8k"
  },
  {
    name: "Diego Fernandes",
    role: "Empreendedor SaaS",
    content: "A melhor decisão do ano. Sistema completo, fácil de personalizar. Meus clientes adoram a plataforma.",
    stars: 5,
    results: "Crescimento Rápido"
  },
  {
    name: "Andrea Lopes",
    role: "Fundadora — TechSolutions",
    content: "Migrei todos os meus clientes para a DigitalZap. Economizo mais de R$3.200/mês e faturo +R$38 mil. ROI absurdo.",
    stars: 5,
    results: "ROI 2000%"
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Serei dono do sistema?",
    answer: "Sim! Ao adquirir a DigitalZap, você recebe o código fonte completo e pode hospedar em seu próprio servidor, tornando-se o proprietário da sua instância."
  },
  {
    question: "Terei acesso ao Código Fonte?",
    answer: "Com certeza. O código é 100% aberto e editável para que você possa fazer as modificações que desejar ou integrar novas funcionalidades."
  },
  {
    question: "Tem vídeos ensinando a Instalar no meu servidor?",
    answer: "Sim, fornecemos um tutorial completo passo a passo em vídeo e documentação detalhada para que você mesmo consiga realizar a instalação em poucos minutos."
  },
  {
    question: "Como funciona o suporte?",
    answer: "Oferecemos suporte técnico especializado para te ajudar com qualquer dúvida na instalação ou uso das funcionalidades básicas do sistema."
  }
];
