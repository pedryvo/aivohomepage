"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
    color: "bg-green-50"
  },
  {
    title: "Sistemas Web (MVPs)",
    description: "Criamos a primeira versão do seu sistema ou aplicativo de forma rápida para validar sua ideia.",
    icon: Laptop,
    features: [
      "Desenvolvimento ágil",
      "Focado no essencial",
      "Pronto para crescer"
    ],
    color: "bg-blue-50"
  },
  {
    title: "Sistemas Personalizados",
    description: "Sistemas feitos sob medida para organizar e acelerar os processos internos da sua empresa.",
    icon: Settings,
    features: [
      "Automação de tarefas manuais",
      "Dashboards de indicadores",
      "Segurança e controle de dados"
    ],
    color: "bg-purple-50"
  }
];

export function Services() {
  return (
    <section id="servicos" className="bg-white py-32 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-black mb-6 italic uppercase">O que fazemos por você</h2>
          <p className="text-zinc-500 max-w-2xl mx-auto font-medium text-lg">
            Focamos na simplicidade que gera resultados. Transformamos tecnologia complexa em soluções fáceis de usar.
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
              <Card className="group h-full relative overflow-hidden border-zinc-100 bg-zinc-50/30 p-2 text-black transition-all hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 rounded-[2rem]">
                <div className="p-6 md:p-8">
                  <div className={`mb-8 inline-flex h-14 w-14 items-center justify-center rounded-2xl ${service.color} transition-transform group-hover:scale-110 group-hover:rotate-3`}>
                    <service.icon className="h-7 w-7 text-primary" />
                  </div>
                  
                  <div className="flex items-start justify-between mb-4">
                    <CardTitle className="text-3xl font-black tracking-tight">{service.title}</CardTitle>
                    <ArrowUpRight className="h-6 w-6 text-zinc-300 transition-colors group-hover:text-primary" />
                  </div>

                  <CardDescription className="text-zinc-500 text-lg font-medium leading-relaxed mb-8">
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
