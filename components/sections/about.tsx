"use client";

import React from "react";
import Link from "next/link";
import { Radio, Disc, Heart, Sparkles, Music2, Clock, Flame, Mail } from "lucide-react";
import { RADIO_CONFIG } from "@/lib/radio-config";

export function About() {
  const pillars = [
    {
      icon: Flame,
      title: "100% Iê-Iê-Iê Autêntico",
      description:
        "Do Calhambeque de Roberto Carlos à Ternurinha de Wanderléa e às composições viscerais do Tremendão Erasmo. O acervo mais completo da Jovem Guarda.",
    },
    {
      icon: Disc,
      title: "Os Grandes Bailes de Garagem",
      description:
        "Os solos de guitarra marcantes de The Fevers, Renato e Seus Blue Caps, Os Incríveis e Golden Boys que embalavam as noites dos anos 60.",
    },
    {
      icon: Clock,
      title: "Companhia 24 Horas",
      description:
        "Transmissão ininterrupta com fidelidade sonora estéreo para você reviver a época de ouro onde estiver.",
    },
    {
      icon: Heart,
      title: "Memória Afetiva & Juventude",
      description:
        "A moda, as gírias ('É uma brasa, mora!'), o romantismo ingênuo e os primeiros amores que marcaram para sempre a história do Brasil.",
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
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider">
              <Flame className="size-3.5 text-orange-400 fill-orange-400" />
              <span>O Movimento Que Mudou o Brasil</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              A história da Jovem Guarda preservada com carinho
            </h2>

            <p className="text-stone-300 text-base sm:text-lg leading-relaxed font-light">
              Em meados dos anos 1960, as tardes de domingo na TV Record ganharam um novo ritmo com <strong className="text-amber-300 font-semibold">Roberto Carlos, Erasmo Carlos e Wanderléa</strong>. Surgia ali a <strong className="text-amber-300 font-semibold">Jovem Guarda</strong>: guitarras elétricas afinadas, jaquetas estilosas, calhambeques velozes e canções que viraram hinos da juventude.
            </p>

            <p className="text-stone-400 text-sm sm:text-base leading-relaxed font-light">
              A <strong className="text-white font-medium">{RADIO_CONFIG.name}</strong> é uma homenagem permanente a esse período inesquecível. Aqui, cada compacto raro, cada versão antológica e cada balada romântica dos ídolos do Iê-Iê-Iê voltam a tocar com a mesma emoção dos bailinhos de antigamente.
            </p>

            {/* Quote block */}
            <div className="p-5 rounded-2xl bg-[#16120e] border-l-4 border-amber-500 text-stone-200 shadow-md">
              <p className="italic font-serif text-base sm:text-lg text-amber-100/90">
                &ldquo;É uma brasa, mora! Mais que música, a Jovem Guarda foi a trilha sonora dos nossos melhores sorrisos e dos nossos primeiros amores.&rdquo;
              </p>
              <span className="block mt-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
                — Rádio Doces Memórias • Jovem Guarda Brasil
              </span>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/contato"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-sm shadow-lg shadow-amber-500/20 transition-all hover:scale-105 cursor-pointer"
              >
                <Mail className="size-4" />
                <span>Contato ({RADIO_CONFIG.contactEmail})</span>
              </Link>
              <Link
                href="/#player"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-stone-900 hover:bg-stone-800 text-stone-300 hover:text-white border border-stone-800 text-sm font-medium transition-all"
              >
                <span>Ouvir a Rádio Agora</span>
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
