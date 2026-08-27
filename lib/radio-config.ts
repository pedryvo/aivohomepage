export interface RadioConfig {
  name: string;
  slogan: string;
  tagline: string;
  contactEmail: string;
  streamUrl: string;
  backupStreamUrl?: string;
  frequencyLabel: string;
  bitrate: string;
}

/**
 * CONFIGURAÇÃO DA RÁDIO DOCES MEMÓRIAS
 * 
 * Para alterar a URL do streaming no futuro, basta atualizar a constante STREAM_URL abaixo.
 */
export const STREAM_URL = "https://stream.zeno.fm/f3wvbbqmdg8uv"; // URL placeholder/demonstração funcional. Substitua pela URL final do seu streaming.

export const RADIO_CONFIG: RadioConfig = {
  name: "Rádio Doces Memórias",
  slogan: "A Trilha Sonora da Sua Vida",
  tagline: "Reconectando você às melhores recordações através dos grandes clássicos inesquecíveis.",
  contactEmail: "pedryvo@gmail.com",
  streamUrl: STREAM_URL,
  frequencyLabel: "Web FM • 98.5 Online",
  bitrate: "128 kbps HD Estéreo",
};

export interface ScheduleItem {
  id: string;
  time: string;
  startHour: number;
  endHour: number;
  title: string;
  host: string;
  description: string;
  iconName: string;
  tags: string[];
}

export const DAILY_SCHEDULE: ScheduleItem[] = [
  {
    id: "madrugada",
    time: "00:00 - 06:00",
    startHour: 0,
    endHour: 6,
    title: "Madrugada de Paz & Serenata",
    host: "Seleção Especial",
    description: "Músicas calmas, instrumentais, orquestras e clássicos românticos para embalar o seu sono e descanso.",
    iconName: "Moon",
    tags: ["Instrumental", "Serenata", "Suave"],
  },
  {
    id: "despertar",
    time: "06:00 - 09:00",
    startHour: 6,
    endHour: 9,
    title: "Despertar com Saudade",
    host: "Abertura do Dia",
    description: "O melhor da MPB de raiz, Bossa Nova e canções matinais para começar o dia com energia e boas memórias.",
    iconName: "Sun",
    tags: ["MPB", "Bossa Nova", "Manhã"],
  },
  {
    id: "romantica",
    time: "09:00 - 12:00",
    startHour: 9,
    endHour: 12,
    title: "Manhã Romântica Inesquecível",
    host: "Doces Memórias",
    description: "Os maiores sucessos românticos nacionais e internacionais que marcaram época nas novelas e bailes.",
    iconName: "Heart",
    tags: ["Romântico", "Baladas", "Novelas"],
  },
  {
    id: "almoco",
    time: "12:00 - 14:00",
    startHour: 12,
    endHour: 14,
    title: "Almoço em Família & Velha Guarda",
    host: "Edição Especial",
    description: "Sambas clássicos, boleros, serestas e canções tradicionais para reunir a família com alegria.",
    iconName: "Coffee",
    tags: ["Samba Raiz", "Bolero", "Tradição"],
  },
  {
    id: "flashback",
    time: "14:00 - 18:00",
    startHour: 14,
    endHour: 18,
    title: "Túnel do Tempo - Flashback 70s, 80s & 90s",
    host: "Ritmo da Saudade",
    description: "As melhores pistas de dança do passado: Disco, Pop internacional, Rock clássico e sucessos inesquecíveis.",
    iconName: "Disc",
    tags: ["Flashback", "Anos 70", "Anos 80", "Anos 90"],
  },
  {
    id: "entardecer",
    time: "18:00 - 21:00",
    startHour: 18,
    endHour: 21,
    title: "Entardecer Dourado & Pedidos dos Ouvintes",
    host: "Vozes de Ouro",
    description: "Músicas pedidas pelos nossos queridos ouvintes e os grandes duetos da história da música.",
    iconName: "Sparkles",
    tags: ["Pedidos", "Duetos", "Ouro"],
  },
  {
    id: "noite",
    time: "21:00 - 00:00",
    startHour: 21,
    endHour: 24,
    title: "Doces Lembranças da Noite",
    host: "Acervo de Emoções",
    description: "Uma viagem musical profunda pelos momentos mais doces da vida. Canções que nunca envelhecem.",
    iconName: "Radio",
    tags: ["Nostalgia", "Poesia", "Clássicos"],
  },
];

export interface GenreHighlight {
  title: string;
  period: string;
  description: string;
  artists: string[];
  gradient: string;
}

export const GENRE_HIGHLIGHTS: GenreHighlight[] = [
  {
    title: "Flashback Internacional",
    period: "Anos 70, 80 & 90",
    description: "Pop, Soul, Disco e Soft Rock que dominaram as rádios mundiais e continuam vivos no coração.",
    artists: ["Bee Gees", "ABBA", "Elton John", "Whitney Houston", "Air Supply", "Queen"],
    gradient: "from-amber-600/30 to-amber-900/40",
  },
  {
    title: "O Panteão da MPB",
    period: "Anos de Ouro",
    description: "A poesia sonora brasileira em suas composições mais belas e arranjos atemporais.",
    artists: ["Elis Regina", "Tom Jobim", "Chico Buarque", "Caetano Veloso", "Gal Costa", "Vinicius de Moraes"],
    gradient: "from-yellow-600/30 to-orange-950/40",
  },
  {
    title: "Baladas & Boleros Românticos",
    period: "Eternos Apaixonados",
    description: "As canções que foram trilha sonora de grandes romances, casamentos e declarações de amor.",
    artists: ["Roberto Carlos", "Julio Iglesias", "Nelson Gonçalves", "Altemar Dutra", "Agnaldo Timóteo"],
    gradient: "from-rose-900/30 to-amber-950/40",
  },
  {
    title: "Temas de Cinema & Novelas",
    period: "Grandes Clássicos",
    description: "As trilhas inesquecíveis que nos transportam no tempo ao primeiro acorde.",
    artists: ["Ennio Morricone", "Roupa Nova", "Fábio Jr.", "Barry White", "Carpenters"],
    gradient: "from-emerald-950/30 to-amber-950/40",
  },
];
