"use client"

import { X } from "@/shared/components/atoms/icons"
import { Ads } from "@/shared/components/molecules"
import { useState } from "react"

interface MegaSaleAdsProps extends React.HTMLAttributes<HTMLDivElement> {}

export const MegaSaleAds: React.FC<MegaSaleAdsProps> = ({
  ...props
}: MegaSaleAdsProps) => {
  const [show, setShow] = useState<boolean>(true)

  function handleClose() {
    setShow(false)
  }

  if (show !== true) {
    return null
  }

  return (
    <Ads
      className="bg-brand-green-light text-[15.38px] leading-[24px] relative"
      {...props}
    >
      <div>
        💸 <strong>Mega Sale</strong> 💸 Aproveite <strong>70% OFF</strong> em{" "}
        <strong>TODOS</strong> os nossos Cursos e Carreiras.
        <strong> Em até 12x sem juros | Até 05/02</strong> 🚀
      </div>
      <div
        onClick={handleClose}
        className="absolute right-8 top-1/2 -translate-y-1/2 cursor-pointer"
      >
        <X color="#1A1A1A" />
      </div>
    </Ads>
  )
}
