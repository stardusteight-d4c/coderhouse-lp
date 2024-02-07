interface MobileAppProps extends React.HTMLAttributes<HTMLDivElement> {}

export const MobileApp: React.FC<MobileAppProps> = (props: MobileAppProps) => {
  return (
    <section className="max-w-7xl w-full pb-[350px] mx-auto">
      <div className="w-full rounded-sm px-[120px] gap-x-[100px] py-[56px] text-dark-main bg-brand-green-light grid grid-cols-2 items-center">
        <div className="col-span-1">
          <h3 className="text-7xl font-bold mb-5 tracking-[-1.8px]">
            Baixe nosso app
          </h3>
          <p className="text-xl">
            Baixe o aplicativo para aprender mais: você pode ver as aulas,
            conhecer os desafios e ver as correções.
          </p>
          <div className="flex items-center gap-x-5 mt-11">
            <button className="cursor-pointer flex items-center gap-x-2 py-2 px-14 w-fit rounded-sm bg-dark-main text-brand-green-main">
              <img src="/assets/app-store.svg" alt="app-store/svg" /> App Store
            </button>
            <button className="cursor-pointer flex items-center gap-x-2 py-2 px-14 w-fit rounded-sm bg-dark-main text-brand-green-main">
              <img src="/assets/google-play.svg" alt="google-play/svg" /> Google
              Play
            </button>
          </div>
        </div>
        <div className="col-span-1 relative">
          <div className="top-0 -mt-40 absolute w-[704px] h-[716px]">
            <img
              src="/assets/mobile.webp"
              alt="mobile-app/webp"
              className=""
            />
          </div>
        </div>
      </div>
    </section>
  )
}
