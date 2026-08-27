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
 * CONFIGURAÇÃO DA RÁDIO DOCES MEMÓRIAS - JOVEM GUARDA
 * 
 * Para alterar a URL do streaming no futuro, basta atualizar a constante STREAM_URL abaixo.
 */
export const STREAM_URL = "https://stream.zeno.fm/f3wvbbqmdg8uv"; // Substitua pela URL final do seu streaming de Jovem Guarda.

export const RADIO_CONFIG: RadioConfig = {
  name: "Rádio Doces Memórias",
  slogan: "A Casa da Jovem Guarda & do Iê-Iê-Iê",
  tagline: "É uma brasa, mora! A rádio 100% dedicada ao maior movimento musical dos anos 60 no Brasil.",
  contactEmail: "pedryvo@gmail.com",
  streamUrl: STREAM_URL,
  frequencyLabel: "Web FM • Jovem Guarda Online",
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
    id: "madrugada-iê-iê-iê",
    time: "00:00 - 06:00",
    startHour: 0,
    endHour: 6,
    title: "Madrugada Broto & Baladas de Ouro",
    host: "Seleção Nostálgica",
    description: "As baladas românticas mais doces da Jovem Guarda, compactos raros e canções lentas que embalaram os namoros dos anos 60.",
    iconName: "Moon",
    tags: ["Baladas 60s", "Compactos Raros", "Lentas Inesquecíveis"],
  },
  {
    id: "abertura-calhambeque",
    time: "06:00 - 09:00",
    startHour: 6,
    endHour: 9,
    title: "Na Onda do Calhambeque",
    host: "Despertar Iê-Iê-Iê",
    description: "Comece o dia no ritmo contagiante dos primeiros rocks brasileiros, Cely Campello, The Clevers e os clássicos do início do movimento.",
    iconName: "Sun",
    tags: ["Cely Campello", "The Clevers", "Início da Jovem Guarda"],
  },
  {
    id: "trio-de-ouro",
    time: "09:00 - 12:00",
    startHour: 9,
    endHour: 12,
    title: "O Trio de Ouro: Roberto, Erasmo & Ternurinha",
    host: "Programa Especial",
    description: "Três horas dedicadas ao Rei Roberto Carlos, ao Tremendão Erasmo Carlos e à Ternurinha Wanderléa. Sucessos absolutos da TV Record.",
    iconName: "Heart",
    tags: ["Roberto Carlos", "Erasmo Carlos", "Wanderléa"],
  },
  {
    id: "festa-de-arromba",
    time: "12:00 - 15:00",
    startHour: 12,
    endHour: 15,
    title: "Festa de Arromba no Ar",
    host: "Edição Especial",
    description: "Os conjuntos que botavam todo mundo pra dançar: Renato e Seus Blue Caps, The Fevers, Os Incríveis, Golden Boys e The Jordans.",
    iconName: "Disc",
    tags: ["The Fevers", "Renato e Seus Blue Caps", "Os Incríveis"],
  },
  {
    id: "idolos-e-brotos",
    time: "15:00 - 18:00",
    startHour: 15,
    endHour: 18,
    title: "Ídolos do Iê-Iê-Iê & Vozes de Ouro",
    host: "Túnel do Tempo 60s",
    description: "Ronnie Von, Jerry Adriani, Eduardo Araújo, Wanderley Cardoso, Martinha, Vanusa, Bobby de Carlo e Silvinha.",
    iconName: "Sparkles",
    tags: ["Ronnie Von", "Jerry Adriani", "Eduardo Araújo", "Martinha"],
  },
  {
    id: "bailinhos-60",
    time: "18:00 - 21:00",
    startHour: 18,
    endHour: 21,
    title: "O Famoso Baile de Domingo",
    host: "Pedidos dos Ouvintes",
    description: "A atmosfera dos lendários bailinhos de garagem dos anos 60. Duetos inesquecíveis como Leno & Lílian, Os Vips e Deny & Dino.",
    iconName: "Coffee",
    tags: ["Leno & Lílian", "Os Vips", "Deny & Dino", "Bailinhos"],
  },
  {
    id: "doce-memoria-ouro",
    time: "21:00 - 00:00",
    startHour: 21,
    endHour: 24,
    title: "Doces Lembranças da Jovem Guarda",
    host: "Acervo Histórico",
    description: "Uma imersão completa na poesia, romantismo e ingenuidade das canções que marcaram a juventude mais vibrante do Brasil.",
    iconName: "Radio",
    tags: ["História da Música", "Poesia 60s", "É uma Brasa"],
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
    title: "O Trio de Ferro da TV Record",
    period: "Os Líderes do Movimento",
    description: "O trio que comandou as tardes de domingo na TV Record e parou o Brasil com suas jaquetas, calças coloridas e guitarras afinadas.",
    artists: ["Roberto Carlos (O Rei)", "Erasmo Carlos (Tremendão)", "Wanderléa (Ternurinha)"],
    gradient: "from-amber-600/30 to-amber-900/40",
  },
  {
    title: "Os Grandes Conjuntos Vocais & Instrumentais",
    period: "Guitarras, Metais & Iê-Iê-Iê",
    description: "As bandas que criaram os solos inesquecíveis e as versões brasileiras impecáveis que incendiavam os bailes por todo o país.",
    artists: ["Renato e Seus Blue Caps", "The Fevers", "Os Incríveis", "Golden Boys", "The Jordans", "Trio Esperança"],
    gradient: "from-yellow-600/30 to-orange-950/40",
  },
  {
    title: "Os Galãs & Musas dos Anos 60",
    period: "Vozes & Corações Apaixonados",
    description: "Os cantores e cantoras que se tornaram fenômenos de vendas de compactos e ídolos da juventude de toda uma geração.",
    artists: ["Ronnie Von", "Jerry Adriani", "Wanderley Cardoso", "Martinha", "Vanusa", "Eduardo Araújo", "Silvinha"],
    gradient: "from-rose-900/30 to-amber-950/40",
  },
  {
    title: "As Duplas Inesquecíveis & Pioneiros do Rock",
    period: "Duos & Precursores",
    description: "As harmonias vocais que embalaram os primeiros namoros e os pioneiros que abriram as portas para o rock nacional.",
    artists: ["Leno e Lílian", "Os Vips", "Deny e Dino", "Cely Campello", "Bobby de Carlo", "Tony Campello"],
    gradient: "from-emerald-950/30 to-amber-950/40",
  },
];
