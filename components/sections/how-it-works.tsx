"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Conversa Inicial",
    description: "Você nos conta como sua empresa funciona e onde você perde mais tempo hoje."
  },
  {
    number: "02",
    title: "Planejamento Simples",
    description: "Desenhamos a solução ideal para você, sem complicação e com foco no custo-benefício."
  },
  {
    number: "03",
    title: "Entrega e Suporte",
    description: "Colocamos tudo para rodar e acompanhamos os primeiros dias para garantir o sucesso."
  }
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-zinc-50 border-y border-zinc-100 py-32 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-black mb-6 italic uppercase">Como funciona</h2>
          <p className="text-zinc-500 font-medium text-xl max-w-2xl mx-auto">
            Um processo transparente e direto para você parar de se preocupar com a tecnologia e focar no seu lucro.
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
