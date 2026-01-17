
import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, 
  Check, 
  Star, 
  Zap, 
  Smartphone, 
  ShieldCheck, 
  ChevronDown, 
  ChevronUp,
  MessageCircle,
  TrendingUp,
  Code2,
  Users,
  Download,
  Bell,
  Cpu,
  Smartphone as MobileIcon,
  ChevronLeft,
  ChevronRight,
  Eye,
  Infinity,
  Clock,
  Unlock,
  CircleDollarSign,
  Bot,
  Layers,
  Rocket,
  Globe,
  Wallet
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FEATURES, FAQS } from './constants';
import { IconWrapper } from './components/IconWrapper';

const CHECKOUT_URL = "https://checkout.centerpag.com/pay/PPU38COUGTE";

const SYSTEM_IMAGES = [
  { url: 'https://picsum.photos/1200/800?random=101', title: 'Painel de Controle' },
  { url: 'https://picsum.photos/1200/800?random=102', title: 'Gerenciamento de Conversas' },
  { url: 'https://picsum.photos/1200/800?random=103', title: 'Relatórios e Métricas' },
  { url: 'https://picsum.photos/1200/800?random=104', title: 'Gestão de Contatos' },
  { url: 'https://picsum.photos/1200/800?random=105', title: 'Equipe e Permissões' },
  { url: 'https://picsum.photos/1200/800?random=106', title: 'Etiquetas Personalizadas' },
  { url: 'https://picsum.photos/1200/800?random=107', title: 'Automação de Chatbots' },
  { url: 'https://picsum.photos/1200/800?random=108', title: 'Campanhas em Massa' },
  { url: 'https://picsum.photos/1200/800?random=109', title: 'Fluxos de Trabalho' },
  { url: 'https://picsum.photos/1200/800?random=110', title: 'Integrações Externas' },
  { url: 'https://picsum.photos/1200/800?random=111', title: 'Configurações White Label' },
  { url: 'https://picsum.photos/1200/800?random=112', title: 'Gerenciamento de Cobrança' },
];

const BENEFITS_ROW_1 = [
  { icon: <Users className="w-5 h-5 md:w-6 md:h-6" />, text: "10.000+ Clientes satisfeitos" },
  { icon: <CircleDollarSign className="w-5 h-5 md:w-6 md:h-6" />, text: "Faturamento 100% Seu" },
  { icon: <Unlock className="w-5 h-5 md:w-6 md:h-6" />, text: "Código Fonte Aberto" },
  { icon: <ShieldCheck className="w-5 h-5 md:w-6 md:h-6" />, text: "100% White Label" },
  { icon: <Rocket className="w-5 h-5 md:w-6 md:h-6" />, text: "Escalabilidade Infinita" },
];

const BENEFITS_ROW_2 = [
  { icon: <Bot className="w-5 h-5 md:w-6 md:h-6" />, text: "I.A Integrada" },
  { icon: <Wallet className="w-5 h-5 md:w-6 md:h-6" />, text: "Sem Mensalidades" },
  { icon: <Globe className="w-5 h-5 md:w-6 md:h-6" />, text: "Domínio Próprio" },
  { icon: <Clock className="w-5 h-5 md:w-6 md:h-6" />, text: "Suporte VIP 24/7" },
  { icon: <Layers className="w-5 h-5 md:w-6 md:h-6" />, text: "Painel Multi-Empresa" },
];

const App: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % SYSTEM_IMAGES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + SYSTEM_IMAGES.length) % SYSTEM_IMAGES.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-[#E04A1F] p-2 rounded-lg">
              <Cpu className="text-white" size={24} />
            </div>
            <span className="text-2xl font-bold tracking-tight">Digital<span className="text-[#E04A1F]">Zap</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#funcionalidades" className="text-sm font-medium hover:text-[#ff7b57] transition-colors">Funcionalidades</a>
            <a href="#pwa" className="text-sm font-medium hover:text-[#ff7b57] transition-colors">App PWA</a>
            <a href="#fotos" className="text-sm font-medium hover:text-[#ff7b57] transition-colors">Fotos</a>
            <a href="#preço" className="bg-[#E04A1F] hover:bg-[#c63d17] text-white px-5 py-2.5 rounded-full text-sm font-bold transition-all transform hover:scale-105">
              Ver Preço
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-[#E04A1F]/10 text-[#ff7b57] px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-[#E04A1F]/20">
              <Star size={16} className="fill-current" /> Plataforma SaaS Número #1 do Brasil
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight">
              Seja Dono de uma <br />
              <span className="gradient-text">Plataforma Completa</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              Use, Revenda e Lucre 100%. Tenha um ecossistema completo de automação e CRM sem precisar desenvolver uma única linha de código.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#preço" className="w-full sm:w-auto bg-[#E04A1F] hover:bg-[#c63d17] text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 group transition-all shadow-lg shadow-[#E04A1F]/20">
                Garantir Meu Acesso Agora <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-20 relative max-w-5xl mx-auto px-2 sm:px-0"
          >
            <div className="absolute inset-0 bg-[#E04A1F]/10 blur-[120px] rounded-full"></div>
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl float-animation">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/7RJ6ztnZhyg?rel=0&modestbranding=1" 
                title="DigitalZap Video" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </header>

      {/* HIGH ENERGY MARQUEE SECTION - MOBILE OPTIMIZED */}
      <section className="py-8 md:py-12 bg-gray-950 relative overflow-hidden -skew-y-2 border-y-2 border-[#E04A1F]/20">
        <div className="skew-y-2">
          {/* Row 1: Left to Right */}
          <div className="flex select-none mb-6 md:mb-10">
            <motion.div 
              className="flex items-center gap-8 md:gap-16 whitespace-nowrap"
              animate={{ x: [0, -1035] }}
              transition={{ 
                duration: 20, 
                repeat: Infinity, 
                ease: "linear" 
              }}
            >
              {[...BENEFITS_ROW_1, ...BENEFITS_ROW_1, ...BENEFITS_ROW_1].map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-4 md:gap-6">
                  <div className="text-[#E04A1F] bg-white p-2 md:p-3 rounded-xl md:rounded-2xl shadow-lg shadow-[#E04A1F]/20">
                    {benefit.icon}
                  </div>
                  <span className="text-xl md:text-4xl font-black text-white tracking-tighter italic uppercase">{benefit.text}</span>
                  <div className="w-2 h-2 md:w-4 md:h-4 rounded-full bg-[#E04A1F] mx-2 md:mx-4" />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Row 2: Right to Left */}
          <div className="flex select-none">
            <motion.div 
              className="flex items-center gap-8 md:gap-16 whitespace-nowrap"
              animate={{ x: [-1035, 0] }}
              transition={{ 
                duration: 18, 
                repeat: Infinity, 
                ease: "linear" 
              }}
            >
              {[...BENEFITS_ROW_2, ...BENEFITS_ROW_2, ...BENEFITS_ROW_2].map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-4 md:gap-6">
                  <div className="text-white bg-[#E04A1F] p-2 md:p-3 rounded-xl md:rounded-2xl shadow-lg shadow-[#E04A1F]/40">
                    {benefit.icon}
                  </div>
                  <span className="text-xl md:text-4xl font-black text-white/90 tracking-tighter italic uppercase">{benefit.text}</span>
                  <div className="w-2 h-2 md:w-4 md:h-4 rounded-full bg-white/20 mx-2 md:mx-4" />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-transparent to-gray-950 pointer-events-none z-10"></div>
      </section>

      {/* Features Grid */}
      <section id="funcionalidades" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Funcionalidades do <span className="text-[#E04A1F]">Software</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Tudo o que você precisa para dominar o mercado de automação e CRM.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURES.map((feature, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="glass-card p-8 rounded-2xl hover:bg-white/5 transition-all group"
              >
                <div className="bg-[#E04A1F]/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#E04A1F]/20 transition-colors">
                  <IconWrapper name={feature.icon} className="text-[#E04A1F]" />
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PWA Section */}
      <section id="pwa" className="py-24 px-4 bg-gradient-to-r from-[#E04A1F]/10 to-transparent relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <div className="inline-block bg-[#E04A1F]/10 px-4 py-2 rounded-lg text-[#ff7b57] font-bold text-sm mb-6 border border-[#E04A1F]/20">
              MOBILE FIRST
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
              Seu Aplicativo <span className="text-[#E04A1F]">Instalável</span> <br />
              Com Tecnologia PWA
            </h2>
            <p className="text-xl text-gray-400 mb-10 leading-relaxed">
              Transforme sua plataforma em um aplicativo real. Seus clientes podem instalar o DigitalZap diretamente no smartphone (Android ou iOS) sem precisar das lojas oficiais.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { icon: <Download size={24} className="text-[#ff7b57]" />, title: "Instalação Direta", desc: "Acesse via navegador e instale na tela inicial com um clique." },
                { icon: <Bell size={24} className="text-[#ff7b57]" />, title: "Notificações Push", desc: "Alertas em tempo real direto na tela de bloqueio do celular." },
                { icon: <Cpu size={24} className="text-emerald-400" />, title: "Velocidade Nativa", desc: "Interface otimizada e ultra rápida para dispositivos móveis." },
                { icon: <MobileIcon size={24} className="text-orange-400" />, title: "100% White Label", desc: "Seu ícone, seu nome e sua logo na tela do cliente." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="bg-white/5 p-3 rounded-xl h-fit border border-white/10">{item.icon}</div>
                  <div>
                    <h4 className="font-bold text-white mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 relative flex justify-center"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#E04A1F]/10 blur-[100px] rounded-full"></div>
            <div className="relative border-[8px] border-gray-900 rounded-[3rem] shadow-2xl overflow-hidden w-full max-w-[320px] aspect-[9/19]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-gray-900 rounded-b-2xl z-20"></div>
              <img 
                src="https://picsum.photos/400/800?random=2" 
                alt="PWA Experience" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6">
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20">
                  <div className="bg-[#E04A1F] p-2 rounded-lg"><Cpu size={20} className="text-white" /></div>
                  <div>
                    <p className="text-white font-bold text-sm">Instalar DigitalZap</p>
                    <p className="text-white/60 text-xs">Adicionar à tela de início</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SYSTEM PHOTOS SLIDER SECTION - FULL WIDTH OPTIMIZED */}
      <section id="fotos" className="py-24 px-0 sm:px-4 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-0">
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-[#E04A1F] font-bold tracking-widest uppercase text-sm">Visual Moderno</span>
            <h2 className="text-4xl md:text-5xl font-black mt-4 mb-6">Explore a Interface do <span className="text-[#E04A1F]">Sistema</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto italic">Navegue pelas 12 principais telas da sua nova plataforma SaaS.</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-1 sm:px-0">
          <div className="relative group">
            {/* Reduced padding on mobile (p-0.5) to maximize screen width */}
            <div className="overflow-hidden rounded-xl md:rounded-3xl border border-white/10 shadow-2xl bg-white/5 p-0.5 md:p-4">
              <div className="relative aspect-video">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentSlide}
                    src={SYSTEM_IMAGES[currentSlide].url}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full object-cover rounded-lg md:rounded-2xl"
                    alt={SYSTEM_IMAGES[currentSlide].title}
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none rounded-lg md:rounded-2xl"></div>
                
                {/* Info badge with slide counter */}
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 text-xs font-bold text-white z-20">
                  {currentSlide + 1} / {SYSTEM_IMAGES.length}
                </div>

                <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 z-20">
                  <p className="text-[#E04A1F] font-black text-sm md:text-2xl uppercase tracking-tighter flex items-center gap-2 drop-shadow-md">
                    <Eye size={18} className="md:w-6 md:h-6" /> {SYSTEM_IMAGES[currentSlide].title}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Buttons - More visible on tablet/desktop */}
            <button 
              onClick={prevSlide}
              className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 bg-black/70 backdrop-blur-md p-3 md:p-5 rounded-full border border-white/10 text-white hover:bg-[#E04A1F] transition-all transform group-hover:scale-110 opacity-0 group-hover:opacity-100 hidden sm:flex z-30"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 bg-black/70 backdrop-blur-md p-3 md:p-5 rounded-full border border-white/10 text-white hover:bg-[#E04A1F] transition-all transform group-hover:scale-110 opacity-0 group-hover:opacity-100 hidden sm:flex z-30"
            >
              <ChevronRight size={24} />
            </button>

            {/* Mobile Touch Swipe areas (Conceptual / Buttons) */}
            <div className="sm:hidden flex justify-between absolute inset-x-0 top-1/2 -translate-y-1/2 px-2 pointer-events-none z-30">
               <button onClick={prevSlide} className="pointer-events-auto bg-black/40 p-2 rounded-full"><ChevronLeft size={20} /></button>
               <button onClick={nextSlide} className="pointer-events-auto bg-black/40 p-2 rounded-full"><ChevronRight size={20} /></button>
            </div>

            {/* Pagination Dots - Scrollable on very small screens if many */}
            <div className="flex justify-center flex-wrap gap-1.5 sm:gap-2 mt-8 px-4">
              {SYSTEM_IMAGES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-1.5 rounded-full transition-all ${
                    currentSlide === idx ? 'w-8 bg-[#E04A1F]' : 'w-1.5 sm:w-2 bg-white/20'
                  }`}
                  aria-label={`Ir para slide ${idx + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 px-4 bg-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Dono do Código vs Mensalidades</h2>
            <p className="text-gray-400">Por que alugar se você pode ser o dono?</p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-gray-950 shadow-2xl">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-white/5 border-b border-white/10">
                  <th className="p-6 font-bold">Característica</th>
                  <th className="p-6 text-gray-500 font-bold">Outros SaaS</th>
                  <th className="p-6 text-[#E04A1F] font-bold">DigitalZap</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  "Sem mensalidade",
                  "Usuários Ilimitados",
                  "Código Fonte Próprio",
                  "White Label (Sua Marca)",
                  "100% Do Seu Lucro"
                ].map((item, idx) => (
                  <tr key={idx} className="hover:bg-white/5 transition-colors">
                    <td className="p-6 text-gray-300 font-medium">{item}</td>
                    <td className="p-6 text-red-500">✗</td>
                    <td className="p-6 text-green-500 flex items-center gap-2">✓</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="preço" className="py-24 px-4 bg-[#E04A1F]/5">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <span className="bg-[#E04A1F] text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">Oferta Especial de Lançamento</span>
            <h2 className="text-5xl font-black mt-6 mb-4">Investimento Único, <br />Lucro para Sempre</h2>
            <p className="text-gray-400">Sem pegadinhas, sem taxas ocultas. Compre uma vez, use para sempre.</p>
          </div>

          <div className="relative gradient-border p-8 md:p-12 text-left">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6">Oferta Premium</h3>
                <div className="flex items-baseline gap-2 mb-8">
                  <span className="text-6xl font-black text-white">R$ 19,90</span>
                  <span className="text-gray-400">/ Pagamento Único</span>
                </div>
                <ul className="space-y-4 mb-10">
                  {[
                    "Tutorial de Utilização",
                    "Integração WebHooks, API e ChatGPT",
                    "Código Fonte Completo",
                    "Personalização 100% White Label",
                    "Suporte VIP Prioritário",
                    "Atualizações para Sempre",
                    "Comunidade VIP Exclusiva"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-300">
                      <div className="bg-green-500/20 p-1 rounded-full">
                        <Check size={14} className="text-green-500" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
                <a href={CHECKOUT_URL} className="block w-full bg-[#E04A1F] hover:bg-[#c63d17] text-white text-center text-xl font-bold py-5 rounded-2xl shadow-xl shadow-[#E04A1F]/20 transition-all transform hover:scale-[1.02]">
                  Adquirir Agora →
                </a>
                <p className="text-xs text-gray-500 text-center mt-4 flex items-center justify-center gap-2">
                  <ShieldCheck size={14} /> Checkout seguro com criptografia de 256 bits
                </p>
              </div>
              <div className="hidden md:block">
                <div className="bg-[#E04A1F]/5 rounded-3xl p-8 border border-[#E04A1F]/20">
                  <h4 className="font-bold mb-6 text-xl">O que você recebe:</h4>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="bg-[#E04A1F] rounded-lg p-2 h-fit"><Code2 className="text-white" size={20} /></div>
                      <div>
                        <p className="font-bold">Código Fonte</p>
                        <p className="text-sm text-gray-400">Acesso total ao repositório para modificações.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="bg-[#E04A1F] rounded-lg p-2 h-fit"><TrendingUp className="text-white" size={20} /></div>
                      <div>
                        <p className="font-bold">Direito de Revenda</p>
                        <p className="text-sm text-gray-400">Crie planos e cobre o valor que desejar.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="bg-[#E04A1F] rounded-lg p-2 h-fit"><MessageCircle className="text-white" size={20} /></div>
                      <div>
                        <p className="font-bold">Chatbot I.A</p>
                        <p className="text-sm text-gray-400">Treine a I.A para atender seus clientes.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Perguntas Frequentes</h2>
            <p className="text-gray-400">Algumas das dúvidas de quem vai adquirir...</p>
          </div>
          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="glass-card rounded-xl overflow-hidden">
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                >
                  <span className="font-bold text-lg">{faq.question}</span>
                  {openFaq === idx ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-6 pb-6 text-gray-400 border-t border-white/5 pt-4"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-4 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <Cpu className="text-[#E04A1F]" size={24} />
            <span className="text-2xl font-bold">Digital<span className="text-[#E04A1F]">Zap</span></span>
          </div>
          <p className="text-sm text-gray-600">
            © 2026 DigitalZap. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
