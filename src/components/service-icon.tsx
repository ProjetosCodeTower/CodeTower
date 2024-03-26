import React from 'react'

interface ServiceIconProps {
    children: React.ReactNode,
    color: string,
}

export const ServiceIcon = ({ children, color }: ServiceIconProps) => {
    return (
        <div className={`flex items-center justify-around w-16 h-16 rounded-full p-5 ${color}`}>
            {children}
        </div>
    )
}
