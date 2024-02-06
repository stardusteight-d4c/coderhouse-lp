"use client"

import { useState } from "react"

interface CollapsibleProps extends React.HTMLAttributes<HTMLDivElement> {
  data: Array<{
    title: string
    about: string
  }>
}

export const Collapsible: React.FC<CollapsibleProps> = ({
  data,
}: CollapsibleProps) => {
  if (!data) return
  const [active, setActive] = useState<string>(data[0].title)

  function handleConnect(index: number, circleColor?: boolean) {
    const activeItemIndex = data.findIndex((item) => item.title === active)
    if (!circleColor) {
      if (index + 1 === data.length) {
        return "hidden"
      }
      if (index < activeItemIndex) {
        return "bg-brand-green-light"
      } else {
        return "bg-dark-secondary"
      }
    } else {
      if (index <= activeItemIndex) {
        return "bg-brand-green-light"
      } else {
        return "bg-dark-secondary"
      }
    }
  }

  function handleActiveItem(title: string) {
    setActive(title)
  }

  function handleTitleColor(title: string) {
    if (active === title) {
      return "text-brand-green-light"
    } else {
      return "text-brand-light"
    }
  }

  return (
    <div>
      {data.map((item, index) => (
        <div key={index} className="h-full relative pb-[59px]">
          <div
            className={
              "w-[2px] h-full absolute top-4 left-[7px] " + handleConnect(index)
            }
          />
          <h3
            onClick={() => handleActiveItem(item.title)}
            className={
              "flex items-center group gap-x-16 cursor-pointer text-3xl leading-[36px] font-medium " +
              handleTitleColor(item.title)
            }
          >
            <div
              className={
                "rounded-full max-w-[16px]  max-h-[16px] min-w-[16px] min-h-[16px] w-4 h-4 z-[100] bg-brand-green-light " +
                handleConnect(index, true)
              }
            />
            {item.title}
          </h3>
          {active === item.title && (
            <div className="flex items-center gap-x-16">
              <div className="max-w-[16px] min-w-[16px]" />
              <span className="text-dark-low block pt-[46px] px-4">
                {item.about}
              </span>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
