'use client'
import { Artigos } from "@/components/sections/artigos";
import { Contato } from "@/components/sections/contato";
import { Hero } from "@/components/sections/home-hero";
import { Membros } from "@/components/sections/membros";
import { Portfolio } from "@/components/sections/portfolio";
import { Servicos } from "@/components/sections/servicos";
import { Sobre } from "@/components/sections/sobre";
import { ServiceIcon } from "@/components/service-icon";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { InstagramLogo, LinkedinLogo } from "@phosphor-icons/react";
import { Cloud, PanelsTopLeft, ServerCog, Smartphone } from "lucide-react";
import Image from "next/image";
import React from 'react';

export default function Home() {
  return (
    <main className="">
      <section id="home" className="h-screen flex flex-col items-center justify-center">
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
