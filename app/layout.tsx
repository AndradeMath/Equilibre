import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Equilibre — bem-estar no seu próprio ritmo",
    template: "%s | Equilibre",
  },
  description:
    "Um espaço para voltar a você. Descubra um jeito mais leve, possível e presente de cuidar do seu bem-estar.",
  applicationName: "Equilibre",
  openGraph: {
    title: "Equilibre — volte para o seu centro",
    description:
      "Bem-estar com intenção, leveza e presença. Um passo de cada vez já é caminho.",
    type: "website",
    locale: "pt_BR",
    siteName: "Equilibre",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${dmSans.variable} ${cormorant.variable}`}>
      <body>
        <a
          href="#conteudo-principal"
          className="skip-link"
        >
          Pular para o conteúdo
        </a>
        <Header />
        <main id="conteudo-principal">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
