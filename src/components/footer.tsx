import React from 'react'
import Image from 'next/image'
import { Instagram, Linkedin, Mail } from 'lucide-react'

export const Footer = () => {

    const date = new Date();
    const year = date.getFullYear();

    return (
        <footer className='w-full bg-[#292D34] py-4 pt-8 text-white'>
            <div className='container mx-auto flex flex-wrap justify-around gap-x-12 lg:flex-row lg:flex-nowrap'>
                <div className='flex flex-col w-full'>
                    <div className='flex text-center items-start justify-start'>
                        <Image
                            src={"/logo.png"}
                            alt='Code Tower Logo Photo'
                            className='inline h-14 w-auto align-middle'
                            width={0}
                            height={0}
                            sizes='100vw'
                        />
                        <p className='ml-2 inline align-middle text-3xl uppercase'>CODE <span className='font-bold'>TOWER</span></p>
                    </div>
                    <p className='my-4'>
                        A Code Tower é uma empresa sem fins lucrativos, visando fomentar o empreendedorismo no Brasil através de projetos de tecnologia da informação de alta qualidade e custo abaixo do mercado. Todo o valor ganho é revertido para a formação profissional dos nossos membros e alunos do Instituto Federal.
                    </p>
                    <p>
                        CNPJ: 39.895.766/0001-17
                    </p>
                </div>
                <div className='flex flex-col my-8 w-full lg:my-0'>
                    <p className='mb-4 text-center text-xl'>Links úteis</p>
                    <ul className='flex flex-col gap-y-2'>
                        <li>
                            <a href="/processo-seletivo" className="hover:text-primary">Processo seletivo</a>
                        </li>
                        <li>
                            <a href="/#blog" className="hover:text-primary">Blog</a>
                        </li>
                    </ul>
                </div>
                <div className='flex flex-col w-full'>
                    <p className='mb-4 text-center text-xl'>Contato</p>
                    <ul className='flex flex-col gap-y-2'>
                        <li><a className=' inline-flex items-center font-light hover:text-primary gap-2' target='_blank' rel="noreferrer" href="https://www.instagram.com/codetower.ej/"><Instagram /> Instagram</a></li>
                        <li><a className=' inline-flex items-center font-light hover:text-primary gap-2' target='_blank' rel="noreferrer" href="https://www.linkedin.com/company/78037320/admin/feed/posts/"><Linkedin /> Linkedin</a></li>
                        <li><a className=' inline-flex items-center font-light hover:text-primary gap-2' href="mailto:contato@codetower.com.br"><Mail /> Email</a></li>
                    </ul>
                </div>
            </div>

            <div className='text-center mt-8'>
                <p>Design by <a href="https://www.baraus.dev/" target='_blank' rel="noreferrer">@Baraus</a></p>
                <p>Copyright © {year}, Code Tower</p>
            </div>
        </footer>
    )
}
