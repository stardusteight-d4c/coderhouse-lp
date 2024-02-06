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

  function handleConnect({
    index,
    title,
    circleColor,
  }: {
    index: number
    title: string
    circleColor?: boolean
  }) {
    const activeItemIndex = data.findIndex((item) => item.title === active)
    const charactersQuantity = title.length
    let top =
      charactersQuantity > 35 ? "top-[28px] h-[95%]" : "top-[16px] h-[100%]"
    if (!circleColor) {
      if (index + 1 === data.length) {
        return "hidden"
      }
      if (index < activeItemIndex) {
        return "bg-brand-green-light " + top
      } else {
        return "bg-dark-secondary " + top
      }
    } else {
      if (index <= activeItemIndex) {
        return "bg-brand-green-light " + top
      } else {
        return "bg-dark-secondary " + top
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

  function handleCollapsibleAnimation(title: string) {
    if (active === title) {
      return {
        transform: "scaleY(1)",
        opacity: 1,
        transition: "all 0.3s ease 0s",
        transformOrigin: "0% 0% 0px",
        height: "100px",
      }
    } else {
      return {
        transform: "scaleY(0)",
        opacity: 0,
        transition: "all 0.3s ease 0s",
        transformOrigin: "0% 0% 0px",
        height: "0px",
      }
    }
  }

  function handleCircleAnimation(title: string) {
    if (active === title) {
      return {
        width: "0px",
        height: "0px",
        border: "2px solid transparent",
        animation: "grow 300ms forwards",
      }
    }
  }

  function renderCircleRing(title: string) {
    if (active === title) {
      return (
        <div
          style={handleCircleAnimation(title)}
          className="bg-dark-main absolute max-w-[32px] rounded-full z-[1] max-h-[32px]"
        />
      )
    }
  }

  const keyframes = `
    @keyframes grow {
      0% {
        width: 0px;
        height: 0px;
        border: 2px solid;
        borderColor: #F4FF80;
      }
      100% {
        width: 32px; 
        height: 32px; 
        border: 2px solid;
        borderColor: #F4FF80;
      }
    }
  `

  return (
    <div>
      {data.map((item, index) => (
        <div key={index} className="h-full relative pb-[59px]">
          <div
            className={
              "w-[2px] absolute left-[7px] " +
              handleConnect({ index, title: item.title })
            }
          />
          <h3
            onClick={() => handleActiveItem(item.title)}
            className={
              "flex items-center group gap-x-16 cursor-pointer text-3xl leading-[36px] font-medium " +
              handleTitleColor(item.title)
            }
          >
            <div className="relative flex items-center justify-center ">
              <div
                className={
                  "rounded-full max-w-[16px] max-h-[16px] min-w-[16px] min-h-[16px] w-4 h-4 z-[100] bg-brand-green-light " +
                  handleConnect({ index, title: item.title, circleColor: true })
                }
              />
              <style>{keyframes}</style>
              {renderCircleRing(item.title)}
            </div>
            {item.title}
          </h3>
          <div
            style={handleCollapsibleAnimation(item.title)}
            className="flex items-center gap-x-16"
          >
            <div className="max-w-[16px] min-w-[16px]" />
            <span className="text-dark-low block pt-[46px] px-4">
              {item.about}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}
