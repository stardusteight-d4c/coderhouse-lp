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

  return (
    <section className="max-w-7xl w-full text-center mx-auto px-2 text-brand-light">
      <h3 className="leading-[30px] text-xl text-center w-full mb-14">
        Cursos e Carreiras oficialmente certificados pela
      </h3>
      <div className="text-dark-tertiary grid grid-cols-5 items-center gap-x-32">
        {companyImagesPaths.map((company, index) => (
          <img
            key={index}
            src={company}
            alt="comapany/svg"
            className="col-span-1"
          />
        ))}
      </div>
      <span className="text-brand-green-light cursor-pointer mt-10 block hover:underline w-fit mx-auto text-center">
        Conheça mais sobre as empresas que nos certificam
      </span>
      <Divider className="mt-[48px] mb-[124px]" />
    </section>
  )
}
