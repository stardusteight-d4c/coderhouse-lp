"use client"

import { Dispatch, SetStateAction, useState } from "react"
import ReactDOM from "react-dom"

import { ArrowBack, MenuBar, X } from "@/shared/components/atoms/icons"
import { carers, courses, forBusinesses, menuItems } from "../../data"
import { Dropdown } from ".."

interface MenuProps extends React.HTMLAttributes<HTMLDivElement> {}

function renderDesktopContent(mobileHidden: boolean) {
  return menuItems.map((item, index) => (
    <div key={index} className={mobileHidden ? "hidden lg:block" : "block"}>
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
  ))
}

function renderMobileContent({
  menuItem,
  setMenuItem,
}: {
  menuItem: "Cursos" | "Carreiras" | "Para empresas" | undefined
  setMenuItem: Dispatch<
    SetStateAction<"Cursos" | "Carreiras" | "Para empresas" | undefined>
  >
}) {
  function handleSendDataToDropdown() {
    if (menuItem === "Cursos") {
      return courses
    }
    if (menuItem === "Carreiras") {
      return carers
    }
    if (menuItem === "Para empresas") {
      return forBusinesses
    }
  }

  return (
    <ul className="block lg:hidden">
      {!menuItem && (
        <div className="px-3">
          {renderDesktopContent(false)}
          <li
            onClick={() => setMenuItem("Cursos")}
            className="mt-5 mb-3 text-lg cursor-pointer"
          >
            Cursos
          </li>
          <li
            onClick={() => setMenuItem("Carreiras")}
            className="mt-5 mb-3 text-lg cursor-pointer"
          >
            Carreiras
          </li>
          <li
            onClick={() => setMenuItem("Para empresas")}
            className="mt-5 mb-3 text-lg cursor-pointer"
          >
            Para empresas
          </li>
        </div>
      )}
      {menuItem && (
        <Dropdown
          data={handleSendDataToDropdown()!}
          type={menuItem}
          resetState={!menuItem}
        />
      )}
    </ul>
  )
}

export const Menu = (props: MenuProps) => {
  const [showMenu, setShowMenu] = useState<boolean>(false)
  const [menuItem, setMenuItem] = useState<
    "Cursos" | "Carreiras" | "Para empresas" | undefined
  >(undefined)

  function handleShowMenu(isShow: boolean) {
    setShowMenu(isShow)
    setMenuItem(undefined)
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
          className="data-[is-show=true]:block data-[is-show=false]:hidden fixed z-[1000] lg:px-6 py-8 lg:py-16 bg-[#262626] text-brand-light top-0 right-0 w-screen md:w-[430px] lg:w-[330px] h-screen"
        >
          {menuItem && (
            <div
              onClick={() => setMenuItem(undefined)}
              className="absolute left-5 top-5 cursor-pointer"
            >
              <ArrowBack size="24" />
            </div>
          )}
          <div
            onClick={() => handleShowMenu(false)}
            className="absolute right-5 top-5 cursor-pointer"
          >
            <X size="24" />
          </div>
          {renderDesktopContent(true)}
          {renderMobileContent({ menuItem, setMenuItem })}
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
