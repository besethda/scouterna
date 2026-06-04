'use client'

import Image from "next/image"
import CTABtn from "./CTA-button"
import Link from "next/link"
import { useParams } from "next/navigation"

interface SmallCardProps {
  title: string,
  subtitle: string,
  image: string,
  secondTitle: string,
  secondText: string,
  thirdtext: string,
  button: string
}

const SmallCard = ({ title, subtitle, image, secondTitle, secondText, thirdtext, button }: SmallCardProps) => {
  const params = useParams();
  const currentLocal = params?.local || "sv";
  return (
    <div className="font-albert lg:max-w-430 lg:px-22 px-4 md:py-6 md:gap-0 lg:grid lg:grid-cols-[1fr_auto] lg:gap-x-10 lg:gap-y-6  w-full mx-auto">
      <div className="flex flex-col gap-4 md:gap-10 md:col-start-1">
        <div className="flex flex-col gap-2">
          <p className="font-normal font-albert text-h2 tracking-[-0.5%] text-primary md:text-h2-desktop">
            {title}
          </p>
          <p className="text-body text-text-black tracking-[3%] md:text-body-desktop">
            {subtitle}
          </p>
        </div>
      </div>
      <div className="my-4 lg:my-0 lg:px-0 lg:col-start-2 lg:row-start-1 lg:row-span-2">
        <div className="relative rounded-2xl h-64.25 w-89.25 md:w-100 md:h-67 ">
          <Image src={image} alt={title} fill className="object-cover rounded-2xl" />
        </div>
      </div>
      <div className="flex flex-col gap-6 lg:col-start-1">
        <div className="flex flex-col gap-2">
          <p className="font-medium text-h2 tracking-[-0.5%] text-primary md:text-h3-desktop">
            {secondTitle}
          </p>
          <div className="flex flex-col gap-2 text-text-black font-normal text-body tracking-[3%] md:text-body-desktop">
            <p>{secondText}</p>
            <p>{thirdtext}</p>
          </div>
        </div>
        <div>
          <Link href={`/${currentLocal}/groups`}>
            <CTABtn text={button} />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SmallCard