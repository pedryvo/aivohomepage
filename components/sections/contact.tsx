"use client";

import React, { useState } from "react";
import { Mail, Copy, Check, Send, Sparkles, MessageSquare, Radio, Heart, Flame } from "lucide-react";
import { RADIO_CONFIG } from "@/lib/radio-config";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [senderName, setSenderName] = useState("");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(RADIO_CONFIG.contactEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const mailSubject = encodeURIComponent(
      subject || `[Contato Jovem Guarda] Rádio Doces Memórias - ${senderName || "Ouvinte"}`
    );
    const mailBody = encodeURIComponent(
      `Olá, equipe da Rádio Doces Memórias (Jovem Guarda)!\n\n` +
      `Nome: ${senderName || "Não informado"}\n\n` +
      `Mensagem:\n${message || "Olá, gostaria de entrar em contato com a rádio da Jovem Guarda."}\n\n` +
      `É uma brasa, mora!`
    );
    window.location.href = `mailto:${RADIO_CONFIG.contactEmail}?subject=${mailSubject}&body=${mailBody}`;
  };

  return (
    <section id="contato" className="py-20 md:py-28 bg-[#100e0b] relative overflow-hidden border-t border-stone-900">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-4">
            <Mail className="size-3.5" />
            <span>Canal Oficial de Atendimento</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Fale com a Rádio da Jovem Guarda
          </h2>
          <p className="mt-4 text-stone-400 text-base sm:text-lg font-light leading-relaxed">
            Dúvidas, sugestões de compactos da Jovem Guarda, mensagens de brotos e parcerias culturais. Nosso contato é exclusivo pelo e-mail abaixo.
          </p>
        </div>

        {/* Contact Card Container */}
        <div className="max-w-4xl mx-auto">
          {/* Main Email Hero Highlight */}
          <div className="rounded-3xl bg-gradient-to-b from-[#1c1815] to-[#120f0d] border-2 border-amber-500/30 p-8 sm:p-10 md:p-12 text-center shadow-2xl relative overflow-hidden mb-8">
            <div className="size-16 sm:size-20 rounded-3xl bg-gradient-to-tr from-amber-600 to-yellow-400 p-[2px] mx-auto mb-6 shadow-lg shadow-amber-500/20">
              <div className="size-full bg-[#16120e] rounded-[22px] flex items-center justify-center text-amber-400">
                <Mail className="size-8 sm:size-10" />
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

            <p className="text-sm text-stone-400 max-w-xl mx-auto mt-4 font-light leading-relaxed">
              Clique para copiar o e-mail ou utilize o botão abaixo para abrir diretamente o seu aplicativo de mensagens.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
              <a
                href={`mailto:${RADIO_CONFIG.contactEmail}`}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold text-sm shadow-lg shadow-amber-500/25 transition-all hover:scale-105 cursor-pointer"
              >
                <Send className="size-4" />
                <span>Enviar E-mail Agora ({RADIO_CONFIG.contactEmail})</span>
              </a>
            </div>
          </div>

          {/* Quick Message Composer Form */}
          <div className="rounded-3xl bg-[#14110e] border border-stone-800/80 p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="size-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400">
                <MessageSquare className="size-5" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-white">
                  Envie sua Mensagem de Broto
                </h3>
                <p className="text-xs text-stone-400 font-light">
                  Preencha os campos e nós abriremos seu e-mail pronto para envio direto a {RADIO_CONFIG.contactEmail}.
                </p>
              </div>
            </div>

            <form onSubmit={handleSendEmail} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-300 mb-1.5">
                    Seu Nome
                  </label>
                  <input
                    type="text"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="Seu nome completo"
                    className="w-full px-4 py-3 rounded-xl bg-[#0c0a09] border border-stone-800 focus:border-amber-500 text-stone-100 text-sm placeholder:text-stone-600 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-300 mb-1.5">
                    Assunto
                  </label>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Ex: Sugestão de Compacto Raro / Mensagem aos Ouvintes"
                    className="w-full px-4 py-3 rounded-xl bg-[#0c0a09] border border-stone-800 focus:border-amber-500 text-stone-100 text-sm placeholder:text-stone-600 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-300 mb-1.5">
                  Mensagem
                </label>
                <textarea
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Escreva sua mensagem com carinho sobre a Jovem Guarda..."
                  className="w-full px-4 py-3 rounded-xl bg-[#0c0a09] border border-stone-800 focus:border-amber-500 text-stone-100 text-sm placeholder:text-stone-600 focus:outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-sm shadow-md transition-all cursor-pointer"
              >
                <Send className="size-4" />
                <span>Abrir E-mail e Enviar para {RADIO_CONFIG.contactEmail}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
