import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FloatingPlayer } from "@/components/player/floating-player";
import { Contact } from "@/components/sections/contact";
import { RADIO_CONFIG } from "@/lib/radio-config";
import { Mail, ArrowLeft, Radio, Disc, Sparkles, MessageCircleQuestion } from "lucide-react";

export const metadata: Metadata = {
  title: `Contato | ${RADIO_CONFIG.name}`,
  description: `Entre em contato com a ${RADIO_CONFIG.name} exclusivamente pelo e-mail ${RADIO_CONFIG.contactEmail}. Envie sugestões, parcerias e pedidos musicais.`,
};

export default function ContatoPage() {
  return (
    <div className="min-h-screen bg-[#0c0a09] text-stone-100 selection:bg-amber-500/30 selection:text-amber-200 flex flex-col justify-between">
      <Navbar />

      <main className="pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb & Back Link */}
          <div className="mb-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors"
            >
              <ArrowLeft className="size-3.5" />
              <span>Voltar para a Página Inicial</span>
            </Link>
          </div>

          {/* Contact Section */}
          <Contact />

          {/* Additional Info Cards */}
          <div className="max-w-4xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#14110e] border border-amber-900/20 rounded-2xl p-6">
              <h3 className="font-serif font-bold text-white text-base mb-2">
                🎵 Pedidos Musicais
              </h3>
              <p className="text-xs text-stone-400 leading-relaxed font-light">
                Deseja ouvir uma música especial ou mandar um abraço para alguém querido? Envie os detalhes para {RADIO_CONFIG.contactEmail}.
              </p>
            </div>

            <div className="bg-[#14110e] border border-amber-900/20 rounded-2xl p-6">
              <h3 className="font-serif font-bold text-white text-base mb-2">
                📻 Sugestões de Acervo
              </h3>
              <p className="text-xs text-stone-400 leading-relaxed font-light">
                Lembra de uma raridade ou álbum clássico que gostaria de ver na nossa rádio? Envie sua sugestão por e-mail!
              </p>
            </div>

            <div className="bg-[#14110e] border border-amber-900/20 rounded-2xl p-6">
              <h3 className="font-serif font-bold text-white text-base mb-2">
                🤝 Parcerias & Apoio
              </h3>
              <p className="text-xs text-stone-400 leading-relaxed font-light">
                Interessado em apoiar a cultura e os grandes clássicos da música? Escreva diretamente para {RADIO_CONFIG.contactEmail}.
              </p>
            </div>
          </div>
        </div>
      </main>

      <FloatingPlayer />
      <Footer />
    </div>
  );
}
