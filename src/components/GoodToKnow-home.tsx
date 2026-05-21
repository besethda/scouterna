'use client'

import useMessages from "@/hook/useMessages";

const GoodToKnow = () => {
  const messages = useMessages()

  const cards = [
    {
      icon: "Watch.png",
      alt: "Watch-Icon",
      title: messages?.goodToKnow?.card_title_1,
      headline: messages?.goodToKnow?.card_headline_1,
      text: messages?.goodToKnow?.card_text_1,
    },
    {
      icon: "HeartYellow.png",
      alt: "Heart-Icon",
      title: messages?.goodToKnow?.card_title_2,
      headline: messages?.goodToKnow?.card_headline_2,
      text: messages?.goodToKnow?.card_text_2,
    },
    {
      icon: "HandHeart.png",
      alt: "HandHeart-Icon",
      title: messages?.goodToKnow?.card_title_3,
      headline: messages?.goodToKnow?.card_headline_3,
      text: <><span className="hidden md:inline">{messages?.goodToKnow?.span_3}</span> {messages?.goodToKnow?.card_text_3}</>
    },
    {
      icon: "Boj.png",
      alt: "Boj-Icon",
      title: messages?.goodToKnow?.card_title_4,
      headline: messages?.goodToKnow?.card_headline_4,
      text: <>{messages?.goodToKnow?.card_text_4}<span className="hidden md:inline"> {messages?.goodToKnow?.span_4}</span></>
    }
  ]

  return (
    <div className="flex flex-col min-w-97.5 min-h-120 gap-4 px-4 py-10 bg-(--bg-blue) md:p-25 md:bg-white ">
      <p className="text-[#00355F] font-varela font-normal text-h2 tracking-[-0.5%] md:text-h2-desktop">{messages?.goodToKnow?.headline}</p>
      <div className="flex flex-col gap-4 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-6 md:py-2.5 md:text-[#FFFFFF]">

        {cards.map((card, index) => (
          <div key={index} className="flex flex-row gap-4 font-normal md:bg-primary md:rounded-2xl md:p-5 ">
            <div className="hidden md:flex  min-w-11 h-11 rounded-full items-center justify-center">
              <img src={card.icon} alt={card.alt} height={44} width={44} />
            </div>

            <div className="flex flex-col">
              <p className="hidden md:block font-public font-bold uppercase text-[14px] tracking-[1.5px] text-[#1F74AD]">
                {card.title}
              </p>
              <p className="text-[#003061] font-varela text-h3 tracking-[-0.5%] gap-1 md:text-h3-desktop md:text-[#FFFFFF] mb-2">
                {card.headline}
              </p>
              <p className="gap-2.5 text-body font-albert tracking-[3%] md:text-[18px] pr-12">
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