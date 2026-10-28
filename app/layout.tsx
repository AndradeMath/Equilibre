import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Equilibre — saúde, conhecimento e bem-estar",
    template: "%s | Equilibre",
  },
  description:
    "Um espaço editorial e educativo sobre saúde feminina, autocuidado, bem-estar e inovação em saúde.",
  applicationName: "Equilibre",
  openGraph: {
    title: "Equilibre — conhecimento para acompanhar o seu ritmo",
    description:
      "Saúde, conhecimento e bem-estar para acompanhar o seu ritmo.",
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
    <html lang="pt-BR" className={inter.variable}>
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
