interface CoderBolsaProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CoderBolsa: React.FC<CoderBolsaProps> = (
  props: CoderBolsaProps
) => {
  return (
    <section className="max-w-7xl w-full mx-auto">
      <div className="w-full rounded px-[120px] gap-x-[100px] py-[56px] text-dark-main bg-gradient-to-br from-brand-green-light to-brand-green-main grid grid-cols-2">
        <div className="col-span-1">
          <h3 className="text-7xl font-bold mb-5">O que é a CoderBolsa?</h3>
          <p className="text-xl">
            Nossa missão é democratizar a educação de qualidade na América
            Latina. E como forma de tornar isso real, criamos a CoderBolsa, uma
            bolsa de estudos onde você garante um desconto de 70% em qualquer um
            de nossos cursos ou carreiras.
          </p>
        </div>
        <div className="col-span-1">
          <div className="rounded shadow-md shadow-black/50 py-[40px] px-[50px] bg-dark-main text-brand-light">
            <h3 className="text-4xl font-bold mb-5">Como acesso?</h3>
            <div className="text-dark-low font-medium">
              <p className="mb-11">
                O acesso à CoderBolsa é <strong>automático e para todos</strong>, você só precisa
                atender a 2 requisitos quando estiver dentro do curso:
              </p>
              <p className="mb-5">• Entregar desafios práticos no prazo de 7 dias corridos;</p>
              <p className="">• Ter 85% de presença nas aulas ao vivo.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
