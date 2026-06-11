'use client'

import CTABtn from "./CTA-button"
import Link from "next/link"
import { useParams } from "next/navigation"
import { urlFor } from "@/sanity/lib/image"

interface stringObject {
  image: string
  alt:string
}
interface SmallCardProps {
  title: string,
  subtitle: string,
  secondTitle: string,
  secondText: string,
  thirdtext: string,
  button: string
}

const SmallCard = ({ title, subtitle, secondTitle, secondText, thirdtext, button }: SmallCardProps) => {
  const params = useParams();
  const currentLocal = params?.local || "sv";
  return (
    <div className="font-albert lg:max-w-430 lg:px-10 px-4 md:py-6 md:gap-0 lg:grid lg:grid-cols-[1fr_auto] lg:gap-x-10 lg:gap-y-6  w-full mx-auto">
      <div className="flex flex-col gap-4 md:gap-10 md:col-start-1 pb-6">
        <div className="flex flex-col gap-2">
          <h2 className="font-bold font-fraunces text-h2 tracking-[-0.5%] text-primary md:text-h2-desktop">
            {title}
          </h2>
          <p className="text-body text-text-black tracking-[3%] md:text-body-desktop">
            {subtitle}
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-6 lg:col-start-1">
        <div className="flex flex-col gap-2">
          <h3 className="font-fraunces font-bold text-h2 tracking-[-0.5%] text-primary md:text-h3-desktop">
            {secondTitle}
          </h3>
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