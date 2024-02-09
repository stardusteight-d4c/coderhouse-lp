import { Collapsible } from "@/shared/components/molecules"

interface CertificateProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Certificate: React.FC<CertificateProps> = (
  props: CertificateProps
) => {
  const data = [
    {
      title: "Conteúdo certificado por empresas",
      about: `O conteúdo dos nossos cursos e carreiras é certificado pelas empresas de tecnologia mais inovadoras do mundo.`,
    },
    {
      title: "Desafios",
      about: `Durante o curso, você terá desafios para poder aplicar de forma prática o que aprendeu na aula.`,
    },
    {
      title: "Certificado",
      about: `Ao final de cada curso ou carreira, você vai receber um certificado da Coderhouse para compartilhar em suas redes sociais.`,
    },
  ]

  return (
    <section className="max-w-7xl px-3 xl:px-0 py-[50px] md:py-[132px] w-full mx-auto items-center grid gap-x-[100px] grid-cols-1  md:grid-cols-2">
      <div className="col-span-1 text-brand-light">
        <Collapsible data={data} />
      </div>
      <div className="col-span-1">
        <video
          src="/assets/mp4/certificate.mp4"
          autoPlay
          loop
          playsInline
          muted
          className="rounded-sm w-full overflow-hidden"
        />
      </div>
    </section>
  )
}
