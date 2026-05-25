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
      <div className="flex flex-col md:flex-row w-full pt-5 px-4 pb-10 md:flex md:pt-12.5 md:pb-25 md:px-50 md:items-start gap-6 md:gap-25 items-center ">
        <div className="pt-5 md:pt-0 gap-2 w-82.5 h-42.75 md:w-170 flex-1">
          <div className="flex gap-2 items-center ">
            <p className=" h-4.25 uppercase font-bold md:font-normal text-acc md:text-[14px] tracking-[1.5px] text-text-blue font-public ">
              {headline}
            </p>
            <div className="flex w-5 h-4.25 items-center md:hidden mb-1">
              <Image src={logo} alt="logo" width={20} height={17} className="h-4.25 w-auto"/>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="font-varela tracking-[-0.5%] text-h1 font-normal text-primary md:text-h1-desktop">
              {title}
            </div>
            <div className="hidden md:flex items-center ">
              <Image src={MDlogo} alt="logo" width={44} height={44} />
            </div>
          </div>
          <div className="font-albert text-[16px] md:text-[18px] tracking-[3%] font-normal text-text-black">
            {text}
          </div>
        </div>
      </div>
    </>
  )
}

export default CardWithoutImage 