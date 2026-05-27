"use client"

import useMessages from "@/hook/useMessages"
import DivisionsBox from "./DivisionsBox"

const DivisionsContainer = () => {

  const messages = useMessages()

  return (
    <div className="w-full md:max-w-200 lg:max-w-430">
      <div className="text-h2 font-varela md:text-h2-desktop text-primary mt-15 lg:px-22 px-5 ">{messages?.home.divisions}</div>
      <div className="px-5 text-body font-albert md:text-body-desktop lg:px-22 text-text-black w-full md:max-w-200 lg:max-w-230">{messages?.home.divisions_text}</div>
      <div className="text-h3 font-varela md:text-h3-desktop text-primary mt-6 lg:px-22 px-5 w-full md:max-w-200 lg:max-w-430">{messages?.division.scouts_title}</div>
      <div className="px-5 text-body font-albert md:text-body-desktop mb-3 lg:px-22 text-text-black w-full md:max-w-200 lg:max-w-430">{messages?.division.scouts_paragraph}</div>
      <div className="flex flex-col md:flex-row mt-3 px-4 md:px-10 lg:px-20">
        <DivisionsBox division={"sjohumlorna"} boxStyle={"basic"} />
        <DivisionsBox division={"kaparna"} boxStyle={"basic"} />
        <DivisionsBox division={"konvojen"} boxStyle={"basic"} />
        <DivisionsBox division={"utmanare"} boxStyle={"basic"} />
      </div>
      <div className="text-h3 font-varela md:text-h3-desktop text-primary mt-6 lg:px-22 px-5 w-full md:max-w-200 lg:max-w-430">{messages?.division.family_title}</div>
      <div className="px-5 text-body font-albert md:text-body-desktop mb-3 lg:px-22 text-text-black w-full md:max-w-200 lg:max-w-230">{messages?.division.familjescouter_paragraph}</div>
      <div className="flex flex-col md:flex-row md:mb-25 mb-10 px-4 md:px-10 lg:px-20 w-full md:max-w-200 lg:max-w-430">
        <DivisionsBox division={"familjescouter"} boxStyle={"basic"} />
      </div>
    </div>
  )
}

export default DivisionsContainer