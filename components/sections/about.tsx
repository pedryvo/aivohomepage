"use client";

import React from "react";
import Link from "next/link";
import { Radio, Disc, Heart, Sparkles, Music2, Clock, ShieldCheck, Mail } from "lucide-react";
import { RADIO_CONFIG } from "@/lib/radio-config";

export function About() {
  const pillars = [
    {
      icon: Disc,
      title: "Curadoria Nostálgica",
      description:
        "Cada canção é garimpada com carinho: os clássicos dos anos 60, 70, 80 e 90, o melhor da MPB de raiz e baladas românticas inesquecíveis.",
    },
    {
      icon: Sparkles,
      title: "Som Puro & Remasterizado",
      description:
        "Transmissão digital estéreo de alta fidelidade que preserva o calor, a dinâmica e a emoção dos arranjos originais.",
    },
    {
      icon: Clock,
      title: "Companhia 24 Horas",
      description:
        "Esteja você trabalhando, descansando, cozinhando com a família ou relembrando o passado, nossa rádio está sempre com você.",
    },
    {
      icon: Heart,
      title: "Feita por Quem Ama Música",
      description:
        "Um projeto dedicado a manter vivas as memórias afetivas, as poesias cantadas e os grandes ídolos da história da música.",
    },
  ];

  return (
    <section id="sobre" className="py-20 md:py-28 bg-[#0e0c0a] relative overflow-hidden border-t border-stone-900">
      {/* Background glow */}
      <div className="absolute -top-40 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 left-0 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column - Story */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold uppercase tracking-wider">
              <Radio className="size-3.5" />
              <span>Nossa História & Propósito</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              Onde o passado ganha vida através da música
            </h2>

            <p className="text-stone-300 text-base sm:text-lg leading-relaxed font-light">
              A <strong className="text-amber-300 font-semibold">{RADIO_CONFIG.name}</strong> nasceu do amor genuíno pelas melodias que atravessam gerações. Acreditamos que a música tem o poder único de nos transportar instantaneamente para momentos felizes, pessoas queridas e lugares especiais.
            </p>

            <p className="text-stone-400 text-sm sm:text-base leading-relaxed font-light">
              Nossa programação é desenhada como um refúgio acolhedor contra o ritmo acelerado do dia a dia. Aqui, você encontra serestas, boleros, MPB de ouro, Bossa Nova, temas de novelas que marcaram o Brasil e o melhor do flashback internacional.
            </p>

            {/* Quote block */}
            <div className="p-5 rounded-2xl bg-[#16120e] border-l-4 border-amber-500 text-stone-200">
              <p className="italic font-serif text-base sm:text-lg text-amber-100/90">
                &ldquo;Relembrar é viver duas vezes. A música é o fio invisível que costura nossas melhores memórias.&rdquo;
              </p>
              <span className="block mt-2 text-xs font-semibold text-amber-400 uppercase tracking-wider">
                — Equipe Rádio Doces Memórias
              </span>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/contato"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-sm shadow-lg shadow-amber-500/20 transition-all hover:scale-105 cursor-pointer"
              >
                <Mail className="size-4" />
                <span>Fale Conosco ({RADIO_CONFIG.contactEmail})</span>
              </Link>
              <Link
                href="/#player"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-stone-900 hover:bg-stone-800 text-stone-300 hover:text-white border border-stone-800 text-sm font-medium transition-all"
              >
                <span>Ouvir ao Vivo Agora</span>
              </Link>
            </div>
          </div>

          {/* Right Column - Pillars Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="bg-[#14110e] border border-amber-900/20 hover:border-amber-500/40 rounded-3xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/5 group"
                >
                  <div className="size-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-stone-950 transition-all mb-4">
                    <Icon className="size-6" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-400 mt-2 leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
