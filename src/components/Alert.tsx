import Image from "next/image"
import { useState, useRef } from "react"
import { useOutsideClick } from "@/hook/useOutsideClick"

const Alert = ({alerts, mobile=false, locale}: {alerts:any, mobile?:boolean, locale: string | undefined}) => {
  const currentDate = new Date()
  const expiry = new Date(alerts.notifications.expiry)
  const passed = currentDate.getTime() > expiry.getTime() ? true : false
  const [alertShown, setAlertShown] = useState(false)
  const box = useRef<HTMLDivElement|null>(null)
  if(passed){
    return
  }

  const close = () => {
    setAlertShown(false)
  }

  useOutsideClick(box, alertShown, close)

  return (
    <div ref={box} className={`${mobile ? "mr-4 lg:hidden " : ""}`}>
      <div className="">
        {alerts.notifications.type === "obs" && <Image className="hover:brightness-90 active:brightness-75 cursor-pointer duration-100" onClick={()=> setAlertShown(!alertShown)} src={"/obs.svg"} alt={"obs"} width={mobile ? 26 : 32} height={mobile ? 26 : 32}/>}
        {alerts.notifications.type === "notis" && <Image className="hover:brightness-90 mr-3 active:brightness-75 cursor-pointer duration-100" onClick={()=> setAlertShown(!alertShown)} src={"/notis.svg"} alt={"obs"} width={mobile ? 26 : 32} height={mobile ? 26 : 32}/>}
        <div onClick={()=>setAlertShown(false)} className={`fixed lg:min-w-100 lg:max-w-180 lg:max-h-80 mr-[4vw] lg:mr-2 w-[92vw] max-h-[50vh] overflow-scroll z-40 bg-bg-white/60 backdrop-blur-xl p-5 cursor-pointer
          ${alertShown ? "right-0" : "-right-200 md:-right-300 lg:-right-200"} top-10 md:top-24 lg:top-46 hover:bg-bg-white/60 duration-150 mt-10 border-[#FE3F21] border border-b-4 rounded-3xl`}>
          <div className="relative w-full">
            <div className="absolute w-full h-10 flex flex-row-reverse">
              <svg className={`hover:brightness-150 active:brightness-95 active:scale-90 duration-150`} width={mobile ? "22" : "26"} height={mobile ? "22" : "26"} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="#fff" fillOpacity=".01"/><path d="M8 8 40 40" stroke="#003660" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/><path d="M8 40 40 8" stroke="#003660" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
          </div>
          <div className="w-fit py-1 pr-10 text-body md:text-body-desktop text-text-black font-albert font-bold">{locale=== "/sv" ? alerts.notifications.title_sv : alerts.notifications.title_en}</div>
          <div className="w-fit py-2 text-body md:text-body-desktop text-text-black font-albert font-normal">{locale=== "/sv" ? alerts.notifications.text_sv : alerts.notifications.text_en}</div>
        </div>
      </div>
    </div>
  )
}

export default Alert