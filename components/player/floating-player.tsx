"use client";

import React, { useState, useEffect } from "react";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Volume1,
  X,
  Disc,
} from "lucide-react";
import { useAudio } from "@/lib/audio-context";
import { RADIO_CONFIG } from "@/lib/radio-config";

export function FloatingPlayer() {
  const {
    isPlaying,
    isLoading,
    isMuted,
    volume,
    programTitle,
    togglePlay,
    setVolume,
    toggleMute,
  } = useAudio();

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 380) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <aside
      aria-label="Controles da rádio ao vivo"
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-xl z-40 animate-in slide-in-from-bottom duration-300"
    >
      <div className="bg-[#16120e]/95 backdrop-blur-md border border-amber-500/30 rounded-2xl shadow-2xl shadow-black/80 p-3 sm:p-4 text-stone-100">
        <div className="flex items-center justify-between gap-3">
          {/* Vinyl & Show Info */}
          <div className="flex items-center gap-3 min-w-0">
            <div className="relative size-11 rounded-full bg-stone-900 border border-amber-500/40 p-1 flex-shrink-0 flex items-center justify-center">
              <Disc
                className={`size-full text-amber-400 ${
                  isPlaying ? "animate-spin-slow" : ""
                }`}
              />
              {isPlaying && (
                <span className="absolute -top-0.5 -right-0.5 size-3 bg-red-500 rounded-full border border-[#16120e] animate-pulse" />
              )}
            </div>

            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-red-400 bg-red-500/15 px-1.5 py-0.5 rounded">
                  AO VIVO
                </span>
                <span className="text-xs font-semibold text-white truncate">
                  {RADIO_CONFIG.name}
                </span>
              </div>
              <p className="text-[11px] text-amber-200/80 truncate font-medium">
                {programTitle}
              </p>
            </div>
          </div>

          {/* Equalizer mini visualizer */}
          {isPlaying && (
            <div className="hidden md:flex items-end gap-1 h-5 px-2">
              <span className="w-1 bg-amber-400 rounded-full eq-bar-1" />
              <span className="w-1 bg-amber-400 rounded-full eq-bar-3" />
              <span className="w-1 bg-amber-400 rounded-full eq-bar-5" />
              <span className="w-1 bg-amber-400 rounded-full eq-bar-2" />
            </div>
          )}

          {/* Controls */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            {/* Volume slider (desktop) */}
            <div className="hidden sm:flex items-center gap-1.5 bg-stone-900/80 px-2 py-1.5 rounded-xl border border-stone-800">
              <button
                onClick={toggleMute}
                aria-label={isMuted ? "Ativar som" : "Desativar som"}
                className="text-stone-300 hover:text-amber-400 p-0.5"
              >
                {isMuted || volume === 0 ? (
                  <VolumeX className="size-4" />
                ) : volume < 0.5 ? (
                  <Volume1 className="size-4 text-amber-400" />
                ) : (
                  <Volume2 className="size-4 text-amber-400" />
                )}
              </button>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={isMuted ? 0 : volume}
                onChange={(e) => setVolume(parseFloat(e.target.value))}
                className="w-16 h-1 bg-stone-700 rounded-lg appearance-none cursor-pointer"
                aria-label="Volume"
              />
            </div>

            {/* Play/Pause Button */}
            <button
              onClick={togglePlay}
              aria-label={isPlaying ? "Pausar rádio" : "Ouvir rádio"}
              className="flex items-center justify-center size-10 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold shadow-lg shadow-amber-500/20 hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              {isLoading ? (
                <span className="size-4 border-2 border-stone-950 border-t-transparent rounded-full animate-spin"></span>
              ) : isPlaying ? (
                <Pause className="size-4 fill-current" />
              ) : (
                <Play className="size-4 fill-current ml-0.5" />
              )}
            </button>

            {/* Close floating player */}
            <button
              onClick={() => setVisible(false)}
              aria-label="Fechar player flutuante"
              className="text-stone-400 hover:text-white p-1 rounded-lg hover:bg-stone-800 transition-colors"
            >
              <X className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
