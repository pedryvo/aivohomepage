"use client";

import React from "react";
import Link from "next/link";
import { Disc, Mail, ArrowUp, Signal } from "lucide-react";
import { RADIO_CONFIG } from "@/lib/radio-config";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#080706] text-stone-300 border-t border-amber-950/40 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Column 1: Brand & Slogan */}
          <div className="md:col-span-5 space-y-3">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="flex items-center justify-center size-9 rounded-full bg-gradient-to-tr from-amber-600 to-yellow-400 p-[2px] shadow-lg shadow-amber-500/20">
                <div className="size-full bg-[#141210] rounded-full flex items-center justify-center">
                  <Disc className="size-4 text-amber-400 group-hover:rotate-45 transition-transform" />
                </div>
              </div>
              <span className="font-serif font-bold text-lg text-white group-hover:text-amber-300 transition-colors">
                {RADIO_CONFIG.name}
              </span>
            </Link>

            <p className="text-stone-400 text-xs sm:text-sm leading-relaxed font-light">
              A rádio web 100% dedicada ao movimento da Jovem Guarda no Brasil. O melhor do Iê-Iê-Iê e dos anos 60 em transmissão contínua 24 horas por dia.
            </p>

            <div className="flex items-center gap-2 text-xs text-amber-400/90 bg-amber-950/30 px-3 py-1 rounded-lg border border-amber-900/40 w-fit">
              <Signal className="size-3 text-amber-400" />
              <span>Transmissão 24h • {RADIO_CONFIG.bitrate}</span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="md:col-span-3 space-y-2.5">
            <h4 className="font-serif text-xs font-bold uppercase tracking-wider text-white">
              Navegação
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <Link href="/#player" className="text-stone-400 hover:text-amber-300 transition-colors">
                  Player Ao Vivo
                </Link>
              </li>
              <li>
                <Link href="/#sobre" className="text-stone-400 hover:text-amber-300 transition-colors">
                  Sobre a Rádio
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-stone-400 hover:text-amber-300 transition-colors">
                  Fale Conosco
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Email Only */}
          <div className="md:col-span-4 space-y-2.5">
            <h4 className="font-serif text-xs font-bold uppercase tracking-wider text-white">
              Contato Oficial
            </h4>
            <p className="text-xs text-stone-400 font-light">
              Dúvidas, pedidos musicais e mensagens:
            </p>

            <a
              href={`mailto:${RADIO_CONFIG.contactEmail}`}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-stone-900 hover:bg-stone-800 text-amber-300 border border-amber-500/30 hover:border-amber-500 text-xs font-mono font-medium transition-all group"
            >
              <Mail className="size-3.5 text-amber-400 group-hover:scale-110 transition-transform" />
              <span>{RADIO_CONFIG.contactEmail}</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-stone-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500 font-light">
          <p>
            © {new Date().getFullYear()} {RADIO_CONFIG.name}. Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-4">
            <span className="text-amber-400 font-medium">
              &ldquo;É uma brasa, mora!&rdquo;
            </span>
            <button
              onClick={scrollToTop}
              aria-label="Voltar ao topo"
              className="p-1.5 rounded-lg bg-stone-900 hover:bg-stone-800 text-stone-300 hover:text-amber-300 border border-stone-800 transition-colors cursor-pointer"
            >
              <ArrowUp className="size-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
