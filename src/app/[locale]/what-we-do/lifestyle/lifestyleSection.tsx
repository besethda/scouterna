"use client"

import useMessages from "@/hook/useMessages"
import Image from "next/image"
import underline from '../../../../../public/underline.svg'
import birds from '../../../../../public/blueBirds1.png'

const LifeStyleSection = ({ }) => {

  const messages = useMessages()
  if (!messages) return null

  const imageArray = ["/scheduleIcon.svg", "/groupIcon.svg", "/heartIconYellowBg.svg", "/starIcon.svg"]

  return (
    <div className="mx-4 pb-10 md:p-0 bg-bg-blue flex justify-center font-albert flex-col items-center">
      <div className=" relative flex flex-col items-start">
        <div className="lg:max-w-430  w-full flex flex-col">
          <h2 className="text-h2 md:text-h2-desktop w-full text-primary font-fraunces font-bold mb-9 ">{messages.offers.title}</h2>
          <Image src={underline} alt="underline" width={96} height={32} className="absolute md:hidden w-35 h-auto left-0 top-7" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {[...Array(4)].map((e, index) => {
            return (
              <div className="md:p-6 bg-primary md:rounded-xl p-5 rounded-2xl shadow-lg xl:max-w-[478px] 2xl:max-w-full" key={`key${index}`}>
                  <div className="flex items-start gap-4">
                    <div className="shrink-0">
                      <Image src={`${imageArray[index]}`} alt={`img${index}`} width={36} height={36} className="object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-acc md:text-body text-accent font-fraunces font-bold uppercase pb-[5px]">{messages.offers[`bigHeader${index}`]}</h3>
                      <h3 className="text-h3 md:text-h3-desktop text-white font-fraunces font-bold pb-2">{messages.offers[`header${index}`]}</h3>
                      <div className="text-body md:text-body-desktop font-albert text-white">{messages.offers[`text${index}`]}</div>
                    </div>
                  </div>
                </div>
            )
          })}
        </div>
      </div>
    </div>
  ) }

export default LifeStyleSection