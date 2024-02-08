import { Divider } from "@/shared/components/atoms"
import { Feedback } from "./components"
import { feedbacks } from "./components/Feedback/data"

interface FeedbacksProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Feedbacks: React.FC<FeedbacksProps> = (props: FeedbacksProps) => {
  return (
    <section className="max-w-7xl px-3 xl:px-0 w-full mx-auto text-brand-light mt-[100px] md:mt-[160px]">
      <h4 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-[-2.4px]">
        Mais de 280.000 estudantes nos recomendam em toda a América Latina
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 mt-14">
        {feedbacks.map((feedback, index) => (
          <Feedback key={index} data={feedback} />
        ))}
      </div>
      <div className="w-fit text-lg mx-auto text-brand-green-main flex items-center gap-x-2 mt-14 cursor-pointer group">
        <span className="block w-fit group-hover:underline">
          Conheça mais experiências
        </span>
        <span>→</span>
      </div>
      <Divider className="mt-[80px] mb-[100px] md:mb-[160px]" />
    </section>
  )
}
