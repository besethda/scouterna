'use client'
import useMessages from "@/hook/useMessages"
import CTABtn from "../CTA-button"
import Image from "next/image"
import Picture from "../../../public/images/IMG_9122.jpeg"
import { urlFor } from "@/sanity/lib/image"
import ruffen from '../../../public/images/ruffen.jpg'
import ImageCard from "../ImageCard"
import { useParams, usePathname } from "next/navigation"
import Link from "next/link"

const CabinsSection = ({ images }: { images: Record<string, string> }) => {
  const messages = useMessages()
  const params = useParams();
  const pathname = usePathname();
  const urlLocal = pathname?.split("/")[1]
  const currentLocal = params?.local || urlLocal || "sv"

  return (
    <div className="flex flex-col lg:max-w-430 px-4 lg:px-22 md:px-4 w-full font-albert items-center md:gap-5 md:mb-20 ">
      <div className="hidden md:block w-full ">
        <h2 className=" text-primary text-h2-desktop font-fraunces font-bold">{messages?.cabinst}</h2>
      </div>

      <div className="flex flex-col  rounded-2xl w-full  lg:h-auto bg-white mb-5 shadow-lg" >
        <div className="flex flex-col md:flex-row md:px-5 gap-3 w-full h-full min-w-0">

          <div className="flex flex-col flex-1 md:py-6 pt-8 px-3 md:mr-20 min-w-0">
            <h3 className="text-primary text-h3-desktop font-fraunces font-bold">{messages?.cabinsmyset.title}</h3>
            <p className="text-text-black pt-2 md:text-body-desktop text-body md:text-[#52667A] ">{messages?.cabinsmyset.dpOne}</p>
            <p className="text-text-black pt-3 md:text-body-desktop text-body md:text-[#52667A]">{messages?.cabinsmyset.dpTwo}</p>
            <div className="mt-12 w-full flex justify-center md:justify-start lg:w-fit md:w-70 ">
              <Link
                href={`/${currentLocal}/what-we-do/cabins/myset`} >
                <CTABtn text={messages?.mysetbtn}
                />
              </Link>
            </div>
          </div>
          <div className="shrink-0 flex w-full justify-center md:block mt-6 mb-6 mr-6 md:w-80">
            <ImageCard image={urlFor(images.imageMyset).url()} imageTitle="title" text="" section="cabinsmyset" page="cabin" pin="pink" />
          </div>
        </div>
      </div>
      <div className="flex flex-col rounded-2xl w-full lg:h-auto bg-white mb-5 shadow-lg">
        <div className="flex  flex-col md:flex-row md:px-5 gap-3 w-full h-full min-w-0">
          <div className="flex flex-col flex-1 md:py-6 pt-8 px-3 md:mr-20 min-w-0">
            <h3 className="text-primary text-h3-desktop font-fraunces font-bold">{messages?.cabinsruffen.title}</h3>
            <p className="text-text-black pt-2 md:text-body-desktop text-body md:text-[#52667A]">{messages?.cabinsruffen.dpOne}</p>
            <p className="text-text-black pt-3 md:text-body-desktop text-body md:text-[#52667A]">{messages?.cabinsruffen.dpTwo}</p>
            <div className="mt-12 w-full flex justify-center md:justify-start lg:w-fit md:w-70">
              <Link
                href={`/${currentLocal}/what-we-do/cabins/ruffen`}>
                <CTABtn text={messages?.ruffenbtn}
                />
              </Link>
            </div>
          </div>
          <div className="flex w-full shrink-0 justify-center md:block mt-6 mb-6 mr-6 md:w-80">
            <ImageCard image={urlFor(images.imageRuffen).url()} imageTitle="title" text="" section="cabinsruffen" page="cabin" pin="dark_red" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CabinsSection