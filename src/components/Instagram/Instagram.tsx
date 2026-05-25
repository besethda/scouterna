"use client"

import useMessages from "@/hook/useMessages"
import Image from "next/image"
import footerHSSIcon from '../../../public/footer-hss-logo.png'
// import Gallery from "../Gallery"

const Instagram = ({ infoText = false }: { infoText?: boolean }) => {

  const messages = useMessages()

  return (
    <div className="flex w-full justify-center">
      <div className="pb-25 px-4 w-full md:px-17 md:max-w-200 lg:max-w-430">
        {!infoText ? <div className="text-h2 md:text-h2-desktop text-primary font-varela mx-[1.5%]">{messages?.instagram.head}</div>
          : <div className="mx-[1.5%]">
            <div className="text-h2 md:text-h2-desktop text-primary font-varela mb-3">Instagram</div>
            <div className="font-albert text-acc-desktop text-text-black md:text-body-desktop pb-2">{messages?.instagram.text}</div>
          </div>
        }
        <div className="">
          <div className="flex justify-between items-center mt-4 mb-4 mx-[1.5%]">
            <div className="flex items-center">
              <Image src={footerHSSIcon} alt='HSS icon' width={50} height={50} className='mr-3' />
              <a href="https://www.instagram.com/hss_scout/" className="h-fit font-albert text-acc-desktop hover:underline md:text-body-desktop">@hss_scout</a>
            </div>
            <a href="https://www.instagram.com/hss_scout/" className="font-albert bg-primary hover:bg-[#0D3F6A] active:bg-[#2D4D6B] shadow-md active:shadow-none active:scale-95 duration-150 h-fit text-white text-acc-desktop md:text-button-desktop py-2 px-5 rounded-3xl">{messages?.instagram.button_text}</a>
          </div>
          <div className="">
            {/* <Gallery photoArray={{}}/> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Instagram