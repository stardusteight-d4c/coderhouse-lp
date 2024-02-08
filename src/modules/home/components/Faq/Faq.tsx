"use client"

import { useState } from "react"
import { Fade } from "react-awesome-reveal"

import { faqItems } from "./data"

import { CaretDown } from "@/shared/components/atoms"

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

  function handleSelectTitleColor(index: number) {
    if (index === activeFaq) {
      return "text-brand-green-main"
    } else {
      return "text-brand-light"
    }
  }

  function handleCaretPosition(index: number) {
    if (index === activeFaq) {
      return "mirror"
    } else {
      return "no-mirror"
    }
  }

  return (
    <section className="max-w-7xl px-3 xl:px-0 pb-20 md:pb-[125px] text-brand-light w-full mx-auto">
      <h5 className="text-4xl md:text-6xl font-bold tracking-[-1.8px] mb-14">
        Perguntas frequentes
      </h5>
      <div className="lg:w-[930px]">
        {faqItems.map((item, index) => (
          <div key={index} className="border-b-2 border-b-dark-secondary">
            <h3
              onClick={() => handleActiveFaq(index)}
              className={
                "text-xl md:text-3xl py-4 md:py-5 flex cursor-pointer items-center justify-between " +
                handleSelectTitleColor(index)
              }
            >
              {item.question}{" "}
              <CaretDown
                color="#D1E500"
                size="30"
                className={"transition " + handleCaretPosition(index)}
              />
            </h3>
            {activeFaq === index && (
              <Fade duration={800}>
                <div className="text-dark-low  text-xl pb-5">
                  <div dangerouslySetInnerHTML={{ __html: item.awser }} />
                </div>
              </Fade>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
