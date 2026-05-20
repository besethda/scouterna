import Image from "next/image"
import useMessages from "@/hook/useMessages"
import Link from "next/link"

type divisionName = "sjohumlorna" | "kaparna" | "utmanare" | "konvojen"

const DivisionsBox = ({division, imageUrl, boxStyle = "basic"}:
  {division:divisionName, imageUrl?:string, boxStyle:string}) => {

  const messages = useMessages()
  const colorReference = {
    sjohumlorna: ["border-green", "bg-green-opaque"],
    kaparna: ["border-lightBlue", "bg-lightBlue-opaque"],
    utmanare: ["border-pink", "bg-pink-opaque"],
    konvojen: ["border-orange", "bg-orange-opaque"]
  }

  return (
    <div className={`${colorReference[division][0]} flex flex-col flex-wrap border border-b-4 m-1 rounded-2xl px-6 py-3 ${boxStyle !== "image" ? boxStyle === "info" ? "md:w-[49.5%] mx-[.25%]" : "md:w-[24%] mx-[0.5%]" : "md:max-h-81 lg:max-h-70 md:max-w-250"}`}>
      <div className={`flex order-1 justify-between items-center ${boxStyle === "image" && "md:flex-col md:justify-start md:items-baseline md:min-w-[53%] lg:min-w-[70%]"}`}>
        {boxStyle !== "image" ? <div className={`w-16 h-16 rounded-xl flex justify-center items-center ${colorReference[division][1]}`}>
                                  <Image src={`/${division.toLowerCase()}.png`} width={48} height={48} alt={messages?.division[`${division}_title`] ?? ""} className="bg-white"/>
                                </div>
                              : <div className="text-h2 font-varela pt-4 text-primary">{messages?.division[`${division}_title`] ?? ""}</div>}
        <div className="font-bold text-sm text-primary font-public tracking-widest uppercase text-right">{messages?.division[`${division}_ages`] ?? ""}</div>
      </div>
      <div className={`mt-3 order-2 ${boxStyle === "image" && "md:max-w-[50%] lg:max-w-[70%] lg:pr-5"}`}>
        {boxStyle !== "image" && <div className="text-h3 font-varela text-primary">{messages?.division[`${division}_title`] ?? ""}</div>}
        {boxStyle === "info" && <div className="text-text-black pt-1 pb-3">
          <div className="text-body font-varela">{messages?.division.day} {messages?.division[`${division}_day`] ?? ""}</div>
          <div className="text-body font-varela">{messages?.division.time} {messages?.division[`${division}_time`] ?? ""}</div>
          <div className="text-body font-varela">{messages?.division.place} {messages?.division[`${division}_place`] ?? ""}</div>
        </div>}
        {boxStyle === "image" && <div className="text-body-desktop font-albert text-text-black">{messages?.division[`${division}_paragraph`] ?? ""}</div>}
      </div>
      {boxStyle === "image" && <div className="order-3 md:order-4 w-full md:max-w-[70%] mt-5 md:mt-0">
                                  <div className="aspect-6/5 mb-2 h-full w-auto relative lg:max-h-62 md:max-h-72">
                                      <Image src={imageUrl ? imageUrl : "/images/IMG_5129.JPG"} alt={messages?.division[`${division}_title`] ?? ""} fill className="object-cover aspect-6/5 rounded-2xl"/>
                                  </div>
                                </div>}
      <div className={`${boxStyle === "info" && "md:hidden"} flex grow justify-center md:justify-start pt-2 text-primary items-end md:pb-3 order-4 md:order-3`}>
        {boxStyle !== "image" ? <Link href={`/groups/${division}`} className={`${colorReference[division][0]} ${colorReference[division][1]} h-fit cursor-pointer hover:brightness-140 active:brightness-80 duration-150 text-center font-albert text-body md:text-body-desktop border rounded-3xl py-3.5 w-full`}>{`${messages?.division.basic_message} ${messages?.division[`${division}_title`] ?? ""}`}</Link>
                              : <Link href={`/groups/${division}`} className={`${colorReference[division][0]} ${colorReference[division][1]} h-fit cursor-pointer hover:brightness-140 active:brightness-80 duration-150 font-albert flex items-center justify-center text-body md:text-body-desktop border rounded-3xl`}>
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