"use client"

import useMessages from "@/hook/useMessages"
import DivisionsBox from "./DivisionsBox"

const DivisionsContainer = () => {

  const messages = useMessages()

  return (
    <div className="w-full md:max-w-200 lg:max-w-430"> 
    <div className="text-h2 font-varela md:text-h2-desktop text-primary mt-15 lg:px-22 px-5 ">{messages?.home.divisions}</div>
    <div className="px-5 text-body font-albert md:text-body-desktop lg:px-22 text-text-black">{messages?.home.divisions_text}</div>
    <div className="flex flex-col md:flex-row my-3 md:mb-25 mb-10 px-4 md:px-10 lg:px-20">
      <DivisionsBox division={"sjohumlorna"} boxStyle={"basic"} />
      <DivisionsBox division={"kaparna"} boxStyle={"basic"} />
      <DivisionsBox division={"konvojen"} boxStyle={"basic"} />
      <DivisionsBox division={"utmanare"} boxStyle={"basic"} />
    </div>
    </div>
  )
}

export default DivisionsContainer