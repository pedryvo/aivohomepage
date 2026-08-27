export interface RadioConfig {
  name: string;
  slogan: string;
  tagline: string;
  contactEmail: string;
  streamUrl: string;
  directStreamUrl: string;
  backupStreamUrl?: string;
  frequencyLabel: string;
  bitrate: string;
  programTitle: string;
  programDescription: string;
}

/**
 * CONFIGURAÇÃO DA RÁDIO DOCES MEMÓRIAS - JOVEM GUARDA
 */
export const DIRECT_STREAM_URL = "http://64.177.41.185:8000/live";
export const PROXY_STREAM_URL = "/api/stream";
export const M3U_STREAM_URL = "http://64.177.41.185:8000/live.m3u";

export const RADIO_CONFIG: RadioConfig = {
  name: "Rádio Doces Memórias",
  slogan: "A Casa da Jovem Guarda & do Iê-Iê-Iê",
  tagline: "É uma brasa, mora! A rádio 100% dedicada aos grandes sucessos da Jovem Guarda brasileira.",
  contactEmail: "pedryvo@gmail.com",
  streamUrl: PROXY_STREAM_URL,
  directStreamUrl: DIRECT_STREAM_URL,
  backupStreamUrl: M3U_STREAM_URL,
  frequencyLabel: "Web FM • Jovem Guarda Online",
  bitrate: "192 kbps HD Estéreo",
  programTitle: "Doces Memórias: O Melhor da Jovem Guarda",
  programDescription:
    "Transmissão contínua 24 horas por dia com os maiores clássicos de Roberto Carlos, Erasmo Carlos, Wanderléa, The Fevers, Renato e Seus Blue Caps, Ronnie Von, Golden Boys e muito mais.",
};
