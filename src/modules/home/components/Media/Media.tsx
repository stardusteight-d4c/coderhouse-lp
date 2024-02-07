"use client"

import { useState } from "react"
import { medias } from "./data"

interface MediaProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Media: React.FC<MediaProps> = (props: MediaProps) => {
  const [activeItem, setActiveItem] = useState<number>(0)

  function handleSelectColor(index: number) {
    if (index === activeItem) {
      return "bg-brand-light"
    } else {
      return "bg-dark-secondary"
    }
  }

  return (
    <section className="max-w-7xl pb-[160px] mx-auto w-full text-brand-light">
      <h5 className="text-center text-xl">Nossas aparições na mídia</h5>
      <div className="rounded-sm relative h-[440.5px] mt-14 grid grid-cols-3 border border-dark-secondary items-center px-[120px] py-[60px]">
        <div className="col-span-1">
          <img
            src={medias[activeItem].logo}
            alt="media-logo/svg"
            className="h-[58px]"
          />
        </div>
        <div className="col-span-2 flex flex-col gap-y-6">
          <h4 className="text-[40px] tracking-[-0.4px] leading-[50px] font-bold">
            {medias[activeItem].title}
          </h4>
          <span className="text-xl text-dark-low">
            {medias[activeItem].resume}
          </span>
          <div className="w-fit text-lg text-brand-green-main flex items-center gap-x-2 mt-2 cursor-pointer group">
            <span className="block w-fit group-hover:underline">
              Ler artigo{" "}
            </span>
            <span>→</span>
          </div>
        </div>
        <div className="absolute top-5 left-5">
          <div className="flex items-center gap-x-2">
            <div
              onClick={() => setActiveItem(0)}
              className={
                "rounded-full transition-all duration-300 ease-in cursor-pointer w-5 h-5 " +
                handleSelectColor(0)
              }
            />
            <div
              onClick={() => setActiveItem(1)}
              className={
                "rounded-full transition-all duration-300 ease-in cursor-pointer w-5 h-5 " +
                handleSelectColor(1)
              }
            />
            <div
              onClick={() => setActiveItem(2)}
              className={
                "rounded-full transition-all duration-300 ease-in cursor-pointer w-5 h-5 " +
                handleSelectColor(2)
              }
            />
          </div>
        </div>
      </div>
    </section>
  )
}
