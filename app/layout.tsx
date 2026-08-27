import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { AudioProvider } from "@/lib/audio-context";
import { RADIO_CONFIG } from "@/lib/radio-config";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://radiodocessmemorias.com.br"),
  title: "Rádio Doces Memórias | A Trilha Sonora da Sua Vida - Grandes Clássicos e Flashbacks",
  description:
    "Ouça a Rádio Doces Memórias ao vivo! Os maiores sucessos dos anos 60, 70, 80 e 90, o melhor da MPB, baladas românticas e músicas inesquecíveis. 24 horas no ar.",
  keywords: [
    "Rádio Doces Memórias",
    "Web Rádio",
    "Músicas Antigas",
    "Flashback",
    "MPB",
    "Bossa Nova",
    "Anos 70",
    "Anos 80",
    "Anos 90",
    "Rádio Online",
    "Músicas Românticas",
    "Rádio Web Ao Vivo",
    "Doces Memórias",
  ],
  authors: [{ name: "Rádio Doces Memórias" }],
  creator: "Rádio Doces Memórias",
  publisher: "Rádio Doces Memórias",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Rádio Doces Memórias | A Trilha Sonora da Sua Vida",
    description:
      "Reviva os melhores momentos com os grandes clássicos inesquecíveis dos anos 60, 70, 80, 90 e MPB. Transmissão 24h em alta qualidade.",
    url: "https://radiodocessmemorias.com.br",
    siteName: RADIO_CONFIG.name,
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rádio Doces Memórias | Ao Vivo 24 Horas",
    description:
      "A melhor seleção de flashbacks, MPB de ouro e músicas românticas inesquecíveis.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark scroll-smooth" suppressHydrationWarning>
      <body
        className={`${jakarta.variable} ${playfair.variable} font-sans bg-[#0c0a09] text-stone-100 antialiased selection:bg-amber-500/30 selection:text-amber-200 min-h-screen flex flex-col`}
        suppressHydrationWarning
      >
        <AudioProvider>
          {children}
        </AudioProvider>
        <Analytics />
      </body>
    </html>
  );
}
