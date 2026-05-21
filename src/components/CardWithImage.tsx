import Image from "next/image"

interface CardWithImageProps {
  headline: string,
  logo: string,
  title: string,
  text: string,
  image: string
}

const CardWithImage = ({ headline, logo, title, text, image }: CardWithImageProps) => {
  return (
    <>
      <div className="flex flex-col md:flex-row w-full pt-5 px-4 pb-10 md:flex md:pt-12.5 md:pb-25 md:px-25 md:items-start gap-6 md:gap-25 items-center">
        <div className="pt-5 md:pt-0 gap-2 w-82.5 h-42.75 md:w-170 flex-1 ">
          <div className="flex gap-2 items-center ">
            <p className="h-4.25 uppercase font-bold text-acc tracking-[1.5px] text-text-blue md:text-[14px] ">{headline}</p>
            <div className=" flex items-center justify-center rounded-[50%] md:hidden">
              <Image src={logo} alt="logo" width={24} height={17} className="w-6 h-4.25" />
            </div>
          </div>
          <div className="md:flex md:flex-row md:items-center md:gap-2.5">
            <div className="font-varela tracking-[-0.5%] text-h1 font-normal text-primary md:text-h1-desktop">{title}</div>
            <div className="hidden md:flex items-center justify-center md:bg-accent md:h-11 md:w-11 rounded-[50%] ">
              <Image src={logo} alt="logo" width={24} height={17} className="w-6 h-4.25" />
            </div>
          </div>
          <div className="text-body tracking-[3%] font-normal text-text-black">{text}</div>
        </div>
        <div>
          <Image src={image} alt={title} width={357} height={257} className="rounded-2xl md:w-100 md:h-60 object-cover" />
        </div>
      </div>
    </>
  )
}

export default CardWithImage 