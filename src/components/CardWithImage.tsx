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
            <p className="h-4.25 uppercase font-bold text-acc tracking-[1.5px] text-(--text-blue) ">{headline}</p>
            <p className="w-5 h-4.25">{logo}</p>
          </div>
          <div className="tracking-[-0.5%] text-h1 md:text-h1-desktop font-normal text-primary font-varela">{title}</div>
          <div className="text-acc-desktop tracking-[3%] font-normal text-black font-albert">{text}</div>
        </div>
        <Image src={image} alt={title} width={357} height={257} className="bg-amber-200 pt-4 rounded-2xl md:w-100 md:h-60 object-cover" />
      </div>
    </>
  )
}

export default CardWithImage 