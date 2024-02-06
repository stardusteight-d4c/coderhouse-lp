interface ColleaguesProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Colleagues: React.FC<ColleaguesProps> = (
  props: ColleaguesProps
) => {
  return (
    <section className="bg-dark-tertiary/10 py-[132px] text-brand-light w-screen mt-[160px]">
      <div className="max-w-7xl w-full mx-auto items-center grid gap-x-[100px] grid-cols-2">
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
          <div className="flex items-center gap-x-4 mb-2">
            <span className="block rounded-full font-medium bg-brand-green-light text-dark-main px-2 py-1">
              Aulas em grupo
            </span>
            <span className="block rounded-full font-medium bg-brand-green-light text-dark-main px-2 py-1">
              Canais de chat
            </span>
            <span className="block rounded-full font-medium bg-brand-green-light text-dark-main px-2 py-1">
              Fórum privado
            </span>
          </div>
          <h2 className="text-6xl leading-[70px] font-bold">
            Aprenda com seus colegas
          </h2>
          <p className="text-2xl mt-2 leading-[36px]">
            A aprendizagem em grupo tem se mostrado mais eficiente e motivadora.
            O networking com colegas ajuda a ter novas ideias e fazer projetos
            melhores.
          </p>
        </div>
      </div>
    </section>
  )
}
