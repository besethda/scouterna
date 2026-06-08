'use client'

import useMessages from "@/hook/useMessages"
import Image from "next/image"
import Img from '../../../public/images/DSCF3361.jpg'
import { urlFor } from "@/sanity/lib/image"

interface stringObject {
  image: string
  alt:string
}

const Activities = ({image}: {image: stringObject}) => {
  const messages = useMessages()
  return (
    <div className="w-full flex flex-col items-center bg-bg-blue">
      <div className="md:items-center py-5 lg:max-w-430 lg:px-22 px-4 w-full flex flex-col max-[1018px]:flex-col min-[1019px]:flex-row min-[1019px]:px-43 md:py-25">
        <div className="flex flex-col flex-1">
          <h2 className="text-primary md:text-h2-desktop font-albert text-h2-albert">{messages?.activity.title}</h2>
          <h3 className="text-primary md:text-h3-desktop font-albert mt-3 text-h3">{messages?.activity.sub_title_one}</h3>
          <p className="text-text-black text-body font-albert md:text-body-desktop">{messages?.activity.p_one}</p>
          <h3 className="text-primary md:text-h3-desktop mt-3 font-albert text-h3">{messages?.activity.sub_title_two}</h3>
          <p className="text-text-black text-body font-albert md:text-body-desktop">{messages?.activity.p_two}</p>
        </div>
        <div className="flex md:justify-center flex-1 max-[1018px]:mt-10">
          <Image src={urlFor(image.image).url()} alt="img" width={400} height={300} className="rounded-2xl md:ml-45 md:max-w-100 object-cover max-[1018px]:mr-122" />
        </div>
      </div>
    </div>

  )
}

export default Activities