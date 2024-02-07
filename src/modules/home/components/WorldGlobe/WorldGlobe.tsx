"use client"

import CountUp from "react-countup"

interface WorldGlobeProps extends React.HTMLAttributes<HTMLDivElement> {}

export const WorldGlobe: React.FC<WorldGlobeProps> = (
  props: WorldGlobeProps
) => {
  return (
    <section className="max-w-7xl mb-[190px] mx-auto w-full text-brand-light">
      <h3 className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-green-main to-brand-green-light">
        Evoluímos <br />
        com você
      </h3>
      <div className="relative mx-auto mt-8 rounded-full w-fit h-fit">
        <img
          src="/assets/lLineYellow.svg"
          alt="lline-yelow/svg"
          className="absolute bottom-[150px] rotate-6 w-[400px] -left-[325px]"
        />
        <img
          src="/assets/rLineYellow.svg"
          alt="rline-yelow/svg"
          className="absolute -bottom-[25px] -right-[310px]"
        />
        <div className="relative bg-dark-main overflow-hidden rounded-full flex items-center justify-center w-fit h-fit">
          <div className="absolute z-[100] inset-0">
            <div className="pl-[130px] pt-[145px]">
              <div className="flex items-start flex-col gap-y-7">
                <div>
                  <h6 className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-green-main to-brand-green-light">
                    +{" "}
                    <CountUp
                      start={0}
                      end={280000}
                      scrollSpyOnce
                      separator="."
                    />
                  </h6>
                  <span className="text-brand-light tracking-wider uppercase text-sm font-light">
                    | Estudantes
                  </span>
                </div>
                <div>
                  <h6 className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-green-main to-brand-green-light">
                    +{" "}
                    <CountUp
                      start={0}
                      end={90}
                      scrollSpyOnce
                      duration={3}
                      separator="."
                    />
                    %
                  </h6>
                  <span className="text-brand-light tracking-wider uppercase text-sm font-light">
                    | Cursos finalizados
                  </span>
                </div>
                <div>
                  <h6 className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-green-main to-brand-green-light">
                    +{" "}
                    <CountUp
                      start={0}
                      end={50}
                      scrollSpyOnce
                      duration={3}
                      separator="."
                    />
                  </h6>
                  <span className="text-brand-light tracking-wider uppercase text-sm font-light">
                    | Cursos disponíveis
                  </span>
                </div>
              </div>
            </div>
          </div>
          <video
            src="/assets/mp4/world-globe.mp4"
            autoPlay
            loop
            muted
            className="scale-110 z-50 w-[666px] h-[670px]"
          />
        </div>
      </div>
    </section>
  )
}
