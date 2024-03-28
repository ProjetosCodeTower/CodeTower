import React from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'
import Image from 'next/image'

export const Membros = () => {
    return (
        <div className="container flex flex-col items-center">
            <h3 className="mb-8 text-center text-2xl">Quem somos</h3>

            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 items-center justify-center">
                <Card className="border-none flex-1">
                    <CardHeader>
                        <Image width={0} height={0} sizes='100vw' className="mb-4 h-64 w-full rounded-lg object-cover lg:h-48" src="/membros/presidente.png" title="Membro 1 - Presidente" alt="Membro 1 - Presidente" />
                        <CardTitle className="text-sm font-bold uppercase text-secondary">Presidente</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>Carlos Curcino</p>
                    </CardContent>
                    <CardFooter>
                        <div className="flex gap-x-2">
                            <a target="_blank" rel="noreferrer" href="https://twitter.com/member1" className="text-lg hover:text-secondary">
                                <InstagramLogo size={18} />
                                <span className="sr-only">Instagram</span>
                            </a>
                            <a target="_blank" rel="noreferrer" href="https://linkedin.com/in/member1" className="text-lg hover:text-secondary">
                                <LinkedinLogo size={18} />
                                <span className="sr-only">LinkedIn</span></a>
                        </div>
                    </CardFooter>
                </Card>
                <Card className="border-none flex-1">
                    <CardHeader>
                        <Image width={0} height={0} sizes='100vw' className="mb-4 h-64 w-full rounded-lg object-cover lg:h-48" src="/membros/vp.png" title="Membro 2 - Vice-Presidente" alt="Membro 2 - Vice-Presidente" />
                        <CardTitle className="text-sm font-bold uppercase text-primary">Vice-presidente</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>Heitor Barreto</p>
                    </CardContent>
                    <CardFooter>
                        <div className="flex gap-x-2">
                            <a target="_blank" rel="noreferrer" href="https://twitter.com/member1" className="text-lg hover:text-secondary">
                                <InstagramLogo size={18} />
                                <span className="sr-only">Instagram</span>
                            </a>
                            <a target="_blank" rel="noreferrer" href="https://linkedin.com/in/member1" className="text-lg hover:text-secondary">
                                <LinkedinLogo size={18} />
                                <span className="sr-only">LinkedIn</span></a>
                        </div>
                    </CardFooter>
                </Card>
                <Card className="border-none flex-1">
                    <CardHeader>
                        <Image width={0} height={0} sizes='100vw' className="mb-4 h-64 w-full rounded-lg object-cover lg:h-48" src="/membros/admfin.png" title="Membro 3 - Administrativo financeiro" alt="Membro 3 - Administrativo financeiro" />
                        <CardTitle className="text-sm font-bold uppercase text-tertiary">Administrativo Financeiro</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>Vinicius Oliveira</p>
                    </CardContent>
                    <CardFooter>
                        <div className="flex gap-x-2">
                            <a target="_blank" rel="noreferrer" href="https://twitter.com/member1" className="text-lg hover:text-secondary">
                                <InstagramLogo size={18} />
                                <span className="sr-only">Instagram</span>
                            </a>
                            <a target="_blank" rel="noreferrer" href="https://linkedin.com/in/member1" className="text-lg hover:text-secondary">
                                <LinkedinLogo size={18} />
                                <span className="sr-only">LinkedIn</span></a>
                        </div>
                    </CardFooter>
                </Card>
                <Card className="border-none flex-1">
                    <CardHeader>
                        <Image width={0} height={0} sizes='100vw' className="mb-4 h-64 w-full rounded-lg object-cover lg:h-48" src="/membros/gp.png" title="Membro 4 - Gestão de pessoas" alt="Membro 4 - Gestão de pessoas" />
                        <CardTitle className="text-sm font-bold uppercase text-quaternary">Gestão de Pessoas</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>Caios Sifuentes</p>
                    </CardContent>
                    <CardFooter>
                        <div className="flex gap-x-2">
                            <a target="_blank" rel="noreferrer" href="https://twitter.com/member1" className="text-lg hover:text-secondary">
                                <InstagramLogo size={18} />
                                <span className="sr-only">Instagram</span>
                            </a>
                            <a target="_blank" rel="noreferrer" href="https://linkedin.com/in/member1" className="text-lg hover:text-secondary">
                                <LinkedinLogo size={18} />
                                <span className="sr-only">LinkedIn</span></a>
                        </div>
                    </CardFooter>
                </Card>
                <Card className="border-none flex-1">
                    <CardHeader>
                        <Image width={0} height={0} sizes='100vw' className="mb-4 h-64 w-full rounded-lg object-cover lg:h-48" src="/membros/marketing.png" title="Membro 5 - Marketing" alt="Membro 5 - Marketing" />
                        <CardTitle className="text-sm font-bold uppercase text-blue-800">Marketing</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>Elian Magno</p>
                    </CardContent>
                    <CardFooter>
                        <div className="flex gap-x-2">
                            <a target="_blank" rel="noreferrer" href="https://twitter.com/member1" className="text-lg hover:text-secondary">
                                <InstagramLogo size={18} />
                                <span className="sr-only">Instagram</span>
                            </a>
                            <a target="_blank" rel="noreferrer" href="https://linkedin.com/in/member1" className="text-lg hover:text-secondary">
                                <LinkedinLogo size={18} />
                                <span className="sr-only">LinkedIn</span></a>
                        </div>
                    </CardFooter>
                </Card>
                <Card className="border-none flex-1">
                    <CardHeader>
                        <Image width={0} height={0} sizes='100vw' className="mb-4 h-64 w-full rounded-lg object-cover lg:h-48" src="/membros/comercial.png" title="Membro 6 - Comercial" alt="Membro 6 - Comercial" />
                        <CardTitle className="text-sm font-bold uppercase text-red-500">Comercial</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>Pattric Vintter</p>
                    </CardContent>
                    <CardFooter>
                        <div className="flex gap-x-2">
                            <a target="_blank" rel="noreferrer" href="https://twitter.com/member1" className="text-lg hover:text-secondary">
                                <InstagramLogo size={18} />
                                <span className="sr-only">Instagram</span>
                            </a>
                            <a target="_blank" rel="noreferrer" href="https://linkedin.com/in/member1" className="text-lg hover:text-secondary">
                                <LinkedinLogo size={18} />
                                <span className="sr-only">LinkedIn</span></a>
                        </div>
                    </CardFooter>
                </Card>
                <Card className="border-none flex-1">
                    <CardHeader>
                        <Image width={0} height={0} sizes='100vw' className="mb-4 h-64 w-full rounded-lg object-cover lg:h-48" src="/membros/projetos.png" title="Membro 7 - Projetos" alt="Membro 7 - Projetos" />
                        <CardTitle className="text-sm font-bold uppercase text-gray-600">Projetos</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>Victor Correa</p>
                    </CardContent>
                    <CardFooter>
                        <div className="flex gap-x-2">
                            <a target="_blank" rel="noreferrer" href="https://twitter.com/member1" className="text-lg hover:text-secondary">
                                <InstagramLogo size={18} />
                                <span className="sr-only">Instagram</span>
                            </a>
                            <a target="_blank" rel="noreferrer" href="https://linkedin.com/in/member1" className="text-lg hover:text-secondary">
                                <LinkedinLogo size={18} />
                                <span className="sr-only">LinkedIn</span></a>
                        </div>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}
