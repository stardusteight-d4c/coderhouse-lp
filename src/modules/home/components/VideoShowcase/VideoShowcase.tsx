interface VideoShowcaseProps extends React.HTMLAttributes<HTMLVideoElement> {}

export const VideoShowcase: React.FC<VideoShowcaseProps> = (
  props: VideoShowcaseProps
) => {
  return (
    <video
      src="/assets/mp4/showcase.mp4"
      autoPlay
      loop
      className="max-w-[992px] max-h-[640px] mb-[124px] mx-auto w-full h-full"
    />
  )
}
