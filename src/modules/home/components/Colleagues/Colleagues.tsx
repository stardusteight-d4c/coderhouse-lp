interface ColleaguesProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Colleagues: React.FC<ColleaguesProps> = (
  props: ColleaguesProps
) => {
  return (
    <section className="bg-dark-tertiary/10 px-3 xl:px-0 py-[50px] md:py-[132px] text-brand-light w-screen mt-20 md:mt-[160px]">
      <div className="max-w-7xl w-full mx-auto items-center grid gap-[25px] lg:gap-x-[100px] grid-cols-1 md:grid-cols-2">
        <div className="col-span-1">
          <video
            src="/assets/mp4/colleagues.mp4"
            autoPlay
            loop
            muted
            className="rounded-sm overflow-hidden"
          />
        </div>
        <div className="col-span-1">
          <div className="flex flex-wrap items-center gap-2 lg:gap-x-4 mb-2">
            <span className="block whitespace-nowrap rounded-sm font-medium bg-brand-green-light text-dark-main px-2 py-1">
              Aulas em grupo
            </span>
            <span className="block whitespace-nowrap rounded-sm font-medium bg-brand-green-light text-dark-main px-2 py-1">
              Canais de chat
            </span>
            <span className="block whitespace-nowrap rounded-sm font-medium bg-brand-green-light text-dark-main px-2 py-1">
              Fórum privado
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl py-4 md:py-0 font-bold">
            Aprenda com seus colegas
          </h2>
          <p className="text-base md:text-2xl mt-2">
            A aprendizagem em grupo tem se mostrado mais eficiente e motivadora.
            O networking com colegas ajuda a ter novas ideias e fazer projetos
            melhores.
          </p>
        </div>
      </div>
    </section>
  )
}
