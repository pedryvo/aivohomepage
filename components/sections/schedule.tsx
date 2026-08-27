"use client";

import React from "react";
import { DAILY_SCHEDULE } from "@/lib/radio-config";
import { useAudio } from "@/lib/audio-context";
import {
  Clock,
  Radio,
  Sparkles,
  Play,
  Pause,
  Moon,
  Sun,
  Heart,
  Coffee,
  Disc,
} from "lucide-react";

export function Schedule() {
  const { currentProgram, isPlaying, togglePlay } = useAudio();

  const getProgramIcon = (iconName: string) => {
    switch (iconName) {
      case "Moon":
        return Moon;
      case "Sun":
        return Sun;
      case "Heart":
        return Heart;
      case "Coffee":
        return Coffee;
      case "Disc":
        return Disc;
      case "Sparkles":
        return Sparkles;
      default:
        return Radio;
    }
  };

  return (
    <section
      id="programacao"
      className="py-20 md:py-28 bg-[#100e0b] relative overflow-hidden border-t border-stone-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Clock className="size-3.5" />
            <span>Grade Semanal & Diária</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Programação 24 Horas
          </h2>
          <p className="mt-4 text-stone-400 text-base sm:text-lg font-light">
            Acompanhe nossa grade contínua de atrações, cuidadosamente pensada para cada momento do seu dia e da sua noite.
          </p>
        </div>

        {/* Schedule List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {DAILY_SCHEDULE.map((item) => {
            const isCurrent = currentProgram.id === item.id;
            const Icon = getProgramIcon(item.iconName);

            return (
              <div
                key={item.id}
                className={`relative rounded-2xl p-5 sm:p-6 transition-all duration-300 ${
                  isCurrent
                    ? "bg-gradient-to-r from-[#221b14] via-[#1c1611] to-[#16120e] border-2 border-amber-500/60 shadow-xl shadow-amber-500/10"
                    : "bg-[#14110e] border border-stone-800/80 hover:border-stone-700"
                }`}
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  {/* Left: Time & Icon & Details */}
                  <div className="flex items-start gap-4">
                    <div
                      className={`size-12 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform ${
                        isCurrent
                          ? "bg-amber-500 text-stone-950 shadow-md shadow-amber-500/30 scale-105"
                          : "bg-stone-900 text-amber-400 border border-stone-800"
                      }`}
                    >
                      <Icon className="size-6" />
                    </div>

                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-mono text-xs sm:text-sm font-bold text-amber-400">
                          {item.time}
                        </span>
                        {isCurrent && (
                          <span className="flex items-center gap-1 text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-red-500/20 text-red-400 border border-red-500/40">
                            <span className="size-1.5 rounded-full bg-red-500 animate-pulse"></span>
                            NO AR AGORA
                          </span>
                        )}
                      </div>

                      <h3 className="font-serif text-lg sm:text-xl font-bold text-white">
                        {item.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-light max-w-xl">
                        {item.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-stone-900/80 text-stone-400 border border-stone-800"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right: Action */}
                  <div className="self-end sm:self-center flex-shrink-0">
                    {isCurrent ? (
                      <button
                        onClick={togglePlay}
                        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs shadow-md shadow-amber-500/20 transition-all cursor-pointer"
                      >
                        {isPlaying ? (
                          <>
                            <Pause className="size-3.5 fill-current" />
                            <span>Pausar</span>
                          </>
                        ) : (
                          <>
                            <Play className="size-3.5 fill-current ml-0.5" />
                            <span>Ouvir no Ar</span>
                          </>
                        )}
                      </button>
                    ) : (
                      <span className="text-xs text-stone-500 font-medium hidden sm:inline-block">
                        Diariamente
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
