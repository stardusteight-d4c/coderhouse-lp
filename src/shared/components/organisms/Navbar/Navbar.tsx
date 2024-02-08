import { CaretDown } from "@/shared/components/atoms"

import { Dropdown, Menu } from "./components"
import { carers, courses, forBusinesses } from "./data"

interface NavbarProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Navbar: React.FC<NavbarProps> = (props: NavbarProps) => {
  return (
    <nav className="bg-dark-main px-3 xl:px-0 py-7 z-[500] relative border-b-2 border-dark-secondary text-brand-light w-screen">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <img src="/brand/logo.svg" alt="logo/svg" />
        <ul className="lg:flex hidden items-center gap-x-8">
          <li className="flex group justify-center relative cursor-default items-center">
            Cursos{" "}
            <CaretDown
              color="#F4FF80"
              className="group-hover:rotate-180 transition-all"
            />
            <div className="opacity-0 group-hover:opacity-100 transition absolute left-0 -bottom-[16px] h-0 border-t-2 w-full border-t-brand-green-main" />
            <Dropdown type="Cursos" data={courses} />
          </li>
          <li className="flex group justify-center relative cursor-default items-center">
            Carreira{" "}
            <CaretDown
              color="#F4FF80"
              className="group-hover:rotate-180 transition-all"
            />
            <div className="opacity-0 group-hover:opacity-100 transition absolute left-0 -bottom-[16px] h-0 border-t-2 w-full border-t-brand-green-main" />
            <Dropdown type="Carreiras" data={carers} />
          </li>
          <li className="flex group justify-center relative cursor-default items-center">
            Para empresas{" "}
            <CaretDown
              color="#F4FF80"
              className="group-hover:rotate-180 transition-all"
            />
            <div className="opacity-0 group-hover:opacity-100 transition absolute left-0 -bottom-[16px] h-0 border-t-2 w-full border-t-brand-green-main" />
            <Dropdown type="Para empresas" data={forBusinesses} />
          </li>
        </ul>
        <div className="flex items-center justify-center gap-x-8">
          <span className="cursor-pointer">Plataforma</span>
          <Menu />
        </div>
      </div>
    </nav>
  )
}
