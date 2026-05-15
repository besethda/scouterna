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
      <div className="pt-5 px-4 pb-10">
        <div className="pt-5 gap-2 w-82.5 h-42.75">
          <div className="flex gap-2 items-center ">
            <p className="h-4.25 uppercase font-bold text-acc tracking-[1.5px] text-(--text-blue)">{headline}</p>
            <p className="w-5 h-4.25">{logo}</p>
          </div>
          <div className="tracking-[-0.5%] text-h1 font-normal text-primary">{title}</div>
          <div className="text-[16px] tracking-[3%] font-normal text-(--text-black)">{text}</div>
        </div>
        <Image src={image} alt={title} width={357} height={257} className="bg-amber-200 rounded-2xl" />
      </div>
    </>
  )
}

export default CardWithImage