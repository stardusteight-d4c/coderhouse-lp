import {
  Carousel as CarouselRoot,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/shared/components/molecules/Carousel"
import { Plan } from "@/shared/components/molecules/cards"
import { IPlan } from "@/shared/components/molecules/cards/Plan/types"

interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  data: Array<IPlan>
}

export const Carousel: React.FC<CarouselProps> = ({ data }: CarouselProps) => {
  return (
    <CarouselRoot>
      <CarouselContent className="min-w-[400px] max-w-[400px]">
        {data.map((item, index) => (
          <CarouselItem key={index}>
            <Plan data={item} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="text-brand-green-main" />
      <CarouselNext />
    </CarouselRoot>
  )
}
