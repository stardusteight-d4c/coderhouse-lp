import React from "react"
import { footerLists, socialMedias } from "./data"
import { Divider } from "@/shared/components/atoms"

interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Footer: React.FC<FooterProps> = (props: FooterProps) => {
  return (
    <footer className="max-w-7xl w-full mx-auto text-dark-low mt-[100px]">
      <div className="flex justify-between">
        <div className="grid grid-cols-3 w-full max-w-[800px]">
          {footerLists.map((list, index) => (
            <div key={index} className="col-span-1">
              <h5 className="text-xl font-medium text-brand-light mb-8">
                {list.section}
              </h5>
              <ul className="flex flex-col gap-y-3">
                {list.items.map((item, index) => (
                  <li
                    key={index}
                    className="block w-fit hover:underline cursor-pointer"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div>
          <h5 className="text-xl font-medium text-brand-light mb-8">
            Assine nossa Newsletter
          </h5>
          <div className="flex items-center gap-x-2">
            <input
              type="email"
              placeholder="E-mail"
              className="bg-dark-tertiary/10 w-[300px] rounded-sm p-2 outline-none border border-transparent focus:border-brand-green-light"
            />
            <button className="bg-brand-green-main rounded-sm py-2 px-4 hover:bg-brand-green-light transition-all ease-in text-dark-main flex items-center justify-center">
              Enviar
            </button>
          </div>
          <div className="flex flex-col gap-y-1 mt-12">
            <span className="flex group cursor-pointer w-fit items-center gap-x-2">
              <img src="/assets/brasil.svg" alt="brasil/svg" className="h-4" />{" "}
              <span className="group-hover:underline">Brasil</span>
            </span>
            <span className="flex group cursor-pointer items-center gap-x-4">
              <img
                src="/assets/wifi.svg"
                alt="brasil/svg"
                className="h-4 text-brand-light"
              />{" "}
              <span className="group-hover:underline">Estado do site</span>
            </span>
          </div>
        </div>
      </div>

      <Divider className="mt-9" />
      <div className="text-center my-9 text-sm flex items-center justify-between">
        <span>
          © {new Date().getFullYear()} Coderhouse, todos os direitos reservados.
        </span>
        <ul className="flex items-center gap-x-4">
          {socialMedias.map((media, index) => (
            <li key={index} className="h-[18px] cursor-pointer">
              <img src={media} alt="media/svg" />
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
