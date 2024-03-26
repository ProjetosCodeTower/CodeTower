import Image from "next/image";

export default function Home() {
  return (
    <main className="container">
      <section id="home" className="h-screen flex flex-col items-center justify-center">
        <p className="text-center font-semibold uppercase text-primary">Bem vindos à Code Tower</p>
        <h1 className="my-4 text-center text-4xl font-semibold text-dark lg:text-6xl">Inovação em Tecnologia</h1>
        <p className="text-center uppercase">Somos um grupo de estudantes focado em solucionar problemas da sociedade.</p>
      </section>
      <section id="servicos" className="h-screen items-center justify-center">
        <div className="grid grid-cols-4 items-center justify-center text-center">
          <p>teste</p>
          <p>teste</p>
          <p>teste</p>
          <p>teste</p>
        </div>
      </section>
      <section id="portfolio">
        Portfólio
      </section>
      <section id="sobre">
        Sobre
      </section>
      <section id="contato">
        Contato
      </section>
    </main>
  );
}
