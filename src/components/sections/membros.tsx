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
                        <Image width={0} height={0} sizes='100vw' className="mb-4 h-64 w-full rounded-lg object-cover lg:h-48" src="https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-4.0.3&amp;q=85&amp;fm=webp&amp;crop=entropy&amp;cs=srgb&amp;w=640" title="Membro 1 - Presidente" alt="Membro 1 - Presidente" />
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
                        <Image width={0} height={0} sizes='100vw' className="mb-4 h-64 w-full rounded-lg object-cover lg:h-48" src="https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-4.0.3&amp;q=85&amp;fm=webp&amp;crop=entropy&amp;cs=srgb&amp;w=640" title="Membro 1 - Presidente" alt="Membro 1 - Presidente" />
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
                        <Image width={0} height={0} sizes='100vw' className="mb-4 h-64 w-full rounded-lg object-cover lg:h-48" src="https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-4.0.3&amp;q=85&amp;fm=webp&amp;crop=entropy&amp;cs=srgb&amp;w=640" title="Membro 1 - Presidente" alt="Membro 1 - Presidente" />
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
                        <Image width={0} height={0} sizes='100vw' className="mb-4 h-64 w-full rounded-lg object-cover lg:h-48" src="https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-4.0.3&amp;q=85&amp;fm=webp&amp;crop=entropy&amp;cs=srgb&amp;w=640" title="Membro 1 - Presidente" alt="Membro 1 - Presidente" />
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
                        <Image width={0} height={0} sizes='100vw' className="mb-4 h-64 w-full rounded-lg object-cover lg:h-48" src="https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-4.0.3&amp;q=85&amp;fm=webp&amp;crop=entropy&amp;cs=srgb&amp;w=640" title="Membro 1 - Presidente" alt="Membro 1 - Presidente" />
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
                        <Image width={0} height={0} sizes='100vw' className="mb-4 h-64 w-full rounded-lg object-cover lg:h-48" src="https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-4.0.3&amp;q=85&amp;fm=webp&amp;crop=entropy&amp;cs=srgb&amp;w=640" title="Membro 1 - Presidente" alt="Membro 1 - Presidente" />
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
                        <Image width={0} height={0} sizes='100vw' className="mb-4 h-64 w-full rounded-lg object-cover lg:h-48" src="https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-4.0.3&amp;q=85&amp;fm=webp&amp;crop=entropy&amp;cs=srgb&amp;w=640" title="Membro 1 - Presidente" alt="Membro 1 - Presidente" />
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
