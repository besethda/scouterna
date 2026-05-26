
import Image from "next/image"

interface SmallCardProps {
  title: string,
  subtitle: string,
  image: string
}

const SmallCard = ({ title, subtitle, image }: SmallCardProps) => {
  return (
    //gör grid på desktop 
    <div>
      <div className="font-albert  flex flex-col px-4 py-10 gap-4">
        <div className="flex flex-col gap-2">
          <p className="font-medium text-h2 tracking-[-0.5%] text-[#00355F]">
            {title}
          </p>
          <p className="w-75 font-normal text-[16px] tracking-[3%] ">
            {subtitle}
          </p>
        </div>
        <div className="relative rounded-2xl h-64.25 w-89.25">
          <Image src={image} alt={title} fill className="object-cover rounded-2xl" />
        </div>
      </div>
    </div>
  )
}

export default SmallCard

/*


lägg till scout delen 
gör grid på desktop 


*/