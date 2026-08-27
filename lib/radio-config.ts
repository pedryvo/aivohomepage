export interface RadioConfig {
  name: string;
  slogan: string;
  tagline: string;
  contactEmail: string;
  streamUrl: string;
  backupStreamUrl?: string;
  frequencyLabel: string;
  bitrate: string;
  programTitle: string;
  programDescription: string;
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
  tagline: "É uma brasa, mora! A rádio 100% dedicada aos grandes sucessos da Jovem Guarda brasileira.",
  contactEmail: "pedryvo@gmail.com",
  streamUrl: STREAM_URL,
  frequencyLabel: "Web FM • Jovem Guarda Online",
  bitrate: "128 kbps HD Estéreo",
  programTitle: "Doces Memórias: O Melhor da Jovem Guarda",
  programDescription:
    "Transmissão contínua 24 horas por dia com os maiores clássicos de Roberto Carlos, Erasmo Carlos, Wanderléa, The Fevers, Renato e Seus Blue Caps, Ronnie Von, Golden Boys e muito mais.",
};
