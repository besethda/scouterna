'use client'

import useMessages from "@/hook/useMessages";

const GoodToKnow = () => {
  const messages = useMessages()
  return (
    <div className="flex flex-col min-w-97.5 min-h-120 gap-4 px-4 py-10 bg-(--bg-blue) md:p-25 ">

      <p className="text-[#00355F] font-varela font-normal text-h2 tracking-[-0.5%] md:text-h2-desktop">{messages?.goodToKnow?.headline}</p>

      <div className="flex flex-col gap-4 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-6 md:py-2.5 md:text-[#FFFFFF]">

        <div className="flex flex-row gap-4 font-normal md:bg-primary md:rounded-2xl md:p-5 ">
          <div className="hidden md:flex  min-w-11 h-11 rounded-full items-center justify-center">
            <img src="/Watch.png" alt="watch" height={44} width={44} />
          </div>
          <div className="flex flex-col">
            <p className="hidden md:block font-public font-bold uppercase text-[14px] tracking-[1.5px] text-[#1F74AD]">{messages?.goodToKnow?.card_title_1}</p>
            <p className="text-[#003061] font-varela text-h3 tracking-[-0.5%] gap-1 md:text-h3-desktop md:text-[#FFFFFF] mb-2">{messages?.goodToKnow?.card_headline_1}</p>
            <p className="gap-2.5 text-body font-albert tracking-[3%] md:text-[18px] pr-12">{messages?.goodToKnow?.card_text_1}</p>
          </div>
        </div>

        <div className="flex flex-row gap-4 font-normal md:bg-primary md:rounded-2xl md:p-5 ">
          <div className="hidden md:flex min-w-11 h-11 rounded-full items-center justify-center">
            <img src="HeartYellow.png" alt="Heart" height={44} width={44} />
          </div>
          <div className="flex flex-col">
            <p className="hidden md:block font-public font-bold uppercase text-[14px] tracking-[1.5px] text-[#1F74AD]">{messages?.goodToKnow?.card_title_2}</p>
            <p className="text-[#003061] font-varela text-h3 tracking-[-0.5%] gap-1 md:text-h3-desktop md:text-[#FFFFFF] mb-2">{messages?.goodToKnow?.card_headline_2}</p>
            <p className="gap-2.5 text-body font-albert tracking-[3%] md:text-[18px] pr-12">{messages?.goodToKnow?.card_text_2}</p>
          </div>
        </div>

        <div className="flex flex-row gap-4 font-normal md:bg-primary md:rounded-2xl md:p-5">
          <div className="hidden md:flex min-w-11 h-11 rounded-full items-center justify-center">
            <img src="HandHeart.png" alt="HandHeart" height={44} width={44} />
          </div>
          <div className="flex flex-col">
            <p className="hidden md:block font-public font-bold uppercase text-[14px] tracking-[1.5px] text-[#1F74AD]">{messages?.goodToKnow?.card_title_3}</p>
            <p className="text-[#003061] font-varela text-h3 tracking-[-0.5%] gap-1 md:text-h3-desktop md:text-[#FFFFFF] mb-2">{messages?.goodToKnow?.card_headline_3}</p>
            <p className="gap-2.5 text-body font-albert tracking-[3%] md:text-[18px] pr-12"><span className="hidden md:inline">{messages?.goodToKnow?.span_3}</span> {messages?.goodToKnow?.card_text_3}</p>
          </div>
        </div>

        <div className="flex flex-row gap-4 font-normal md:bg-primary md:rounded-2xl md:p-5 ">
          <div className="hidden md:flex min-w-11 h-11 rounded-full items-center justify-center">
            <img src="Boj.png" alt="Boj" height={44} width={44} />
          </div>
          <div className="flex flex-col">
            <p className="hidden md:block font-public font-bold uppercase text-[14px] tracking-[1.5px] text-[#1F74AD]">{messages?.goodToKnow?.card_title_4}</p>
            <p className="text-[#003061] font-varela text-h3 tracking-[-0.5%] gap-1 md:text-h3-desktop md:text-[#FFFFFF] mb-2">{messages?.goodToKnow?.card_headline_4}</p>
            <p className="gap-2.5 text-body font-albert tracking-[3%] md:text-[18px] pr-12 ">{messages?.goodToKnow?.card_text_4}<span className="hidden md:inline"> {messages?.goodToKnow?.span_4}</span></p>
          </div>
        </div>
      </div>
    </div>
  )
}


export default GoodToKnow