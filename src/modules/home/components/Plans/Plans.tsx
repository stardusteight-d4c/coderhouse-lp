"use client"

import { useState } from "react"

import { Tab } from "@/shared/components/molecules"
import { Carousel } from "@/shared/components/organisms/Carousel/Carousel"

import { carersPlans, coursesPlans } from "./data"

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
  const [carers, setCarers] = useState<Array<IPlan>>(
    carersPlans.filter((item) => item.type.includes(carersTabs[0]))
  )
  const [courses, setCourses] = useState<Array<IPlan>>(
    coursesPlans.filter((item) => item.type.includes(coursesTabs[0]))
  )

  function onTabCarerChange(tab: string) {
    setCarers(carersPlans.filter((item) => item.type.includes(tab)))
  }

  function onTabCourseChange(tab: string) {
    setCourses(coursesPlans.filter((item) => item.type.includes(tab)))
  }

  return (
    <section className="w-screen px-3 xl:px-0 overflow-hidden">
      <div className="max-w-7xl text-brand-light mx-auto w-full">
        <span className="flex items-center gap-x-4 w-fit text-xl md:text-2xl">
          <div className="flex relative items-center justify-center rounded-full bg-red-600 w-[16px] h-[16px]">
            <div className="absolute animate-ping flex items-center justify-center rounded-full bg-red-600 w-[16px] h-[16px]" />
          </div>
          Online e ao vivo
        </span>
        <h3 className="text-4xl lg:text-6xl font-bold tracking-[-1.8px] mt-4 mb-10 md:my-10">
          Escolha seu curso ou carreira
        </h3>
        <span className="uppercase text-xl md:text-2xl">Carreiras</span>
        <Tab tabs={carersTabs} onTabChange={onTabCarerChange} />
        <Carousel data={carers} />
        <span className="uppercase text-xl md:text-2xl mt-16 md:mt-[90px] block">
          Cursos
        </span>
        <Tab tabs={coursesTabs} onTabChange={onTabCourseChange} />
        <Carousel data={courses} />
      </div>
    </section>
  )
}
