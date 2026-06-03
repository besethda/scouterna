'use client'
import useMessages from "@/hook/useMessages"
import CTABtn from "../CTA-button"
import Image from "next/image"
import Picture from "../../../public/images/DSCF3036.jpg"
import { useParams, usePathname } from "next/navigation"
import Link from "next/link"

const CabinsSection = () => {
  const messages = useMessages()

  const params = useParams();
  const pathname = usePathname();
  const urlLocal = pathname?.split("/")[1]
  const currentLocal = params?.local ||urlLocal || "sv"
  return(
    <div className="flex flex-col items-center md:gap-5 md:mb-20 ">
      <div className="hidden md:block w-full max-w-6xl">
        <h2 className=" text-primary text-h2-desktop">{messages?.cabinst}</h2>
      </div>
      <div className="flex flex-col md:border md:border-lightBlue md:rounded-2xl bg-bg-blue w-full max-w-6xl lg:h-90 ">
          <div className="flex px-5 gap-3 w-full h-full">
            <div className="hidden md:flex items-start shrink-0 pt-6 ">
              <Image src="/blueHouseYellowBg.svg" alt="logo" width={44} height={44} className="h-10 w-auto" />
            </div>
            <div className="flex flex-col flex-1 py-6 mr-20">
              <h3 className="text-primary text-h3-desktop">{messages?.cabinsmyset.title}</h3>
              <p className="block md:hidden text-text-black pt-2 md:text-body-desktop text-body md:text-[#52667A]">{messages?.cabinsmyset.p}</p>
              <p className="hidden md:block text-text-black pt-2 md:text-body-desktop text-body md:text-[#52667A] ">{messages?.cabinsmyset.dpOne}</p>
              <p className="hidden md:block text-text-black pt-3 md:text-body-desktop text-body md:text-[#52667A]">{messages?.cabinsmyset.dpTwo}</p>
              <div className="mt-7">
                <Link
                  href={`/${currentLocal}/what-we-do/cabins/myset`}>
                  <CTABtn text={messages?.mysetbtn}
                  />
                </Link>
              </div> 
            </div>
            <div className="w-93 shrink-0 hidden md:block mt-6 mb-6 mr-6">
                <Image src={Picture} alt="picture" className="rounded-3xl object-cover w-full h-48 md:h-56 lg:h-72"/>
            </div>  
          </div>
      </div>
      <div className="flex flex-col md:border md:border-lightBlue md:rounded-2xl bg-bg-blue w-full max-w-6xl lg:h-90">
          <div className="flex px-5 gap-3 w-full h-full">
            <div className="hidden md:flex items-start shrink-0 pt-6">
              <Image src="/blueHouseYellowBg.svg" alt="logo" width={44} height={44} className="h-10 w-auto" />
            </div>
            <div className="flex flex-col flex-1 md:py-6 py-8 mr-20">
              <h3 className="text-primary text-h3-desktop">{messages?.cabinsruffen.title}</h3>
              <p className="block md:hidden text-text-black pt-2 md:text-body-desktop text-body md:text-[#52667A]">{messages?.cabinsruffen.p}</p>
              <p className="hidden md:block text-text-black pt-2 md:text-body-desktop text-body md:text-[#52667A]">{messages?.cabinsruffen.dpOne}</p>
              <p className="hidden md:block text-text-black pt-3 md:text-body-desktop text-body md:text-[#52667A]">{messages?.cabinsruffen.dpTwo}</p>
              <div className="mt-7">
                <Link
                  href={`/${currentLocal}/what-we-do/cabins/ruffen`}>
                  <CTABtn text={messages?.ruffenbtn}
                  />
                </Link>
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