import { ServiceIcon } from "@/components/service-icon";
import { Cloud, Database, PanelsTopLeft, ServerCog, Smartphone } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <section id="home" className="h-screen flex flex-col items-center justify-center">
        <p className="text-center font-semibold uppercase text-primary">Bem vindos à Code Tower</p>
        <h1 className="my-4 text-center text-4xl font-semibold text-dark lg:text-6xl">Inovação em Tecnologia</h1>
        <p className="text-center uppercase">Somos um grupo de estudantes focado em solucionar problemas da sociedade.</p>
      </section>
      <section id="servicos" className="-mt-8 lg:-mt-16 pt-32 flex items-center justify-start">
        <div className="container grid grid-cols-1 lg:grid-cols-4 items-center justify-center text-center  gap-4 divide-y rounded-lg px-4 py-8 lg:divide-none [box-shadow:0_0_100px_#0000000d,0_1px_3px_#0000000d]">
          <span className="h-full flex flex-col items-center justify-start p-4 gap-2">
            <ServiceIcon color={"bg-gray-800"}>
              <PanelsTopLeft color="white" />
            </ServiceIcon>
            <p className="uppercase">Websites</p>
            <p>Desenvolvemos sites para quaisquer modelos de negócio, seja você um profissional autônomo ou empresa de pequeno, médio ou grande porte.</p>
          </span>
          <span className="h-full flex flex-col items-center justify-start p-4 gap-2">
            <ServiceIcon color={"bg-[#407BFF]"}>
              <Smartphone color="white" />
            </ServiceIcon>
            <p className="uppercase">aplicativos</p>
            <p>Desenvolvemos aplicativos ideais para o seu negócio. Através das novas tendências e tecnologias do mercado criamos apps para colocar o seu negócio na palma da mão.</p>
          </span>
          <span className="h-full flex flex-col items-center justify-start gap-2 p-4 ">
            <ServiceIcon color={"bg-[#FF6B6B]"}>
              <ServerCog color="white" />
            </ServiceIcon>
            <p className="uppercase">Sistemas Web</p>
            <p>Desenvolvemos sistemas web voltados para o gerenciamento do seu negócio, focado na melhoria geral do sistema interno da empresa. Sistemas otimizados para o crescimento do seu negócio.</p>
          </span>
          <span className="h-full flex flex-col items-center justify-start p-4 gap-2">
            <ServiceIcon color={"bg-green-400"}>
              <Cloud color="white" />
            </ServiceIcon>
            <p className="uppercase">Hospedagem e Manutenção</p>
            <p>Oferecemos hospedagem e manutenção para seu site ou sistema web.</p>
          </span>
        </div>
      </section>
      <section id="portfolio" className="py-28 bg-[url('/Background.svg')] bg-cover">
        <div className="container z-10">
          <p className="mb-2 text-sm font-semibold text-primary">Portfolio</p>
          <h3 className="mb-4 text-left text-2xl">Conheça nosso trabalho</h3>
          <div className="projects-grid grid grid-cols-1 gap-4 rounded-lg py-4 md:grid-cols-12">
            <div className="group relative flex h-full flex-1 flex-col overflow-hidden rounded-lg aos-init aos-animate" data-aos="fade-left">
              <img className="h-72 w-full object-cover transition-all duration-300 ease-in-out group-hover:scale-105" src="https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?ixlib=rb-4.0.3&amp;q=85&amp;fm=webp&amp;crop=entropy&amp;cs=srgb&amp;w=640" alt="Projeto 1 - Code Stacker" title="Projeto 1 - Code Stacker" width="640" height="427" loading="lazy" />
              <div className="absolute -bottom-full left-0 w-full bg-white/60 px-8 py-4 transition-all duration-300 ease-in-out group-hover:bottom-0">
                <span className="text-xs font-semibold uppercase text-primary">website</span>
                <p className="text-base">Projeto 1</p><span className="text-gray text-xs uppercase">dezembro 2020</span></div></div><div className="group relative flex h-full flex-1 flex-col overflow-hidden rounded-lg aos-init aos-animate" data-aos="fade-left"><img className="h-72 w-full object-cover transition-all duration-300 ease-in-out group-hover:scale-105" src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&amp;q=85&amp;fm=webp&amp;crop=entropy&amp;cs=srgb&amp;w=640" alt="Projeto 2 - Code Stacker" title="Projeto 2 - Code Stacker" width="640" height="427" loading="lazy" />
              <div className="absolute -bottom-full left-0 w-full bg-white/60 px-8 py-4 transition-all duration-300 ease-in-out group-hover:bottom-0">
                <span className="text-xs font-semibold uppercase text-secondary">iot</span>
                <p className="text-base">Projeto 2</p>
                <span className="text-gray text-xs uppercase">dezembro 2020</span>
              </div>
            </div>
            <div className="group relative flex h-full flex-1 flex-col overflow-hidden rounded-lg aos-init aos-animate" data-aos="fade-right">
              <img className="h-72 w-full object-cover transition-all duration-300 ease-in-out group-hover:scale-105" src="https://images.unsplash.com/photo-1434725039720-aaad6dd32dfe?ixlib=rb-4.0.3&amp;q=85&amp;fm=webp&amp;crop=entropy&amp;cs=srgb&amp;w=640" alt="Projeto 3 - Code Stacker" title="Projeto 3 - Code Stacker" width="640" height="427" loading="lazy" />
              <div className="absolute -bottom-full left-0 w-full bg-white/60 px-8 py-4 transition-all duration-300 ease-in-out group-hover:bottom-0">
                <span className="text-xs font-semibold uppercase text-secondary">iot</span>
                <p className="text-base">Projeto 3</p>
                <span className="text-gray text-xs uppercase">dezembro 2020</span>
              </div>
            </div>
            <div className="group relative flex h-full flex-1 flex-col overflow-hidden rounded-lg aos-init aos-animate" data-aos="fade-right">
              <img className="h-72 w-full object-cover transition-all duration-300 ease-in-out group-hover:scale-105" src="https://images.unsplash.com/photo-1511884642898-4c92249e20b6?ixlib=rb-4.0.3&amp;q=85&amp;fm=webp&amp;crop=entropy&amp;cs=srgb&amp;w=640" alt="Projeto 4 - Code Stacker" title="Projeto 4 - Code Stacker" width="640" height="427" loading="lazy" /><div className="absolute -bottom-full left-0 w-full bg-white/60 px-8 py-4 transition-all duration-300 ease-in-out group-hover:bottom-0">
                <span className="text-xs font-semibold uppercase">aplicativos</span>
                <p className="text-base">Projeto 4</p>
                <span className="text-gray text-xs uppercase">dezembro 2020</span>
              </div>
            </div>
            <div className="group relative flex h-full flex-1 flex-col overflow-hidden rounded-lg aos-init aos-animate" data-aos="fade-right">
              <img className="h-72 w-full object-cover transition-all duration-300 ease-in-out group-hover:scale-105" src="https://images.unsplash.com/photo-1511884642898-4c92249e20b6?ixlib=rb-4.0.3&amp;q=85&amp;fm=webp&amp;crop=entropy&amp;cs=srgb&amp;w=640" alt="Projeto 4 - Code Stacker" title="Projeto 4 - Code Stacker" width="640" height="427" loading="lazy" /><div className="absolute -bottom-full left-0 w-full bg-white/60 px-8 py-4 transition-all duration-300 ease-in-out group-hover:bottom-0">
                <span className="text-xs font-semibold uppercase">aplicativos</span>
                <p className="text-base">Projeto 4</p>
                <span className="text-gray text-xs uppercase">dezembro 2020</span>
              </div>
            </div>
            <div className="group relative flex h-full flex-1 flex-col overflow-hidden rounded-lg aos-init aos-animate" data-aos="fade-right">
              <img className="h-72 w-full object-cover transition-all duration-300 ease-in-out group-hover:scale-105" src="https://images.unsplash.com/photo-1511884642898-4c92249e20b6?ixlib=rb-4.0.3&amp;q=85&amp;fm=webp&amp;crop=entropy&amp;cs=srgb&amp;w=640" alt="Projeto 4 - Code Stacker" title="Projeto 4 - Code Stacker" width="640" height="427" loading="lazy" /><div className="absolute -bottom-full left-0 w-full bg-white/60 px-8 py-4 transition-all duration-300 ease-in-out group-hover:bottom-0">
                <span className="text-xs font-semibold uppercase">aplicativos</span>
                <p className="text-base">Projeto 4</p>
                <span className="text-gray text-xs uppercase">dezembro 2020</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="sobre" className="h-screen bg-[url('/Background-white.svg')] bg-cover -mt-20 pt-32 z-10">
        <div className="container">
          Sobre
        </div>
      </section>
      <section id="contato">
        Contato
      </section>
    </main>
  );
}
