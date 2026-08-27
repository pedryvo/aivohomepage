"use client";

import React from "react";
import Link from "next/link";
import { Disc, Mail, ArrowUp, Signal, Flame } from "lucide-react";
import { RADIO_CONFIG } from "@/lib/radio-config";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#080706] text-stone-300 border-t border-amber-950/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Column 1: Brand & Slogan */}
          <div className="lg:col-span-5 space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="flex items-center justify-center size-10 rounded-full bg-gradient-to-tr from-amber-600 to-yellow-400 p-[2px] shadow-lg shadow-amber-500/20">
                <div className="size-full bg-[#141210] rounded-full flex items-center justify-center">
                  <Disc className="size-5 text-amber-400 group-hover:rotate-45 transition-transform" />
                </div>
              </div>
              <span className="font-serif font-bold text-xl text-white group-hover:text-amber-300 transition-colors">
                {RADIO_CONFIG.name}
              </span>
            </Link>

            <p className="text-stone-400 text-sm leading-relaxed font-light max-w-md">
              A rádio web 100% dedicada ao movimento da Jovem Guarda no Brasil. O Iê-Iê-Iê, as guitarras elétricas, as baladas da TV Record e os grandes bailes dos anos 60 em transmissão contínua.
            </p>

            <div className="flex items-center gap-2 text-xs text-amber-400/90 bg-amber-950/30 px-3 py-1.5 rounded-xl border border-amber-900/40 w-fit">
              <Signal className="size-3.5 text-amber-400" />
              <span>Transmissão 24h • Jovem Guarda HD</span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-white">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/#player" className="text-stone-400 hover:text-amber-300 transition-colors">
                  Player Ao Vivo
                </Link>
              </li>
              <li>
                <Link href="/#programacao" className="text-stone-400 hover:text-amber-300 transition-colors">
                  Grade de Programação 60s
                </Link>
              </li>
              <li>
                <Link href="/#generos" className="text-stone-400 hover:text-amber-300 transition-colors">
                  Pilares da Jovem Guarda
                </Link>
              </li>
              <li>
                <Link href="/#sobre" className="text-stone-400 hover:text-amber-300 transition-colors">
                  História do Movimento
                </Link>
              </li>
              <li>
                <Link href="/#pedir-musica" className="text-stone-400 hover:text-amber-300 transition-colors">
                  Pedir Música
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-stone-400 hover:text-amber-300 transition-colors">
                  Página de Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Email Only */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-white">
              Contato Oficial
            </h4>
            <p className="text-xs text-stone-400 font-light">
              Para sugestões de faixas da Jovem Guarda, mensagens de ouvintes e parcerias, envie um e-mail para:
            </p>

            <a
              href={`mailto:${RADIO_CONFIG.contactEmail}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-amber-300 border border-amber-500/30 hover:border-amber-500 text-xs font-mono font-medium transition-all group"
            >
              <Mail className="size-4 text-amber-400 group-hover:scale-110 transition-transform" />
              <span>{RADIO_CONFIG.contactEmail}</span>
            </a>

            <p className="text-[11px] text-stone-500 font-light pt-1">
              Atendimento exclusivo via e-mail.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-stone-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400 font-light">
          <p>
            © {new Date().getFullYear()} {RADIO_CONFIG.name}. Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-amber-400 font-medium">
              &ldquo;É uma brasa, mora!&rdquo;
            </span>
            <button
              onClick={scrollToTop}
              aria-label="Voltar ao topo"
              className="p-2 rounded-lg bg-stone-900 hover:bg-stone-800 text-stone-300 hover:text-amber-300 border border-stone-800 transition-colors"
            >
              <ArrowUp className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
