interface WorldGlobeProps extends React.HTMLAttributes<HTMLDivElement> {}

export const WorldGlobe: React.FC<WorldGlobeProps> = (
  props: WorldGlobeProps
) => {
  return (
    <section className="max-w-7xl mx-auto w-full text-brand-light">
      <h3 className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-brand-green-main to-brand-green-light">
        Evoluímos <br />
        com você
      </h3>
      <div className="relative mx-auto mt-8 rounded-full bg-dark-main overflow-hidden flex items-center justify-center w-fit h-fit">
        <video
          src="/assets/mp4/world-globe.mp4"
          autoPlay
          loop
          muted
          className="scale-110 w-[966px] h-[970px]"
        />
      </div>
    </section>
  )
}
