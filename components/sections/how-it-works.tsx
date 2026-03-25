"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Mapeamos o gargalo",
    description: "Entendemos onde sua operação trava, qual processo mais consome energia e o que precisa sair do improviso primeiro."
  },
  {
    number: "02",
    title: "Desenhamos o MVP",
    description: "Estruturamos a menor versão que já resolve o problema com clareza, sem inflar escopo nem vender sistema demais."
  },
  {
    number: "03",
    title: "Colocamos para rodar",
    description: "Entregamos, ajustamos os primeiros dias e deixamos o processo mais rápido, previsível e fácil de escalar."
  }
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="border-y border-black/8 bg-zinc-50 px-4 py-32 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 text-center"
        >
          <p className="mb-4 text-[0.72rem] font-bold uppercase tracking-[0.26em] text-primary">Método</p>
          <h2 className="mb-6 text-4xl font-black tracking-[-0.05em] text-black italic uppercase md:text-5xl">Como isso sai do papel</h2>
          <p className="mx-auto max-w-3xl text-xl font-medium text-zinc-600">
            Nada de projeto confuso. O processo é curto, comercialmente defensável e focado em colocar uma parte crítica da empresa para funcionar melhor.
          </p>
        </motion.div>

        <div className="grid gap-16 md:grid-cols-3 relative">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="relative flex flex-col items-center text-center z-10"
            >
              <div className="mb-8 relative flex items-center justify-center">
                <div className="h-20 w-20 rounded-full bg-white border-2 border-zinc-100 shadow-xl flex items-center justify-center group-hover:border-primary/30 transition-all">
                  <span className="text-3xl font-black text-primary italic">{step.number}</span>
                </div>
                {/* Decorative pulse for the current step */}
                <div className="absolute inset-0 rounded-full bg-primary/5 animate-pulse -z-10 scale-125" />
              </div>
              
              <h3 className="text-2xl font-black text-black mb-4 tracking-tight">{step.title}</h3>
              <p className="text-zinc-500 leading-relaxed text-base font-medium max-w-xs">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
