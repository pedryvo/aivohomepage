"use client";

import { motion } from "framer-motion";
import { Lightbulb, ArrowDown } from "lucide-react";

const departments = [
  {
    team: "Time de Marketing",
    agent: "Content Agent + Automações",
  },
  {
    team: "Time Comercial",
    agent: "Chat Agent + CRM Inteligente",
  },
  {
    team: "Gestor / Analista",
    agent: "Data Agent + Dashboard",
  },
  {
    team: "Atendimento / CX",
    agent: "Voice Agent + WhatsApp IA",
  },
  {
    team: "Financeiro / Cobrança",
    agent: "Automações + Alertas",
  },
  {
    team: "Administrativo",
    agent: "Workflows + Integrações",
  },
];

export function SystemOS() {
  return (
    <section className="py-32 w-full bg-black text-white relative border-y border-white/10 overflow-hidden">
      {/* Red Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-red-600 blur-[120px] rounded-full" />
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full"
        >
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-500/10 mb-8 border border-red-500/20">
              <Lightbulb className="w-8 h-8 text-red-500 fill-red-500/20" />
            </div>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-8 text-white uppercase">
              Transforme a sua <span className="text-red-500">operação</span>.
            </h2>

            <div className="max-w-4xl mx-auto space-y-4">
              <p className="text-zinc-400 text-xl font-medium leading-relaxed">
                Você não precisa crescer no caos. Hoje já dá para estruturar uma operação mais previsível, integrada e rápida sem montar uma empresa inchada.
              </p>
              <p className="text-white font-black text-2xl uppercase tracking-tight mt-6">
                Não com mais remendo. <span className="text-red-500">Com IA.</span>
              </p>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {departments.map((dept, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-black border border-white/10 rounded-2xl p-8 text-center hover:border-red-500/50 transition-all flex flex-col items-center justify-center gap-4 group hover:-translate-y-1 hover:bg-black/80 hover:shadow-2xl hover:shadow-red-500/10"
              >
                <span className="text-white text-sm font-bold tracking-widest uppercase">
                  {dept.team}
                </span>

                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-red-500/10 transition-colors">
                  <ArrowDown className="w-4 h-4 text-zinc-500 group-hover:text-red-500 transition-colors" />
                </div>

                <span className="text-red-500 font-bold tracking-tight text-xl">
                  {dept.agent}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Footer */}
          <div className="text-center">
            <p className="text-zinc-400 font-bold tracking-widest uppercase text-sm">
              Isso é um Sistema Operacional com IA. <span className="text-white">É a operação crítica rodando com menos atrito.</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
