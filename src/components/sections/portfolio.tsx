import React from 'react'

export const Portfolio = () => {
    return (
        <div className="container z-10">
            <p className="mb-2 text-sm font-semibold text-primary">Portfolio</p>
            <h3 className="mb-4 text-left text-2xl">Conheça nosso trabalho</h3>
            <div className="projects-grid grid grid-cols-1 gap-4 rounded-lg py-4 md:grid-cols-12">
                <div className="group relative flex h-full flex-1 flex-col overflow-hidden rounded-lg aos-init aos-animate" data-aos="fade-left">
                    <img className="h-72 w-full object-cover transition-all duration-300 ease-in-out group-hover:scale-105" src="https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?ixlib=rb-4.0.3&amp;q=85&amp;fm=webp&amp;crop=entropy&amp;cs=srgb&amp;w=640" alt="Projeto 1 - Code Stacker" title="Projeto 1 - Code Stacker" width="640" height="427" loading="lazy" />
                    <div className="absolute -bottom-full left-0 w-full bg-white/60 px-8 py-4 transition-all duration-300 ease-in-out group-hover:bottom-0">
                        <span className="text-xs font-semibold uppercase text-primary">website</span>
                        <p className="text-base">Projeto 1</p><span className="text-gray text-xs uppercase">dezembro 2020</span></div></div><div className="group relative flex h-full flex-1 flex-col overflow-hidden rounded-lg aos-init aos-animate" data-aos="fade-left"><img className="h-72 w-full object-cover transition-all duration-300 ease-in-out group-hover:scale-105" src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&amp;q=85&amp;fm=webp&amp;crop=entropy&amp;cs=srgb&amp;w=640" alt="Projeto 2 - Code Stacker" title="Projeto 2 - Code Stacker" width="640" height="427" loading="lazy" />
                    <div className="absolute -bottom-full left-0 w-full bg-white/60 px-8 py-4 transition-all duration-300 ease-in-out group-hover:bottom-0">
                        <span className="text-xs font-semibold uppercase text-secondary">iot</span>
                        <p className="text-base">Projeto 2</p>
                        <span className="text-gray text-xs uppercase">dezembro 2020</span>
                    </div>
                </div>
                <div className="group relative flex h-full flex-1 flex-col overflow-hidden rounded-lg aos-init aos-animate" data-aos="fade-right">
                    <img className="h-72 w-full object-cover transition-all duration-300 ease-in-out group-hover:scale-105" src="https://images.unsplash.com/photo-1434725039720-aaad6dd32dfe?ixlib=rb-4.0.3&amp;q=85&amp;fm=webp&amp;crop=entropy&amp;cs=srgb&amp;w=640" alt="Projeto 3 - Code Stacker" title="Projeto 3 - Code Stacker" width="640" height="427" loading="lazy" />
                    <div className="absolute -bottom-full left-0 w-full bg-white/60 px-8 py-4 transition-all duration-300 ease-in-out group-hover:bottom-0">
                        <span className="text-xs font-semibold uppercase text-secondary">iot</span>
                        <p className="text-base">Projeto 3</p>
                        <span className="text-gray text-xs uppercase">dezembro 2020</span>
                    </div>
                </div>
                <div className="group relative flex h-full flex-1 flex-col overflow-hidden rounded-lg aos-init aos-animate" data-aos="fade-right">
                    <img className="h-72 w-full object-cover transition-all duration-300 ease-in-out group-hover:scale-105" src="https://images.unsplash.com/photo-1511884642898-4c92249e20b6?ixlib=rb-4.0.3&amp;q=85&amp;fm=webp&amp;crop=entropy&amp;cs=srgb&amp;w=640" alt="Projeto 4 - Code Stacker" title="Projeto 4 - Code Stacker" width="640" height="427" loading="lazy" /><div className="absolute -bottom-full left-0 w-full bg-white/60 px-8 py-4 transition-all duration-300 ease-in-out group-hover:bottom-0">
                        <span className="text-xs font-semibold uppercase">aplicativos</span>
                        <p className="text-base">Projeto 4</p>
                        <span className="text-gray text-xs uppercase">dezembro 2020</span>
                    </div>
                </div>
                <div className="group relative flex h-full flex-1 flex-col overflow-hidden rounded-lg aos-init aos-animate" data-aos="fade-right">
                    <img className="h-72 w-full object-cover transition-all duration-300 ease-in-out group-hover:scale-105" src="https://images.unsplash.com/photo-1511884642898-4c92249e20b6?ixlib=rb-4.0.3&amp;q=85&amp;fm=webp&amp;crop=entropy&amp;cs=srgb&amp;w=640" alt="Projeto 4 - Code Stacker" title="Projeto 4 - Code Stacker" width="640" height="427" loading="lazy" /><div className="absolute -bottom-full left-0 w-full bg-white/60 px-8 py-4 transition-all duration-300 ease-in-out group-hover:bottom-0">
                        <span className="text-xs font-semibold uppercase">aplicativos</span>
                        <p className="text-base">Projeto 4</p>
                        <span className="text-gray text-xs uppercase">dezembro 2020</span>
                    </div>
                </div>
                <div className="group relative flex h-full flex-1 flex-col overflow-hidden rounded-lg aos-init aos-animate" data-aos="fade-right">
                    <img className="h-72 w-full object-cover transition-all duration-300 ease-in-out group-hover:scale-105" src="https://images.unsplash.com/photo-1511884642898-4c92249e20b6?ixlib=rb-4.0.3&amp;q=85&amp;fm=webp&amp;crop=entropy&amp;cs=srgb&amp;w=640" alt="Projeto 4 - Code Stacker" title="Projeto 4 - Code Stacker" width="640" height="427" loading="lazy" /><div className="absolute -bottom-full left-0 w-full bg-white/60 px-8 py-4 transition-all duration-300 ease-in-out group-hover:bottom-0">
                        <span className="text-xs font-semibold uppercase">aplicativos</span>
                        <p className="text-base">Projeto 4</p>
                        <span className="text-gray text-xs uppercase">dezembro 2020</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
