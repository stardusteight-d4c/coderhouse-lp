"use client"

import { Slide } from "react-awesome-reveal"

interface HeroProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Hero: React.FC<HeroProps> = (props: HeroProps) => {
  return (
    <section className="max-w-7xl px-3 xl:px-0 mx-auto pb-14 md:pb-24 pt-40 text-brand-light flex items-center justify-center flex-col">
      <div className="w-full max-w-[992px]">
        <h1 className="text-start md:text-center font-bold lg:leading-[70px] -tracking-[-1.8px] text-4xl md:text-6xl">
          Cursos online e ao vivo para{" "}
          <Slide direction="left" className="inline-block">
            <span className="bg-brand-green-light font-bold text-dark-main">
              transformar sua realidade
            </span>
          </Slide>{" "}
          em tempo recorde
        </h1>
        <span className="mt-6 mb-9 md:mb-16 block w-full max-w-[776px] text-start md:mx-auto md:text-center">
          Aulas online e ao vivo ministradas por referências do mercado digital,
          com foco 100% prático, mentorias personalizadas e acesso a uma
          comunidade de +280.000 estudantes.
        </span>
        <button className="px-4 block w-full md:w-fit font-medium md:mx-auto py-5 bg-brand-green-light rounded-sm text-dark-main hover:bg-brand-green-main transition-all ease-in-out">
          Veja todos os cursos
        </button>
      </div>
    </section>
  )
}
