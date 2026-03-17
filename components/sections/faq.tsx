import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "Preciso entender de tecnologia para usar?",
    answer: "De jeito nenhum! Nós cuidamos de toda a parte difícil. Você só precisa saber usar o WhatsApp ou o seu navegador."
  },
  {
    question: "Quanto tempo demora para ficar pronto?",
    answer: "Nossos projetos iniciais costumam levar entre 1 a 3 semanas, dependendo da complexidade do que você precisa."
  },
  {
    question: "O chatbot funciona no meu WhatsApp pessoal?",
    answer: "Recomendamos o uso de um número exclusivo para a empresa, mas sim, ele funciona de forma transparente para seus clientes."
  },
  {
    question: "E se eu precisar de mudanças depois?",
    answer: "Oferecemos suporte após a entrega e podemos fazer ajustes conforme sua empresa cresce e novas necessidades surgem."
  }
];

export function FAQ() {
  return (
    <section id="faq" className="bg-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-3xl">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-black tracking-tight text-black mb-4 italic uppercase">Dúvidas Comuns</h2>
          <p className="text-zinc-500 font-medium">Separamos as perguntas que mais recebemos de outros empreendedores.</p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-zinc-100">
              <AccordionTrigger className="text-left text-black hover:text-primary transition-colors italic uppercase tracking-wider text-sm font-bold">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-zinc-600 text-base leading-relaxed font-medium">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
