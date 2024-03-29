import React from 'react'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'

export const Contato = () => {
    return (
        <div className="container">
            <p className="mb-2 text-center text-sm font-semibold text-primary">Contato</p>
            <h3 className="mb-8 text-center text-2xl">Entre em contato conosco</h3>

            <div className="grid lg:grid-cols-2 gap-8">
                <div className="w-full aos-init aos-animate" data-aos="fade-in"><div className="space-y-4">
                    <iframe className='w-full h-72 flex-1' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3828.0191896491556!2d-48.98323932432273!3d-16.37298483746938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ea33638231c1d%3A0x8c191dacc3405ebc!2sInstituto%20Federal%20de%20Educa%C3%A7%C3%A3o%2C%20Ci%C3%AAncia%20e%20Tecnologia%20de%20Goi%C3%A1s%20-%20C%C3%A2mpus%20An%C3%A1polis!5e0!3m2!1spt-BR!2sbr!4v1711512130399!5m2!1spt-BR!2sbr" style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    {/* <div className="space-y-2">
                        <p className="font-semibold tracking-wide text-primary">Endereço</p>
                        <p className="font-light">Rua 1, 1 - Bairro, Cidade - Estado</p>
                    </div>
                    <div className="space-y-2">
                        <p className="font-semibold tracking-wide text-primary">Telefone</p>
                        <p className="font-light">contato@codetower.com.br</p>
                    </div>
                    <div className="space-y-2">
                        <p className="font-semibold tracking-wide text-primary">Email</p>
                        <p className="font-light">
                            <a className="hover:underline" href="mailto:">contato@codetower.com.br</a>
                        </p>
                    </div> */}
                </div>
                </div>
                <form className="flex flex-col justify-end items-end space-y-4 aos-init aos-animate" data-aos="fade-in">
                    <div className="flex flex-col w-full">
                        <div className="flex justify-between">
                            <label>
                                <span className="text-primary font-bold tracking-wide mb-3">
                                    Nome
                                </span>
                                <Input className="my-3" type="text" placeholder="João Silva" />
                            </label>
                            <label>
                                <span className="text-primary font-bold tracking-wide mb-3">
                                    Assunto
                                </span>
                                <Input className="my-3" type="text" placeholder="Assunto" />
                            </label>
                        </div>
                        <div className="flex justify-between">
                            <label>
                                <span className="text-primary font-bold tracking-wide mb-3">
                                    Email
                                </span>
                                <Input className="my-3" type="email" placeholder="example@example.com" />
                            </label>
                            <label>
                                <span className="text-primary font-bold tracking-wide mb-3">
                                    Telefone
                                </span>
                                <Input className="my-3" type="tel" placeholder="(62) 99999-9999" />
                            </label>
                        </div>
                        <div>
                            <label>
                                <span className="text-primary font-bold tracking-wide mb-3">
                                    Mensagem
                                </span>
                                <Textarea className="resize-none mt-3" placeholder="Sua mensagem é muito importante" />
                            </label>
                        </div>
                    </div>

                    <Button className="font-poppins py-2 shadow hover:opacity-75 bg-dark text-white hover:bg-primary rounded-lg px-6 uppercase lg:px-3" variant="default">Enviar</Button>
                </form>
            </div>

            <div className="flex flex-col items-start">
                <div className="space-y-2">
                    <p className="font-semibold tracking-wide text-primary">Endereço</p>
                    <p className="font-light">Av. Pedro Ludovico, s/n
                        Residencial Reny Cury, Anápolis
                        GO, 75131-457 - Bloco 400</p>
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
