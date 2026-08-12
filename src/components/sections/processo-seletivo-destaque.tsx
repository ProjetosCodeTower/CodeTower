import Image from "next/image"
import { Download, ExternalLink, Megaphone } from "lucide-react"
import { Button } from "../ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card"
import { PROCESSO_SELETIVO } from "@/data/processo-seletivo"

export const ProcessoSeletivoDestaque = () => {
    const ps = PROCESSO_SELETIVO

    return (
        <div className="container px-4">
            <Card
                data-aos="zoom-in"
                className="overflow-hidden border-none bg-dark text-white shadow-lg [box-shadow:0_0_100px_#00000014,0_1px_3px_#00000014]"
            >
                <div className="grid grid-cols-1 items-stretch lg:grid-cols-2">
                    <div className="relative flex min-h-[320px] w-full items-center justify-center bg-gradient-to-br from-[#0a1020] via-[#152a5e] to-[#407bff]/40 p-6 lg:min-h-full">
                        <div className="relative aspect-square w-full max-w-[360px]">
                            <Image
                                src={ps.banner}
                                alt="Processo Seletivo Code Tower 2026.1 — Inscrições abertas"
                                title="Processo Seletivo Code Tower 2026.1"
                                fill
                                sizes="(max-width: 1024px) 90vw, 360px"
                                className="object-contain drop-shadow-[0_0_35px_rgba(64,123,255,0.35)]"
                                priority
                            />
                        </div>
                    </div>

                    <div className="flex flex-col justify-between p-6 md:p-8">
                        <CardHeader className="p-0">
                            <p className="mb-2 flex items-center gap-2 text-sm font-semibold uppercase text-primary">
                                <Megaphone size={16} />
                                Processo seletivo aberto
                            </p>
                            <CardTitle className="text-2xl font-bold text-white md:text-3xl">
                                {ps.titulo}
                            </CardTitle>
                        </CardHeader>

                        <CardContent className="my-6 p-0">
                            <p className="text-lg text-white/90">{ps.slogan}</p>
                            <p className="mt-2 text-white/70">{ps.subtitulo}</p>
                            <p className="mt-4 text-sm text-white/80">
                                Inscrições até <strong className="text-white">{ps.inscricaoAte}</strong>.
                                Confira o edital, as vagas e as etapas do processo.
                            </p>
                        </CardContent>

                        <CardFooter className="flex flex-col items-stretch gap-3 p-0 sm:flex-row sm:flex-wrap">
                            <Button asChild className="bg-primary font-bold text-white hover:bg-primary/90">
                                <a href="/processo-seletivo">Saiba mais</a>
                            </Button>
                            <Button
                                asChild
                                variant="outline"
                                className="border-white/30 bg-transparent font-bold text-white hover:bg-white/10 hover:text-white"
                            >
                                <a href={ps.editalPdf} target="_blank" rel="noreferrer">
                                    <ExternalLink size={16} className="mr-2" />
                                    Ver edital
                                </a>
                            </Button>
                            <Button
                                asChild
                                variant="outline"
                                className="border-white/30 bg-transparent font-bold text-white hover:bg-white/10 hover:text-white"
                            >
                                <a href={ps.editalPdf} download>
                                    <Download size={16} className="mr-2" />
                                    Baixar edital
                                </a>
                            </Button>
                            <Button asChild className="bg-white font-bold text-dark hover:bg-white/90">
                                <a href={ps.formUrl} target="_blank" rel="noreferrer">
                                    Inscrever-se
                                </a>
                            </Button>
                        </CardFooter>
                    </div>
                </div>
            </Card>
        </div>
    )
}
