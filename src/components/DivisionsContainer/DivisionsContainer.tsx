"use client"

import useMessages from "@/hook/useMessages"
import DivisionsBox from "./DivisionsBox"

const DivisionsContainer = ({ data }: { data: any }) => {

  const messages = useMessages()

  return (
    <div className="md:max-w-360 mb-9">
      <h2 className="text-h2 font-fraunces font-bold md:text-h2-desktop text-primary mt-5 md:mt-10 px-5">{messages?.home.divisions}</h2>
      <div className="px-5 text-body font-albert md:text-body-desktop  text-text-black w-full ">{messages?.home.divisions_text}</div>
      <div className="flex justify-center w-full">
        <div className="flex flex-col md:flex-row md:flex-wrap md:w-fit w-full md:max-w-290 mt-3 px-4 md:px-10 lg:px-20 md:justify-center">
          <DivisionsBox division={"spararscouter"} boxStyle={"basic"} data={data?.groups.find((e: any) => e.name_slug === "sjohumlorna") || null} />
          <DivisionsBox division={"upptackarscouter"} boxStyle={"basic"} data={data?.groups.find((e: any) => e.name_slug === "kaparna") || null} />
          <DivisionsBox division={"utmanarscouter"} boxStyle={"basic"} data={data?.groups.find((e: any) => e.name_slug === "utmanare") || null} />
          <DivisionsBox division={"aventyrarscouter"} boxStyle={"basic"} data={data?.groups.find((e: any) => e.name_slug === "konvojen") || null} />
          <DivisionsBox division={"familjescouter"} boxStyle={"basic"} data={data?.groups.find((e: any) => e.name_slug === "smattarne") || null} />
        </div>
      </div>
    </div>
  )
}

export default DivisionsContainer