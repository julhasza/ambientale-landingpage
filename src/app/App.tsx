import { useState, type FormEvent } from "react";
import {
  Clock,
  ShieldCheck,
  Users,
  Building2,
  ChevronRight,
  ChevronDown,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  Bug,
  Flame,
  Droplets,
  Sparkles,
  Wrench,
  CheckCircle2,
  ArrowRight,
  FileText,
  Search,
  Zap,
  Award,
  Heart,
  Leaf,
  UserCheck,
  ClipboardList,
  CalendarCheck,
  FlaskConical,
  Wind,
  AlertTriangle,
  Instagram,
  Facebook,
  Linkedin,
  Home,
  Hotel,
  GraduationCap,
  Factory,
  UtensilsCrossed,
  Stethoscope,
  Briefcase,
} from "lucide-react";

import logoImg from "../imports/logo-header.svg";
import logoWhiteImg from "../imports/logo-footer.svg";

/* --- CONSTANTS ----------------------------------------------------------- */

const PHONE_RAW = "5584991511729";
const PHONE_DISPLAY = "+55 (84) 99151-1729";
const EMAIL = "ambientalern@gmail.com";
const ADDRESS = "Natal - RN";

const NAV_LINKS = [
  { label: "Serviços", href: "#servicos" },
  { label: "Quem Somos", href: "#quem-somos" },
  { label: "Segmentos", href: "#segmentos" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

const FEATURE_CARDS = [
  { icon: Clock, title: "Atendimento Rápido", desc: "Resposta em até 2 horas para urgências." },
  { icon: ShieldCheck, title: "Produtos Regulamentados", desc: "Certificados pela ANVISA e MAPA." },
  { icon: Users, title: "Equipe Especializada", desc: "Técnicos com certificação e experiência." },
  { icon: Building2, title: "Residencial e Empresarial", desc: "Soluções para qualquer tipo de ambiente." },
];

const SERVICES = [
  {
    icon: Bug,
    title: "Controle de Pragas Urbanas",
    desc: "Programa integrado de gestão com monitoramento contínuo e ações preventivas e corretivas.",
    accent: "rgba(13,53,84,0.07)",
  },
  {
    icon: Flame,
    title: "Dedetização",
    desc: "Eliminação de insetos rasteiros e voadores com produtos de alta eficácia e baixa toxicidade.",
    accent: "rgba(46,125,82,0.08)",
  },
  {
    icon: AlertTriangle,
    title: "Desratização",
    desc: "Controle e eliminação de roedores com métodos seguros para ambientes urbanos e industriais.",
    accent: "rgba(13,53,84,0.07)",
  },
  {
    icon: Wrench,
    title: "Descupinização",
    desc: "Tratamento especializado contra cupins em madeiras, estruturas e fundações com garantia.",
    accent: "rgba(46,125,82,0.08)",
  },
  {
    icon: Wind,
    title: "Controle de Mosquitos",
    desc: "Eliminação de focos do Aedes aegypti e outros vetores de doenças em qualquer ambiente.",
    accent: "rgba(13,53,84,0.07)",
  },
  {
    icon: FlaskConical,
    title: "Aranhas e Escorpiões",
    desc: "Tratamento eficaz para eliminar aranhas e escorpiões, protegendo famílias de acidentes.",
    accent: "rgba(46,125,82,0.08)",
  },
  {
    icon: Droplets,
    title: "Sanitização de Ambientes",
    desc: "Desinfecção de ambientes para eliminar vírus, bactérias e fungos com produtos certificados.",
    accent: "rgba(13,53,84,0.07)",
  },
  {
    icon: Sparkles,
    title: "Limpeza de Reservatérios",
    desc: "Higienização de caixas d'água conforme portaria 2914/11 do Ministério da Saúde.",
    accent: "rgba(46,125,82,0.08)",
  },
];

const PESTS = [
  { name: "Baratas",    emoji: "", img: "photo-1657785006298-c747b0b88a8f", danger: "Alto" },
  { name: "Cupins",     emoji: "", img: "photo-1666446066207-a2092ebf72fe", danger: "Alto" },
  { name: "Formigas",   emoji: "", img: "photo-1665689874828-a2f1c1ed2f92", danger: "Médio" },
  { name: "Ratos",      emoji: "", img: "photo-1624116518496-993146f67f4a", danger: "Alto" },
  { name: "Escorpiões", emoji: "", img: "photo-1665101897870-83ac9dc53198", danger: "Alto" },
  { name: "Aranhas",    emoji: "", img: "photo-1636791013127-37effd526316", danger: "Alto" },
  { name: "Mosquitos",  emoji: "", img: "photo-1698566445612-b6e552371334", danger: "Alto" },
  { name: "Moscas",     emoji: "", img: "photo-1732967823139-d10c3daa6658", danger: "Médio" },
  { name: "Pulgas",     emoji: "", img: "photo-1635496471665-4e67e0e87399", danger: "Médio" },
  { name: "Carrapatos", emoji: "", img: "photo-1650074516062-c39941f36335", danger: "Alto" },
  { name: "Pombos",     emoji: "", img: "photo-1681812508658-12c52bf91fd8", danger: "Médio" },
];

const STEPS = [
  { icon: FileText,    step: "01", title: "Solicitação de Orçamento", desc: "Entre em contato pelo site, WhatsApp ou telefone. Resposta em até 2 horas." },
  { icon: CalendarCheck, step: "02", title: "Visita Técnica",       desc: "Nosso técnico agenda uma visita para avaliar o ambiente sem custo adicional." },
  { icon: Search,      step: "03", title: "Diagnóstico",            desc: "Identificamos o tipo e extensão da infestação e elaboramos um plano de ação." },
  { icon: Zap,         step: "04", title: "Aplicação do Tratamento",desc: "Executamos o serviço com produtos regulamentados e técnicas seguras e eficazes." },
  { icon: Award,       step: "05", title: "Acompanhamento e Garantia", desc: "Emitimos laudo técnico e acompanhamos o resultado com garantia pós-aplicação." },
];

const SEGMENTS = [
  { icon: Home,           label: "Residências",  img: "photo-1565363887715-8884629e09ee" },
  { icon: Building2,      label: "Condomínios",  img: "photo-1775733924258-5363323b3ab8" },
  { icon: Briefcase,      label: "Empresas",     img: "photo-1718220216044-006f43e3a9b1" },
  { icon: UtensilsCrossed,label: "Restaurantes", img: "photo-1588416820614-f8d6ac6cea56" },
  { icon: Stethoscope,    label: "Clínicas",     img: "photo-1538108149393-fbbd81895907" },
  { icon: ShieldCheck,    label: "Hospitais",    img: "photo-1519494026892-80bbd2d6fd0d" },
  { icon: Hotel,          label: "Hotéis",       img: "photo-1692153142524-60285a93c249" },
  { icon: GraduationCap,  label: "Escolas",      img: "photo-1746862932918-99cdc53157b1" },
  { icon: Factory,        label: "Indústrias",   img: "photo-1771970472779-6452fbce94d6" },
  { icon: Building2,      label: "Escritórios",  img: "photo-1556761175-4b46a572b786" },
];

const STATS = [
  { value: "500+", label: "Clientes Atendidos", sub: "em todo o estado" },
  { value: "98%",  label: "de Satisfação",       sub: "índice verificado" },
  { value: "24h",  label: "Atendimento Rápido",  sub: "plantão emergencial" },
  { value: "100%", label: "Equipe Especializada", sub: "técnicos certificados" },
];

const FAQ_ITEMS = [
  {
    q: "Quanto tempo dura o efeito da dedetização?",
    a: "O efeito residual dos produtos utilizados varia de acordo com o tipo de praga e o ambiente tratado. Em média, os tratamentos têm eficácia de 30 a 90 dias. Para resultados permanentes, recomendamos um programa de manutenção preventiva trimestral.",
  },
  {
    q: "É seguro para crianças e pets?",
    a: "Sim. Utilizamos produtos com formulações de baixa toxicidade, aprovados pela ANVISA, específicos para ambientes habitados. Nossos técnicos orientam sobre o tempo de retorno ao ambiente (geralmente 1 a 2 horas após aplicação), garantindo total segurança para toda a família.",
  },
  {
    q: "Preciso sair do ambiente durante o serviço?",
    a: "Depende do tipo de serviço e do produto utilizado. Na maioria das aplicações é necessário se ausentar por no mínimo 1 hora. Em casos específicos, como fumigação com fosfina, pode ser necessário deixar o imóvel por até 24 horas. Nossa equipe orienta cada caso individualmente.",
  },
  {
    q: "Quanto tempo leva para realizar o serviço?",
    a: "O tempo varia de acordo com o tamanho do imóvel e o tipo de serviço. Uma residência padrão leva em média 1 a 2 horas. Ambientes comerciais e industriais podem demandar mais tempo. Após a visita técnica e diagnóstico, informamos o tempo estimado com precisão.",
  },
  {
    q: "Vocês oferecem garantia nos serviços?",
    a: "Sim! Todos os nossos serviços incluem garantia pós-aplicação, com prazo que varia conforme o tipo de tratamento. Emitimos laudo técnico ao final de cada atendimento. Caso a praga retorne dentro do período de garantia, retornamos sem custo adicional para o cliente.",
  },
];

const WHY_US = [
  { icon: ShieldCheck, title: "Produtos Regulamentados",    desc: "Aprovados pela ANVISA, MAPA e órgãos competentes." },
  { icon: UserCheck,   title: "Equipe Técnica Qualificada", desc: "Profissionais certificados e treinamento contínuo." },
  { icon: Clock,       title: "Atendimento Rápido",         desc: "Resposta em até 2h e plantão 24h para emergências." },
  { icon: Award,       title: "Garantia dos Serviços",      desc: "Laudo técnico emitido e garantia pós-aplicação." },
  { icon: Heart,       title: "Segurança para Crianças e Pets", desc: "Protocolos específicos para ambientes habitados." },
  { icon: Building2,   title: "Residencial e Empresarial",  desc: "Residências, condomínios, empresas e indústrias." },
  { icon: ClipboardList, title: "Atendimento Personalizado", desc: "Diagnóstico e plano de tratamento exclusivo." },
  { icon: Leaf,        title: "Compromisso Ambiental",      desc: "Métodos sustentáveis de mínimo impacto ambiental." },
];

const CREDENTIALS = [
  "Licença ANVISA ativa",
  "Responsável Técnico habilitado",
  "Laudos e certificados emitidos",
  "Seguro de responsabilidade civil",
  "Atendimento 24h para emergências",
  "Garantia pós-aplicação inclusa",
];

const dangerColor: Record<string, string> = {
  Alto: "text-red-500 bg-red-50",
  Médio: "text-amber-600 bg-amber-50",
};

/* --- COMPONENT ----------------------------------------------------------- */

export default function App() {
  const [menuOpen, setMenuOpen]   = useState(false);
  const [openFaq, setOpenFaq]     = useState<number | null>(null);
  const [quoteName, setQuoteName] = useState("");
  const [quoteService, setQuoteService] = useState("");

  const handleQuoteSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const message = [
      "Olá! Gostaria de solicitar um orçamento gratuito.",
      quoteName.trim() ? `Nome: ${quoteName.trim()}` : "",
      quoteService ? `Serviço: ${quoteService}` : "",
    ].filter(Boolean).join("\n");

    window.open(`https://wa.me/${PHONE_RAW}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-background text-foreground" style={{ fontFamily: "'Manrope', sans-serif" }}>

      {/* -- NAV ---------------------------------------------------------- */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="shrink-0">
            <img src={logoImg} alt="Ambientale Limpeza e Controle" className="w-44 sm:w-52 h-auto object-contain" />
          </a>

          <nav className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((l) => (
              <a key={l.label} href={l.href} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a href={`tel:+${PHONE_RAW}`} className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors flex items-center gap-1.5">
              <Phone size={14} />{PHONE_DISPLAY}
            </a>
            <a href="#contato" className="px-4 py-2 rounded-xl bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-colors">
              Solicitar Orçamento
            </a>
          </div>

          <button className="lg:hidden p-2 rounded-lg text-muted-foreground hover:text-primary" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {menuOpen && (
          <div className="lg:hidden bg-white border-t border-border px-6 py-4 flex flex-col gap-4">
            {NAV_LINKS.map((l) => (
              <a key={l.label} href={l.href} className="text-sm font-medium text-foreground" onClick={() => setMenuOpen(false)}>{l.label}</a>
            ))}
            <a href="#contato" className="px-4 py-2.5 rounded-xl bg-primary text-white text-sm font-semibold text-center" onClick={() => setMenuOpen(false)}>
              Solicitar Orçamento
            </a>
          </div>
        )}
      </header>

      {/* -- HERO --------------------------------------------------------- */}
      <section className="pt-16 bg-white flex items-center">
        <div className="max-w-7xl mx-auto px-6 py-10 lg:py-16 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
          <div className="flex flex-col gap-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-semibold w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Empresa certificada ANVISA
            </div>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl text-primary leading-[1.1] tracking-tight" style={{ fontWeight: 800 }}>
              Protegemos seu ambiente com <span className="text-accent">segurança</span>, eficiência e responsabilidade.
            </h1>
            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed max-w-lg">
              A Ambientale oferece soluções profissionais em controle de pragas para residências, empresas, condomínios e indústrias, utilizando produtos regulamentados e atendimento especializado.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="#contato" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-white font-semibold text-sm hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-0.5">
                Solicitar Orçamento <ArrowRight size={16} />
              </a>
              <a href={`https://wa.me/${PHONE_RAW}`} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border-2 border-primary/20 text-primary font-semibold text-sm hover:border-primary/40 hover:bg-secondary transition-all">
                <MessageCircle size={16} /> Falar no WhatsApp
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div className="relative rounded-2xl overflow-hidden bg-secondary shadow-2xl shadow-primary/10">
              <img src="https://images.unsplash.com/photo-1681812508658-12c52bf91fd8?w=900&h=600&fit=crop&auto=format"
                alt="Técnico da Ambientale realizando controle de pragas" className="w-full h-72 lg:h-96 object-cover" />
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <ShieldCheck size={18} className="text-accent" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-foreground">Aplicação Certificada</p>
                  <p className="text-[11px] text-muted-foreground">Laudo técnico incluso</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {FEATURE_CARDS.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="bg-white rounded-xl p-4 border border-border hover:shadow-md hover:border-primary/20 transition-all group">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-3" style={{ backgroundColor: "rgba(13,53,84,0.07)" }}>
                    <Icon size={16} className="text-primary" />
                  </div>
                  <p className="text-sm font-semibold text-foreground leading-snug mb-1">{title}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* -- STATS BAR ---------------------------------------------------- */}
      <div className="bg-primary py-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {STATS.map(({ value, label, sub }) => (
            <div key={label} className="flex flex-col items-center gap-1">
              <span className="text-3xl lg:text-4xl text-white" style={{ fontWeight: 800 }}>{value}</span>
              <span className="text-sm text-white font-semibold">{label}</span>
              <span className="text-xs text-white/50">{sub}</span>
            </div>
          ))}
        </div>
      </div>

      {/* -- QUEM SOMOS --------------------------------------------------- */}
      <section id="quem-somos" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="rounded-2xl overflow-hidden bg-secondary shadow-xl shadow-primary/10">
              <img src="https://images.unsplash.com/photo-1718152421680-d1580e843cc9?w=800&h=700&fit=crop&auto=format"
                alt="Equipe Ambientale em operação" className="w-full h-80 lg:h-[460px] object-cover" />
            </div>
            <div className="absolute -bottom-5 -right-4 bg-white rounded-2xl px-5 py-4 shadow-xl border border-border">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                  <CheckCircle2 size={22} className="text-white" />
                </div>
                <div>
                  <p className="text-base text-primary leading-tight" style={{ fontWeight: 700 }}>ISO 9001</p>
                  <p className="text-xs text-muted-foreground">Qualidade certificada</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -left-4 w-24 h-24 rounded-2xl bg-primary/5 -z-10" />
          </div>

          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 text-accent text-xs font-semibold uppercase tracking-widest">
              <span className="w-6 h-px bg-accent" /> Quem Somos
            </div>
            <h2 className="text-3xl lg:text-4xl text-primary leading-tight tracking-tight" style={{ fontWeight: 800 }}>
              Mais de uma década cuidando de ambientes seguros e saudáveis
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Fundada com o propósito de oferecer controle de pragas com responsabilidade ambiental, a Ambientale nasceu da necessidade de um serviço que une técnica, segurança e atendimento humanizado.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Nossos profissionais são treinados continuamente e atuam com protocolos rigorosos, garantindo eficácia no resultado e tranquilidade para nossos clientes. Cada atendimento é personalizado, porque cada ambiente tem suas particularidades.
            </p>
            <div className="grid grid-cols-1 gap-3 pt-2">
              {CREDENTIALS.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 size={16} className="text-accent shrink-0" />
                  <span className="text-sm font-medium text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* -- SERVIÇOS ----------------------------------------------------- */}
      <section id="servicos" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14 flex flex-col items-center gap-4">
            <div className="inline-flex items-center gap-2 text-accent text-xs font-semibold uppercase tracking-widest">
              <span className="w-6 h-px bg-accent" /> Nossos Serviços <span className="w-6 h-px bg-accent" />
            </div>
            <h2 className="text-3xl lg:text-4xl text-primary tracking-tight max-w-xl" style={{ fontWeight: 800 }}>
              Soluções completas em controle de pragas
            </h2>
            <p className="text-muted-foreground max-w-xl text-base">
              Cobrimos todos os serviços necessários para manter seu ambiente protegido, limpo e em conformidade com as normas sanitárias.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICES.map(({ icon: Icon, title, desc, accent }) => (
              <div key={title} className="bg-card rounded-2xl p-6 border border-border hover:shadow-xl hover:-translate-y-1.5 transition-all cursor-default group flex flex-col">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform" style={{ backgroundColor: accent }}>
                  <Icon size={22} className="text-primary" />
                </div>
                <h3 className="text-sm text-foreground mb-2 leading-snug" style={{ fontWeight: 700 }}>{title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed flex-1">{desc}</p>
                <a
                  href="#contato"
                  onClick={() => setQuoteService(title)}
                  className="mt-5 flex items-center gap-1.5 text-xs font-semibold text-primary hover:gap-2.5 transition-all w-fit"
                >
                  Saiba mais <ChevronRight size={12} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- PRAGAS ------------------------------------------------------- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14 flex flex-col items-center gap-4">
            <div className="inline-flex items-center gap-2 text-accent text-xs font-semibold uppercase tracking-widest">
              <span className="w-6 h-px bg-accent" /> Pragas que Combatemos <span className="w-6 h-px bg-accent" />
            </div>
            <h2 className="text-3xl lg:text-4xl text-primary tracking-tight" style={{ fontWeight: 800 }}>
              Identificamos e eliminamos qualquer ameaça
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {PESTS.map(({ name, emoji, img, danger }) => (
              <div key={name} className="group relative rounded-2xl overflow-hidden cursor-default aspect-square bg-secondary">
                <img src={`https://images.unsplash.com/${img}?w=300&h=300&fit=crop&auto=format`} alt={name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-3 right-3">
                  <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${dangerColor[danger]}`}>{danger}</span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-5xl drop-shadow-lg">{emoji}</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <p className="text-white text-sm font-semibold">{name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- COMO FUNCIONA ------------------------------------------------ */}
      <section id="como-funciona" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 flex flex-col items-center gap-4">
            <div className="inline-flex items-center gap-2 text-accent text-xs font-semibold uppercase tracking-widest">
              <span className="w-6 h-px bg-accent" /> Como Funciona <span className="w-6 h-px bg-accent" />
            </div>
            <h2 className="text-3xl lg:text-4xl text-primary tracking-tight" style={{ fontWeight: 800 }}>
              Do contato ao resultado em 5 etapas simples
            </h2>
          </div>
          {/* Desktop */}
          <div className="hidden lg:block relative">
            <div className="absolute top-10 left-[10%] right-[10%] h-px bg-border" />
            <div className="grid grid-cols-5 gap-6 relative">
              {STEPS.map(({ icon: Icon, step, title, desc }) => (
                <div key={step} className="flex flex-col items-center text-center gap-4 group">
                  <div className="relative z-10 w-20 h-20 rounded-2xl bg-white border-2 border-border group-hover:border-primary/30 shadow-md group-hover:shadow-lg group-hover:-translate-y-1 transition-all flex flex-col items-center justify-center gap-1">
                    <Icon size={20} className="text-primary" />
                    <span className="text-[10px] font-bold text-accent">{step}</span>
                  </div>
                  <h3 className="text-sm text-foreground leading-snug" style={{ fontWeight: 700 }}>{title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Mobile */}
          <div className="lg:hidden flex flex-col gap-0">
            {STEPS.map(({ icon: Icon, step, title, desc }, i) => (
              <div key={step} className="flex gap-5">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-xl bg-white border-2 border-primary/20 shadow-sm flex flex-col items-center justify-center gap-0.5 shrink-0">
                    <Icon size={16} className="text-primary" />
                    <span className="text-[9px] font-bold text-accent">{step}</span>
                  </div>
                  {i < STEPS.length - 1 && <div className="w-px flex-1 bg-border my-2" />}
                </div>
                <div className="pb-8 flex flex-col gap-1 pt-1">
                  <h3 className="text-sm text-foreground" style={{ fontWeight: 700 }}>{title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- SEGMENTOS ---------------------------------------------------- */}
      <section id="segmentos" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14 flex flex-col items-center gap-4">
            <div className="inline-flex items-center gap-2 text-accent text-xs font-semibold uppercase tracking-widest">
              <span className="w-6 h-px bg-accent" /> Segmentos Atendidos <span className="w-6 h-px bg-accent" />
            </div>
            <h2 className="text-3xl lg:text-4xl text-primary tracking-tight" style={{ fontWeight: 800 }}>
              Atendemos todos os tipos de ambiente
            </h2>
            <p className="text-muted-foreground max-w-xl text-base">
              Do lar ao complexo industrial, nossa equipe está habilitada para atuar em qualquer segmento com protocolos específicos para cada ambiente.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {SEGMENTS.map(({ icon: Icon, label, img }) => (
              <div key={label} className="group relative rounded-2xl overflow-hidden cursor-default bg-secondary" style={{ aspectRatio: "4/3" }}>
                <img
                  src={`https://images.unsplash.com/${img}?w=400&h=300&fit=crop&auto=format`}
                  alt={label}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/25 to-transparent" />
                {/* hover overlay */}
                <div className="absolute inset-0 bg-primary/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* icon bubble - visible on hover */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-xl bg-white/15 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300">
                  <Icon size={22} className="text-white" />
                </div>

                {/* label */}
                <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-white/15 backdrop-blur-sm flex items-center justify-center shrink-0 group-hover:bg-accent/80 transition-colors duration-300">
                    <Icon size={14} className="text-white" />
                  </div>
                  <p className="text-white text-sm font-semibold leading-tight">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- POR QUE AMBIENTALE ------------------------------------------- */}
      <section id="diferenciais" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14 flex flex-col items-center gap-4">
            <div className="inline-flex items-center gap-2 text-accent text-xs font-semibold uppercase tracking-widest">
              <span className="w-6 h-px bg-accent" /> Por que escolher a Ambientale? <span className="w-6 h-px bg-accent" />
            </div>
            <h2 className="text-3xl lg:text-4xl text-primary tracking-tight max-w-2xl" style={{ fontWeight: 800 }}>
              8 razões para confiar seu ambiente à Ambientale
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {WHY_US.map(({ icon: Icon, title, desc }, i) => (
              <div key={title} className="group relative rounded-2xl p-6 border border-border bg-white hover:shadow-xl hover:-translate-y-1 transition-all cursor-default overflow-hidden">
                <span className="absolute top-4 right-5 text-6xl font-black text-primary/4 leading-none select-none" style={{ fontWeight: 900 }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform" style={{ backgroundColor: "rgba(13,53,84,0.07)" }}>
                  <Icon size={22} className="text-primary" />
                </div>
                <h3 className="text-sm text-foreground mb-2 leading-snug" style={{ fontWeight: 700 }}>{title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- FAQ ---------------------------------------------------------- */}
      <section id="faq" className="py-24 bg-background">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-14 flex flex-col items-center gap-4">
            <div className="inline-flex items-center gap-2 text-accent text-xs font-semibold uppercase tracking-widest">
              <span className="w-6 h-px bg-accent" /> Dúvidas Frequentes <span className="w-6 h-px bg-accent" />
            </div>
            <h2 className="text-3xl lg:text-4xl text-primary tracking-tight" style={{ fontWeight: 800 }}>
              Perguntas frequentes
            </h2>
            <p className="text-muted-foreground text-base">
              Respondemos as principais dúvidas sobre nossos serviços de controle de pragas.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {FAQ_ITEMS.map(({ q, a }, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={i}
                  className={`rounded-2xl border transition-all duration-200 ${isOpen ? "border-primary/25 bg-white shadow-lg shadow-primary/5" : "border-border bg-white hover:border-primary/15"}`}
                >
                  <button
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm text-foreground leading-snug" style={{ fontWeight: 600 }}>{q}</span>
                    <span className={`shrink-0 w-7 h-7 rounded-lg flex items-center justify-center transition-all ${isOpen ? "bg-primary text-white" : "bg-muted text-muted-foreground"}`}>
                      <ChevronDown size={15} className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5">
                      <div className="w-full h-px bg-border mb-4" />
                      <p className="text-sm text-muted-foreground leading-relaxed">{a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- BIG CTA ------------------------------------------------------ */}
      <section className="py-28 bg-primary relative overflow-hidden">
        {/* decorative circles */}
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/4 pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-white/4 pointer-events-none" />
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-48 h-48 rounded-full bg-accent/10 pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 flex flex-col items-center gap-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white/70 text-xs font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Atendimento em todo o RN
          </div>
          <h2 className="text-3xl lg:text-5xl text-white leading-tight tracking-tight" style={{ fontWeight: 800 }}>
            Livre-se das pragas com quem entende do assunto
          </h2>
          <p className="text-white/65 max-w-xl text-base lg:text-lg leading-relaxed">
            Solicite agora um orçamento gratuito, sem compromisso. Nossa equipe especializada entra em contato em até 2 horas para entender sua necessidade e apresentar a melhor solução.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contato"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-primary font-semibold text-sm hover:bg-white/90 transition-all shadow-xl shadow-black/20 hover:-translate-y-0.5"
            >
              Solicitar Orçamento Gratuito <ArrowRight size={16} />
            </a>
            <a
              href={`https://wa.me/${PHONE_RAW}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-white/25 text-white font-semibold text-sm hover:bg-white/10 hover:border-white/40 transition-all"
            >
              <MessageCircle size={16} /> Falar no WhatsApp
            </a>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
            {[
              { icon: ShieldCheck, text: "Produtos regulamentados" },
              { icon: Award, text: "Garantia incluída" },
              { icon: Clock, text: "Resposta em 2 horas" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-white/60 text-sm">
                <Icon size={14} className="text-accent" /> {text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- CONTACT FORM ------------------------------------------------- */}
      <section id="contato" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center gap-8">
          <div className="inline-flex items-center gap-2 text-accent text-xs font-semibold uppercase tracking-widest">
            <span className="w-6 h-px bg-accent" /> Fale Conosco <span className="w-6 h-px bg-accent" />
          </div>
          <h2 className="text-3xl lg:text-4xl text-primary tracking-tight" style={{ fontWeight: 800 }}>
            Solicite seu orçamento gratuito
          </h2>
          <p className="text-muted-foreground max-w-xl text-base leading-relaxed">
            Preencha o formulário ou entre em contato diretamente. Nossa equipe responde em até 2 horas.
          </p>

          <form onSubmit={handleQuoteSubmit} className="w-full max-w-xl flex flex-col gap-3">
            <input
              type="text"
              placeholder="Seu nome"
              value={quoteName}
              onChange={(event) => setQuoteName(event.target.value)}
              className="w-full px-4 py-3.5 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all placeholder:text-muted-foreground"
            />
            <select
              value={quoteService}
              onChange={(event) => setQuoteService(event.target.value)}
              className="w-full px-4 py-3.5 rounded-xl border border-border bg-background text-sm text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all"
            >
              <option value="">Tipo de serviço</option>
              {SERVICES.map((s) => <option key={s.title} value={s.title}>{s.title}</option>)}
            </select>
            <button type="submit" className="w-full py-4 rounded-xl bg-primary text-white font-semibold text-sm hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-0.5">
              Solicitar Orçamento Gratuito
            </button>
          </form>

          <div className="flex flex-col sm:flex-row items-center gap-6 pt-4 border-t border-border w-full justify-center">
            <a href={`tel:+${PHONE_RAW}`} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-medium">
              <Phone size={15} className="text-primary" />{PHONE_DISPLAY}
            </a>
            <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-medium">
              <Mail size={15} className="text-primary" />{EMAIL}
            </a>
            <span className="flex items-center gap-2 text-sm text-muted-foreground font-medium">
              <MapPin size={15} className="text-primary" />{ADDRESS}
            </span>
          </div>
        </div>
      </section>

      {/* -- FOOTER ------------------------------------------------------- */}
      <footer className="bg-primary pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          {/* Top grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-white/10">

            {/* Brand */}
            <div className="flex flex-col gap-5 lg:col-span-1">
              <img src={logoWhiteImg} alt="Ambientale" className="w-48 max-w-full h-auto object-contain" />
              <p className="text-sm text-white/55 leading-relaxed">
                Empresa especializada em controle de pragas urbanas, dedetização, sanitização e limpeza técnica no Rio Grande do Norte.
              </p>
              <div className="flex items-center gap-3">
                {[
                  { icon: Instagram, href: "https://www.instagram.com/ambi_entale/", label: "Instagram" },
                  { icon: MessageCircle, href: `https://wa.me/${PHONE_RAW}`, label: "WhatsApp" },
                ].map(({ icon: Icon, href, label }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                    className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                    <Icon size={16} className="text-white/70" />
                  </a>
                ))}
              </div>
            </div>

            {/* Links Rápidos */}
            <div className="flex flex-col gap-4">
              <p className="text-xs font-bold text-white/40 uppercase tracking-widest">Links Rápidos</p>
              <ul className="flex flex-col gap-2.5">
                {[
                  { label: "Nossos Serviços", href: "#servicos" },
                  { label: "Quem Somos", href: "#quem-somos" },
                  { label: "Segmentos Atendidos", href: "#segmentos" },
                  { label: "Como Funciona", href: "#como-funciona" },
                  { label: "Perguntas Frequentes", href: "#faq" },
                  { label: "Solicitar Orçamento", href: "#contato" },
                ].map(({ label, href }) => (
                  <li key={label}>
                    <a href={href} className="text-sm text-white/55 hover:text-white transition-colors flex items-center gap-1.5 group">
                      <ChevronRight size={12} className="text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Serviços */}
            <div className="flex flex-col gap-4">
              <p className="text-xs font-bold text-white/40 uppercase tracking-widest">Serviços</p>
              <ul className="flex flex-col gap-2.5">
                {SERVICES.map(({ title }) => (
                  <li key={title}>
                    <a href="#servicos" className="text-sm text-white/55 hover:text-white transition-colors flex items-center gap-1.5 group">
                      <ChevronRight size={12} className="text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                      {title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contato */}
            <div className="flex flex-col gap-4">
              <p className="text-xs font-bold text-white/40 uppercase tracking-widest">Contato</p>
              <ul className="flex flex-col gap-4">
                <li>
                  <a href={`tel:+${PHONE_RAW}`} className="flex items-start gap-3 group">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-accent transition-colors mt-0.5">
                      <Phone size={14} className="text-white/70" />
                    </div>
                    <div>
                      <p className="text-[10px] text-white/40 uppercase tracking-widest mb-0.5">Telefone</p>
                      <p className="text-sm text-white/70 group-hover:text-white transition-colors font-medium">{PHONE_DISPLAY}</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href={`https://wa.me/${PHONE_RAW}`} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 group">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-accent transition-colors mt-0.5">
                      <MessageCircle size={14} className="text-white/70" />
                    </div>
                    <div>
                      <p className="text-[10px] text-white/40 uppercase tracking-widest mb-0.5">WhatsApp</p>
                      <p className="text-sm text-white/70 group-hover:text-white transition-colors font-medium">{PHONE_DISPLAY}</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href={`mailto:${EMAIL}`} className="flex items-start gap-3 group">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-accent transition-colors mt-0.5">
                      <Mail size={14} className="text-white/70" />
                    </div>
                    <div>
                      <p className="text-[10px] text-white/40 uppercase tracking-widest mb-0.5">E-mail</p>
                      <p className="text-sm text-white/70 group-hover:text-white transition-colors font-medium">{EMAIL}</p>
                    </div>
                  </a>
                </li>
                <li>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin size={14} className="text-white/70" />
                    </div>
                    <div>
                      <p className="text-[10px] text-white/40 uppercase tracking-widest mb-0.5">Endereço</p>
                      <p className="text-sm text-white/70 font-medium">Natal - Rio Grande do Norte</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/30 text-center">
              © {new Date().getFullYear()} Ambientale Limpeza e Controle. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-xs text-white/30 hover:text-white/60 transition-colors">Política de Privacidade</a>
              <span className="text-white/20">·</span>
              <a href="#" className="text-xs text-white/30 hover:text-white/60 transition-colors">Termos de Uso</a>
            </div>
          </div>
        </div>
      </footer>

      {/* -- WhatsApp float ----------------------------------------------- */}
      <a
        href={`https://wa.me/${PHONE_RAW}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-accent flex items-center justify-center shadow-xl shadow-accent/30 hover:scale-110 hover:shadow-2xl hover:shadow-accent/40 transition-all"
        aria-label="Conversar no WhatsApp"
      >
        <MessageCircle size={24} className="text-white" />
      </a>
    </div>
  );
}
