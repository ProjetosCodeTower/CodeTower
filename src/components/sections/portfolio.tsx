// "use server"
import { Project, ProjectData } from '@/interfaces/project'
import { fetchHygraphQuery } from '@/services/hygraph-query'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button';


const colors = ['primary', 'secondary', 'tertiary', 'quaternary'];

export const getProjectsData = async (): Promise<Project[]> => {
    const { projects } = await fetchHygraphQuery(`
    query Projects {
        projects(orderBy: createdAt_DESC) {
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
          demoUrl
        }
      }
    `);
    return projects;
}

export const Portfolio = () => {
    // const projects: Project[] = await getProjectsData();
    const [projects, setProjects] = useState<Project[]>([])

    useEffect(() => {
        getProjectsData().then((data: Project[]) => {
            setProjects(data)
        })
    }, [])

    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const toggleExpand = (index: number) => {
        if (expandedIndex === index) {
            setExpandedIndex(null);
        } else {
            setExpandedIndex(index);
        }
    };

    return (
        <div className="container z-10">
            <p className="mb-2 text-sm font-semibold text-primary">Portfolio</p>
            <h3 className="mb-2 text-left text-2xl">Conheça nosso trabalho</h3>
            <p className="mb-4 text-sm md:hidden">Clique para saber mais</p>
            <div className="projects-grid grid grid-cols-1 gap-4 rounded-lg py-4 md:grid-cols-12">
                {projects.length > 0 && (
                    projects?.map((project, index) => (
                        <div key={project.id} className="group relative flex h-full flex-1 flex-col overflow-hidden rounded-lg aos-init aos-animate" data-aos={`${index % 4 < 2 ? 'fade-left' : 'fade-right'}`}>
                            <Image onClick={() => toggleExpand(index)} className="h-72 w-full object-cover transition-all duration-300 ease-in-out group-hover:scale-105" src={project.imagem.url} alt={project.nomeDoProjeto} title={project.nomeDoProjeto} width="640" height="427" loading="lazy" />
                            <div
                                style={{ boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)' }}
                                className={`absolute flex flex-col -bottom-full left-0 w-full bg-white px-8 py-4 transition-all duration-300 ease-in-out group-hover:bottom-0 ${expandedIndex === index ? 'max-sm:bottom-0' : 'max-sm:-bottom-full'}`}>
                                <span className={`text-xs font-semibold uppercase text-primary text-${colors[index % colors.length]}`}>{project.tipoDeProjeto}</span>
                                <p className="text-base">{project.nomeDoProjeto}</p>
                                <span className="text-gray text-xs">{project.descricao}</span>
                                <Button asChild name="Ver o projeto no ar" title="Ver o projeto no ar" className="text-white font-bold mt-4">
                                    <a href={project.demoUrl} target="_blank" rel="noreferrer">Ver mais</a>
                                </Button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}
