"use client";

import React, { useState } from "react";
import { Mail, Copy, Check, Send } from "lucide-react";
import { RADIO_CONFIG } from "@/lib/radio-config";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(RADIO_CONFIG.contactEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contato" className="py-16 md:py-24 bg-[#100e0b] relative overflow-hidden border-t border-stone-900">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-4">
            <Mail className="size-3.5" />
            <span>Canal Oficial de Atendimento</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Fale Conosco
          </h2>
          <p className="mt-3 text-stone-400 text-sm sm:text-base font-light leading-relaxed">
            Dúvidas, pedidos musicais, sugestões ou parcerias? Nosso canal de atendimento é exclusivamente pelo e-mail abaixo.
          </p>
        </div>

        {/* Main Email Card Highlight */}
        <div className="rounded-3xl bg-gradient-to-b from-[#1c1815] to-[#120f0d] border-2 border-amber-500/30 p-8 sm:p-10 md:p-12 text-center shadow-2xl relative overflow-hidden">
          <div className="size-14 sm:size-16 rounded-2xl bg-gradient-to-tr from-amber-600 to-yellow-400 p-[2px] mx-auto mb-5 shadow-lg shadow-amber-500/20">
            <div className="size-full bg-[#16120e] rounded-[14px] flex items-center justify-center text-amber-400">
              <Mail className="size-7 sm:size-8" />
            </div>
          </div>

          <span className="text-xs font-bold uppercase tracking-widest text-amber-400/90 block mb-2">
            Endereço de E-mail Oficial
          </span>

          {/* Email Address Highlight with Copy Button */}
          <div className="inline-flex flex-wrap items-center justify-center gap-3 bg-[#0d0b09] px-6 py-4 rounded-2xl border border-amber-500/40 shadow-inner max-w-full my-3">
            <span className="font-mono text-xl sm:text-2xl md:text-3xl font-bold text-amber-300 tracking-tight break-all">
              {RADIO_CONFIG.contactEmail}
            </span>

            <button
              onClick={handleCopyEmail}
              aria-label="Copiar endereço de e-mail"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs font-bold transition-all cursor-pointer flex-shrink-0"
            >
              {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
              <span>{copied ? "Copiado!" : "Copiar"}</span>
            </button>
          </div>

          <p className="text-xs sm:text-sm text-stone-400 max-w-md mx-auto mt-4 font-light leading-relaxed">
            Clique no botão acima para copiar o e-mail ou envie diretamente pelo seu gerenciador de e-mails.
          </p>

          <div className="flex justify-center mt-6">
            <a
              href={`mailto:${RADIO_CONFIG.contactEmail}`}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold text-sm shadow-lg shadow-amber-500/25 transition-all hover:scale-105 cursor-pointer"
            >
              <Send className="size-4" />
              <span>Enviar E-mail para {RADIO_CONFIG.contactEmail}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
