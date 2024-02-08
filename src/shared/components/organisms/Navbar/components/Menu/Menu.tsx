"use client"

import { useState } from "react"
import ReactDOM from "react-dom"

import { MenuBar, X } from "@/shared/components/atoms/icons"
import { menuItems } from "../../data"

interface MenuProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Menu = (props: MenuProps) => {
  const [showMenu, setShowMenu] = useState<boolean>(false)

  function handleShowMenu(isShow: boolean) {
    setShowMenu(isShow)
  }

  function renderMenu() {
    if (typeof document === "undefined") {
      return null
    }

    return ReactDOM.createPortal(
      <>
        <div
          onClick={() => handleShowMenu(false)}
          data-is-show={showMenu}
          className="data-[is-show=true]:block data-[is-show=false]:hidden w-screen h-screen z-[1000] fixed inset-0 text-brand-light bg-dark-main/50 backdrop-blur-sm"
        />
        <div
          data-is-show={showMenu}
          className="data-[is-show=true]:block data-[is-show=false]:hidden fixed z-[1000] px-6 py-16 bg-[#262626] text-brand-light top-0 right-0 w-[330px] h-screen"
        >
          <div
            onClick={() => handleShowMenu(false)}
            className="absolute right-5 top-5 cursor-pointer"
          >
            <X size="24" />
          </div>
          {menuItems.map((item, index) => (
            <div key={index}>
              {!item.items ? (
                <span className="mb-2 text-dark-tertiary hover:underline hover:text-brand-green-main cursor-pointer">
                  {item.category}
                </span>
              ) : (
                <div className="mt-5 border-t border-t-dark-secondary">
                  <h4 className="mt-5 mb-3 text-lg">{item.category}</h4>
                  <ul>
                    {item.items.map((listItem, index) => (
                      <li
                        key={index}
                        className="mb-2 text-dark-tertiary hover:underline hover:text-brand-green-main cursor-pointer"
                      >
                        {listItem}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </>,
      document.body
    )
  }

  return (
    <div>
      <div onClick={() => handleShowMenu(true)}>
        <MenuBar color="#FFFFFF" className="cursor-pointer" />
      </div>
      {showMenu && renderMenu()}
    </div>
  )
}
