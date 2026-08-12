"use client"

import Image from "next/image"
import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import {
    CalendarDays,
    CheckCircle2,
    Download,
    ExternalLink,
    Mail,
    Users,
} from "lucide-react"
import { Button } from "../ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { PROCESSO_SELETIVO } from "@/data/processo-seletivo"

export const ProcessoSeletivoPageContent = () => {
    const ps = PROCESSO_SELETIVO

    useEffect(() => {
        AOS.init({ duration: 1200 })
    }, [])

    return (
        <main className="overflow-hidden pt-24">
            <section className="relative isolate w-full overflow-hidden bg-[#0a1020]">
                <Image
                    src={ps.banner}
                    alt=""
                    aria-hidden
                    fill
                    priority
                    sizes="100vw"
                    className="scale-125 object-cover object-right opacity-40 blur-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#0a1020] via-[#152a5e]/90 to-[#407bff]/35" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_45%,rgba(64,123,255,0.38),transparent_62%)]" />

                <div className="container relative z-10 grid grid-cols-1 items-center gap-12 px-4 py-16 lg:grid-cols-2 lg:py-24">
                    <div className="order-2 text-white lg:order-1">
                        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-[#8fb4ff]">
                            Code Tower · IFG Anápolis
                        </p>
                        <h1 className="text-4xl font-bold uppercase leading-tight md:text-5xl xl:text-6xl">
                            Processo Seletivo{" "}
                            <span className="text-[#8fb4ff]">{ps.edicao}</span>
                        </h1>
                        <p className="mt-4 text-xl text-white/90">{ps.slogan}</p>
                        <p className="mt-2 text-white/70">{ps.subtitulo}</p>
                        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                            <Button asChild className="bg-primary font-bold text-white hover:bg-primary/90">
                                <a href={ps.formUrl} target="_blank" rel="noreferrer">
                                    Inscrever-se agora
                                </a>
                            </Button>
                            <Button
                                asChild
                                variant="outline"
                                className="border-white/40 bg-transparent font-bold text-white hover:bg-white/10 hover:text-white"
                            >
                                <a href={ps.editalPdf} target="_blank" rel="noreferrer">
                                    <ExternalLink size={16} className="mr-2" />
                                    Visualizar edital
                                </a>
                            </Button>
                            <Button
                                asChild
                                variant="outline"
                                className="border-white/40 bg-transparent font-bold text-white hover:bg-white/10 hover:text-white"
                            >
                                <a href={ps.editalPdf} download>
                                    <Download size={16} className="mr-2" />
                                    Baixar edital (PDF)
                                </a>
                            </Button>
                        </div>
                        <p className="mt-6 text-sm text-white/70">
                            Inscrições abertas até <strong className="text-white">{ps.inscricaoAte}</strong>
                        </p>
                    </div>

                    <div className="order-1 lg:order-2" data-aos="zoom-in">
                        <div className="relative mx-auto aspect-square w-full max-w-[420px] overflow-hidden rounded-2xl ring-1 ring-white/20 shadow-[0_0_80px_rgba(64,123,255,0.35)] lg:max-w-[480px]">
                            <Image
                                src={ps.banner}
                                alt="Arte do Processo Seletivo Code Tower 2026.1 com a torre da Code Tower"
                                title="Processo Seletivo Code Tower 2026.1"
                                fill
                                priority
                                sizes="(max-width: 1024px) 90vw, 480px"
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[url('/Background-white.svg')] bg-cover py-20">
                <div className="container px-4" data-aos="fade-up">
                    <p className="mb-2 text-center text-sm font-semibold text-primary">
                        Convocação de candidatos
                    </p>
                    <h2 className="mb-6 text-center text-2xl md:text-3xl">Sobre o processo</h2>
                    <p className="mx-auto max-w-3xl text-center text-gray-default">
                        Em {ps.publicacao}, a Code Tower — Empresa Júnior do curso de Ciência da
                        Computação do IFG Câmpus Anápolis — abre o Processo Seletivo {ps.edicao}
                        para recrutar novos membros. O objetivo é buscar talentos para contribuir
                        no desenvolvimento das atividades da empresa júnior. Os aprovados serão
                        convocados ao final do processo e poderão atuar como trainees na diretoria
                        que melhor se encaixar ao seu perfil.
                    </p>
                </div>
            </section>

            <section className="py-16">
                <div className="container grid grid-cols-1 gap-8 px-4 lg:grid-cols-2">
                    <Card data-aos="fade-right" className="border-none shadow-md">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-xl text-primary">
                                <CheckCircle2 size={22} />
                                Requisitos
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="flex flex-col gap-3">
                                {ps.requisitos.map((item) => (
                                    <li key={item} className="flex gap-2 text-sm text-dark">
                                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>

                    <Card data-aos="fade-left" className="border-none shadow-md">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-xl text-primary">
                                <Users size={22} />
                                Perfil desejado
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="flex flex-col gap-3">
                                {ps.perfilDesejado.map((item) => (
                                    <li key={item} className="flex gap-2 text-sm text-dark">
                                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </section>

            <section className="bg-[url('/Background.svg')] bg-cover py-20">
                <div className="container px-4">
                    <p className="mb-2 text-center text-sm font-semibold text-primary">Vagas</p>
                    <h2 className="mb-4 text-center text-2xl md:text-3xl">Diretorias</h2>
                    <p className="mx-auto mb-10 max-w-3xl text-center text-sm text-gray-default">
                        Você pode indicar a diretoria de interesse na inscrição. A alocação final
                        considera compatibilidade de perfil e disponibilidade de vagas.
                    </p>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                        {ps.diretorias.map((diretoria) => (
                            <Card
                                key={diretoria.nome}
                                data-aos="fade-up"
                                className="flex h-full flex-col border-none shadow-md"
                            >
                                <CardHeader>
                                    <CardTitle className="text-lg uppercase text-primary">
                                        {diretoria.nome}
                                    </CardTitle>
                                    <p className="text-xs font-semibold text-secondary">
                                        Vagas: {diretoria.vagas}
                                    </p>
                                </CardHeader>
                                <CardContent className="flex flex-1 flex-col gap-4">
                                    <p className="text-sm text-dark">{diretoria.descricao}</p>
                                    <div>
                                        <p className="mb-2 text-xs font-semibold uppercase text-gray-default">
                                            Requisitos desejáveis
                                        </p>
                                        <ul className="flex flex-col gap-2">
                                            {diretoria.requisitos.map((req) => (
                                                <li key={req} className="text-sm text-dark">
                                                    • {req}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="container px-4">
                    <p className="mb-2 text-center text-sm font-semibold text-primary">Seleção</p>
                    <h2 className="mb-10 text-center text-2xl md:text-3xl">Etapas do processo</h2>
                    <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
                        {ps.etapas.map((etapa, index) => (
                            <Card key={etapa.titulo} data-aos="zoom-in" className="border-none shadow-md">
                                <CardHeader>
                                    <p className="mb-1 text-sm font-bold text-primary">
                                        {String(index + 1).padStart(2, "0")}
                                    </p>
                                    <CardTitle className="text-lg">{etapa.titulo}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-gray-default">{etapa.descricao}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-[url('/Background-sobre.svg')] bg-cover py-20">
                <div className="container px-4" data-aos="fade-up">
                    <p className="mb-2 text-center text-sm font-semibold text-primary">Datas</p>
                    <h2 className="mb-4 flex items-center justify-center gap-2 text-center text-2xl md:text-3xl">
                        <CalendarDays size={28} className="text-primary" />
                        Cronograma
                    </h2>
                    <p className="mx-auto mb-8 max-w-2xl text-center text-sm text-gray-default">
                        As datas podem sofrer alterações. Mudanças serão comunicadas pelo e-mail
                        cadastrado na inscrição.
                    </p>
                    <div className="mx-auto max-w-4xl overflow-x-auto rounded-lg bg-white shadow-md">
                        <table className="w-full min-w-[560px] text-left text-sm">
                            <thead className="bg-dark text-white">
                                <tr>
                                    <th className="px-4 py-3 font-semibold">Data</th>
                                    <th className="px-4 py-3 font-semibold">Etapa</th>
                                    <th className="px-4 py-3 font-semibold">Detalhes</th>
                                </tr>
                            </thead>
                            <tbody>
                                {ps.cronograma.map((item, index) => (
                                    <tr
                                        key={item.etapa}
                                        className={index % 2 === 0 ? "bg-gray-soft" : "bg-white"}
                                    >
                                        <td className="px-4 py-3 font-medium text-primary">{item.data}</td>
                                        <td className="px-4 py-3 font-semibold text-dark">{item.etapa}</td>
                                        <td className="px-4 py-3 text-gray-default">{item.detalhes}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="container px-4">
                    <Card
                        data-aos="zoom-in"
                        className="mx-auto max-w-4xl border-none bg-dark p-6 text-white shadow-lg md:p-10"
                    >
                        <CardHeader className="p-0">
                            <CardTitle className="text-2xl text-white md:text-3xl">
                                Pronto para se candidatar?
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="mt-4 p-0">
                            <p className="text-white/80">
                                Confira se você atende aos requisitos, leia o edital completo e
                                preencha a ficha de inscrição até {ps.inscricaoAte}.
                            </p>
                            <p className="mt-4 text-sm text-white/60">
                                Empresas juniores não remuneram seus membros: a retribuição ocorre
                                por capacitações e treinamentos.
                            </p>
                            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                                <Button asChild className="bg-primary font-bold text-white hover:bg-primary/90">
                                    <a href={ps.formUrl} target="_blank" rel="noreferrer">
                                        Preencher inscrição
                                    </a>
                                </Button>
                                <Button
                                    asChild
                                    variant="outline"
                                    className="border-white/40 bg-transparent font-bold text-white hover:bg-white/10 hover:text-white"
                                >
                                    <a href={ps.editalPdf} target="_blank" rel="noreferrer">
                                        <ExternalLink size={16} className="mr-2" />
                                        Ver edital
                                    </a>
                                </Button>
                                <Button
                                    asChild
                                    variant="outline"
                                    className="border-white/40 bg-transparent font-bold text-white hover:bg-white/10 hover:text-white"
                                >
                                    <a href={ps.editalPdf} download>
                                        <Download size={16} className="mr-2" />
                                        Baixar PDF
                                    </a>
                                </Button>
                                <Button
                                    asChild
                                    variant="outline"
                                    className="border-white/40 bg-transparent font-bold text-white hover:bg-white/10 hover:text-white"
                                >
                                    <a href={ps.editalDocx} download>
                                        <Download size={16} className="mr-2" />
                                        Baixar DOCX
                                    </a>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>

            <section className="bg-[url('/Background-contato.svg')] bg-cover py-16">
                <div className="container px-4 text-center" data-aos="fade-up">
                    <h2 className="mb-4 text-2xl">Dúvidas?</h2>
                    <p className="mx-auto mb-6 max-w-2xl text-gray-default">
                        Em caso de dúvidas sobre cronograma, etapas ou requisitos, envie um e-mail
                        com o assunto <strong>dúvida</strong>.
                    </p>
                    <Button asChild className="font-bold text-white">
                        <a href={`mailto:${ps.emailDuvidas}?subject=dúvida`}>
                            <Mail size={16} className="mr-2" />
                            {ps.emailDuvidas}
                        </a>
                    </Button>
                </div>
            </section>
        </main>
    )
}
