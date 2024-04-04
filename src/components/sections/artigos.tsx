import React, { useEffect, useState } from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'
import Image from 'next/image'
import axios from 'axios'
import Link from 'next/link'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

interface Blog {
    id: number,
    typeof: string,
    title: string,
    url: string,
    cover_image: string,
    social_image: string
    description: string,
    readable_publish_date: string,
    published_timestamp: string,
    user: {
        name: string,
        username: string,
        twitter_username: string,
        github_username: string,
        profile_image: string,
    },
    slug: string,
}

export const Artigos = () => {
    const [blogs, setBlogs] = useState<Blog[]>([])

    useEffect(() => {
        axios.get("https://dev.to/api/articles?username=codetower&per_page=1000&per_page=3").then((response) => {
            console.log(response.data)
            // Limitando a 3 ultimas postagens
            setBlogs(response.data)
        }).catch((error) => console.error(error));
    }, [])

    const timestampToReadable = (timestamp: string) => {
        const data = new Date(timestamp);
        const dia = data.getDate();
        const mes = data.toLocaleString('default', { month: 'long' });
        const ano = data.getFullYear();

        return `${dia} de ${mes} de ${ano}`;
    }
    return (
        <div className="container">
            <p className="mb-2 text-center text-sm font-semibold text-primary">Atualizações e Novidades</p>
            <h3 className="mb-8 text-center text-2xl">Artigos recentes</h3>

            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center px-8">
                {blogs.length > 0 ? (
                    blogs.map((blog) => (
                        <a key={blog.id} href={blog.url} target="_blank">
                            <Card className="border-none flex-1">
                                <CardHeader>
                                    <Image width={0} height={0} sizes='100vw' className="mb-4 h-[290px] rounded-md w-full object-cover lg:h-48" src={blog.cover_image ?? "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} title="Membro 1 - Presidente" alt="Membro 1 - Presidente" />
                                    <CardTitle className="text-sm font-bold uppercase text-primary">{blog.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className='text-justify'>{blog.description}</p>
                                </CardContent>
                                <CardFooter className='flex justify-between items-center'>
                                    <div className='flex items-center justify-center gap-1'>
                                        <Avatar>
                                            <AvatarImage src={blog.user.profile_image ?? "https://github.com/shadcn.png"} alt="@shadcn" />
                                            <AvatarFallback>CN</AvatarFallback>
                                        </Avatar>
                                        <span>{blog.user.name}</span>
                                    </div>
                                    {/* readable_publish_date é em inglês e não tem o ano por isso optei por converter o timestamp */}
                                    <p>{timestampToReadable(blog.published_timestamp)}</p>
                                </CardFooter>
                            </Card>
                        </a>
                    ))
                ) : (
                    <p className='text-center'>Não há postagens ainda.</p>
                )}
            </div>
        </div>
    )
}
