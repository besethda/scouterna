'use client'

import useMessages from "@/hook/useMessages"
import Image from "next/image"
import birds from '../../../public/blueBirds1.png'


const Activities = () => {
  const messages = useMessages()
  return (
    <div className="flex flex-col items-center bg-bg-white px-4 py-8 mx-4 mb-10 rounded-3xl md:mb-20 lg:max-w-[var(--max-w-laptop)] xl:mx-auto 2xl:max-w-[var(--max-w-desktop)]">
      <div className=" w-full flex flex-col ">
        <div className="flex flex-col gap-6 max-w-[603px]">
          <h2 className="text-primary md:text-h2-desktop font-fraunces font-bold text-h2-albert">{messages?.activity.title}</h2>
          <div>
            <h3 className="text-primary md:text-h3-desktop font-fraunces font-bold text-h3">{messages?.activity.sub_title_one}</h3>
            <p className="text-text-black text-body font-albert md:text-body-desktop">{messages?.activity.p_one}</p>
          </div>
          <div>
            <h3 className="text-primary md:text-h3-desktop font-fraunces font-bold text-h3">{messages?.activity.sub_title_two}</h3>
            <p className="text-text-black text-body font-albert md:text-body-desktop">{messages?.activity.p_two}</p>
          </div>
        </div>
      </div>
      <div>
        <Image src={birds} alt="birds" height={150} width={150} className="absolute top-0 md:top-15 md:right-20 opacity-90 md:-rotate-12 " />
      </div>
    </div >


  )
}

export default Activities