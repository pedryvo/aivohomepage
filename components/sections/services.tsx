"use client";

import { motion } from "framer-motion";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { MessageSquare, Laptop, CheckCircle2, ArrowUpRight, Settings } from "lucide-react";

const services = [
  {
    title: "Chatbots de WhatsApp",
    description: "Um robô inteligente que atende seus clientes, tira dúvidas e até fecha vendas sozinho no seu WhatsApp.",
    icon: MessageSquare,
    features: [
      "Atendimento 24 horas",
      "Qualificação automática de clientes",
      "Integração com seu catálogo"
    ],
    eyebrow: "Canal comercial"
  },
  {
    title: "MVPs operacionais",
    description: "Criamos a primeira versão funcional do processo crítico da sua empresa para tirar o gargalo do improviso e colocar a operação para rodar.",
    icon: Laptop,
    features: [
      "Escopo focado no essencial",
      "Entrega rápida para ganhar tração",
      "Base pronta para evoluir"
    ],
    eyebrow: "Processo crítico"
  },
  {
    title: "Sistemas Personalizados",
    description: "Sistemas sob medida para centralizar operação, integrar etapas e dar previsibilidade para a rotina da empresa.",
    icon: Settings,
    features: [
      "Automação de tarefas manuais",
      "Dashboards de indicadores",
      "Segurança e controle de dados"
    ],
    eyebrow: "Escala operacional"
  }
];

export function Services() {
  return (
    <section id="servicos" className="bg-white px-4 py-32 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <p className="mb-4 text-[0.72rem] font-bold uppercase tracking-[0.26em] text-primary">Oferta Ai-vo</p>
          <h2 className="mb-6 text-4xl font-black tracking-[-0.05em] text-black italic uppercase md:text-5xl">
            O que destrava a operação
          </h2>
          <p className="mx-auto max-w-3xl text-lg font-medium text-zinc-600">
            A Ai-vo entra quando a empresa precisa parar de remendar processo e colocar uma estrutura simples, funcional e comercialmente útil para rodar.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="h-full"
            >
              <Card className="group relative h-full overflow-hidden rounded-[2rem] border border-black/8 bg-white p-2 text-black shadow-[0_18px_50px_rgba(16,17,19,0.05)] transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_26px_70px_rgba(255,69,58,0.10)]">
                <div className="p-6 md:p-8">
                  <p className="mb-6 text-[0.72rem] font-bold uppercase tracking-[0.24em] text-zinc-500">
                    {service.eyebrow}
                  </p>

                  <div className="mb-8 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/15 bg-primary/8 transition-transform group-hover:scale-110 group-hover:rotate-3">
                    <service.icon className="h-7 w-7 text-primary" />
                  </div>
                  
                  <div className="flex items-start justify-between mb-4">
                    <CardTitle className="text-3xl font-black tracking-tight">{service.title}</CardTitle>
                    <ArrowUpRight className="h-6 w-6 text-zinc-300 transition-colors group-hover:text-primary" />
                  </div>

                  <CardDescription className="mb-8 text-lg leading-relaxed font-medium text-zinc-600">
                    {service.description}
                  </CardDescription>

                  <div className="grid gap-4">
                    {service.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-center gap-3 text-base font-semibold text-zinc-700">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                          <CheckCircle2 className="h-4 w-4 text-primary" />
                        </div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
