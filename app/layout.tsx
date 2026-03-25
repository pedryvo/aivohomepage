import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aivolabs.online"),
  title: "Ai-vo | MVPs e automações para processos críticos",
  description:
    "Criamos MVPs operacionais e automações com IA para pequenas e médias empresas ganharem velocidade, clareza e previsibilidade.",
  keywords: [
    "MVP operacional",
    "automação com IA",
    "processos críticos",
    "sistema sob medida",
    "automação de WhatsApp",
    "IA para pequenas empresas",
    "IA para médias empresas",
  ],
  alternates: {
    canonical: "https://aivolabs.online",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "EFjgHyIotr2jEwa5f1zQyizwoHMTXYhevaxgZhFpMik",
  },
  openGraph: {
    title: "Ai-vo | MVPs e automações para processos críticos",
    description:
      "Criamos MVPs operacionais e automações com IA para pequenas e médias empresas ganharem velocidade, clareza e previsibilidade.",
    url: "https://aivolabs.online",
    siteName: "Ai-vo",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Ai-vo Logo",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ai-vo | MVPs e automações para processos críticos",
    description:
      "MVPs operacionais e automações com IA para pequenas e médias empresas.",
    images: ["/opengraph-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${roboto.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
