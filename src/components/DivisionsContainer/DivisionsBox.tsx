"use client"

import Image from "next/image"
import useMessages from "@/hook/useMessages"
import Link from "next/link"
import { urlFor } from "@/sanity/lib/image"

type divisionName = "sjohumlorna" | "kaparna" | "utmanare" | "konvojen" | "smattarne"

const DivisionsBox = ({ division, data, boxStyle = "basic" }:
  { division: divisionName, data: any, boxStyle: string }) => {

  const messages = useMessages()
  const colorReference = {
    sjohumlorna: ["border-green", "bg-green-opaque"],
    kaparna: ["border-lightBlue", "bg-lightBlue-opaque"],
    utmanare: ["border-pink", "bg-pink-opaque"],
    konvojen: ["border-orange", "bg-orange-opaque"],
    smattarne: ["border-purple", "bg-purple-opaque"]
  }
  if(!data || data.groups.day_se) return null
  console.log(data.groups.day_en)

  return (
    <div className={`${colorReference[division][0]} flex flex-col flex-wrap border border-b-4 m-1 rounded-2xl px-6 py-3 ${boxStyle !== "image" ? boxStyle === "info" ? "md:w-[49.5%] bg-bg-white mx-[.25%]" : "md:w-[24%] mx-[0.5%] md:min-w-77 md:m-3" : "md:min-h-72  md:max-h-96 lg:max-h-77 md:max-w-250 md:my-4"}`}>
      <div className={`flex order-1 justify-between items-center ${boxStyle === "image" && "md:flex-col md:justify-start md:items-baseline md:min-w-[53%] lg:min-w-[70%]"}`}>
        {boxStyle !== "image" ? <div className={`w-16 h-16 rounded-xl flex justify-center items-center ${colorReference[division][1]}`}>
          <Image src={`/${division.toLowerCase()}.svg`} width={48} height={48} alt={messages?.division[`${division}_title`] ?? ""} className="bg-white" />
        </div>
          : <h2 className={`text-h2 font-fraunces font-bold ${boxStyle === "image" ? "" : "pt-4"} text-primary`}>{messages?.division[`${division}_title`] ?? ""}</h2>}
        <div className="font-bold text-sm text-primary font-public tracking-widest uppercase text-right">{messages?.division[`${division}_ages`] ?? ""}</div>
      </div>
      <div className={`mt-3 order-2 ${boxStyle === "image" && "md:max-w-[50%] lg:max-w-[70%] lg:pr-5"}`}>
        {boxStyle !== "image" && <div className="text-h3 font-fraunces font-bold text-primary">{messages?.division[`${division}_title`] ?? ""}</div>}
        {boxStyle === "info" && <div className="text-text-black pt-1 pb-3">
          <div className="w-fit text-body md:text-body-desktop text-text-black font-albert">{`${messages?.path === "/sv" ? "Dag: ": "Day: "}${messages?.path === "/sv" ? data?.groups?.day_sv : data.groups.day_en}`}</div>
          <div className="w-fit text-body md:text-body-desktop text-text-black font-albert">{`${messages?.path === "/sv" ? "Plats: ": "Place: "}${messages?.path === "/sv" ? data?.groups?.place_sv : data.groups.place_en}`}</div>
        </div>}
        {boxStyle === "image" && <div className="md:text-body-desktop text-body font-albert text-text-black">{messages?.division[`${division}_paragraph`] ?? ""}</div>}
      </div>
      {boxStyle === "image" && <div className="order-3 md:order-4 md:mt-7 lg:mt-2 w-full md:max-w-[70%] mt-5">
        <div className={`aspect-6/5 mb-2 h-full w-auto relative lg:max-h-62 md:max-h-72`}>
          <Image src={urlFor(data?.groups.image.asset._ref).url()} alt={messages?.division[`${division}_title`] ?? ""} fill className="object-cover aspect-6/5 rounded-2xl" />
        </div>
      </div>}
      <div className={`${boxStyle === "info" && "md:hidden"} flex grow justify-center md:justify-start pt-2 text-primary items-end md:pb-3 order-4 md:order-3`}>
        {boxStyle !== "image" ? <Link href={messages?.path + `/groups/${division}`} className={`${colorReference[division][0]} ${colorReference[division][1]} h-fit cursor-pointer hover:brightness-104 shadow-md active:shadow-none active:scale-98 active:brightness-80 duration-150 text-center font-albert text-button md:text-button-desktop border rounded-3xl py-3.5 w-full`}>{`${messages?.division.basic_message} ${messages?.division[`${division}_title`] ?? ""}`}</Link>
          : <Link href={messages?.path + `/groups/${division}`} className={`${colorReference[division][0]} ${colorReference[division][1]} h-fit cursor-pointer hover:brightness-104 shadow-md active:shadow-none active:scale-98 active:brightness-80 duration-150 font-albert flex items-center justify-center text-button md:text-button-desktop border rounded-3xl`}>
            <div className="pr-1 pl-3 ">{`${messages?.division.image_message} ${messages?.division[`${division}_title`] ?? ""}`}</div>
            <div className={`flex justify-center pl-1 items-center`}>
              <Image src={`/${division.toLowerCase()}.png`} width={48} height={48} alt={messages?.division[`${division}_title`] ?? ""} />
            </div>
          </Link>
        }
      </div>
    </div>
  )
}

export default DivisionsBox