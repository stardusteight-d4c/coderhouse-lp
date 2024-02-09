"use client"

import { Rotate } from "react-awesome-reveal"
import CountUp from "react-countup"

interface WorldGlobeProps extends React.HTMLAttributes<HTMLDivElement> {}

export const WorldGlobe: React.FC<WorldGlobeProps> = (
  props: WorldGlobeProps
) => {
  return (
    <section className="max-w-7xl px-3 xl:px-0 mb-[100px] md:mb-[190px] mx-auto w-full text-brand-light">
      <h3 className="text-4xl md:text-5xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-green-main to-brand-green-light">
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
            <div className="pl-[75px] pt-[55px] xs:pl-[80px] xs:pt-[80px] sm:pl-[125px] sm:pt-[125px] md:pl-[130px] md:pt-[145px]">
              <div className="flex items-start flex-col gap-y-7">
                <div>
                  <h6 className="text-4xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-green-main to-brand-green-light">
                    +{" "}
                    <CountUp
                      start={0}
                      end={280000}
                      enableScrollSpy
                      scrollSpyOnce
                      separator="."
                    />
                  </h6>
                  <span className="text-brand-light tracking-wider uppercase text-sm font-light">
                    | Estudantes
                  </span>
                </div>
                <div>
                  <h6 className="text-4xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-green-main to-brand-green-light">
                    +{" "}
                    <CountUp
                      start={0}
                      end={90}
                      enableScrollSpy
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
                  <h6 className="text-4xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-green-main to-brand-green-light">
                    +{" "}
                    <CountUp
                      start={0}
                      end={50}
                      enableScrollSpy
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
          <Rotate duration={1000} delay={200}>
            <video
              src="/assets/mp4/world-globe.mp4"
              autoPlay
              loop
              playsInline
              muted
              className="scale-110 z-50 md:w-[666px] md:h-[670px]"
            />
          </Rotate>
        </div>
      </div>
    </section>
  )
}
