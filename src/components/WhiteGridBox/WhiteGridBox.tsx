"use client"

import Image from "next/image";
import {useState} from "react"
import useMessages from "@/hook/useMessages";
import { AiOutlineDownCircle } from "react-icons/ai";

const WhiteGridBox = ({logoUrl, messageTitle, messageTextIndex, backgroundWhite}:{logoUrl:string, messageTitle:string, messageTextIndex:string, backgroundWhite?:boolean}) => {

  const [isOpen, setIseOpen] = useState<boolean>(false)
  const messages = useMessages()

  return (
    <div className="my-3 lg-w-[30%] w-full px-4 lg:px-[1.5%] max-w-220 ">
      <div onClick={()=>{setIseOpen(!isOpen)}} className={`cursor-pointer pt-3 h-18 lg:h-18 flex items-center justify-between bg-primary ${backgroundWhite ? "lg:bg-bg-white lg:text-primary lg:border-x lg:border-t lg:border-gray-300" : "md:bg-primary"} 
      lg:pb-0 pb-3 text-h2 font-albert text-text-white ${isOpen ? "rounded-t-xl" : "rounded-xl lg:rounded-t-xl lg:rounded-b-none"} px-4`}>
        <div className="flex items-center">
          <div className="h-10 w-10">
            <Image src={`${logoUrl}`} alt={`${messageTextIndex + messageTitle}`} width={40} height={40} className="object-contain"/>
          </div>
          <div className="px-3 font-albert whitespace-nowrap">{(messages as any)?.[messageTitle][`header${messageTextIndex}`]}</div>
        </div>
        <AiOutlineDownCircle className={`w-7 h-7 lg:hidden cursor-pointer transform transition-transform duration-200 ${isOpen ? "rotate-180" : "rotate-0"}`} />
      </div>
      <div className={`${isOpen ? "flex lg:flex": "hidden lg:flex"} px-4 pb-4 pt-4 lg:pt-0 lg:pl-17 lg:pr-8 rounded-b-xl text-body lg:text-body-desktop lg:min-h-52 font-albert 
      ${backgroundWhite ? "text-text-black bg-bg-white border lg:border-0 lg:border-x lg:border-gray-300 border-primary" : "bg-primary text-text-white"}`}>
          <div className="">{(messages as any)?.[messageTitle][`text${messageTextIndex}`]}</div>
        </div>
    </div>
  )
}

export default WhiteGridBox