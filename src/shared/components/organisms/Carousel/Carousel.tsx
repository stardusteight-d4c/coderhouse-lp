"use client"

import {
  Carousel as CarouselRoot,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/shared/components/molecules/Carousel"
import { Plan } from "@/shared/components/molecules/cards"
import { Fade } from "react-awesome-reveal"

interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  data: Array<IPlan>
}

export const Carousel: React.FC<CarouselProps> = ({ data }: CarouselProps) => {
  return (
    <CarouselRoot>
      <CarouselContent className="min-w-[400px] max-w-[400px]">
        <Fade cascade duration={1000}>
          {data.map((item, index) => (
            <CarouselItem key={index}>
              <Plan data={item} />
            </CarouselItem>
          ))}
        </Fade>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </CarouselRoot>
  )
}
