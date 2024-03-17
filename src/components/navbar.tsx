import Image from 'next/image'
import React from 'react'
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Menu } from 'lucide-react'


export const Navbar = () => {
    return (
        <div className='w-full fixed flex items-center justify-around bg-white/80 shadow backdrop-blur-sm backdrop-filter'>
            <nav className='w-screen flex justify-between z-20 items-center py-4 px-10 text-dark'>
                <div className='flex text-center items-center justify-center'>
                    <Image
                        src={"/logo.png"}
                        alt='Code Tower Logo Photo'
                        className='inline h-14 w-auto align-middle'
                        width={0}
                        height={0}
                        sizes='100vw'
                    />
                    <p className='inline align-middle text-2xl font-light uppercase'>CODE <span className='font-bold'>TOWER</span></p>
                </div>
                <ul className='hidden lg:flex items-center justify-between gap-4'>
                    <li>
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#servicos">Serviços</a>
                    </li>
                    <li>
                        <a href="#portfolio">Portfólio</a>
                    </li>
                    <li>
                        <a href="#sobre">Sobre</a>
                    </li>
                    <li>
                        <a href="#contato" className='font-poppins px-3.5 py-2.5 shadow hover:opacity-75 bg-[#292D34] text-white hover:bg-primary rounded-lg'>Contato</a>
                    </li>
                </ul>

                <Sheet>
                    <SheetTrigger asChild className='flex lg:hidden'>
                        <Button variant="outline" className='border-none'><Menu /></Button>
                    </SheetTrigger>
                    <SheetContent className='flex lg:hidden justify-center'>
                        <ul className='flex flex-col items-center gap-4 text-xl mt-6'>
                            <li>
                                <SheetClose asChild>
                                    <a href="#home">Home</a>
                                </SheetClose>
                            </li>
                            <li>
                                <SheetClose asChild>
                                    <a href="#servicos">Serviços</a>
                                </SheetClose>
                            </li>
                            <li>
                                <SheetClose asChild>
                                    <a href="#portfolio">Portfólio</a>
                                </SheetClose>
                            </li>
                            <li>
                                <SheetClose asChild>
                                    <a href="#sobre">Sobre</a>
                                </SheetClose>
                            </li>
                            <li>
                                <SheetClose asChild>
                                    <a href="#contato" className='font-poppins px-3.5 py-2.5 shadow hover:opacity-75 bg-[#292D34] text-white hover:bg-primary rounded-lg'>Contato</a>
                                </SheetClose>
                            </li>
                        </ul>
                    </SheetContent>
                </Sheet>
            </nav>
        </div>
    )
}
