'use client'

import useMessages from "@/hook/useMessages"
import Image from "next/image"
import Img from '../../../public/images/DSCF3361.jpg'

const Activities = () => {
  const messages = useMessages()
  return (
    <div className="bg-bg-blue md:items-center py-5 flex flex-col max-[1018px]:flex-col max-[1018px]:px-6 min-[1019px]:flex-row min-[1019px]:px-43 md:py-25">
      <div className="flex flex-col flex-1">
        <h2 className="text-primary md:text-h2-desktop text-h2-albert">{messages?.activity.title}</h2>
        <h3 className="text-primary md:text-h3-desktop mt-3 text-h3">{messages?.activity.sub_title_one}</h3>
        <p className="text-text-black md:text-body-desktop">{messages?.activity.p_one}</p>
        <h3 className="text-primary md:text-h3-desktop mt-3 text-h3">{messages?.activity.sub_title_two}</h3>
        <p className="text-text-black md:text-body-desktop">{messages?.activity.p_two}</p>
      </div>
      <div className="flex flex-1 max-[1018px]:mt-10">
        <Image src={Img} alt="img" className="rounded-2xl md:ml-45 md:max-w-100 object-cover max-[1018px]:mr-122" />
      </div>
    </div>
  )
}

export default Activities