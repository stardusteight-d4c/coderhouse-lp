import { Clock, Triangle } from "@/shared/components/atoms/icons"
import React from "react"

interface PlanProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Plan: React.FC<PlanProps> = (props: PlanProps) => {
  return (
    <div className="border rounded-sm hover:bg-dark-tertiary/10 transition-all ease-in text-brand-light border-brand-green-light min-w-[375px] max-w-[375px]">
      <div className="border-b border-brand-green-light bg-brand-green-light font-medium text-sm text-dark-main py-1 text-center">
        Aproveite a Coderbolsa de 70%
      </div>
      <div className="px-9 relative pt-14 pb-10 ">
        <div className="py-2 absolute top-4 -right-[10px] bg-dark-main w-fit px-4 border border-brand-light rounded-sm">
          70% OFF🔥
          <Triangle className="absolute top-full -right-[1px]" />
        </div>
        <div>
          <h2 className="mt-4 text-3xl">Carreira de Desenvolvedor UX/UI</h2>
          <div>
            <span className="text-dark-low block mt-4">Inclui 3 cursos</span>
            <div className="my-3 flex flex-col text-sm">
              <span className="text-dark-low block">• Design UX/UI</span>
              <span className="text-dark-low block">
                • Design UX/UI Avançado
              </span>
              <span className="text-dark-low block">• HTML e CSS</span>
            </div>
            <span className="text-dark-low flex items-center gap-x-1 text-sm">
              <Clock color="#BEBEBE" /> 36 semanas / 2 aulas semanais de 2 h
            </span>
            <div className="text-dark-low mt-10">
              <span className="text-xs flex items-center">
                Plano Standard <div className="line-through">R$ 17.430</div>
              </span>
              <span className="text-xs flex items-center">
                CoderBolsa + 70% OFF R$ 1.614
              </span>
              <span className="text-xs flex items-center text-brand-light">
                Em até 12 prestações sem juros
              </span>
              <span className="text-brand-light text-4xl mt-1 block">
                R$ 131
              </span>
            </div>
            <button className="py-4 font-medium rounded-sm hover:bg-brand-green-light hover:text-dark-main transition-all ease-in w-full mt-5 text-brand-green-light border border-brand-green-light">
              Ver carreira
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
