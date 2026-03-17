"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { WhatsAppSimulator } from "@/components/whatsapp-simulator";

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-white py-24 px-4 sm:px-6 lg:px-8">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[140px] rounded-full" />
      
      <div className="container relative z-10 mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-100 bg-zinc-50 px-3 py-1 text-xs font-bold uppercase tracking-widest text-zinc-500 mb-8">
            <Sparkles className="h-3 w-3 text-primary" />
            <span>Inteligência Artificial para Negócios</span>
          </div>
          
          <h1 className="text-5xl font-black tracking-tighter text-black sm:text-7xl lg:text-8xl mb-8 leading-[1.05]">
            Sua empresa no <br/><span className="text-primary italic">piloto automático.</span>
          </h1>
          
          <p className="max-w-xl text-lg text-zinc-500 sm:text-xl mb-12 font-medium leading-relaxed">
            Atendemos seus clientes no WhatsApp e criamos sistemas simples para você parar de perder tempo com tarefas chatas.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-4">
            <Button size="lg" className="h-14 px-8 text-base font-semibold rounded-full w-full sm:w-auto bg-[#25D366] hover:bg-[#20ba5a] text-white" asChild>
              <a href="https://wa.me/5577988350905" target="_blank" rel="noopener noreferrer">
                <Image 
                  src="/WhatsApp.svg" 
                  alt="WhatsApp" 
                  width={20} 
                  height={20} 
                  className="mr-2"
                />
                Quero automatizar meu negócio
              </a>
            </Button>
            <Button variant="outline" size="lg" className="h-14 px-8 text-base font-semibold border-zinc-200 hover:bg-zinc-50 rounded-full w-full sm:w-auto text-black" asChild>
              <Link href="#servicos">Ver nossos serviços</Link>
            </Button>
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
