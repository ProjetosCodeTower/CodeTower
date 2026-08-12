'use client'
import { Artigos } from "@/components/sections/artigos";
import { Contato } from "@/components/sections/contato";
import { Hero } from "@/components/sections/home-hero";
import { Membros } from "@/components/sections/membros";
import { Portfolio } from "@/components/sections/portfolio";
import { ProcessoSeletivoDestaque } from "@/components/sections/processo-seletivo-destaque";
import { Servicos } from "@/components/sections/servicos";
import { Sobre } from "@/components/sections/sobre";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, [])

  return (
    <main className="overflow-hidden">
      <section data-aos="fade-in" id="home" className="h-screen flex flex-col items-center justify-center">
        <Hero />
      </section>
      <section id="processo-seletivo" className="-mt-4 pt-8 pb-8 lg:-mt-10 lg:pt-12">
        <ProcessoSeletivoDestaque />
      </section>
      <section id="servicos" className="pt-24 flex items-center justify-start lg:pt-28">
        <Servicos />
      </section>
      <section id="portfolio" className="py-28 bg-[url('/Background.svg')] bg-cover">
        <Portfolio />
      </section>
      <section id="blog" className="h-full bg-[url('/Background-white.svg')] bg-cover -mt-20 py-32 z-10">
        <Artigos />
      </section>
      <section id="sobre" className="h-full bg-[url('/Background-sobre.svg')] bg-cover pt-32 z-10">
        <Sobre />
        <div id="membros" className="py-32 z-10">
          <Membros />
        </div>
      </section>
      <section id="contato" className="bg-[url('/Background-contato.svg')] bg-cover -mt-20 py-32">
        <Contato />
      </section>
    </main>
  );
}
