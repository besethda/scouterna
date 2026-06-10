import Image from "next/image"
import { useState } from "react"

const Alert = ({alerts, locale}: {alerts:any, locale: string | undefined}) => {
  const currentDate = new Date()
  const expiry = new Date(alerts.notifications.expiry)
  const passed = currentDate.getTime() > expiry.getTime() ? true : false
  const [alertShown, setAlertShown] = useState(false)
  if(passed){
    return
  }

  return (
    <div className="">
      <div className="">
        {alerts.notifications.type === "obs" && <Image className="hover:brightness-90 active:brightness-75 cursor-pointer duration-100" onClick={()=> setAlertShown(!alertShown)} src={"/obs.svg"} alt={"obs"} width={32} height={32}/>}
        {alerts.notifications.type === "notis" && <Image className="hover:brightness-90 mr-3 active:brightness-75 cursor-pointer duration-100" onClick={()=> setAlertShown(!alertShown)} src={"/notis.svg"} alt={"obs"} width={32} height={32}/>}
        <div onClick={()=>setAlertShown(false)} className={`fixed min-w-100 max-w-180 max-h-80 overflow-scroll z-40 bg-bg-white/50 backdrop-blur-lg p-5 cursor-pointer
          ${alertShown ? "right-2" : "-right-200"} top-46 hover:bg-bg-white/60 duration-150 mt-10 border-[#FE3F21] border border-b-4 rounded-3xl`}>
          <div className="relative w-full">
            <div className="absolute w-full h-10 flex flex-row-reverse">
              <svg className={`hover:brightness-150 active:brightness-95 active:scale-90 duration-150`} width="26" height="26" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="#fff" fill-opacity=".01"/><path d="M8 8 40 40" stroke="#003660" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 40 40 8" stroke="#003660" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>
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