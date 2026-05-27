"use client"

import useMessages from "@/hook/useMessages"
import Image from "next/image"

interface CardWithImageProps {
  sectionTitle: string,
  logo: string,
  image: string
}

const CardWithImage = ({ sectionTitle, logo, image }: CardWithImageProps) => {

  const messages = useMessages() as any


  return (
    <>
      <div className="flex flex-col lg:flex-row lg:px-22 w-full lg:min-w-180 pt-5 px-4 pb-10 md:flex md:pt-12.5 md:pb-8 lg:pb-12 lg:items-start gap-6 md:gap-25 items-center lg:max-w-430">
        <div className="pt-5 md:pt-0 gap-2 h-fit flex-1 ">
          <div className="flex gap-2 items-center ">
            <p className="h-4.25 uppercase font-bold text-acc tracking-[1.5px] text-text-blue md:text-[14px] ">{messages?.[sectionTitle as string]?.headline}</p>
            <div className=" flex items-center justify-center rounded-[50%] md:hidden">
              <Image src={logo} alt="logo" width={24} height={17} className="w-auto h-4.25" />
            </div>
          </div>
          <div className="md:flex md:flex-row md:items-center md:gap-2.5">
            <div className="font-varela tracking-[-0.5%] text-h1 font-normal text-primary md:text-h1-desktop">{messages?.[sectionTitle as string]?.title}</div>
            <div className="hidden md:flex items-center justify-center md:bg-accent shrink-0 md:h-11 md:w-11 rounded-[50%] ">
              <Image src={logo} alt="logo" width={24} height={17} className="w-auto h-4.5" />
            </div>
          </div>
          <div className="text-[16px] text-text-black tracking-[3%] h-fit font-albert font-normal md:text-[18px]">{messages?.[sectionTitle as string]?.text}</div>
        </div>
        <div className="relative w-full aspect-video max-w-100 lg:max-h-60 min-h-40 md:mb-34 lg:mb-0">
          <Image src={image} alt={messages?.[sectionTitle as string]?.title || "card image"} fill className="rounded-2xl object-cover" />
        </div>
      </div>
    </>
  )
}

export default CardWithImage 