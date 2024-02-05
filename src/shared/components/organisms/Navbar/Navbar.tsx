import { CaretDown, MenuBar } from "@/shared/components/atoms"

interface NavbarProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Navbar: React.FC<NavbarProps> = (props: NavbarProps) => {
  return (
    <nav className="bg-dark-main py-7 px-2 border-b-2 border-dark-secondary text-brand-light w-screen">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <img src="/brand/logo.svg" alt="logo/svg" />
        <ul className="flex items-center gap-x-8">
          <li className="flex items-center">
            Cursos <CaretDown color="#F4FF80" />
          </li>
          <li className="flex items-center">
            Carreira <CaretDown color="#F4FF80" />
          </li>
          <li className="flex items-center">
            Para empresas <CaretDown color="#F4FF80" />
          </li>
        </ul>
        <div className="flex items-center justify-center gap-x-8">
          Plataforma <MenuBar color="#FFFFFF" />
        </div>
      </div>
    </nav>
  )
}
