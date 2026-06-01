'use client'

import useMessages from "@/hook/useMessages"
import Image from "next/image"
import Img from '../../../public/images/IMG_8266.jpg'

const Activities = () => {
  const messages =useMessages()
  return(
    <div className="bg-bg-blue items-center px-43 py-15 hidden md:flex">
      <div className="flex flex-col flex-1">
         <h2 className="text-primary text-h2-desktop">{messages?.activity.title}</h2>
         <h3 className="text-primary text-h3-desktop mt-3">{messages?.activity.sub_title_one}</h3>
         <p className="text-text-black text-body-desktop">{messages?.activity.p_one}</p>
         <h3 className="text-primary text-h3-desktop mt-3">{messages?.activity.sub_title_two}</h3>
         <p className="text-text-black text-body-desktop">{messages?.activity.p_two}</p>
      </div>
      <div className="flex flex-1">
        <Image src={Img} alt="img" className="rounded-2xl ml-45 max-w-100 object-cover"/>
      </div>
    </div>
  )
}

export default Activities