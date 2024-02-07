"use client"

import { CaretDown } from "@/shared/components/atoms"
import { faqItems } from "./data"
import { useState } from "react"

interface FaqProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Faq: React.FC<FaqProps> = (props: FaqProps) => {
  const [activeFaq, setActiveFaq] = useState<number | undefined>()

  function handleActiveFaq(index: number) {
    if (activeFaq === index) {
      setActiveFaq(undefined)
      return
    } else {
      setActiveFaq(index)
    }
  }

  return (
    <section className="max-w-7xl pb-[125px] text-brand-light w-full mx-auto">
      <h5 className="text-6xl font-bold tracking-[-1.8px] mb-14">
        Perguntas frequentes
      </h5>
      <div className="w-[930px]">
        {faqItems.map((item, index) => (
          <div key={index} className="border-b-2 border-b-dark-secondary">
            <h3
              onClick={() => handleActiveFaq(index)}
              className="text-3xl py-5 flex cursor-pointer items-center justify-between"
            >
              {item.question}{" "}
              <CaretDown
                color="#D1E500"
                size="30"
                className={activeFaq === index ? "rotate-180" : "rotate-0"}
              />
            </h3>
            {activeFaq === index && (
              <div className="text-dark-low text-xl pb-5">
                <div dangerouslySetInnerHTML={{ __html: item.awser }} />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
