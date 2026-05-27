"use client"

import useMessages from "@/hook/useMessages"
import Image from "next/image"

const LifeStyleSection = ({}) => {

  const messages = useMessages()
  if(!messages) return null

  const imageArray = ["/shipIcon.svg", "/t"]

  return (
    <div className="">
      <div className="">{messages.offers.title}</div>
      <div className="">
        {[...Array(4)].map((e, index)=> {
          return(
            <div className="">
              <div className="">
                <Image src={} alt={} />
              </div>
            </div>
          )
        })}
      </div>

    </div>
  )
}

export default LifeStyleSection