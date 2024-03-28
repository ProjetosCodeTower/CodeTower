import React from 'react'
import Image from "next/image"

export const Sobre = () => {
    return (
        <div className="container flex">
            <div data-aos="fade-up" className="aos-init aos-animate w-full px-10">
                <p className="mb-2 text-sm font-semibold text-primary">Sobre nós</p>
                <h3 className="mb-8 text-2xl">Somos a primeira empresa júnior do IFG</h3>
                <p className="text font-light">A Code Stacker é uma empresa sem fins lucrativos, visando fomentar o empreendedorismo no Brasil através de projetos de tecnologia da informação de alta qualidade e custo abaixo do mercado. Todo o valor ganho é revertido para a formação profissional dos nossos membros e alunos do Instituto Nacional.</p>
            </div>
            <Image className="hidden h-72 w-full rounded-lg object-cover lg:flex aos-init aos-animate" src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=750&amp;q=80&amp;fm=webp" alt="Imagem de capa do site Code Stacker" data-aos="fade-up" title="Grupo Code Stacker" width="750" height="500" />
        </div>
    )
}
