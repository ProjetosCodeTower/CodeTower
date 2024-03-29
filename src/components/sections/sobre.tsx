import React from 'react'
import Image from "next/image"

export const Sobre = () => {
    return (
        <div className="container flex max-md:flex-col">
            <div data-aos="fade-up" className="aos-init aos-animate w-full px-10">
                <p className="mb-2 text-sm font-semibold text-primary">Sobre nós</p>
                <h3 className="mb-8 text-2xl">Somos a primeira empresa júnior do IFG</h3>
                <p className="text font-light">A Code Tower é uma empresa sem fins lucrativos, visando fomentar o empreendedorismo no Brasil através de projetos de tecnologia da informação de alta qualidade e custo abaixo do mercado. Todo o valor ganho é revertido para a formação profissional dos nossos membros e alunos do Instituto Federal.</p>
            </div>
            <Image className="h-72 w-full rounded-lg object-cover flex aos-init aos-animate max-md:container max-md:rounded-lg" src="/CodeCurso.JPG" alt="Imagem de capa do site Code Tower" data-aos="fade-up" title="Grupo Code Tower" width="750" height="500" />
        </div>
    )
}
