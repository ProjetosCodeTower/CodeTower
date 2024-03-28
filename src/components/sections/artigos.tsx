import React from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'
import Image from 'next/image'

export const Artigos = () => {
    return (
        <div className="container">
            <p className="mb-2 text-center text-sm font-semibold text-primary">Atualizações e Novidades</p>
            <h3 className="mb-8 text-center text-2xl">Artigos recentes</h3>

            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center px-8">
                <Card className="border-none flex-1">
                    <CardHeader>
                        <Image width={0} height={0} sizes='100vw' className="mb-4 h-[290px] w-full object-cover lg:h-48" src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" title="Membro 1 - Presidente" alt="Membro 1 - Presidente" />
                        <CardTitle className="text-sm font-bold uppercase text-primary">Titulo</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>Why you should start using Figma for prototyping.</p>
                    </CardContent>
                    <CardFooter>
                        <p>05 June 2020</p>
                    </CardFooter>
                </Card>
                <Card className="border-none flex-1">
                    <CardHeader>
                        <Image width={0} height={0} sizes='100vw' className="mb-4 h-64 w-full object-cover lg:h-48" src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" title="Membro 1 - Presidente" alt="Membro 1 - Presidente" />
                        <CardTitle className="text-sm font-bold uppercase text-primary">Titulo</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>Why you should start using Figma for prototyping.</p>
                    </CardContent>
                    <CardFooter>
                        <p>05 June 2020</p>
                    </CardFooter>
                </Card>
                <Card className="border-none flex-1">
                    <CardHeader>
                        <Image width={0} height={0} sizes='100vw' className="mb-4 h-64 w-full object-cover lg:h-48" src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" title="Membro 1 - Presidente" alt="Membro 1 - Presidente" />
                        <CardTitle className="text-sm font-bold uppercase text-primary">Titulo</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>Why you should start using Figma for prototyping.</p>
                    </CardContent>
                    <CardFooter>
                        <p>05 June 2020</p>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}
