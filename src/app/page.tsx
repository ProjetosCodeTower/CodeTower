'use client'
import { Artigos } from "@/components/sections/artigos";
import { Contato } from "@/components/sections/contato";
import { Hero } from "@/components/sections/home-hero";
import { Membros } from "@/components/sections/membros";
import { Portfolio } from "@/components/sections/portfolio";
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
    <main className="">
      <section data-aos="fade-in" id="home" className="h-screen flex flex-col items-center justify-center">
        <Hero />
      </section>
      <section id="servicos" className="-mt-8 lg:-mt-16 pt-32 flex items-center justify-start">
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
