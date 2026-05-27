import { En} from "@/messages/en";
import { Sv } from "@/messages/sv";
import { use } from "react";

const LifeStyleSection = ({params}:{params: Promise<{locale: string}>}) => {
  const {locale} = use(params)
  const messages = locale === "en" ? En : Sv
  return (
    <div className="">
      <div className="">{messages.offers.title}</div>
      <div className="">
        {[...Array(4)].map((e, index)=> {
          return(
            <div className="">

            </div>
          )
        })}
      </div>

    </div>
  )
}

export default LifeStyleSection