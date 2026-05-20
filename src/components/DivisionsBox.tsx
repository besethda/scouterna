import Image from "next/image"
import useMessages from "@/hook/useMessages"

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
    <div className={`${colorReference[division][0]} border border-b-4 m-4 rounded-2xl px-6 py-3 ${boxStyle !== "image" ? boxStyle === "info" ? "md:w-[49.5%] mx-[.25%]" : "md:w-[24%] mx-[0.5%]" : ""}`}>
      <div className="flex justify-between items-center">
        {boxStyle !== "image" ? <div className={`w-16 h-16 rounded-xl flex justify-center items-center ${colorReference[division][1]}`}>
                                  <Image src={`/${division.toLowerCase()}.png`} width={48} height={48} alt={messages?.division[`${division}_title`] ?? ""} className="bg-white"/>
                                </div>
                              : <div className="text-h2 font-varela pt-4 text-primary">{messages?.division[`${division}_title`] ?? ""}</div>}
        <div className="font-bold text-primary font-public tracking-widest uppercase text-right">{messages?.division[`${division}_ages`] ?? ""}</div>
      </div>
      <div className="mt-3">
        {boxStyle !== "image" && <div className="text-h3 font-varela text-primary">{messages?.division[`${division}_title`] ?? ""}</div>}
        {boxStyle === "info" && <div className="text-text-black pt-1">
          <div className="text-body font-varela">{messages?.division.day} {messages?.division[`${division}_day`] ?? ""}</div>
          <div className="text-body font-varela">{messages?.division.time} {messages?.division[`${division}_time`] ?? ""}</div>
          <div className="text-body font-varela">{messages?.division.place} {messages?.division[`${division}_place`] ?? ""}</div>
        </div>}
        {boxStyle === "image" && <div className="text-body-desktop font-albert text-text-black pb-3">{messages?.division[`${division}_paragraph`] ?? ""}</div>}
      </div>
      {boxStyle === "image" && <div className="w-full aspect-6/5 mb-2 relative">
        <Image src={imageUrl ? imageUrl : "/images/IMG_5129.JPG"} alt={messages?.division[`${division}_title`] ?? ""} fill className="object-cover rounded-2xl"/>
       </div>}
      <div className={`${boxStyle === "info" ? "md:hidden flex" : "flex"} justify-center pt-2 text-primary`}>
        {boxStyle !== "image" ? <button className={`${colorReference[division][0]} ${colorReference[division][1]} hover:brightness-90 active:scale-98 duration-75 font-albert text-body border rounded-3xl py-2 w-full`}>{`${messages?.division.basic_message} ${messages?.division[`${division}_title`] ?? ""}`}</button>
                              : <button className={`${colorReference[division][0]} ${colorReference[division][1]} font-albert flex items-center justify-center text-body border rounded-3xl px-3`}>
                                  <div className="pr-1 pl-3">{`${messages?.division.image_message} ${messages?.division[`${division}_title`] ?? ""}`}</div>
                                  <div className={`flex justify-center pl-1 items-center`}>
                                    <Image src={`/${division.toLowerCase()}.png`} width={48} height={48} alt={messages?.division[`${division}_title`] ?? ""} />
                                  </div>
                                </button>
        }
      </div>
    </div>
  )
}

export default DivisionsBox