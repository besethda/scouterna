'use client'

import useMessages from "@/hook/useMessages";
import Image from "next/image"

const MysetHistory = () => {

  const messages = useMessages()

  const cards = [
    {
      img: "/images/myset1.jpg",
      alt: "myset"
    },
    {
      img: "/images/myset2.jpg",
      alt: "myset"
    },
    {
      img: "/images/myset3.jpg",
      alt: "myset"
    },
    {
      img: "/images/myset4.jpg",
      alt: "myset"
    }
  ]

  return (
    <div className="py-10 px-4 font-albert md:py-12.5 md:px-25 lg:max-w-430 lg:px-22 ">
      <div className="">
        <div className="flex flex-col gap-2 lg:max-w-[63%]">
          <p className="font-medium text-[22px] tracking-[-0.5%] text-primary md:text-h2-desktop">
            {messages?.mysetHistory?.title}
          </p>
          <p className="font-normal text-[16px] tracking-[3%] text-text-black md:text-[20px]">
            {messages?.mysetHistory?.text1}
          </p>
          <p className="font-normal text-[16px] tracking-[3%] text-text-black md:text-[20px]">
            {messages?.mysetHistory?.text2}
          </p>
          <p className="font-medium text-[18px] racking-[-0.5%] text-primary md:text-[24px] py-2 md:py-4">
            {messages?.mysetHistory?.subtitle}
          </p>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-2 md:gap-9 w-full">
          {cards.map((card, index) =>
            <div key={index} className="rounded-[10px] ">
              <Image height={150} width={200} src={card.img} alt={card.alt} className="aspect-4/3 object-cover w-full rounded-[10px]" />
            </div>
          )}
        </div>
      </div>
    </div>

  )
}

export default MysetHistory


/*









*/