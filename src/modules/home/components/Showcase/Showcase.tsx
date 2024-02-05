interface ShowcaseProps extends React.HTMLAttributes<HTMLVideoElement> {}

export const Showcase: React.FC<ShowcaseProps> = (props: ShowcaseProps) => {
  return (
    <section className="max-w-7xl mx-auto text-dark-main w-full px-2">
      <video
        src="/assets/mp4/showcase.mp4"
        autoPlay
        loop 
        muted
        className="max-w-[992px] rounded-xl overflow-hidden max-h-[640px] mb-[124px] mx-auto w-full h-full"
      />
      <div className="w-full grid grid-cols-2 gap-10">
        <div className="col-span-1 row-span-1 col-start-1 w-full rounded py-9 px-8 bg-brand-green-light">
          <h3 className="text-5xl font-bold leading-[50px]">
            Educação online de alta qualidade ao seu alcance
          </h3>
          <span className="block mt-4 font-medium">
            Inscreva-se em aulas práticas com mentorias personalizadas com os
            principais especialistas do mercado, e prepare-se para dar o próximo
            passo em sua carreira profissional.
          </span>
          <img
            src="/assets/chat-br.webp"
            alt="chat-br/webp"
            className="h-[200px] rounded mt-7 mx-auto"
          />
        </div>
        <div className="col-span-1 row-span-1 relative col-start-1 w-full rounded text-brand-light py-9 px-8 bg-dark-tertiary/10">
          <img
            src="/assets/user-green.png"
            alt="user-green/png"
            className="absolute w-[84px] h-[84px] -left-14 -top-4"
          />
          <img
            src="/assets/user-violet.png"
            alt="user-violet/png"
            className="absolute w-[84px] h-[84px] -right-14 -bottom-4"
          />
          <h3 className="text-5xl font-bold leading-[50px]">Tutores</h3>
          <span className="block mt-4 font-medium">
            Em cada curso você terá um tutor para tirar dúvidas e receber
            feedbacks sobre seus projetos sempre que precisar.
          </span>
        </div>
        <div className="col-span-1 row-span-2 col-start-2 row-start-1 w-full rounded text-brand-light py-9 px-8 bg-dark-tertiary/10">
          <div className="w-fit mx-auto">
            <video
              src="/assets/mp4/professors.mp4"
              autoPlay
              loop
              muted
              className="rounded overflow-hidden max-h-[512px] mb-4 w-fit h-full"
            />
          </div>
          <h3 className="text-5xl font-bold leading-[50px]">
            Professores especialistas
          </h3>
          <span className="block mt-4 font-medium">
            Aprenda interagindo com os líderes das empresas de tecnologia mais
            inovadoras do mundo.
          </span>
        </div>
      </div>
    </section>
  )
}
