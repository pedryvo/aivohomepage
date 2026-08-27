"use client";

import React from "react";
import { GENRE_HIGHLIGHTS } from "@/lib/radio-config";
import { Music, Sparkles, Play, Flame, Disc } from "lucide-react";
import { useAudio } from "@/lib/audio-context";

export function Genres() {
  const { isPlaying, togglePlay } = useAudio();

  return (
    <section id="generos" className="py-20 md:py-28 bg-[#0c0a09] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-4">
            <Flame className="size-3.5 text-orange-400 fill-orange-400" />
            <span>O Fenômeno Musical dos Anos 60</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Os Pilares da Jovem Guarda
          </h2>
          <p className="mt-4 text-stone-400 text-base sm:text-lg font-light leading-relaxed">
            Das tardes históricas no Teatro Record aos bailes de garagem que sacudiram a juventude brasileira. Conheça as vertentes do nosso acervo.
          </p>
        </div>

        {/* Genres Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {GENRE_HIGHLIGHTS.map((genre, idx) => (
            <div
              key={genre.title}
              className="relative rounded-3xl bg-gradient-to-br from-[#181410] to-[#110e0c] border border-amber-900/30 p-7 sm:p-8 hover:border-amber-500/40 transition-all duration-300 shadow-xl group overflow-hidden"
            >
              {/* Background gradient subtle glow */}
              <div
                className={`absolute -right-10 -bottom-10 size-48 rounded-full bg-gradient-to-br ${genre.gradient} blur-3xl opacity-30 group-hover:opacity-60 transition-opacity pointer-events-none`}
              />

              <div className="relative z-10 flex flex-col justify-between h-full space-y-6">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                      {genre.period}
                    </span>
                    <span className="text-stone-500 font-serif text-sm font-semibold">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-white group-hover:text-amber-300 transition-colors">
                    {genre.title}
                  </h3>

                  <p className="text-sm text-stone-300 mt-2.5 leading-relaxed font-light">
                    {genre.description}
                  </p>
                </div>

                {/* Artists list */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400/90 mb-2.5 flex items-center gap-1.5">
                    <Sparkles className="size-3 text-amber-400" />
                    <span>Ídolos & Bandas Imortais:</span>
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {genre.artists.map((artist) => (
                      <span
                        key={artist}
                        className="text-xs px-3 py-1 rounded-xl bg-stone-900/90 text-amber-100 border border-stone-800 group-hover:border-amber-900/40 transition-colors font-medium"
                      >
                        {artist}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Card Action */}
                <div className="pt-3 border-t border-stone-800/80 flex items-center justify-between">
                  <span className="text-xs text-stone-400 font-medium">
                    Sucessos que marcaram época
                  </span>
                  <button
                    onClick={togglePlay}
                    className="flex items-center gap-1.5 text-xs font-bold text-amber-400 group-hover:text-amber-300 transition-colors cursor-pointer"
                  >
                    <Play className="size-3.5 fill-current" />
                    <span>{isPlaying ? "Tocando no Ar" : "Sintonizar no Player"}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
