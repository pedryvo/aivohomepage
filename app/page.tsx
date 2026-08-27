import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { RadioPlayerHero } from "@/components/player/radio-player-hero";
import { FloatingPlayer } from "@/components/player/floating-player";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { RADIO_CONFIG } from "@/lib/radio-config";

export default function Home() {
  const radioSchema = {
    "@context": "https://schema.org",
    "@type": "RadioStation",
    name: RADIO_CONFIG.name,
    url: "https://radiodocessmemorias.com.br",
    description:
      "Rádio Doces Memórias - 100% Jovem Guarda e Iê-Iê-Iê. Os maiores sucessos de Roberto Carlos, Erasmo Carlos, Wanderléa, The Fevers, Renato e Seus Blue Caps e ídolos dos anos 60 em transmissão contínua 24h.",
    genre: ["Jovem Guarda", "Iê-Iê-Iê", "Rock Brasileiro Anos 60"],
    email: RADIO_CONFIG.contactEmail,
    broadcastDisplayName: RADIO_CONFIG.name,
    broadcastFrequency: RADIO_CONFIG.frequencyLabel,
    areaServed: "Global",
    inLanguage: "pt-BR",
  };

  return (
    <div className="min-h-screen bg-[#0c0a09] text-stone-100 selection:bg-amber-500/30 selection:text-amber-200">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(radioSchema) }}
      />
      <Navbar />
      <main>
        <RadioPlayerHero />
        <About />
        <Contact />
      </main>
      <FloatingPlayer />
      <Footer />
    </div>
  );
}
