interface HeroProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Hero: React.FC<HeroProps> = (props: HeroProps) => {
  return (
    <div className="max-w-7xl mx-auto py-24 text-brand-light px-2 flex items-center justify-center flex-col">
      <div className="w-full max-w-[992px]">
        <h1 className="text-center font-bold leading-[70px] -tracking-[-1.8px] text-6xl">
          Cursos online e ao vivo para{" "}
          <strong className="bg-brand-green-main text-dark-main">
            transformar sua realidade
          </strong>{" "}
          em tempo recorde
        </h1>
        <span className="mt-6 mb-16 block w-full max-w-[776px] mx-auto text-center">
          Aulas online e ao vivo ministradas por referências do mercado digital,
          com foco 100% prático, mentorias personalizadas e acesso a uma
          comunidade de +280.000 estudantes.
        </span>
        <button className="px-4 block font-medium mx-auto py-5 bg-brand-green-main rounded text-dark-main hover:bg-brand-green-light transition-all ease-in-out">
          Veja todos os cursos
        </button>
      </div>
    </div>
  )
}
