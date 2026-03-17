import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-100 bg-white/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <Link href="#" className="flex items-center gap-3">
            <Image 
              src="/aivo-logo.svg" 
              alt="AIVO Logo" 
              width={110} 
              height={44} 
              className="h-9 w-auto" 
            />
          </Link>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <Link href="#servicos" className="text-sm font-semibold text-zinc-600 hover:text-black transition-colors uppercase tracking-tight">Serviços</Link>
          <Link href="#como-funciona" className="text-sm font-semibold text-zinc-600 hover:text-black transition-colors uppercase tracking-tight">Como Funciona</Link>
          <Link href="#faq" className="text-sm font-semibold text-zinc-600 hover:text-black transition-colors uppercase tracking-tight">Dúvidas</Link>
        </div>

        <Button size="sm" className="hidden sm:flex rounded-full px-5 bg-[#25D366] hover:bg-[#20ba5a] text-white" asChild>
          <a href="https://wa.me/5577988350905" target="_blank" rel="noopener noreferrer">
            <Image 
              src="/WhatsApp.svg" 
              alt="WhatsApp" 
              width={16} 
              height={16} 
              className="mr-2" 
            />
            Falar com Consultor
          </a>
        </Button>
      </div>
    </nav>
  );
}
