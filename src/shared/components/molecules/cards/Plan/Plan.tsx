import { Clock, Triangle } from "@/shared/components/atoms/icons"
import React from "react"
import { IPlan } from "./types"

interface PlanProps extends React.HTMLAttributes<HTMLDivElement> {
  data: IPlan
}

export const Plan: React.FC<PlanProps> = ({ data }: PlanProps) => {
  return (
    <div className="h-[625px] relative">
      <div className="border h-full rounded-sm min-h-[620px] max-h-[620px] hover:bg-dark-tertiary/10 transition-all ease-in text-brand-light border-brand-green-light min-w-[375px] max-w-[375px]">
        {data.header && (
          <div className="border-b border-brand-green-light bg-brand-green-light font-medium text-sm text-dark-main py-1 text-center">
            {data.header}
          </div>
        )}
        <div className="px-9 relative pt-14 pb-10 h-full">
          {data.off && (
            <div className="py-2 absolute top-4 -right-[10px] bg-dark-main w-fit px-4 border border-brand-light rounded-sm">
              {data.off} 🔥
              <Triangle className="absolute top-full -right-[1px]" />
            </div>
          )}
          <div>
            <h2 className="mt-4 text-3xl">{data.title}</h2>
            <div>
              {data.courses && (
                <>
                  <span className="text-dark-low block mt-4">
                    Inclui {data.courses.length}{" "}
                    {data.courses.length === 1 ? "curso" : "cursos"}
                  </span>
                  <div className="my-3 flex flex-col text-sm">
                    {data.courses.map((course, index) => (
                      <span key={index} className="text-dark-low block">
                        • {course}
                      </span>
                    ))}
                  </div>
                </>
              )}
              {data.workload && (
                <span className="text-dark-low flex items-center gap-x-1 text-sm">
                  <Clock color="#BEBEBE" /> {data.workload}
                </span>
              )}
              <div className="absolute bottom-[70px] inset-x-9">
                <div className="text-dark-low">
                  {data.off && (
                    <div className="text-xs gap-x-1 flex items-center">
                      Plano Standard
                      <p className="line-through">{data.standardPlan}</p>
                    </div>
                  )}
                  <span className="text-xs flex items-center">
                    {data.off && `CoderBolsa + ${data.off}`} {data.totalPrice}
                  </span>
                  <span className="text-xs flex items-center text-brand-light">
                    Em até 12 prestações sem juros
                  </span>
                  <span className="text-brand-light text-4xl mt-1 block">
                    {data.monthlyPrice}
                  </span>
                </div>
                <button className="py-4 font-medium rounded-sm hover:bg-brand-green-light hover:text-dark-main transition-all ease-in w-full mt-5 text-brand-green-light border border-brand-green-light">
                  Ver carreira
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
