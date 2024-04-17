'use client'
import React, { FormEvent, useState } from 'react'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'
import axios from 'axios'

export const Contato = () => {
    const [nome, setNome] = useState<string>()
    const [assunto, setAssunto] = useState<string>()
    const [email, setEmail] = useState<string>()
    const [telefone, setTelefone] = useState<string>()
    const [mensagem, setMensagem] = useState<string>()

    const handleContact = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const formData = {
            nome: nome,
            assunto: assunto,
            email: email,
            telefone: telefone,
            mensagem: mensagem
        };
        // https://formcarry.com/pricing opção com 50 forms por mês
        axios
            .post("https://getform.io/f/eapdndna",
                JSON.stringify(formData),
                {
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json"
                    }
                })
            .then(response => console.log(response))
            .catch(error => console.log(error))
    }

    return (
        <div className="container">
            <p className="mb-2 text-center text-sm font-semibold text-primary">Contato</p>
            <h3 className="mb-8 text-center text-2xl">Entre em contato conosco</h3>

            <div className="grid lg:grid-cols-2 gap-8">
                <div className="w-full aos-init aos-animate" data-aos="fade-in"><div className="space-y-4">
                    <iframe title='Endereço Code Tower - Google Maps' className='w-full h-72 flex-1' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3828.0191896491556!2d-48.98323932432273!3d-16.37298483746938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ea33638231c1d%3A0x8c191dacc3405ebc!2sInstituto%20Federal%20de%20Educa%C3%A7%C3%A3o%2C%20Ci%C3%AAncia%20e%20Tecnologia%20de%20Goi%C3%A1s%20-%20C%C3%A2mpus%20An%C3%A1polis!5e0!3m2!1spt-BR!2sbr!4v1711512130399!5m2!1spt-BR!2sbr" style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                </div>
                <form onSubmit={handleContact} className="flex flex-col justify-end items-end space-y-4 aos-init aos-animate" data-aos="fade-in">
                    <div className="flex flex-col w-full">
                        <div className="flex justify-between max-lg:flex-col">
                            <label>
                                <span className="text-primary font-bold tracking-wide mb-3">
                                    Nome
                                </span>
                                <Input onChange={(e) => setNome(e.target.value)} className="my-3" type="text" placeholder="João Silva" name='nome' />
                            </label>
                            <label>
                                <span className="text-primary font-bold tracking-wide mb-3">
                                    Assunto
                                </span>
                                <Input onChange={(e) => setAssunto(e.target.value)} className="my-3" type="text" placeholder="Assunto" name='assunto' />
                            </label>
                        </div>
                        <div className="flex justify-between max-lg:flex-col">
                            <label>
                                <span className="text-primary font-bold tracking-wide mb-3">
                                    Email
                                </span>
                                <Input onChange={(e) => setEmail(e.target.value)} className="my-3" type="email" placeholder="example@example.com" name='email' />
                            </label>
                            <label>
                                <span className="text-primary font-bold tracking-wide mb-3">
                                    Telefone
                                </span>
                                <Input onChange={(e) => setTelefone(e.target.value)} className="my-3" type="tel" placeholder="(62) 99999-9999" name='telefone' />
                            </label>
                        </div>
                        <div>
                            <label>
                                <span className="text-primary font-bold tracking-wide mb-3">
                                    Mensagem
                                </span>
                                <Textarea onChange={(e) => setMensagem(e.target.value)} className="resize-none mt-3" placeholder="Sua mensagem é muito importante" name='mensagem' />
                            </label>
                        </div>
                    </div>

                    <Button name='Enviar contato' title='Enviar contato' type='submit' className="font-poppins py-2 shadow hover:opacity-75 bg-dark text-white hover:bg-primary rounded-lg px-6 uppercase lg:px-3" variant="default">Enviar</Button>
                </form>
            </div>

            <div className="flex flex-col items-start">
                <div className="space-y-2">
                    <p className="font-semibold tracking-wide text-primary">Endereço</p>
                    <p className="font-light">Av. Pedro Ludovico, s/n
                        Residencial Reny Cury, Anápolis
                        GO, 75131-457 - Bloco 600, segundo andar, ao lado da Multimeios 3 - Sala da Code Tower
                    </p>
                </div>
                <div className="space-y-2">
                    <p className="font-semibold tracking-wide text-primary">Telefone</p>
                    <p className="font-light">(62)99953-5210</p>
                </div>
                <div className="space-y-2">
                    <p className="font-semibold tracking-wide text-primary">Email</p>
                    <p className="font-light">
                        <a className="hover:underline" href="mailto:">contato@codetower.com.br</a>
                    </p>
                </div>
            </div>
        </div>
    )
}
