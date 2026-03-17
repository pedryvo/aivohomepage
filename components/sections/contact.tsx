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
    <section id="contato" className="py-24 bg-zinc-50 border-y border-zinc-100 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[2.5rem] bg-white border border-zinc-100 p-8 md:p-16 shadow-xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1 text-sm font-bold text-primary mb-8">
            <MessageSquare className="h-4 w-4" />
            <span>Vamos Conversar?</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-black mb-8">
            Pronto para colocar sua empresa no <span className="text-primary italic">piloto automático?</span>
          </h2>
          
          <p className="text-lg text-zinc-500 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
            Fale diretamente com um consultor especialista e descubra como podemos economizar horas do seu dia com automações inteligentes.
          </p>
          
          <div className="flex flex-col items-center gap-6">
            <Button 
              size="lg" 
              className="h-16 px-10 text-xl font-bold rounded-full group bg-[#25D366] hover:bg-[#20ba5a] text-white border-none shadow-lg shadow-green-500/20"
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
                Falar com o Consultor agora
                <ArrowRight className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            
            <p className="text-sm text-zinc-400 font-medium whitespace-nowrap">
              Atendimento humano e rápido pelo WhatsApp
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
