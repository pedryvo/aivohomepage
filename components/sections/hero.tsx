"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { WhatsAppSimulator } from "@/components/whatsapp-simulator";

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-white px-4 py-24 sm:px-6 lg:px-8">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[140px]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="container relative z-10 mx-auto grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center lg:text-left"
        >
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/[0.03] px-3 py-1 text-xs font-bold uppercase tracking-[0.24em] text-zinc-600">
            <Sparkles className="h-3 w-3 text-primary" />
            <span>MVPs e automações para processos críticos</span>
          </div>

          <h1 className="mb-8 text-5xl leading-[0.98] font-black tracking-[-0.06em] text-black sm:text-7xl lg:text-[5.6rem]">
            Menos operação
            <br />
            travada.
            <br />
            <span className="text-primary italic">Mais processo rodando.</span>
          </h1>

          <p className="mb-6 max-w-2xl text-lg leading-relaxed font-medium text-zinc-600 sm:text-xl">
            A Ai-vo desenha MVPs operacionais e automações com IA para pequenas e médias empresas que perderam tempo demais com retrabalho, atraso e processo manual.
          </p>

          <p className="mb-12 max-w-2xl text-base leading-relaxed font-semibold text-black/80 sm:text-lg">
            WhatsApp, atendimento, comercial, onboarding e operação interna podem sair do improviso e virar um sistema simples, enxuto e escalável.
          </p>

          <div className="mb-10 flex flex-wrap items-stretch justify-center gap-4 lg:justify-start">
            <Button size="lg" className="whatsapp-cta h-14 w-full rounded-full px-8 text-base font-semibold sm:w-auto" asChild>
              <a href="https://wa.me/5577988350905" target="_blank" rel="noopener noreferrer">
                <Image 
                  src="/WhatsApp.svg" 
                  alt="WhatsApp" 
                  width={20} 
                  height={20} 
                  className="mr-2"
                />
                Quero mapear meu processo
              </a>
            </Button>
            <Button variant="outline" size="lg" className="h-14 w-full rounded-full border-black/12 px-8 text-base font-semibold text-black hover:bg-black hover:text-white sm:w-auto" asChild>
              <Link href="#cases">Ver um case real</Link>
            </Button>
          </div>

          <div className="grid gap-4 border-t border-black/10 pt-8 sm:grid-cols-3">
            <div>
              <p className="text-[0.7rem] font-bold uppercase tracking-[0.24em] text-zinc-500">Entrega enxuta</p>
              <p className="mt-2 text-base font-semibold text-black">MVPs focados no gargalo principal</p>
            </div>
            <div>
              <p className="text-[0.7rem] font-bold uppercase tracking-[0.24em] text-zinc-500">Canal real</p>
              <p className="mt-2 text-base font-semibold text-black">WhatsApp como canal de captura e execução</p>
            </div>
            <div>
              <p className="text-[0.7rem] font-bold uppercase tracking-[0.24em] text-zinc-500">Objetivo</p>
              <p className="mt-2 text-base font-semibold text-black">Mais previsibilidade e menos retrabalho</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex justify-center lg:justify-end"
        >
          <WhatsAppSimulator />
        </motion.div>
      </div>
    </section>
  );
}
