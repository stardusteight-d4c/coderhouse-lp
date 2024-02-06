import {
  Carousel as CarouselRoot,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/shared/components/molecules/Carousel"
import { Plan } from "../../molecules/cards"

interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Carousel: React.FC<CarouselProps> = (props: CarouselProps) => {
  return (
    <CarouselRoot>
      <CarouselContent className="min-w-[400px] max-w-[400px]">
        <CarouselItem>
          <Plan />
        </CarouselItem>
        <CarouselItem>
          <Plan />
        </CarouselItem>
        <CarouselItem>
          <Plan />
        </CarouselItem>
        <CarouselItem>
          <Plan />
        </CarouselItem>
        <CarouselItem>
          <Plan />
        </CarouselItem>
        <CarouselItem>
          <Plan />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </CarouselRoot>
  )
}
