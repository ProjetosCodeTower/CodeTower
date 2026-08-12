import { ProcessoSeletivoPageContent } from "@/components/sections/processo-seletivo-page"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Processo Seletivo 2026.1 | Code Tower",
    description:
        "Inscrições abertas para o Processo Seletivo 2026.1 da Code Tower, Empresa Júnior de Ciência da Computação do IFG Anápolis. Confira o edital, vagas e cronograma.",
    openGraph: {
        title: "Processo Seletivo 2026.1 | Code Tower",
        description:
            "Construa soluções. Desenvolva seu futuro. Faça parte da Empresa Júnior do IFG.",
        images: ["/processo-seletivo/banner.jpg"],
    },
}

export default function ProcessoSeletivoPage() {
    return <ProcessoSeletivoPageContent />
}
