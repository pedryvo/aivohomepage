"use client";

import React, { useState } from "react";
import { Music, Send, Sparkles, Heart, Check, Copy, Mail } from "lucide-react";
import { RADIO_CONFIG } from "@/lib/radio-config";

export function SongRequest() {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [song, setSong] = useState("");
  const [artist, setArtist] = useState("");
  const [dedication, setDedication] = useState("");
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!song) return;

    const subject = encodeURIComponent(
      `[Pedido Musical] ${song} - ${artist || "Artista"} | ${name || "Ouvinte"}`
    );
    const body = encodeURIComponent(
      `Olá, Rádio Doces Memórias!\n\n` +
      `Gostaria de pedir uma música na programação:\n\n` +
      `🎵 Música: ${song}\n` +
      `🎤 Artista: ${artist || "Não especificado"}\n` +
      `👤 Nome do Ouvinte: ${name || "Anônimo"}\n` +
      `📍 Cidade/Estado: ${city || "Não informada"}\n` +
      `💌 Dedicatória/Mensagem: ${dedication || "Sem dedicatória"}\n\n` +
      `Muito obrigado pela companhia inesquecível!`
    );

    window.location.href = `mailto:${RADIO_CONFIG.contactEmail}?subject=${subject}&body=${body}`;
  };

  const handleCopy = () => {
    const text =
      `Pedido Musical - Rádio Doces Memórias\n` +
      `Música: ${song || "(não preenchido)"}\n` +
      `Artista: ${artist || "(não preenchido)"}\n` +
      `Nome: ${name || "(não preenchido)"}\n` +
      `Cidade: ${city || "(não preenchido)"}\n` +
      `Dedicatória: ${dedication || "(não preenchido)"}\n` +
      `Enviar para: ${RADIO_CONFIG.contactEmail}`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="pedir-musica"
      className="py-20 md:py-28 bg-[#0c0a09] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Info & Story */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold uppercase tracking-wider">
              <Heart className="size-3.5 text-rose-400" />
              <span>Interação & Participação</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              Peça a sua música inesquecível
            </h2>

            <p className="text-stone-300 text-base sm:text-lg leading-relaxed font-light">
              Tem alguma canção especial que marcou seu primeiro amor, sua infância ou um momento único em família? Conte para nós e nós a tocaremos para você!
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 text-stone-300 text-sm font-light">
                <Sparkles className="size-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <span>Envie sua dedicatória para homenagear quem você ama no ar.</span>
              </div>
              <div className="flex items-start gap-3 text-stone-300 text-sm font-light">
                <Music className="size-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <span>Sugira raridades e pérolas da MPB ou do flashback que você não ouve há anos.</span>
              </div>
              <div className="flex items-start gap-3 text-stone-300 text-sm font-light">
                <Mail className="size-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <span>Mensagens recebidas diretamente no e-mail: <strong className="text-amber-300">{RADIO_CONFIG.contactEmail}</strong>.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Song Request Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-gradient-to-b from-[#181410] to-[#120f0d] border border-amber-900/30 p-6 sm:p-8 md:p-10 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-stone-300 mb-1.5">
                      Seu Nome
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ex: Maria das Graças"
                      className="w-full px-4 py-3 rounded-xl bg-[#0e0c0a] border border-stone-800 focus:border-amber-500 text-stone-100 text-sm placeholder:text-stone-600 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-stone-300 mb-1.5">
                      Sua Cidade / Estado
                    </label>
                    <input
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="Ex: Salvador, BA"
                      className="w-full px-4 py-3 rounded-xl bg-[#0e0c0a] border border-stone-800 focus:border-amber-500 text-stone-100 text-sm placeholder:text-stone-600 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-stone-300 mb-1.5">
                      Nome da Música <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={song}
                      onChange={(e) => setSong(e.target.value)}
                      placeholder="Ex: Como é Grande o Meu Amor por Você"
                      className="w-full px-4 py-3 rounded-xl bg-[#0e0c0a] border border-stone-800 focus:border-amber-500 text-stone-100 text-sm placeholder:text-stone-600 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-stone-300 mb-1.5">
                      Artista / Cantor(a)
                    </label>
                    <input
                      type="text"
                      value={artist}
                      onChange={(e) => setArtist(e.target.value)}
                      placeholder="Ex: Roberto Carlos"
                      className="w-full px-4 py-3 rounded-xl bg-[#0e0c0a] border border-stone-800 focus:border-amber-500 text-stone-100 text-sm placeholder:text-stone-600 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-300 mb-1.5">
                    Dedicatória ou Mensagem Especial (opcional)
                  </label>
                  <textarea
                    rows={3}
                    value={dedication}
                    onChange={(e) => setDedication(e.target.value)}
                    placeholder="Ex: Quero dedicar essa música ao meu esposo pelo nosso aniversário de 30 anos de casamento..."
                    className="w-full px-4 py-3 rounded-xl bg-[#0e0c0a] border border-stone-800 focus:border-amber-500 text-stone-100 text-sm placeholder:text-stone-600 focus:outline-none transition-colors resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold text-sm shadow-lg shadow-amber-500/25 transition-all cursor-pointer"
                  >
                    <Send className="size-4" />
                    <span>Enviar Pedido por E-mail</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleCopy}
                    className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-stone-300 hover:text-white border border-stone-800 text-sm font-medium transition-all"
                  >
                    {copied ? <Check className="size-4 text-green-400" /> : <Copy className="size-4 text-amber-400" />}
                    <span>{copied ? "Copiado!" : "Copiar Texto"}</span>
                  </button>
                </div>

                <p className="text-[11px] text-center text-stone-500 pt-1">
                  Seu pedido será enviado diretamente para <strong className="text-stone-400">{RADIO_CONFIG.contactEmail}</strong>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
