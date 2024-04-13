'use client'

import { WhatsappLogo } from '@phosphor-icons/react'
import React from 'react'

export const WhatsappButton = () => {
    const phone = "5562999535210"
    const text = "Olá, vi o site da Code Tower e gostaria de conversar sobre a possibilidade de um serviço de:______"
    return (
        <a target='_blank' href={`https://api.whatsapp.com/send/?phone=${phone}&text=${text}&type=phone_number&app_absent=0`} className='fixed bottom-5 right-5 bg-[#25d366] hover:bg-[#219c4e] cursor-pointer rounded-full'>
            <WhatsappLogo size={60} fill='white' className='p-2 font-bold' />
        </a>
    )
}
