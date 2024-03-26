import { ServiceIcon } from "@/components/service-icon";
import { Cloud, Database, PanelsTopLeft, ServerCog, Smartphone } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="container">
      <section id="home" className="h-screen flex flex-col items-center justify-center">
        <p className="text-center font-semibold uppercase text-primary">Bem vindos à Code Tower</p>
        <h1 className="my-4 text-center text-4xl font-semibold text-dark lg:text-6xl">Inovação em Tecnologia</h1>
        <p className="text-center uppercase">Somos um grupo de estudantes focado em solucionar problemas da sociedade.</p>
      </section>
      <section id="servicos" className="-mt-8 lg:-mt-16 pt-32 flex items-center justify-start">
        <div className="grid grid-cols-1 lg:grid-cols-4 items-center justify-center text-center  gap-4 divide-y rounded-lg px-4 py-8 lg:divide-none [box-shadow:0_0_100px_#0000000d,0_1px_3px_#0000000d]">
          <span className="h-full flex flex-col items-center justify-start p-4 gap-2">
            <ServiceIcon color={"bg-gray-800"}>
              <PanelsTopLeft color="white" />
            </ServiceIcon>
            <p className="uppercase">Websites</p>
            <p>Desenvolvemos sites para quaisquer modelos de negócio, seja você um profissional autônomo ou empresa de pequeno, médio ou grande porte.</p>
          </span>
          <span className="h-full flex flex-col items-center justify-start p-4 gap-2">
            <ServiceIcon color={"bg-[#407BFF]"}>
              <Smartphone />
            </ServiceIcon>
            <p className="uppercase">aplicativos</p>
            <p>Desenvolvemos aplicativos ideais para o seu negócio. Através das novas tendências e tecnologias do mercado criamos apps para colocar o seu negócio na palma da mão.</p>
          </span>
          <span className="h-full flex flex-col items-center justify-start gap-2 p-4 ">
            <ServiceIcon color={"bg-[#FF6B6B]"}>
              <ServerCog />
            </ServiceIcon>
            <p className="uppercase">Sistemas Web</p>
            <p>Desenvolvemos sistemas web voltados para o gerenciamento do seu negócio, focado na melhoria geral do sistema interno da empresa. Sistemas otimizados para o crescimento do seu negócio.</p>
          </span>
          <span className="h-full flex flex-col items-center justify-start p-4 gap-2">
            <ServiceIcon color={"bg-green-400"}>
              <Cloud />
            </ServiceIcon>
            <p className="uppercase">Hospedagem e Manutenção</p>
            <p>Desenvolvemos aplicativos ideais para o seu negócio. Através das novas tendências e tecnologias do mercado criamos apps para colocar o seu negócio na palma da mão.</p>
          </span>
        </div>
      </section>
      <section id="portfolio">
        Portfólio
      </section>
      <section id="sobre">
        Sobre
      </section>
      <section id="contato">
        Contato
      </section>
    </main>
  );
}
