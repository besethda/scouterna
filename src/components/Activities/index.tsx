'use client'

import useMessages from "@/hook/useMessages"
import Image from "next/image"
import Img from '../../../public/images/DSCF3361.jpg'

const Activities = () => {
  const messages =useMessages()
  return(
    <div className="bg-bg-blue md:items-center md:px-43 py-20 px-3 flex flex-col md:flex-row">
      <div className="flex flex-col flex-1">
         <h2 className="text-primary md:text-h2-desktop text-h2-albert">{messages?.activity.title}</h2>
         <h3 className="text-primary md:text-h3-desktop mt-3 text-h3">{messages?.activity.sub_title_one}</h3>
         <p className="text-text-black md:text-body-desktop">{messages?.activity.p_one}</p>
         <h3 className="text-primary md:text-h3-desktop mt-3 text-h3">{messages?.activity.sub_title_two}</h3>
         <p className="text-text-black md:text-body-desktop">{messages?.activity.p_two}</p>
      </div>
      <div className="flex flex-1 mt-5">
        <Image src={Img} alt="img" className="rounded-2xl md:ml-45 md:max-w-100 object-cover"/>
      </div>
    </div>
  )
}

export default Activities