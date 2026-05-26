import { En} from "@/messages/en";
import { Sv } from "@/messages/sv";
import { use } from "react";

const GroupStructure = ({params}:{params: Promise<{locale: string}>}) => {

  const {locale} = use(params)
  const messages = locale === "en" ? En : Sv

  return (
    <div className="">
      Group Structure
    </div>
  )
}

export default GroupStructure