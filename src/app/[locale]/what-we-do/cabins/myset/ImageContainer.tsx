import Image from "next/image"
import { urlFor } from "@/sanity/lib/image"

const ImageContainer = ({image}:{image:Record<string,string>}) => {
  return (
    <>
      <div className="rounded-[50%] min-w-73.5 min-h-55.25">
        <Image
          src={urlFor(image.imageMyset).url()}
          alt={`${image.refMyset}`}
          width={800}
          height={600}
          className=" bg-white rounded-2xl object-cover md:max-w-150 md:max-h-109" 
        />
      </div>
    </>
  )
}

export default ImageContainer 