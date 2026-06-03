"use client"

import useMessages from "@/hook/useMessages"
import Image from "next/image"

const LifeStyleSection = ({ }) => {

  const messages = useMessages()
  if (!messages) return null

  const imageArray = ["/shipIcon-desktop.svg", "/treeIcon.svg", "/heartIcon-desktop.svg", "/HandHeart.png"]

  return (
    <div className="px-4 bg-bg-blue py-8 md:py-25 w-full flex justify-center font-albert flex-col items-center">
      <div className="lg:max-w-430 lg:px-22">
        <div className="text-h2 md:text-h2-desktop w-full md:max-w-300 text-primary">{messages.offers.title}</div>
        <div className="flex flex-col md:flex-row md:justify-center md:flex-wrap w-full md:max-w-300">
          {[...Array(4)].map((e, index) => {
            return (
              <div className="my-5 flex w-full md:w-[47.5%] md:mx-[1.25%] md:min-h-48 md:max-w-150 md:p-6 md:bg-bg-white md:rounded-xl" key={`key${index}`}>
                <div className="h-full pt-1">
                  <div className="w-9 h-9">
                    <Image src={`${imageArray[index]}`} alt={`img${index}`} width={36} height={36} className="object-cover" />
                  </div>
                </div>
                <div className="flex flex-col pl-3">
                  <div className="text-h3 md:text-h3-desktop text-primary">{messages.offers[`header${index}`]}</div>
                  <div className="text-body md:text-body-desktop text-text-black">{messages.offers[`text${index}`]}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default LifeStyleSection