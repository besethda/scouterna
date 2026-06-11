"use client"

import useMessages from "@/hook/useMessages"
import Image from "next/image"
import CTABtn from "./CTA-button"
import underlineAlla from '../../public/underline-alla.svg'

interface CardWithLogoProps {
  image: string,
  sectionTitle: string,
  isH1?: boolean,
  logoTopRight?: boolean
}

const CardWithLogo = ({ image, sectionTitle, isH1 = false, logoTopRight = false }: CardWithLogoProps) => {

  const messages = useMessages() as any
  const hasSecondSection = messages?.[sectionTitle]?.title02 || messages?.[sectionTitle]?.text02
  const TitleH1 = isH1 ? "h1" : "h2"
  const hasButton = messages?.[sectionTitle]?.button

  const handleClick = () => {
    const download = messages?.[sectionTitle as string]?.downloadUrl
    if (download) 
    window.open(download, "_blank")
  }

  return (
    <div className="flex flex-col mx-4 pb-10  lg:mx-auto md:max-w-[980px]  md:pt-12.5 md:pb-20 md:items-start md:gap-25 items-center 2xl:max-w-[1440px] bg-bg-blue">
      <div className={`flex flex-col py-8 px-4 md:px-10 rounded-3xl bg-[#FFFFFF] w-full gap-6 shadow-xl xl:pb-[77px] ${logoTopRight ? "relative" : ""}`}>
        <div className="flex justify-between items-start">
          <div className=" flex flex-col lg:max-w-[52%]">
            <p className="font-albert font-bold text-acc md:text-[16px] uppercase tracking-[1.5px] text-text-blue -mb-2 md:mb-0">
              {messages?.[sectionTitle as string]?.headline}
            </p>
            <div className="flex flex-row items-center gap-6">
              <TitleH1 className="font-fraunces font-bold text-[26px] md:text-h1-desktop tracking-[-0.5%] text-[#003061] md:-mt-1.75 mt-6px">
                {messages?.[sectionTitle as string]?.title}
              </TitleH1>
              <div className={`md:hidden flex 
              ${logoTopRight 
                ? "absolute top-6 right-6 min-h-12.5 min-w-12.5" 
                : "relative min-h-12.5 min-w-12.5 md:min-h-50 md:min-w-50"} `}>
                <Image src={image} fill alt={image} />
              </div>

            </div>
            <p className="font-albert font-normal text-[16px] md:text-h5-desktop tracking-[3%] text-text-black pt-2">
              {messages?.[sectionTitle as string]?.text}
            </p>
          </div>
          <div className="hidden relative md:flex min-h-12.5 min-w-12.5 md:min-h-50 md:min-w-50">
            <Image src={image} fill alt={image} />
          </div>
        </div>
        {hasSecondSection && (
          <div className="gap-2.5 md:max-w-[70%]">
            <div className="font-fraunces font-bold text-[26px] md:text-h1-desktop tracking-[-0.5%] text-[#003061] ">
              {messages?.[sectionTitle as string]?.title02} {" "}
              <div className="relative inline-block">
                <span>{messages?.[sectionTitle as string]?.span}</span>
                <Image src={underlineAlla} alt="Underline" width={70} height={30} className="absolute bottom-0.5 w-full max-h-1.5 object-cover left-2.5" />
              </div>
            </div>
            <p className="font-albert font-normal text-[16px] md:text-h5-desktop tracking-[3%] text-text-black pt-1.5">
              {messages?.[sectionTitle as string]?.text02}
            </p>
         </div>
        )}
        {hasButton && (
          <>
            <div className="hidden md:block md:mt-4">
              <CTABtn text={messages?.[sectionTitle as string]?.button} onClick={handleClick}/>
            </div>
            <div className="md:hidden">
              <CTABtn text={messages?.[sectionTitle as string]?.buttonMobile} width="full" onClick={handleClick} />
            </div>
          </>
        )}
      </div>
    </div >
  )
}

export default CardWithLogo