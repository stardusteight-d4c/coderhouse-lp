import { Quote } from "@/shared/components/atoms/icons/Quote"

interface FeedbackProps extends React.HTMLAttributes<HTMLDivElement> {
  data: IFeedback
}

export const Feedback: React.FC<FeedbackProps> = ({ data }: FeedbackProps) => {
  return (
    <div className="col-span-1 relative flex items-start gap-x-4 w-fit rounded-sm bg-dark-tertiary/10 p-11 !pt-14">
      <Quote className="-mt-4" />
      <div>
        <p className="text-dark-low mb-9">{data.feedback}</p>
        <div className="flex items-center gap-x-4">
          <img
            src={data.avatarUrl}
            alt={`${data.avatarUrl}/png`}
            className="w-[52px] h-[52px] rounded-sm"
          />
          <div className="flex flex-col">
            <h5 className="text-xl">{data.name}</h5>
            <span className="text-dark-low text-xs">{data.label}</span>
          </div>
        </div>
        <span className="block ml-auto cursor-pointer hover:underline w-fit text-brand-green-light">
          Ver LinkedIn
        </span>
      </div>
    </div>
  )
}
