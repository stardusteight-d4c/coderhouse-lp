"use client"

import { useEffect, useState } from "react"

import { CaretDown } from "@/shared/components/atoms"
import { Layers } from "@/shared/components/atoms/icons"

interface DropdownProps extends React.HTMLAttributes<HTMLDivElement> {
  data: INavbarData[]
  type: "Cursos" | "Carreiras" | "Para empresas"
  resetState?: boolean
}

export const Dropdown: React.FC<DropdownProps> = ({
  data,
  type,
  resetState,
}: DropdownProps) => {
  const [selectedCategory, setSelectedCategory] = useState<INavbarData>(data[0])

  useEffect(() => {
    resetState && handleSelectCategory(data[0])
  }, [resetState])

  function handleSelectCategory(category: INavbarData) {
    setSelectedCategory(category)
  }

  function handleActiveCategory(category: INavbarData) {
    if (category.category === selectedCategory.category) {
      return "text-brand-green-main"
    } else {
      return "text-dark-tertiary"
    }
  }

  if (type === "Para empresas") {
    return (
      <div
        onMouseLeave={() => handleSelectCategory(data[0])}
        className="lg:absolute lg:z-[800] lg:hidden lg:w-[400px] group-hover:block lg:top-full lg:pt-[33px]"
      >
        <div className="bg-[#262626] h-[500px] rounded-sm py-6 px-3 lg:p-6">
          <h3 className="text-xl flex items-center border-b border-b-dark-secondary pb-3 gap-x-2 mb-4">
            <Layers size="18" />
            {type}
          </h3>
          <ul className="flex flex-col w-full">
            {selectedCategory.items.map((item, index) => (
              <li
                key={index}
                className="py-2 cursor-pointer hover:underline text-dark-tertiary hover:text-brand-green-main"
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }

  return (
    <div
      onMouseLeave={() => handleSelectCategory(data[0])}
      className="lg:absolute lg:z-[800] lg:hidden lg:w-[716px] group-hover:block top-full lg:pt-[33px]"
    >
      <div className="bg-[#262626] h-[500px] rounded-sm py-6 px-3 lg:p-6 grid grid-cols-2">
        <div className="col-span-1 pr-3 border-r border-r-dark-secondary">
          <h3 className="text-xl pb-4 lg:pb-7">Categorias</h3>
          <ul className="flex flex-col w-full">
            {data.map((item, index) => (
              <li
                onMouseEnter={() => handleSelectCategory(item)}
                onClick={() => handleSelectCategory(item)}
                key={index}
                className={
                  "flex items-center py-1 group cursor-default justify-between " +
                  handleActiveCategory(item)
                }
              >
                {item.category}{" "}
                <CaretDown
                  size="16"
                  className="-rotate-90 group-hover:to-brand-green-main"
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-1 pl-6">
          <h3 className="text-xl flex items-center gap-x-2 pb-4 lg:pb-7">
            <Layers size="18" />
            {type}
          </h3>
          <ul className="flex flex-col w-full">
            {selectedCategory.items.map((item, index) => (
              <li
                key={index}
                className="pb-[6px] lg:py-2 text-sm lg:text-base flex items-center gap-x-2 cursor-pointer hover:underline text-dark-tertiary hover:text-brand-green-main"
              >
                {item.name}{" "}
                {item.new && (
                  <div className="px-2 hidden lg:block w-fit rounded-sm bg-brand-green-main text-dark-main">
                    Novo
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
