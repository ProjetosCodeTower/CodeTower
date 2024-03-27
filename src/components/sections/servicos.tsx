import React from 'react'
import { ServiceIcon } from '../service-icon'
import { Cloud, PanelsTopLeft, ServerCog, Smartphone } from 'lucide-react'

export const Servicos = () => {
    return (
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
    )
}
