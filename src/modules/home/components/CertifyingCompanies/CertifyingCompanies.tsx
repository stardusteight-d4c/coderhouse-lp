import { Divider } from "@/shared/components/atoms"

interface CertifyingCompaniesProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export const CertifyingCompanies: React.FC<CertifyingCompaniesProps> = (
  props: CertifyingCompaniesProps
) => {
  const companyImagesPaths = [
    "/assets/nuvemshop.svg",
    "/assets/clara.svg",
    "/assets/olxbrasil.svg",
    "/assets/meliuz.svg",
    "/assets/madeiramadeira.svg",
  ]

  function handleCols(index: number) {
    if (index === 4) {
      return "col-span-2 md:col-span-1 h-[50px] mx-auto"
    }
    if (index === 0) {
      return "col-span-1 h-[80px] md:h-auto"
    }

    return "col-span-1 h-[50px] md:h-auto"
  }

  return (
    <section className="max-w-7xl px-3 xl:px-0 w-full text-center mx-auto text-brand-light">
      <h3 className="leading-[30px] text-xl text-center w-full mb-4 md:mb-14">
        Cursos e Carreiras oficialmente certificados pela
      </h3>
      <div className="text-dark-tertiary w-[300px] mx-auto md:mx-0 md:w-full grid grid-cols-2 md:grid-cols-5 items-center justify-center md:justify-start gap-4 gap-x-20 lg:gap-x-32">
        {companyImagesPaths.map((company, index) => (
          <img
            key={index}
            src={company}
            alt="comapany/svg"
            className={"col-span-1 " + handleCols(index)}
          />
        ))}
      </div>
      <span className="text-brand-green-light w-[300px] text-sm md:text-base cursor-pointer mt-10 block underline md:w-fit mx-auto text-center">
        Conheça mais sobre as empresas que nos certificam
      </span>
      <Divider className="mt-[48px] mb-16 md:mb-[124px]" />
    </section>
  )
}
