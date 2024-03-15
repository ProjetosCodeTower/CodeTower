import Image from 'next/image'
import React from 'react'

export const Navbar = () => {
    return (
        <div className='container fixed flex items-center justify-around bg-white/80 shadow backdrop-blur-sm backdrop-filter'>
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
                <ul className='flex items-center justify-between gap-4'>
                    <li>Home</li>
                    <li>Serviços</li>
                    <li>Portfólio</li>
                    <li>Sobre</li>
                    <li><a href="#" className='font-poppins px-3 py-2 shadow hover:opacity-75 bg-[#292D34] text-white hover:bg-primary rounded-lg'>Contato</a></li>
                </ul>
            </nav>
        </div>
    )
}
