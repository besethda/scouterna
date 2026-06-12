'use client'

import useMessages from "@/hook/useMessages";
import Image from "next/image";
import underline from '../../public/underline.svg'
import ring from '../../public/ring.svg'

const GoodToKnow = () => {
  const messages = useMessages()

  const cards = [
    {
      icon: "scheduleIcon.svg",
      alt: "schedule-Icon",
      title: messages?.goodToKnow?.card_title_1,
      headline: messages?.goodToKnow?.card_headline_1,
      text: messages?.goodToKnow?.card_text_1,
    },
    {
      icon: "heartIconYellowBg.svg",
      alt: "Heart-Icon",
      title: messages?.goodToKnow?.card_title_2,
      headline: messages?.goodToKnow?.card_headline_2,
      text: messages?.goodToKnow?.card_text_2,
    },
    {
      icon: "groupIcon.svg",
      alt: "group-Icon",
      title: messages?.goodToKnow?.card_title_3,
      headline: messages?.goodToKnow?.card_headline_3,
      text: <><span className="hidden md:inline">{messages?.goodToKnow?.span_3}</span> {messages?.goodToKnow?.card_text_3}</>
    },
    {
      icon: "starIcon.svg",
      alt: "star-Icon",
      title: messages?.goodToKnow?.card_title_4,
      headline: messages?.goodToKnow?.card_headline_4,
      text: <>{messages?.goodToKnow?.card_text_4}<span className="hidden md:inline"> {messages?.goodToKnow?.span_4}</span></>
    }
  ]

  return (
    <div className="flex flex-col md:max-w-200 lg:max-w-430 min-w-97.5 min-h-120 gap-4 px-4 pb-10 bg-bg-blue md:pb-15 pt-5 md:pt-10">
      <div className=" relative flex flex-col items-start">
        <h2 className="text-primary font-fraunces font-bold text-h2 tracking-[-0.5%] md:text-h2-desktop">{messages?.goodToKnow?.headline}</h2>
        <Image src={underline} alt="underline" width={96} height={32} className="md:hidden w-35 h-auto" />
        <Image src={ring} alt="highlighte text" width={400} height={250} className="md:absolute hidden md:block -left-16.5 -top-41.25" />
      </div>
      <div className="flex flex-col gap-4 md:grid lg:max-w-393 md:grid-cols-2 md:grid-rows-2 md:gap-6 md:py-2.5 md:text-[#FFFFFF] ">
        {cards.map((card, index) => (
          <div key={index} className="flex flex-row gap-4 font-normal bg-primary rounded-2xl p-5 shadow-md shadow-black/40">
            <div className="md:flex  min-w-12 h-11.25 rounded-full items-center justify-center">
              <img src={card.icon} alt={card.alt} height={45} width={48} />
            </div>
            <div className="flex flex-col">
              <p className=" md:block font-bold font-albert uppercase text-body md:text-acc-desktop tracking-[1.5px] text-accent">
                {card.title}
              </p>
              <p className="font-fraunces font-bold text-h3 tracking-[-0.5%] gap-1 md:text-h3-desktop text-text-white mb-2">
                {card.headline}
              </p>
              <p className="gap-2.5 text-body font-albert tracking-[3%] md:text-body-desktop md:pr-12  text-text-white">
                {card.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default GoodToKnow