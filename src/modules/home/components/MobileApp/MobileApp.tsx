interface MobileAppProps extends React.HTMLAttributes<HTMLDivElement> {}

export const MobileApp: React.FC<MobileAppProps> = (props: MobileAppProps) => {
  return (
    <section className="max-w-7xl px-3 xl:px-0 w-full pb-[100px] lg:pb-[350px] mx-auto">
      <div className="w-full rounded-sm px-4 md:px-[80px] lg:px-[120px] gap-x-[100px] py-8 md:py-[56px] text-dark-main bg-brand-green-light grid lg:grid-cols-2 items-center">
        <div className="col-span-1">
          <h3 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-5 tracking-[-1.8px]">
            Baixe nosso app
          </h3>
          <p className="text-xl md:max-w-[500px] lg:w-full">
            Baixe o aplicativo para aprender mais: você pode ver as aulas,
            conhecer os desafios e ver as correções.
          </p>
          <div className="flex items-center flex-col md:flex-row gap-5 mt-11">
            <button className="cursor-pointer whitespace-nowrap hover:brightness-150 transition-all flex items-center gap-x-2 py-2 px-14 w-full justify-center md:w-fit rounded-sm bg-dark-main text-brand-green-main">
              <img src="/assets/app-store.svg" alt="app-store/svg" /> App Store
            </button>
            <button className="cursor-pointer whitespace-nowrap hover:brightness-150 transition-all flex items-center gap-x-2 py-2 px-14 w-full justify-center md:w-fit rounded-sm bg-dark-main text-brand-green-main">
              <img src="/assets/google-play.svg" alt="google-play/svg" /> Google
              Play
            </button>
          </div>
        </div>
        <div className="col-span-1 hidden lg:block relative">
          <div className="top-0 -mt-40 absolute w-[704px] h-[716px]">
            <img src="/assets/mobile.webp" alt="mobile-app/webp" />
          </div>
        </div>
      </div>
    </section>
  )
}
