import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WhatsappButton } from "@/components/whatsapp-button";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: '400' })

export const metadata: Metadata = {
  title: "Code Tower",
  description: "Empresa júnior de desenvolvimento de software do IFG Anápolis. A Code Tower é uma empresa especializada em desenvolver sites e aplicativos que permitam o crescimento de negócios, de forma a aproveitar todo o potencial que a tecnologia traz para o crescimento dos mesmos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="pt-BR">
      <body>
        <div className="flex h-screen flex-col">
          <Navbar />
          <div className="flex-1">
            {children}
            <WhatsappButton />
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
