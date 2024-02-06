"use client"

import { Tab } from "@/shared/components/molecules"
import { Plan } from "@/shared/components/molecules/cards"
import { Carousel } from "@/shared/components/organisms/Carousel/Carousel"
import { useState } from "react"

interface CareersProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Careers: React.FC<CareersProps> = (props: CareersProps) => {
  const tabs = ["Design UX/UI", "Programação", "Produto", "Data"]
  const [active, setActive] = useState<string>(tabs[0])

  function onTabChange(tab: string) {
    setActive(tab)
  }

  return (
    <section className="w-screen overflow-hidden">
      <div className="max-w-7xl text-brand-light mx-auto w-full">
        <span className="flex items-center gap-x-4 w-fit text-2xl">
          <div className="flex relative items-center justify-center rounded-full bg-red-600 w-[16px] h-[16px]">
            <div className="absolute animate-ping flex items-center justify-center rounded-full bg-red-600 w-[16px] h-[16px]" />
          </div>
          Online e ao vivo
        </span>
        <h3 className="text-6xl leading-[70px] font-bold tracking-[-1.8px] my-10">
          Escolha seu curso ou carreira
        </h3>
        <span className="uppercase text-2xl">Carreiras</span>
        <Tab tabs={tabs} onTabChange={onTabChange} />
        <Carousel />
      </div>
    </section>
  )
}
