"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { MessageSquare, ArrowRight } from "lucide-react";

export function Contact() {
  const whatsappNumber = "5577988350905";
  const message = encodeURIComponent("Olá! Gostaria de falar com um consultor sobre automação com IA.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <section id="contato" className="border-y border-black/8 bg-zinc-50 px-4 py-24 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[2.5rem] border border-black/8 bg-white p-8 text-center shadow-[0_24px_80px_rgba(16,17,19,0.08)] md:p-16"
        >
          <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1 text-sm font-bold text-primary">
            <MessageSquare className="h-4 w-4" />
            <span>Próximo passo</span>
          </div>
          
          <h2 className="mb-8 text-4xl font-black tracking-tighter text-black md:text-5xl lg:text-6xl">
            Se existe um processo travando sua empresa, <span className="text-primary italic">vamos mapear isso no WhatsApp.</span>
          </h2>
          
          <p className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed font-medium text-zinc-600">
            A conversa é direta: entendemos o gargalo, avaliamos se faz sentido automação ou MVP e mostramos o caminho mais enxuto para a sua operação.
          </p>
          
          <div className="flex flex-col items-center gap-6">
            <Button 
              size="lg" 
              className="whatsapp-cta h-16 rounded-full border-none px-10 text-xl font-bold group text-white"
              asChild
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <Image 
                  src="/WhatsApp.svg" 
                  alt="WhatsApp" 
                  width={24} 
                  height={24} 
                  className="mr-3"
                />
                Falar com a Ai-vo agora
                <ArrowRight className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            
            <p className="text-sm font-medium whitespace-nowrap text-zinc-400">
              Sem formulário, sem email e sem fila longa. Direto no WhatsApp.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
