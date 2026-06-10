"use client"

import useMessages from "@/hook/useMessages"
import Image from "next/image"
import underline from '../../../../../public/underline.svg'

const LifeStyleSection = ({ }) => {

  const messages = useMessages()
  if (!messages) return null

  const imageArray = ["/scheduleIcon.svg", "/groupIcon.svg", "/heartIconYellowBg.svg", "/starIcon.svg"]

  return (
    <div className="px-4 bg-bg-blue py-8 md:py-25 w-full flex justify-center font-albert flex-col items-center">
      <div className=" relative flex flex-col items-start">
        <div className="lg:max-w-430  w-full flex flex-col">
          <h2 className="text-h2 md:text-h2-desktop w-full md:pb-4 md:pl-2.5 text-primary font-fraunces font-bold mb-9 md:mb-2">{messages.offers.title}</h2>
          <Image src={underline} alt="underline" width={96} height={32} className="absolute md:hidden w-35 h-auto left-0 top-7" />
        </div>
        <div className="flex flex-col md:flex-row md:justify-center md:flex-wrap w-full md:max-w-300">
          {[...Array(4)].map((e, index) => {
            return (
              <div className="my-2 flex w-full md:w-[47.5%] md:mx-[1.25%] md:min-h-48 md:max-w-150 md:p-6 bg-primary md:rounded-xl p-5 rounded-2xl shadow-lg" key={`key${index}`}>
                <div className="h-full pt-1">
                  <div className="w-9 h-9">
                    <Image src={`${imageArray[index]}`} alt={`img${index}`} width={36} height={36} className="object-cover" />
                  </div>
                </div>
                <div className="flex flex-col pl-3">
                  <h3 className="text-h3 md:text-h3-desktop text-white font-fraunces font-bold">{messages.offers[`header${index}`]}</h3>
                  <div className="text-body md:text-body-desktop font-albert text-white">{messages.offers[`text${index}`]}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  ) }

export default LifeStyleSection