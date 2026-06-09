'use client'

import useMessages from "@/hook/useMessages";
import Image from "next/image"

const MysetHistory = () => {

  const messages = useMessages()

  const cards = [
    {
      img: "/images/myset01.jpg",
      alt: "myset"
    },
    {
      img: "/images/myset02.jpg",
      alt: "myset"
    },
    {
      img: "/images/myset03.jpg",
      alt: "myset grundsättning"
    },
    {
      img: "/images/myset04.jpg",
      alt: "myset and a car"
    }
  ]

  return (
  <div className="pb-12 pt-2 px-4 font-albert bg-bg-blue md:py-20 lg:px-22 lg:max-w-430 ">
      <div className=" bg-primary py-8 px-4 rounded-2xl md:py-8 md:px-10">
        <div className="flex flex-col gap-2 lg:max-w-[63%] text-text-white">
          <p className="font-bold text-[22px] tracking-[-0.5%] md:text-h2-desktop font-fraunces">
            {messages?.mysetHistory?.title}
          </p>
          <p className="font-albert font-normal text-[16px] tracking-[3%] md:text-[20px]">
            {messages?.mysetHistory?.text1}
          </p>
          <p className="font-albert font-normal text-[16px] tracking-[3%] md:text-[20px] mt-2">
            {messages?.mysetHistory?.text2}
          </p>
          <p className="font-fraunces font-bold text-[18px] racking-[-0.5%] md:text-[24px] py-2 md:py-4">
            {messages?.mysetHistory?.subtitle}
          </p>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-2 md:gap-9 w-full">
          {cards.map((card, index) =>
            <div key={index} className="rounded-[10px] ">
              <Image height={150} width={200} src={card.img} alt={card.alt} className="aspect-square object-cover w-full rounded-[10px] md:rounded-[36px]" />
            </div>
          )}
        </div>
      </div>
    </div>

  )
}

export default MysetHistory