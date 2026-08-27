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
  title: "Rádio Doces Memórias | A Casa da Jovem Guarda & do Iê-Iê-Iê",
  description:
    "Ouça a Rádio Doces Memórias ao vivo! A rádio 100% dedicada à Jovem Guarda no Brasil: Roberto Carlos, Erasmo Carlos, Wanderléa, The Fevers, Renato e Seus Blue Caps, Ronnie Von, Golden Boys e os maiores sucessos dos anos 60. É uma brasa, mora!",
  keywords: [
    "Jovem Guarda",
    "Rádio Jovem Guarda",
    "Rádio Doces Memórias",
    "Iê-Iê-Iê",
    "Roberto Carlos Anos 60",
    "Erasmo Carlos Tremendão",
    "Wanderléa Ternurinha",
    "Renato e Seus Blue Caps",
    "The Fevers",
    "Golden Boys",
    "Os Incríveis",
    "Ronnie Von",
    "Jerry Adriani",
    "Eduardo Araújo",
    "Cely Campello",
    "Leno e Lílian",
    "Rock Brasileiro Anos 60",
    "É uma brasa mora",
  ],
  authors: [{ name: "Rádio Doces Memórias" }],
  creator: "Rádio Doces Memórias",
  publisher: "Rádio Doces Memórias",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Rádio Doces Memórias | A Casa da Jovem Guarda & do Iê-Iê-Iê",
    description:
      "É uma brasa, mora! Transmissão 24 horas dos maiores clássicos da Jovem Guarda brasileira: Roberto, Erasmo, Wanderléa, The Fevers, Blue Caps e muito mais.",
    url: "https://radiodocessmemorias.com.br",
    siteName: RADIO_CONFIG.name,
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rádio Doces Memórias | 100% Jovem Guarda",
    description:
      "A rádio dedicada ao movimento da Jovem Guarda brasileira. Os grandes sucessos dos anos 60 ao vivo 24 horas.",
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
