"use client"

import { useState } from "react"

import { Tab } from "@/shared/components/molecules"
import { Carousel } from "@/shared/components/organisms/Carousel/Carousel"

import { carersPlans } from "./data"

interface PlansProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Plans: React.FC<PlansProps> = (props: PlansProps) => {
  const carersTabs = ["Design UX/UI", "Programação", "Produto", "Data"]
  const coursesTabs = [
    "Design UX/UI",
    "Marketing Digital",
    "Programação",
    "Produto",
    "Data",
    "Inglês",
    "Inteligencia Artificial",
  ]
  const [activeCarers, setActiveCarers] = useState<string>(carersTabs[0])
  const [activeCourses, setActiveCourses] = useState<string>(coursesTabs[0])

  function onTabCarerChange(tab: string) {
    setActiveCarers(tab)
  }

  function onTabCourseChange(tab: string) {
    setActiveCourses(tab)
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
        <Tab tabs={carersTabs} onTabChange={onTabCarerChange} />
        <Carousel data={carersPlans} />
        <span className="uppercase text-2xl mt-[90px] block">Cursos</span>
        <Tab tabs={coursesTabs} onTabChange={onTabCourseChange} />
        {/* <Carousel /> */}
      </div>
    </section>
  )
}
