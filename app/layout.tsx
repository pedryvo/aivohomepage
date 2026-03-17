import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Aivo | Sua empresa no piloto automático com IA",
  description: "Automatize seu atendimento no WhatsApp e pare de perder vendas. Criamos sistemas inteligentes para sua empresa escalar com tecnologia e eficiência.",
  openGraph: {
    title: "Aivo | Sua empresa no piloto automático com IA",
    description: "Automatize seu atendimento no WhatsApp e pare de perder vendas. Criamos sistemas inteligentes para sua empresa escalar com tecnologia e eficiência.",
    url: "https://aivo.com.br",
    siteName: "Aivo",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Aivo Logo",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aivo | Sua empresa no piloto automático com IA",
    description: "Automatize seu atendimento no WhatsApp e pare de perder vendas.",
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
      </body>
    </html>
  );
}
