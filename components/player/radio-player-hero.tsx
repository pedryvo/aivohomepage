"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Volume1,
  Radio,
  Share2,
  Heart,
  Music,
  Users,
  Check,
  Headphones,
  Signal,
  Flame,
  Mail,
} from "lucide-react";
import { useAudio } from "@/lib/audio-context";
import { RADIO_CONFIG } from "@/lib/radio-config";

export function RadioPlayerHero() {
  const {
    isPlaying,
    isLoading,
    isMuted,
    volume,
    error,
    programTitle,
    programDescription,
    togglePlay,
    setVolume,
    toggleMute,
    listenerCount,
  } = useAudio();

  const [copied, setCopied] = useState(false);
  const [liked, setLiked] = useState(false);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Rádio Doces Memórias - 100% Jovem Guarda",
          text: "É uma brasa, mora! Estou ouvindo a Rádio Doces Memórias, a rádio oficial da Jovem Guarda e do Iê-Iê-Iê!",
          url: window.location.href,
        });
      } catch {
        // User cancelled share
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const renderVolumeIcon = () => {
    if (isMuted || volume === 0) return <VolumeX className="size-5 text-stone-400" />;
    if (volume < 0.5) return <Volume1 className="size-5 text-amber-400" />;
    return <Volume2 className="size-5 text-amber-400" />;
  };

  return (
    <section
      id="player"
      className="relative pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden bg-gradient-to-b from-[#0c0a09] via-[#15110d] to-[#0c0a09]"
    >
      {/* Background ambient lighting effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[450px] bg-amber-500/10 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-10 w-[300px] h-[300px] bg-orange-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-10 w-[350px] h-[350px] bg-amber-700/10 rounded-full blur-[110px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Partner Banner Radios.com.br */}
        <div className="flex flex-col items-center justify-center mb-6">
          <a
            href="https://www.radios.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="group block transition-all hover:scale-105 active:scale-95"
            title="Ouça a Rádio Doces Memórias no Radios.com.br"
          >
            <div className="p-1 sm:p-1.5 rounded-2xl bg-stone-900/90 border border-amber-500/30 group-hover:border-amber-400/80 shadow-2xl shadow-black/80 transition-all">
              <img
                src="https://img.radios.com.br/divulgue/banner/2025/300x100/300x100_frase1@2x.png"
                alt="Ouça no Radios.com.br - Rádio Doces Memórias"
                width={300}
                height={100}
                className="h-14 sm:h-20 w-auto rounded-xl object-contain"
              />
            </div>
          </a>
          <span className="text-[10px] text-amber-300/60 mt-1.5 font-medium uppercase tracking-wider">
            Sintonize também no Radios.com.br
          </span>
        </div>

        {/* Header Title Section */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <Flame className="size-3.5 text-orange-400 fill-orange-400" />
            <span>&ldquo;É uma brasa, mora!&rdquo; • 100% Jovem Guarda</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Rádio <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500">Doces Memórias</span>
          </h1>

          <p className="mt-3 text-sm sm:text-base lg:text-lg text-stone-300 font-light leading-relaxed max-w-2xl mx-auto">
            A trilha sonora da era de ouro do rock brasileiro. O melhor do Iê-Iê-Iê, Roberto, Erasmo, Wanderléa e os bailes dos anos 60 ao vivo 24 horas por dia.
          </p>
        </div>

        {/* Main Player Console Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl bg-gradient-to-b from-[#1c1815] to-[#120f0d] border border-amber-900/40 p-6 sm:p-8 md:p-10 shadow-2xl shadow-black/80 backdrop-blur-xl">
            {/* Top Bar of the Player */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-stone-800/80">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/15 border border-red-500/30">
                  <span className="size-2 rounded-full bg-red-500 animate-pulse"></span>
                  <span className="text-xs font-bold uppercase tracking-wider text-red-400">
                    No Ar • 24 Horas
                  </span>
                </div>
                <span className="text-xs font-semibold text-amber-400/90 hidden sm:inline-block">
                  {RADIO_CONFIG.frequencyLabel}
                </span>
              </div>

              <div className="flex items-center gap-4 text-xs text-stone-400">
                <div className="flex items-center gap-1.5 text-amber-300/80 bg-amber-950/40 px-2.5 py-1 rounded-full border border-amber-900/40">
                  <Signal className="size-3.5 text-amber-400" />
                  <span>{RADIO_CONFIG.bitrate}</span>
                </div>
                <div className="flex items-center gap-1.5 text-stone-300">
                  <Users className="size-3.5 text-amber-400" />
                  <span>{listenerCount} ouvintes agora</span>
                </div>
              </div>
            </div>

            {/* Middle Section: Vinyl & Interactive Player Core */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center my-8">
              {/* Vinyl Record Visual */}
              <div className="md:col-span-5 flex justify-center">
                <div className="relative size-48 sm:size-60 rounded-full flex items-center justify-center p-2 shadow-2xl shadow-black">
                  {/* Vinyl Disc Body with Grooves */}
                  <div
                    className={`size-full rounded-full vinyl-grooves border-4 border-stone-800/80 flex items-center justify-center relative shadow-inner ${
                      isPlaying ? "animate-spin-slow" : ""
                    }`}
                  >
                    {/* Vinyl Groove Rings */}
                    <div className="size-4/5 rounded-full border border-stone-700/30 flex items-center justify-center">
                      <div className="size-3/4 rounded-full border border-stone-700/20 flex items-center justify-center">
                        <div className="size-3/5 rounded-full border border-stone-700/40 flex items-center justify-center">
                          {/* Center Vinyl Label */}
                          <div className="size-20 sm:size-24 rounded-full bg-gradient-to-tr from-amber-700 via-amber-600 to-yellow-500 p-1 flex items-center justify-center shadow-lg">
                            <div className="size-full bg-[#16120e] rounded-full flex flex-col items-center justify-center text-center p-1 border border-amber-400/40">
                              <Radio className="size-4 sm:size-5 text-amber-400 mb-0.5" />
                              <span className="font-serif text-[8px] sm:text-[9px] font-extrabold text-amber-300 tracking-wider leading-none">
                                JOVEM GUARDA
                              </span>
                              <span className="font-serif text-[7px] sm:text-[8px] font-medium text-amber-200/80 uppercase">
                                Doces Memórias
                              </span>
                              <div className="size-2 rounded-full bg-[#0c0a09] mt-1 border border-stone-600"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {isPlaying && (
                    <div className="absolute inset-0 rounded-full border border-amber-500/40 animate-ping pointer-events-none opacity-30"></div>
                  )}
                </div>
              </div>

              {/* Program & Controls Information */}
              <div className="md:col-span-7 space-y-5 text-left">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-md border border-amber-500/20">
                      Transmissão Contínua • 24 Horas
                    </span>
                  </div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    {programTitle}
                  </h2>
                  <p className="text-xs sm:text-sm text-stone-300 mt-2 leading-relaxed font-light">
                    {programDescription}
                  </p>
                </div>

                {/* Equalizer Visualizer Spectrum */}
                <div className="bg-[#120f0d]/90 rounded-2xl p-4 border border-stone-800/90 flex flex-col gap-2">
                  <div className="flex items-center justify-between text-xs text-stone-400">
                    <span className="flex items-center gap-1.5">
                      <Headphones className="size-3.5 text-amber-400" />
                      <span>{isPlaying ? "Transmitindo Áudio HD (128kbps)" : "Pronto para sintonizar"}</span>
                    </span>
                    <span className="text-amber-400/80 font-mono text-[11px]">
                      {isPlaying ? "NO AR" : "PAUSADO"}
                    </span>
                  </div>

                  {/* Frequency Spectrum Bars */}
                  <div className="flex items-end justify-between gap-1 h-10 pt-1 px-1 bg-black/40 rounded-xl border border-stone-900">
                    {[
                      "eq-bar-1", "eq-bar-2", "eq-bar-3", "eq-bar-4", "eq-bar-5",
                      "eq-bar-2", "eq-bar-4", "eq-bar-1", "eq-bar-3", "eq-bar-5",
                      "eq-bar-3", "eq-bar-1", "eq-bar-4", "eq-bar-2", "eq-bar-5",
                      "eq-bar-2", "eq-bar-3", "eq-bar-1", "eq-bar-5", "eq-bar-4",
                    ].map((animClass, idx) => (
                      <span
                        key={idx}
                        className={`w-full rounded-t-sm transition-all duration-300 ${
                          isPlaying
                            ? `bg-gradient-to-t from-amber-600 via-amber-400 to-yellow-300 ${animClass}`
                            : "h-1.5 bg-stone-800"
                        }`}
                        style={!isPlaying ? { height: `${((idx % 5) + 1) * 3}px` } : undefined}
                      />
                    ))}
                  </div>
                </div>

                {error && (
                  <p className="text-xs text-amber-300/90 bg-amber-950/50 border border-amber-800/50 rounded-lg p-2.5">
                    {error}
                  </p>
                )}

                {/* Primary Play Button & Volume Slider Controls */}
                <div className="flex flex-col sm:flex-row items-center gap-4 pt-1">
                  {/* Big Play / Pause Button */}
                  <button
                    onClick={togglePlay}
                    aria-label={isPlaying ? "Pausar rádio" : "Tocar rádio da Jovem Guarda"}
                    className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-stone-950 font-bold text-base shadow-xl shadow-amber-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer group"
                  >
                    {isLoading ? (
                      <span className="size-6 border-3 border-stone-950 border-t-transparent rounded-full animate-spin"></span>
                    ) : isPlaying ? (
                      <Pause className="size-6 fill-current text-stone-950" />
                    ) : (
                      <Play className="size-6 fill-current text-stone-950 ml-1 group-hover:scale-110 transition-transform" />
                    )}
                    <span>{isPlaying ? "PAUSAR" : "OUVIR AO VIVO"}</span>
                  </button>

                  {/* Volume Control Bar */}
                  <div className="w-full sm:w-auto flex-1 flex items-center gap-3 bg-[#171411] px-4 py-3 rounded-2xl border border-stone-800">
                    <button
                      onClick={toggleMute}
                      aria-label={isMuted ? "Ativar som" : "Desativar som"}
                      className="p-1 text-stone-300 hover:text-amber-400 transition-colors"
                    >
                      {renderVolumeIcon()}
                    </button>
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.01"
                      value={isMuted ? 0 : volume}
                      onChange={(e) => setVolume(parseFloat(e.target.value))}
                      className="w-full h-1.5 bg-stone-700 rounded-lg appearance-none cursor-pointer"
                      aria-label="Volume da rádio"
                    />
                    <span className="text-xs font-mono text-stone-400 w-8 text-right">
                      {isMuted ? "0%" : `${Math.round(volume * 100)}%`}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Actions of the Player */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-5 border-t border-stone-800/80">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setLiked(!liked)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                    liked
                      ? "bg-rose-500/20 text-rose-300 border border-rose-500/40"
                      : "bg-stone-800/60 text-stone-300 hover:text-white border border-stone-700/50"
                  }`}
                >
                  <Heart className={`size-3.5 ${liked ? "fill-rose-400 text-rose-400" : ""}`} />
                  <span>{liked ? "Amor de Broto!" : "Curtir a Rádio"}</span>
                </button>

                <button
                  onClick={handleShare}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-stone-800/60 hover:bg-stone-800 text-stone-300 hover:text-white border border-stone-700/50 text-xs font-medium transition-all"
                >
                  {copied ? <Check className="size-3.5 text-green-400" /> : <Share2 className="size-3.5 text-amber-400" />}
                  <span>{copied ? "Link Copiado!" : "Compartilhar"}</span>
                </button>
              </div>

              <div className="flex items-center gap-3">
                <Link
                  href="/#sobre"
                  className="text-xs text-stone-400 hover:text-amber-300 transition-colors"
                >
                  Sobre a Rádio
                </Link>
                <span className="text-stone-700">•</span>
                <Link
                  href="/contato"
                  className="flex items-center gap-1 text-xs text-amber-300 hover:text-amber-200 font-semibold hover:underline"
                >
                  <Mail className="size-3.5" />
                  <span>Contato ({RADIO_CONFIG.contactEmail})</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
