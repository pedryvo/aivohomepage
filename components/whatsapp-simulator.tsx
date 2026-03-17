"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { MoreVertical, Phone, Video, CheckCheck } from "lucide-react";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
  time: string;
}

const conversation: Message[] = [
  { id: 1, text: "Gostaria de automatizar meu atendimento pelo WhatsApp.", sender: "user", time: "14:02" },
  { id: 2, text: "Olá! Com a Ai-vo podemos fazer isso em poucos dias. 🚀", sender: "bot", time: "14:02" },
  { id: 3, text: "O chatbot atende 24h e já qualifica seus clientes para você.", sender: "bot", time: "14:03" },
  { id: 4, text: "Que incrível! Como podemos começar?", sender: "user", time: "14:04" },
  { id: 5, text: "Vou te passar agora mesmo o link para agendarmos uma conversa rápida! 👇", sender: "bot", time: "14:04" },
];

export function WhatsAppSimulator() {
  const [visibleMessages, setVisibleMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [visibleMessages, isTyping]);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    const runSimulation = async () => {
      setVisibleMessages([]);
      
      for (const msg of conversation) {
        if (msg.sender === "bot") {
          setIsTyping(true);
          await new Promise((resolve) => setTimeout(resolve, 1500));
          setIsTyping(false);
        } else {
          await new Promise((resolve) => setTimeout(resolve, 1000));
        }
        
        setVisibleMessages((prev) => [...prev, msg]);
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }

      // Loop after completion
      timeout = setTimeout(() => runSimulation(), 5000);
    };

    runSimulation();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="mx-auto w-full max-w-[350px] overflow-hidden rounded-[2.5rem] border-[8px] border-zinc-900 bg-zinc-200 shadow-2xl">
      {/* WhatsApp Header */}
      <div className="bg-[#075E54] p-4 text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-zinc-300 overflow-hidden">
               <div className="flex h-full w-full items-center justify-center bg-primary text-white font-bold">A</div>
            </div>
            <div>
              <p className="text-sm font-bold leading-none">Ai-vo Agente</p>
              <p className="text-[10px] opacity-80">Online agora</p>
            </div>
          </div>
          <div className="flex gap-4 opacity-80">
            <Video size={18} />
            <Phone size={18} />
            <MoreVertical size={18} />
          </div>
        </div>
      </div>

      {/* Chat Area */}
      <div 
        ref={scrollRef}
        className="h-[400px] overflow-y-auto bg-[#e5ddd5] p-4 space-y-3 no-scrollbar scroll-smooth"
      >
        <AnimatePresence initial={false}>
          {visibleMessages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className={`flex w-full ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] rounded-lg p-3 text-sm shadow-sm relative ${
                  msg.sender === "user" ? "bg-[#dcf8c6] text-zinc-800" : "bg-white text-zinc-800"
                }`}
              >
                <p className="leading-relaxed">{msg.text}</p>
                <div className="mt-1 flex items-center justify-end gap-1 text-[10px] opacity-50">
                  <span>{msg.time}</span>
                  {msg.sender === "user" && <CheckCheck size={12} className="text-blue-500" />}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        
        {isTyping && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-start pb-4"
          >
            <div className="flex gap-1 rounded-full bg-white px-4 py-2 shadow-sm">
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-zinc-400 [animation-delay:-0.3s]"></span>
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-zinc-400 [animation-delay:-0.15s]"></span>
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-zinc-400"></span>
            </div>
          </motion.div>
        )}
      </div>

      {/* Input Area */}
      <div className="bg-zinc-100 p-3">
        <div className="h-10 w-full rounded-full bg-white px-4 flex items-center text-zinc-400 text-sm">
          Mensagem...
        </div>
      </div>
    </div>
  );
}
