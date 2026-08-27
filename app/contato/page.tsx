import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FloatingPlayer } from "@/components/player/floating-player";
import { Contact } from "@/components/sections/contact";
import { RADIO_CONFIG } from "@/lib/radio-config";
import { ArrowLeft, Sparkles, Disc, Flame } from "lucide-react";

export const metadata: Metadata = {
  title: `Contato | ${RADIO_CONFIG.name} - 100% Jovem Guarda`,
  description: `Entre em contato com a ${RADIO_CONFIG.name} exclusivamente pelo e-mail ${RADIO_CONFIG.contactEmail}. Envie sugestões de músicas da Jovem Guarda, parcerias e mensagens aos brotos.`,
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
              className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300 transition-colors"
            >
              <ArrowLeft className="size-3.5" />
              <span>Voltar para o Player da Jovem Guarda</span>
            </Link>
          </div>

          {/* Contact Section */}
          <Contact />

          {/* Additional Info Cards */}
          <div className="max-w-4xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#14110e] border border-amber-900/20 rounded-2xl p-6">
              <h3 className="font-serif font-bold text-white text-base mb-2 flex items-center gap-2">
                <Flame className="size-4 text-orange-400" />
                <span>Pedidos do Iê-Iê-Iê</span>
              </h3>
              <p className="text-xs text-stone-400 leading-relaxed font-light">
                Deseja ouvir um clássico do Roberto Carlos, Wanderléa ou The Fevers? Escreva para {RADIO_CONFIG.contactEmail}.
              </p>
            </div>

            <div className="bg-[#14110e] border border-amber-900/20 rounded-2xl p-6">
              <h3 className="font-serif font-bold text-white text-base mb-2 flex items-center gap-2">
                <Disc className="size-4 text-amber-400" />
                <span>Compactos & LPs Raros</span>
              </h3>
              <p className="text-xs text-stone-400 leading-relaxed font-light">
                Possui uma gravação histórica ou raridade da Jovem Guarda dos anos 60? Conte para nós por e-mail!
              </p>
            </div>

            <div className="bg-[#14110e] border border-amber-900/20 rounded-2xl p-6">
              <h3 className="font-serif font-bold text-white text-base mb-2 flex items-center gap-2">
                <Sparkles className="size-4 text-amber-400" />
                <span>Parcerias Culturais</span>
              </h3>
              <p className="text-xs text-stone-400 leading-relaxed font-light">
                Projetos culturais e apoios para preservar a memória da música brasileira: escreva para {RADIO_CONFIG.contactEmail}.
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
