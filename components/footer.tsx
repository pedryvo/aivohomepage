import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-zinc-100 bg-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-10 md:flex-row">
          <div className="flex flex-col items-center md:items-start gap-4">
            <Link href="#" className="flex items-center gap-3">
              <Image 
                src="/aivo-logo.svg" 
                alt="AIVO Logo" 
                width={80} 
                height={32} 
                className="h-7 w-auto" 
              />
            </Link>
            <p className="text-sm font-medium text-zinc-500 max-w-xs text-center md:text-left">
              Transformando pequenos negócios através da inteligência artificial e automação.
            </p>
          </div>
          
          <div className="flex gap-8 text-sm font-bold text-zinc-600 uppercase tracking-tighter">
            <Link href="#cases" className="hover:text-primary transition-colors">Case</Link>
            <Link href="#servicos" className="hover:text-primary transition-colors">Serviços</Link>
            <Link href="#como-funciona" className="hover:text-primary transition-colors">Como Funciona</Link>
            <Link href="#faq" className="hover:text-primary transition-colors">FAQ</Link>
          </div>

          <p className="text-sm font-medium text-zinc-400">
            © {new Date().getFullYear()} Ai-vo. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
