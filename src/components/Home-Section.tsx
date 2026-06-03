"use client"

import Image from "next/image";
import hood from '../../public/images/hood.jpg'
import useMessages from "@/hook/useMessages";
import CTABtn from '../components/CTA-button'

const HomeSection = () => {

  const messages = useMessages()

  const handleClick = () => {
    window.open("https://www.scoutnet.se/register/in/group/764")
  }

  return (
    <>
      <section className="w-full py-10 px-4 md:hidden \">
        <div className="flex flex-col bg-primary p-8 rounded-2xl gap-6">
          <div className="flex flex-col min-w-73.5 min-h-22.75 gap-2 font-normal text-white">
            <p className="font-varela text-h2 tracking-[-0.5%]">{messages?.homePage?.title}</p>
            <p className="font-albert text-[16px] tracking-[3%] leading-[100%] font-normal">{messages?.homePage?.subtitle}</p>
          </div>
          <div className="relative min-w-73.5 min-h-64.25">
            <Image
              src={hood}
              alt="HSS hood"
              fill
              className=" bg-white rounded-2xl object-cover " />
          </div>
          <div>
            <CTABtn text={messages?.homePage?.button} width="full" onClick={handleClick} />
          </div>
        </div>
      </section>

        <div className="w-full md:bg-bg-blue flex justify-center">
          <section className="hidden md:flex flex-row px-22 py-10 gap-25 bg-(--bg-blue) md:pb-25 lg:mt-6 lg:max-w-430 ">
          <div className="relative aspect-video max-w-100  md:h-40 lg:h-60">
            <Image
              src={hood}
              alt="HSS hood"
              fill
              className="rounded-2xl object-cover" />
          </div>
          <div className="flex flex-col flex-1 gap-4">
            <div className="text-h2 md:text-h2-desktop font-normal font-albert text-primary tracking-[-0.5%]">{messages?.homePage?.title}</div>
            <div className="font-albert text-body md:text-body-desktop tracking-[3%] text-text-black">{messages?.homePage?.subtitle2}</div>
            <CTABtn text={messages?.homePage?.button} onClick={handleClick}/>
          </div>
        </section>
      </div>
    </>
  )
}


export default HomeSection