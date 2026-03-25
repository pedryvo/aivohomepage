import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "Preciso entender de tecnologia para contratar a Ai-vo?",
    answer: "Não. A conversa parte do gargalo da sua operação, não do nome da tecnologia. A Ai-vo traduz isso em uma solução simples de usar."
  },
  {
    question: "Quanto tempo leva para um MVP ou automação ficar pronto?",
    answer: "Projetos enxutos costumam nascer em poucas semanas. O foco é colocar o processo principal para rodar bem primeiro, sem inflar escopo."
  },
  {
    question: "Quando faz sentido automatizar e quando faz sentido criar um MVP?",
    answer: "Automação funciona bem quando o processo já existe e precisa ganhar velocidade. MVP faz sentido quando a operação precisa de uma nova estrutura simples para centralizar etapas e sair do improviso."
  },
  {
    question: "Vocês atendem so no WhatsApp?",
    answer: "O WhatsApp é o principal canal comercial e operacional para muitos fluxos, mas a Ai-vo também desenha sistemas internos, painéis e MVPs para processos críticos."
  },
  {
    question: "E se eu precisar evoluir depois da primeira entrega?",
    answer: "Essa é a lógica do trabalho. A primeira entrega resolve o ponto crítico com clareza e cria base para evolução sem reconstruir tudo do zero."
  }
];

export function FAQ() {
  return (
    <section id="faq" className="bg-white px-4 py-24 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-3xl">
        <div className="mb-16 text-center">
          <p className="mb-4 text-[0.72rem] font-bold uppercase tracking-[0.26em] text-primary">Objeções</p>
          <h2 className="mb-4 text-3xl font-black tracking-tight text-black italic uppercase">Dúvidas que travam a decisão</h2>
          <p className="font-medium text-zinc-500">Separamos as perguntas que mais aparecem quando uma empresa quer automatizar ou estruturar um processo crítico.</p>
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
