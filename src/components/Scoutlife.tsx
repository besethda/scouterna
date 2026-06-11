'use client'

import Image from "next/image"
import useMessages from "@/hook/useMessages"
import ImageCard from "./ImageCard"


const Scoutlife = () => {

  const messages = useMessages()

  const cards = [
    {
      logo: "/lightbulbYellowBg.svg",
      title: messages?.scoutLife?.header0,
      subtitle: messages?.scoutLife?.text0
    },
    {
      logo: "/heartIconYellowBg.svg",
      title: messages?.scoutLife?.header1,
      subtitle: messages?.scoutLife?.text1
    },
    {
      logo: "/groupIcon.svg",
      title: messages?.scoutLife?.header2,
      subtitle: messages?.scoutLife?.text2
    }
  ]


  return (
    <>

      <div className="flex flex-col w-full px-4 pb-10 lg:max-w-430 lg:px-22 md:flex md:py-16 md:items-start md:gap-8 items-center">
        <h2 className="font-fraunces font-bold md:text-h2-desktop text-[26px] tracking-[-0.5%] text-primary mb-4 md:mb-0">
          {messages?.scoutLife?.t0}
        </h2>
        <div className="flex flex-col justify-between md:flex-row bg-primary rounded-2xl md:p-8 px-6 py-8 gap-10 shadow-xl md:items-start w-full">
          <div className="flex flex-col md:w-[55%] gap-5">
            {cards.map((card, index) => (
              <div key={index} className="flex flex-row gap-3">
                <div className="flex flex-col shrink-0">
                  <Image src={card.logo} alt="logo" height={45} width={48} className="" />
                </div>
                <div>
                  <p className="font-fraunces font-bold md:text-h4-desktop text-[18px] tracking-[-0.5%] text-white">
                    {card.title}
                  </p>
                  <p className="font-albert font-normal md:text-h5-desktop text-[16px] tracking-[3%] text-white ">
                    {card.subtitle}
                  </p>
                </div>

              </div>

            ))}
          </div>
          <div className="">
            <ImageCard image="/images/DSCF3070.jpg" imageTitle="text" pin="pink" text="" section="scoutLife" page="scout-life" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Scoutlife