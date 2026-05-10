'use client'
import React from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'
import Image from 'next/image'

export const Membros = () => {
    return (
        <div className="container flex flex-col items-center">
            <h3 className="mb-8 text-center text-2xl">Quem somos</h3>

            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 items-center justify-center">
                <Card data-aos="fade-up" className="border-none flex-1">
                    <CardHeader>
                        <Image width={0} height={0} sizes='100vw' className="mb-4 h-64 w-full rounded-lg object-cover lg:h-48" src="/membros/presidente.png" title="Membro 1 - Presidente" alt="Membro 1 - Presidente" />
                        <CardTitle className="text-sm font-bold uppercase text-secondary">Presidente</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>Davi J. Nunes</p>
                    </CardContent>
                    <CardFooter>
                        <div className="flex gap-x-2">
                            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/davij_nunes/" className="text-lg hover:text-secondary">
                                <InstagramLogo size={18} />
                                <span className="sr-only">Instagram</span>
                            </a>
                            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/davi-josé-nunes-82b82b367?utm_source=share_via&utm_content=profile&utm_medium=member_android" className="text-lg hover:text-secondary">
                                <LinkedinLogo size={18} />
                                <span className="sr-only">LinkedIn</span></a>
                        </div>
                    </CardFooter>
                </Card>
                <Card data-aos="fade-up" className="border-none flex-1">
                    <CardHeader>
                        <Image width={0} height={0} sizes='100vw' className="mb-4 h-64 w-full rounded-lg object-cover lg:h-48" src="/membros/vp.png" title="Membro 2 - Vice-Presidente" alt="Membro 2 - Vice-Presidente" />
                        <CardTitle className="text-sm font-bold uppercase text-primary">Vice-presidente</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>Caio César</p>
                    </CardContent>
                    <CardFooter>
                        <div className="flex gap-x-2">
                            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/caiocesar.sifuentes/" className="text-lg hover:text-secondary">
                                <InstagramLogo size={18} />
                                <span className="sr-only">Instagram</span>
                            </a>
                            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/caiosifuentes" className="text-lg hover:text-secondary">
                                <LinkedinLogo size={18} />
                                <span className="sr-only">LinkedIn</span></a>
                        </div>
                    </CardFooter>
                </Card>
                <Card data-aos="fade-up" className="border-none flex-1">
                    <CardHeader>
                        <Image width={0} height={0} sizes='100vw' className="mb-4 h-64 w-full rounded-lg object-cover lg:h-48" src="/membros/admfin.png" title="Membro 3 - Administrativo financeiro" alt="Membro 3 - Administrativo financeiro" />
                        <CardTitle className="text-sm font-bold uppercase text-tertiary">Adm Financeiro</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>Gabriel Nogueira</p>
                    </CardContent>
                    <CardFooter>
                        <div className="flex gap-x-2">
                            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/biel.rlk01?igsh=MWlhbHN5MHBlYnMyaQ==" className="text-lg hover:text-secondary">
                                <InstagramLogo size={18} />
                                <span className="sr-only">Instagram</span>
                            </a>
                            <a target="_blank" rel="noreferrer" href="" className="text-lg hover:text-secondary">
                                <LinkedinLogo size={18} />
                                <span className="sr-only">LinkedIn</span></a>
                        </div>
                    </CardFooter>
                </Card>
                <Card data-aos="fade-up" className="border-none flex-1">
                    <CardHeader>
                        <Image width={0} height={0} sizes='100vw' className="mb-4 h-64 w-full rounded-lg object-cover lg:h-48" src="/membros/gp.png" title="Membro 4 - Gestão de pessoas" alt="Membro 4 - Gestão de pessoas" />
                        <CardTitle className="text-sm font-bold uppercase text-quaternary">Gestão de Pessoas</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>Rodrigo C. Diolindo</p>
                    </CardContent>
                    <CardFooter>
                        <div className="flex gap-x-2">
                            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/drigo_diolindo?igsh=MTJtdXdncWdqcjRkcg==" className="text-lg hover:text-secondary">
                                <InstagramLogo size={18} />
                                <span className="sr-only">Instagram</span>
                            </a>
                            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/rodrigo-diolindo-6aa731376" className="text-lg hover:text-secondary">
                                <LinkedinLogo size={18} />
                                <span className="sr-only">LinkedIn</span></a>
                        </div>
                    </CardFooter>
                </Card>
                <Card data-aos="fade-up" className="border-none flex-1">
                    <CardHeader>
                        <Image width={0} height={0} sizes='100vw' className="mb-4 h-64 w-full rounded-lg object-cover lg:h-48" src="/membros/marketing.png" title="Membro 5 - Marketing" alt="Membro 5 - Marketing" />
                        <CardTitle className="text-sm font-bold uppercase text-blue-800">Marketing</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>Raiff T. Batista</p>
                    </CardContent>
                    <CardFooter>
                        <div className="flex gap-x-2">
                            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/raiff_gabriel_tb/" className="text-lg hover:text-secondary">
                                <InstagramLogo size={18} />
                                <span className="sr-only">Instagram</span>
                            </a>
                            <a target="_blank" rel="noreferrer" href="https://br.linkedin.com/in/raiff-gabriel-teixeira-batista-85a224286" className="text-lg hover:text-secondary">
                                <LinkedinLogo size={18} />
                                <span className="sr-only">LinkedIn</span></a>
                        </div>
                    </CardFooter>
                </Card>
                <Card data-aos="fade-up" className="border-none flex-1">
                    <CardHeader>
                        <Image width={0} height={0} sizes='100vw' className="mb-4 h-64 w-full rounded-lg object-cover lg:h-48" src="/membros/comercial.png" title="Membro 6 - Comercial" alt="Membro 6 - Comercial" />
                        <CardTitle className="text-sm font-bold uppercase text-red-500">Comercial</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>Wallace Jesus</p>
                    </CardContent>
                    <CardFooter>
                        <div className="flex gap-x-2">
                            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/codetower.ej" className="text-lg hover:text-secondary">
                                <InstagramLogo size={18} />
                                <span className="sr-only">Instagram</span>
                            </a>
                            <a target="_blank" rel="noreferrer" href="" className="text-lg hover:text-secondary">
                                <LinkedinLogo size={18} />
                                <span className="sr-only">LinkedIn</span></a>
                        </div>
                    </CardFooter>
                </Card>
                <Card data-aos="fade-up" className="border-none flex-1">
                    <CardHeader>
                        <Image width={0} height={0} sizes='100vw' className="mb-4 h-64 w-full rounded-lg object-cover lg:h-48" src="/membros/projetos.png" title="Membro 7 - Projetos" alt="Membro 7 - Projetos" />
                        <CardTitle className="text-sm font-bold uppercase text-gray-600">Projetos</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>Guilherme do Vale</p>
                    </CardContent>
                    <CardFooter>
                        <div className="flex gap-x-2">
                            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/gvf1015/" className="text-lg hover:text-secondary">
                                <InstagramLogo size={18} />
                                <span className="sr-only">Instagram</span>
                            </a>
                            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/guilherme-do-vale-fl%C3%A1vio-894154205/" className="text-lg hover:text-secondary">
                                <LinkedinLogo size={18} />
                                <span className="sr-only">LinkedIn</span></a>
                        </div>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}
