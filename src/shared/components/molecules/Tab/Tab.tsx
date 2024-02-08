"use client"

import { useState } from "react"

interface TabProps extends React.HTMLAttributes<HTMLDivElement> {
  tabs: string[]
  onTabChange: (tab: string) => void
}

export const Tab: React.FC<TabProps> = ({ tabs, onTabChange }: TabProps) => {
  if (!tabs) return null

  const [active, setActive] = useState<string>(tabs[0])

  function handleTabChange(tab: string) {
    setActive(tab)
    onTabChange(tab)
  }

  function handleColor(tab: string) {
    if (active === tab) {
      return "bg-brand-light text-dark-main"
    } else {
      return "hover:bg-dark-tertiary/30 bg-dark-tertiary/10 text-brand-light"
    }
  }

  return (
    <div className="flex items-center flex-wrap gap-3 mb-10 mt-11">
      {tabs.map((tab, index) => (
        <div
          key={index}
          onClick={() => handleTabChange(tab)}
          className={
            "py-2 px-3 flex cursor-pointer transition-all ease-in duration-200 items-center rounded-sm justify-center text-center whitespace-nowrap " +
            handleColor(tab)
          }
        >
          {tab}
        </div>
      ))}
    </div>
  )
}
