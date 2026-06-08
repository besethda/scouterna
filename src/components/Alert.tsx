import { getSectionById } from "@/lib/utils"

const Alert = ({alerts}: {alerts:any}) => {
  console.log(alerts)
  const currentDate = new Date()
  const expiry = new Date(alerts.notifications.expiry)
  const passed = currentDate.getTime() > expiry.getTime() ? true : false
  if(passed){
    return
  }

  return (
    <div className="">
      <div className=""></div>
    </div>
  )
}

export default Alert