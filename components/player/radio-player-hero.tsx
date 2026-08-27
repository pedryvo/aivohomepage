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
  Sparkles,
  Users,
  Check,
  Disc3,
  Headphones,
  Signal,
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
    currentProgram,
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
          title: "Rádio Doces Memórias",
          text: "Estou ouvindo a Rádio Doces Memórias! A melhor seleção de clássicos e flashbacks.",
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
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-[#0c0a09] via-[#14110e] to-[#0c0a09]"
    >
      {/* Background ambient lighting effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[450px] bg-amber-500/10 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-10 w-[300px] h-[300px] bg-orange-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-10 w-[350px] h-[350px] bg-amber-700/10 rounded-full blur-[110px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Title Section */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-5 shadow-sm">
            <Sparkles className="size-3.5 text-amber-400" />
            <span>Grandes Clássicos • MPB • Flashback • Românticas</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Rádio <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500">Doces Memórias</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg lg:text-xl text-stone-300 font-light leading-relaxed">
            A trilha sonora que marcou sua história. Reviva emoções inesquecíveis através das mais belas canções de todos os tempos.
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
                    No Ar • Ao Vivo
                  </span>
                </div>
                <span className="text-xs font-medium text-stone-400 hidden sm:inline-block">
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
                <div className="relative size-52 sm:size-64 rounded-full flex items-center justify-center p-2 shadow-2xl shadow-black">
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
                              <span className="font-serif text-[9px] sm:text-[10px] font-bold text-amber-200 tracking-tighter leading-none">
                                DOCES
                              </span>
                              <span className="font-serif text-[8px] sm:text-[9px] font-medium text-amber-300/80 tracking-widest uppercase">
                                Memórias
                              </span>
                              {/* Center Spindle Hole */}
                              <div className="size-2 rounded-full bg-[#0c0a09] mt-1 border border-stone-600"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Pulsing glow ring when playing */}
                  {isPlaying && (
                    <div className="absolute inset-0 rounded-full border border-amber-500/40 animate-ping pointer-events-none opacity-30"></div>
                  )}
                </div>
              </div>

              {/* Program & Controls Information */}
              <div className="md:col-span-7 space-y-6 text-left">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-md border border-amber-500/20">
                      Programa Atual ({currentProgram.time})
                    </span>
                  </div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    {currentProgram.title}
                  </h2>
                  <p className="text-sm text-stone-300 mt-2 leading-relaxed font-light">
                    {currentProgram.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {currentProgram.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-stone-800/80 text-stone-300 border border-stone-700/50"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Equalizer Visualizer Spectrum */}
                <div className="bg-[#120f0d]/90 rounded-2xl p-4 border border-stone-800/90 flex flex-col gap-2">
                  <div className="flex items-center justify-between text-xs text-stone-400">
                    <span className="flex items-center gap-1.5">
                      <Headphones className="size-3.5 text-amber-400" />
                      <span>{isPlaying ? "Transmitindo Áudio HD" : "Pronto para tocar"}</span>
                    </span>
                    <span className="text-amber-400/80 font-mono text-[11px]">
                      {isPlaying ? "STATUS: STREAMING" : "STATUS: PAUSADO"}
                    </span>
                  </div>

                  {/* Frequency Spectrum Bars */}
                  <div className="flex items-end justify-between gap-1 h-12 pt-1 px-1 bg-black/40 rounded-xl border border-stone-900">
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

                {/* Error / Notice feedback */}
                {error && (
                  <p className="text-xs text-amber-300/90 bg-amber-950/50 border border-amber-800/50 rounded-lg p-2.5">
                    {error}
                  </p>
                )}

                {/* Primary Play Button & Volume Slider Controls */}
                <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                  {/* Big Play / Pause Button */}
                  <button
                    onClick={togglePlay}
                    aria-label={isPlaying ? "Pausar rádio" : "Tocar rádio ao vivo"}
                    className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-stone-950 font-bold text-base shadow-xl shadow-amber-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer group"
                  >
                    {isLoading ? (
                      <span className="size-6 border-3 border-stone-950 border-t-transparent rounded-full animate-spin"></span>
                    ) : isPlaying ? (
                      <Pause className="size-6 fill-current text-stone-950" />
                    ) : (
                      <Play className="size-6 fill-current text-stone-950 ml-1 group-hover:scale-110 transition-transform" />
                    )}
                    <span>{isPlaying ? "PAUSAR TRANSMISSÃO" : "OUVIR AO VIVO"}</span>
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
            <div className="flex flex-wrap items-center justify-between gap-3 pt-6 border-t border-stone-800/80">
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
                  <span>{liked ? "Adorado!" : "Curtir Rádio"}</span>
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
                  href="/#pedir-musica"
                  className="flex items-center gap-1.5 text-xs text-amber-300 hover:text-amber-200 font-semibold hover:underline"
                >
                  <Music className="size-3.5" />
                  <span>Pedir uma Música</span>
                </Link>
                <span className="text-stone-700">•</span>
                <Link
                  href="/contato"
                  className="flex items-center gap-1.5 text-xs text-stone-400 hover:text-amber-300 transition-colors"
                >
                  <span>Fale Conosco</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Highlights beneath Player */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-8">
          {[
            { title: "24h Sem Parar", desc: "Transmissão ininterrupta todos os dias", icon: Disc3 },
            { title: "Áudio HD", desc: "Som cristalino de alta fidelidade", icon: Signal },
            { title: "Acervo Histórico", desc: "Os maiores sucessos da era de ouro", icon: Sparkles },
            { title: "Contato Direto", desc: RADIO_CONFIG.contactEmail, icon: Heart },
          ].map((feat) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.title}
                className="bg-[#14110e]/70 border border-amber-900/20 rounded-2xl p-4 text-center hover:border-amber-500/30 transition-colors"
              >
                <div className="flex justify-center mb-2">
                  <div className="size-8 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-400">
                    <Icon className="size-4" />
                  </div>
                </div>
                <h4 className="font-semibold text-xs sm:text-sm text-stone-200">{feat.title}</h4>
                <p className="text-[11px] text-stone-400 mt-0.5 truncate">{feat.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
