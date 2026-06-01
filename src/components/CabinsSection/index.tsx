'use client'
import useMessages from "@/hook/useMessages"
import CTABtn from "../CTA-button"
import Image from "next/image"
import Picture from "../../../public/images/DSCF3036.jpg"

const CabinsSection = () => {
  const messages = useMessages()
  return(
    <div className="flex flex-col items-center md:gap-5 md:mb-20 ">
      <div className="hidden md:block w-full max-w-4xl">
        <h2 className=" text-primary text-3xl">{messages?.cabinst}</h2>
      </div>
      <div className="flex flex-col md:border md:border-lightBlue md:rounded-2xl bg-bg-blue w-full max-w-4xl md:h-auto lg:h-95">
          <div className="flex px-5 gap-3 w-full h-full">
            <div className="hidden md:flex items-start shrink-0 pt-6">
              <Image src="/blueHouseYellowBg.svg" alt="logo" width={44} height={44} className="h-10 w-auto" />
            </div>
            <div className="flex flex-col flex-1 py-6">
              <h3 className="text-primary text-body md:text-body-desktop">{messages?.cabinsmyset.title}</h3>
              <p className="block md:hidden text-text-gray pt-2 text-body md:text-body-desktop">{messages?.cabinsmyset.p}</p>
              <p className="hidden md:block text-text-gray pt-2 text-body md:text-body-desktop">{messages?.cabinsmyset.dpOne}</p>
              <p className="hidden md:block text-text-gray pt-3 text-body md:text-body-desktop">{messages?.cabinsmyset.dpTwo}</p>
              <div className="mt-7">
                <CTABtn text={messages?.mysetbtn}/>
              </div> 
            </div>
            <div className="w-93 shrink-0 hidden md:block mt-6 mb-6 mr-6">
                <Image src={Picture} alt="picture" className="rounded-3xl object-cover w-full h-48 md:h-56 lg:h-72"/>
            </div>  
          </div>
      </div>
       <div className="flex flex-col md:border md:border-lightBlue md:rounded-2xl bg-bg-blue w-full max-w-4xl md:h-auto lg:h-95">
          <div className="flex px-5 gap-3 w-full h-full">
            <div className="hidden md:flex items-start shrink-0 pt-6">
              <Image src="/blueHouseYellowBg.svg" alt="logo" width={44} height={44} className="h-10 w-auto" />
            </div>
            <div className="flex flex-col flex-1 md:py-6 py-8">
              <h3 className="text-primary text-body md:text-body-desktop">{messages?.cabinsruffen.title}</h3>
              <p className="block md:hidden text-text-gray pt-2 text-body md:text-body-desktop">{messages?.cabinsruffen.p}</p>
              <p className="hidden md:block text-text-gray pt-2 text-body md:text-body-desktop">{messages?.cabinsruffen.dpOne}</p>
              <p className="hidden md:block text-text-gray pt-3 text-body md:text-body-desktop">{messages?.cabinsruffen.dpTwo}</p>
              <div className="mt-7">
                <CTABtn text={messages?.ruffenbtn}/>
              </div> 
            </div>
            <div className="w-93 shrink-0 hidden md:block mt-6 mb-6 mr-6">
                <Image src={Picture} alt="picture" className="rounded-3xl object-cover w-full h-48 md:h-56 lg:h-72"/>
            </div>  
          </div>
      </div>
    </div>
  )
}

export default CabinsSection