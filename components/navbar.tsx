"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Play, Pause, Menu, X, Mail, Sparkles, Disc } from "lucide-react";
import { useAudio } from "@/lib/audio-context";
import { RADIO_CONFIG } from "@/lib/radio-config";

export function Navbar() {
  const { isPlaying, togglePlay, isLoading } = useAudio();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Ao Vivo", href: "/#player" },
    { name: "Programação 60s", href: "/#programacao" },
    { name: "Acervo Jovem Guarda", href: "/#generos" },
    { name: "O Movimento", href: "/#sobre" },
    { name: "Pedir Música", href: "/#pedir-musica" },
    { name: "Contato", href: "/contato" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0c0a09]/95 backdrop-blur-md border-b border-amber-900/30 shadow-2xl py-3"
          : "bg-gradient-to-b from-[#0c0a09]/98 via-[#0c0a09]/75 to-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative flex items-center justify-center size-11 sm:size-12 rounded-full bg-gradient-to-tr from-amber-600 via-amber-500 to-yellow-400 p-[2px] shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform flex-shrink-0">
            <div className="size-full bg-[#141210] rounded-full flex items-center justify-center">
              <Disc className={`size-6 text-amber-400 ${isPlaying ? "animate-spin-slow" : "group-hover:rotate-45 transition-transform"}`} />
            </div>
            {isPlaying && (
              <span className="absolute -top-0.5 -right-0.5 flex size-3.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full size-3.5 bg-red-500 border-2 border-[#0c0a09]"></span>
              </span>
            )}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-serif font-bold text-lg sm:text-xl tracking-tight text-white group-hover:text-amber-300 transition-colors">
                Rádio Doces Memórias
              </span>
              <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30">
                <Sparkles className="size-2.5 text-amber-400" />
                100% Jovem Guarda
              </span>
            </div>
            <p className="text-[11px] text-amber-200/70 font-medium tracking-wide">
              {RADIO_CONFIG.slogan} • &ldquo;É uma brasa, mora!&rdquo;
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`px-3 py-1.5 rounded-full text-xs lg:text-sm font-medium transition-all ${
                  isActive
                    ? "text-amber-300 bg-amber-500/10 border border-amber-500/20"
                    : "text-stone-300 hover:text-white hover:bg-stone-800/50"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Player Quick Action + Contact Button */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={togglePlay}
            aria-label={isPlaying ? "Pausar rádio" : "Ouvir rádio ao vivo"}
            className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold text-xs tracking-wide shadow-lg shadow-amber-500/25 transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            {isLoading ? (
              <span className="size-3.5 border-2 border-stone-950 border-t-transparent rounded-full animate-spin"></span>
            ) : isPlaying ? (
              <Pause className="size-3.5 fill-current" />
            ) : (
              <Play className="size-3.5 fill-current ml-0.5" />
            )}
            <span>{isPlaying ? "Pausar" : "Ouvir Agora"}</span>
            {isPlaying && (
              <div className="flex items-end gap-0.5 h-3 ml-0.5">
                <span className="w-0.5 bg-stone-950 rounded-full eq-bar-1"></span>
                <span className="w-0.5 bg-stone-950 rounded-full eq-bar-2"></span>
                <span className="w-0.5 bg-stone-950 rounded-full eq-bar-3"></span>
              </div>
            )}
          </button>

          <Link
            href="/contato"
            aria-label="Fale conosco por e-mail"
            className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-stone-900/80 hover:bg-stone-800 text-stone-300 hover:text-amber-300 border border-stone-800 hover:border-amber-500/30 text-xs font-medium transition-all"
          >
            <Mail className="size-3.5 text-amber-400" />
            <span>Contato</span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={togglePlay}
            aria-label={isPlaying ? "Pausar rádio" : "Ouvir rádio"}
            className="p-2 rounded-full bg-amber-500 text-stone-950 shadow-md shadow-amber-500/20"
          >
            {isPlaying ? <Pause className="size-4 fill-current" /> : <Play className="size-4 fill-current ml-0.5" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menu"
            className="p-2 rounded-lg bg-stone-900 border border-stone-800 text-stone-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#141210]/98 border-b border-amber-900/30 px-5 pt-3 pb-6 space-y-3 animate-in slide-in-from-top duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-stone-800">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
              100% Jovem Guarda & Iê-Iê-Iê
            </span>
            <span className="flex items-center gap-1 text-[11px] font-semibold text-red-400 bg-red-500/10 px-2 py-0.5 rounded-full border border-red-500/20">
              <span className="size-1.5 rounded-full bg-red-500 animate-pulse"></span>
              24h no Ar
            </span>
          </div>

          <div className="grid gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-sm font-medium text-stone-200 hover:text-amber-300 hover:bg-stone-800/60 transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-xs text-amber-500/40">→</span>
              </Link>
            ))}
          </div>

          <div className="pt-2 border-t border-stone-800">
            <Link
              href="/contato"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold hover:bg-amber-500/20 transition-all"
            >
              <Mail className="size-4" />
              <span>{RADIO_CONFIG.contactEmail}</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
