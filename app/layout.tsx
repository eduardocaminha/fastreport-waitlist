import "./globals.css";
import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ 
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-inter"
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-outfit"
});

export const metadata: Metadata = {
  title: "FastReport - Lista de Espera | MedLabz",
  description:
    "Entre na lista de espera do FastReport, a solução simples para laudar mais rápido com inteligência artificial. Desenvolvido pela MedLabz.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark" suppressHydrationWarning>
      <meta property="og:image" content="/opengraph-image.png" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1280" />
      <meta property="og:image:height" content="832" />
      <meta
        property="og:site_name"
        content="FastReport - Lista de Espera | MedLabz"
      />
      <meta
        property="og:url"
        content="https://www.medlabz.com.br"
      />
      <meta name="twitter:image" content="/twitter-image.png" />
      <meta name="twitter:image:type" content="image/png" />
      <meta name="twitter:image:width" content="1280" />
      <meta name="twitter:image:height" content="832" />
      <body className={`${inter.variable} ${outfit.variable} font-sans`}>
        {children}
        <Toaster richColors position="top-center" />
        <Analytics />
      </body>
    </html>
  );
}
