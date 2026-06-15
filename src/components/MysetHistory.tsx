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
  <div className="font-albert text-text-white bg-primary rounded-3xl px-4 lg:px-10 mx-4 py-8 lg:hidden">
      <div className="">
        <div className="flex flex-col gap-2 lg:max-w-[63%]">
          <p className="font-fraunces font-bold text-h2 md:text-h2-desktop">
            {messages?.mysetHistory?.title}
          </p>
          <p className="font-normal text-[16px] md:text-h5-desktop">
            {messages?.mysetHistory?.text1}
          </p>
          <p className="font-normal text-[16px] md:text-h5-desktop">
            {messages?.mysetHistory?.text2}
          </p>
          <p className="font-fraunces font-bold text-h3 md:text-h4-desktop md:py-4 pt-6">
            {messages?.mysetHistory?.subtitle}
          </p>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-2 md:gap-9 w-full pt-2">
          {cards.map((card, index) =>
            <div key={index} className="overflow-hidden rounded-[10px]">
              <Image height={150} width={200} src={card.img} alt={card.alt} className="w-full h-full object-cover scale-105 " />
            </div>
          )}
        </div>
      </div>
    </div>

  )
}

export default MysetHistory