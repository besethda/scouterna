import Image from "next/image"
import CTABtn from "./CTA-button"

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
  return (
    <div className="font-albert md:p-25 md:gap-0 md:grid md:grid-cols-[1fr_auto] md:gap-x-10 md:gap-y-6  w-full mx-auto">

      <div className="flex flex-col px-4 gap-4 md:gap-10 md:col-start-1">
        <div className="flex flex-col gap-2  ">
          <p className="font-medium text-h2 tracking-[-0.5%] text-[#00355F] md:text-h2-desktop">
            {title}
          </p>
          <p className=" font-normal text-[16px] tracking-[3%] md:text-[18px]">
            {subtitle}
          </p>
        </div>
      </div>
      <div className="px-4 my-4 md:my-0 md:px-0 md:col-start-2 md:row-start-1 md:row-span-2">
        <div className="relative rounded-2xl h-64.25 w-89.25 md:w-100 md:h-67 ">
          <Image src={image} alt={title} fill className="object-cover rounded-2xl" />
        </div>
      </div>

      <div className="flex flex-col px-4 gap-6 md:col-start-1">
        <div className="flex flex-col gap-2">
          <p className="font-medium text-[18px] tracking-[-0.5%] text-[#00355F] md:text-h3-desktop">
            {secondTitle}
          </p>
          <p className="flex flex-col gap-2 text-text-black font-normal text-[16px] tracking-[3%] md:text-[18px]">
            <p>{secondText}</p>
            <p>{thirdtext}</p>
          </p>
        </div>

        <div>
          <CTABtn text={button} />
        </div>

      </div>
    </div>
  )
}

export default SmallCard