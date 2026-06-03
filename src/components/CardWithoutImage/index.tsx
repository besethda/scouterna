import Image from "next/image"

interface CardWithoutImageProps {
  headline: string,
  logo: string,
  title: string,
  text: string,
  MDlogo: string
}

const CardWithoutImage = ({ headline, logo, title, text, MDlogo }: CardWithoutImageProps) => {
  return (
    <>
      <div className="flex flex-col md:flex-row w-full pt-5 px-4 pb-10 lg:max-w-430 lg:px-22 md:flex md:pt-12.5 md:pb-25 md:px-50 md:items-start gap-6 md:gap-25 items-center ">
        <div className="pt-5 md:pt-0 gap-2 w-82.5 md:w-full flex-1 md:max-w-280">
          <div className="flex gap-2 items-center ">
            <p className=" h-4.25 uppercase font-bold md:font-normal text-acc md:text-[14px] tracking-[1.5px] text-text-blue font-public ">
              {headline}
            </p>
            <div className="flex w-5 h-4.25 items-center md:hidden mb-1">
              <Image src={logo} alt="logo" width={20} height={17} className="h-4.25 w-auto" />
            </div>
          </div>
          <div className="flex gap-4">
            <div className="font-albert tracking-[-0.5%] text-h1 text-primary md:text-h1-desktop">
              {title}
            </div>
            <div className="hidden md:flex items-center ">
              <Image src={MDlogo} alt="logo" width={44} height={44} className="h-11 w-auto" />
            </div>
          </div>
          <div className="font-albert text-body md:text-body-desktop tracking-[3%] text-text-black">
            {text}
          </div>
        </div>
      </div>
    </>
  )
}

export default CardWithoutImage 