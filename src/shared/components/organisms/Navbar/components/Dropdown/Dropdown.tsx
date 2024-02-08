"use client"

import { useState } from "react"

import { CaretDown } from "@/shared/components/atoms"
import { Layers } from "@/shared/components/atoms/icons"

interface DropdownProps extends React.HTMLAttributes<HTMLDivElement> {
  data: INavbarData[]
  type: "Cursos" | "Carreiras" | "Para empresas"
}

export const Dropdown: React.FC<DropdownProps> = ({
  data,
  type,
}: DropdownProps) => {
  const [selectedCategory, setSelectedCategory] = useState<INavbarData>(data[0])

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
        className="absolute z-[800] hidden w-[400px] group-hover:block top-full pt-[34px]"
      >
        <div className="bg-[#262626] h-[500px] rounded-sm p-6">
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
      className="absolute z-[800] hidden w-[716px] group-hover:block top-full pt-[33px]"
    >
      <div className="bg-[#262626] h-[500px] rounded-sm p-6 grid grid-cols-2">
        <div className="col-span-1 pr-3 border-r border-r-dark-secondary">
          <h3 className="text-xl pb-7">Categorias</h3>
          <ul className="flex flex-col w-full">
            {data.map((item, index) => (
              <li
                onMouseEnter={() => handleSelectCategory(item)}
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
          <h3 className="text-xl flex items-center gap-x-2 pb-7">
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
    </div>
  )
}
