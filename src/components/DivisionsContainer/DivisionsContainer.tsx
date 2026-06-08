"use client"

import useMessages from "@/hook/useMessages"
import DivisionsBox from "./DivisionsBox"

const DivisionsContainer = () => {

  const messages = useMessages()

  return (
    <div className="w-full md:max-w-200 lg:max-w-430 mb-9">
      <h2 className="text-h2 font-fraunces font-bold md:text-h2-desktop text-primary mt-5 md:mt-15 lg:px-22 px-5 ">{messages?.home.divisions}</h2>
      <div className="px-5 text-body font-albert md:text-body-desktop lg:px-22 text-text-black w-full md:max-w-200 lg:max-w-300">{messages?.home.divisions_text}</div>
      <div className="flex justify-center w-full">
        <div className="flex flex-col md:flex-row md:flex-wrap md:w-fit w-full md:max-w-290 mt-3 px-4 md:px-10 lg:px-20">
          <DivisionsBox division={"sjohumlorna"} boxStyle={"basic"} />
          <DivisionsBox division={"kaparna"} boxStyle={"basic"} />
          <DivisionsBox division={"konvojen"} boxStyle={"basic"} />
          <DivisionsBox division={"utmanare"} boxStyle={"basic"} />
          <DivisionsBox division={"smattarne"} boxStyle={"basic"} />
        </div>
      </div>
    </div>
  )
}

export default DivisionsContainer