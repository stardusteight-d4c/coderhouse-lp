"use client"

import { useState } from "react"

import { CaretDown } from "@/shared/components/atoms"

interface DropdownProps extends React.HTMLAttributes<HTMLDivElement> {
  data: INavbarData[]
}

export const Dropdown: React.FC<DropdownProps> = ({ data }: DropdownProps) => {
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

  return (
    <div
      onMouseLeave={() => handleSelectCategory(data[0])}
      className="absolute hidden w-[716px] group-hover:block top-full pt-[34px]"
    >
      <div className="bg-[#262626] h-[500px] rounded p-6 grid grid-cols-2">
        <div className="col-span-1 pr-3 border-r border-r-dark-secondary">
          <h3 className="text-xl font-medium pb-7">Categorias</h3>
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
          <h3 className="text-xl font-medium pb-7">Cursos</h3>
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
