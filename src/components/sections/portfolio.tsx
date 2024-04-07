// "use server"
import { Project, ProjectData } from '@/interfaces/project'
import { fetchHygraphQuery } from '@/services/hygraph-query'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

export const getProjectsData = async (): Promise<Project[]> => {
    const { projects } = await fetchHygraphQuery(`
        query Projects {
            projects {
                createdAt
                data
                descricao
                id
                nomeDoProjeto
                publishedAt
                slug
                updatedAt
                tipoDeProjeto
                imagem {
                    url
                }
            }
        }
    `);
    return projects;
}

export const Portfolio = () => {
    // const projects: Project[] = await getProjectsData();
    // console.log(projects)
    const [projects, setProjects] = useState<Project[]>([])

    useEffect(() => {
        getProjectsData().then((data: Project[]) => {
            setProjects(data)
        })
    }, [])

    return (
        <div className="container z-10">
            <p className="mb-2 text-sm font-semibold text-primary">Portfolio</p>
            <h3 className="mb-4 text-left text-2xl">Conheça nosso trabalho</h3>
            <div className="projects-grid grid grid-cols-1 gap-4 rounded-lg py-4 md:grid-cols-12">
                {projects.length > 0 && (
                    projects?.map((project, index) => (
                        <div key={project.id} className="group relative flex h-full flex-1 flex-col overflow-hidden rounded-lg aos-init aos-animate" data-aos={`${index % 4 < 2 ? 'fade-left' : 'fade-right'}`}>
                            <Image className="h-72 w-full object-cover transition-all duration-300 ease-in-out group-hover:scale-105" src={project.imagem.url} alt={project.nomeDoProjeto} title={project.nomeDoProjeto} width="640" height="427" loading="lazy" />
                            <div className="absolute -bottom-full left-0 w-full bg-white/60 px-8 py-4 transition-all duration-300 ease-in-out group-hover:bottom-0">
                                <span className="text-xs font-semibold uppercase text-primary">{project.tipoDeProjeto}</span>
                                <p className="text-base">{project.nomeDoProjeto}</p><span className="text-gray text-xs uppercase">{project.data}</span>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}
