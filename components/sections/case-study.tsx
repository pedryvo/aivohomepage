"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { 
  Newspaper, 
  ShoppingBag, 
  Users, 
  MessageSquare, 
  LayoutDashboard, 
  CheckCircle2,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

const images = [
  {
    url: "/vcanews/homepage.png",
    title: "Portal de Notícias",
    description: "Interface limpa e rápida para consumo de conteúdo em massa."
  },
  {
    url: "/vcanews/dashboard.png",
    title: "Painel Administrativo",
    description: "Controle total sobre conteúdos, usuários e métricas do sistema."
  },
  {
    url: "/vcanews/profissionais.png",
    title: "Guia de Profissionais",
    description: "Diretório inteligente para conexão entre usuários e especialistas."
  },
  {
    url: "/vcanews/compravenda.png",
    title: "Marketplace Integrado",
    description: "Plataforma de compra e venda segura dentro do ecossistema vca."
  }
];

const features = [
  {
    title: "Crawler de Notícias",
    description: "Importação automática de conteúdos de diversas fontes em tempo real.",
    icon: Newspaper
  },
  {
    title: "Marketplace Próprio",
    description: "Sistema completo de anúncios e vendas integrado ao portal.",
    icon: ShoppingBag
  },
  {
    title: "Guia de Profissionais",
    description: "Diretório segmentado para profissionais liberais e empresas locais.",
    icon: Users
  },
  {
    title: "Chat e Mensageria",
    description: "Comunicação direta entre compradores, vendedores e leitores.",
    icon: MessageSquare
  },
  {
    title: "Painel Dashboard",
    description: "Gestão centralizada de todo o ecossistema com métricas avançadas.",
    icon: LayoutDashboard
  }
];

export function CaseStudy() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="cases" className="py-32 bg-zinc-950 text-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-24"
        >
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-1 text-sm font-bold text-white">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Case de Sucesso
          </div>
          <h2 className="mb-8 text-4xl leading-[0.9] font-black tracking-tighter italic uppercase md:text-5xl lg:text-7xl">
            VCANews: <span className="text-primary italic">MVP que virou operação digital</span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg font-medium text-zinc-400 md:text-xl">
            Um exemplo real de como a Ai-vo transforma uma necessidade operacional em produto funcional, com módulos, painel, marketplace e estrutura de crescimento.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Slider Column */}
          <div className="relative group">
            <div className="relative aspect-[16/10] rounded-[2rem] overflow-hidden border border-white/10 bg-zinc-900 shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={images[currentIndex].url}
                    alt={images[currentIndex].title}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-8 right-8">
                    <h4 className="text-xl font-bold mb-2">{images[currentIndex].title}</h4>
                    <p className="text-sm text-zinc-300 font-medium">{images[currentIndex].description}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="absolute top-1/2 -left-4 -translate-y-1/2 ">
              <Button 
                onClick={prevSlide}
                size="icon" 
                variant="outline" 
                className="h-12 w-12 rounded-full bg-black/50 border-white/10 hover:bg-primary hover:border-primary backdrop-blur-md"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
            </div>
            <div className="absolute top-1/2 -right-4 -translate-y-1/2">
              <Button 
                onClick={nextSlide}
                size="icon" 
                variant="outline" 
                className="h-12 w-12 rounded-full bg-black/50 border-white/10 hover:bg-primary hover:border-primary backdrop-blur-md"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>

            {/* Pagination dots */}
            <div className="flex justify-center mt-8 gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-1.5 transition-all rounded-full ${currentIndex === i ? 'w-8 bg-primary' : 'w-2 bg-white/20'}`}
                />
              ))}
            </div>
          </div>

          {/* Features Column */}
          <div className="space-y-12">
            <div className="grid gap-8">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-6 group"
                >
                  <div className="flex-shrink-0 h-14 w-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary/10 group-hover:border-primary/30 transition-all">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 tracking-tight flex items-center gap-2">
                      {feature.title}
                      <CheckCircle2 className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h4>
                    <p className="text-zinc-400 font-medium leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Button 
              size="lg" 
              className="whatsapp-cta h-14 rounded-full px-8 font-bold italic uppercase text-white transition-all"
              asChild
            >
              <a href="https://wa.me/5577988350905" target="_blank" rel="noopener noreferrer">
                Quero um MVP assim
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
