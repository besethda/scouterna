"use client"

import useMessages from "@/hook/useMessages"
import Image from "next/image"
import footerHSSIcon from '../../public/footer-hss-logo.png'
import { useState } from "react"

type InstagramData = {
  url: string,
  order: number,
  link: string
}

const Instagram = ({infoText = false}: {infoText: boolean}) => {

  const demoData: InstagramData[] = [
    {
      url: "IMG_0980.JPG",
      order: 1,
      link: "https://www.instagram.com/hss_scout/"
    },
    {
      url: "IMG_1943.JPEG",
      order: 2,
      link: "https://www.instagram.com/hss_scout/"
    },
    {
      url: "IMG_1910.JPEG",
      order: 3,
      link: "https://www.instagram.com/hss_scout/"
    },
    {
      url: "IMG_3740.JPEG",
      order: 4,
      link: "instagram.com"
    }, 
    {
      url: "IMG_3752.JPEG",
      order: 5,
      link: "https://www.instagram.com/hss_scout/"
    }, 
    {
      url: "IMG_5129.JPG",
      order: 6,
      link: "https://www.instagram.com/hss_scout/"
    }
  ]

  const messages = useMessages()
  const [imageIndex, setImageIndex] = useState(0)
  const [currentImages, setCurrentImages] = useState(demoData.slice(0, 3))

  const incrementIndex = (forward = true) => {
    if (forward) {
      const currentIndex = imageIndex === 5 ? 0 : imageIndex +1
      if (currentIndex < 4) {
        setCurrentImages(demoData.slice(currentIndex, (currentIndex + 3)))
      } else {
        setCurrentImages([...demoData.slice(currentIndex), ...demoData.slice(0, (currentIndex - 3))])
      }
      setImageIndex(imageIndex === 5 ? 0 : imageIndex +1)
    } else {
      const currentIndex = imageIndex === 0 ? 5 : imageIndex -1
      setImageIndex(imageIndex === 0 ? 5 : imageIndex -1)
      if (currentIndex < 4) {
        setCurrentImages(demoData.slice(currentIndex, (currentIndex + 3)))
      } else {
        setCurrentImages([...demoData.slice(currentIndex), ...demoData.slice(0, (currentIndex - 3))])
      }
      setImageIndex(imageIndex === 0 ? 5 : imageIndex -1)
    }
  }

  return (
    <div className="flex w-full justify-center">
      <div className="pb-25 px-4 w-full md:px-8 md:max-w-200 lg:max-w-420">
        {!infoText ? <div className="text-h2 md:text-h2-desktop text-primary font-varela mx-[1.5%]">{messages?.instagram.head}</div>
                   : <div className="mx-[1.5%]">
                        <div className="text-h2 md:text-h2-desktop text-primary font-varela mb-3">Instagram</div>
                        <div className="font-albert text-acc-desktop md:text-body-desktop pb-2">{messages?.instagram.text}</div>
                     </div>
        }
        <div className="">
          <div className="flex justify-between items-center my-4 mx-[1.5%]">
            <div className="flex items-center">
              <Image src={footerHSSIcon} alt='HSS icon' width={50} height={50} className='mr-3' />
              <a href="https://www.instagram.com/hss_scout/" className="h-fit font-albert text-acc-desktop hover:underline md:text-body-desktop">@hss_scout</a>
            </div>
            <a href="https://www.instagram.com/hss_scout/" className="font-albert bg-primary hover:bg-accent duration-150 h-fit text-white text-acc-desktop md:text-button-desktop py-2 px-5 rounded-3xl">{messages?.instagram.button_text}</a>
          </div>
          <div className="flex">
            <div className="hidden md:flex flex-col justify-center">
              <svg onClick={()=>incrementIndex(false)} className="hover:scale-105 duration-100 active:scale-95 cursor-pointer" fill="#000" width="36" height="36" viewBox="144 144 512 512" xmlns="http://www.w3.org/2000/svg"><g><path d="m4e2 630.91c-127.33.0-230.91-103.58-230.91-230.91S272.68 169.09 4e2 169.09 630.91 272.68 630.91 4e2c0 127.33-103.58 230.91-230.91 230.91zm0-444.19c-117.61.0-213.28 95.672-213.28 213.28.0 117.6 95.672 213.28 213.28 213.28 117.6.0 213.28-95.68 213.28-213.28.0-117.6-95.68-213.28-213.28-213.28z"/><path d="m433.94 508.75c-2.1406.0-4.2891-.76953-5.9844-2.3359l-108.21-99.938c-1.8086-1.668-2.8359-4.0156-2.8359-6.4805.0-2.4648 1.0273-4.8125 2.8359-6.4805l108.21-99.93c3.5781-3.293 9.1484-3.0898 12.465.5 3.3008 3.5781 3.0781 9.1523-.5 12.461l-101.2 93.457 101.2 93.453c3.5781 3.3047 3.7969 8.8867.5 12.465-1.7422 1.875-4.1094 2.8281-6.4766 2.8281z"/></g></svg>
            </div>
              {currentImages.map(image=><a href={image.link} className="relative w-[60%] aspect-6/5 mx-[1.5%]" key={image.order}>
                                          <Image src={`/images/${image.url}`} alt={`image-${image.order}`} priority fill className='rounded-3xl object-cover' />
                                        </a>)
              }
            <div className="hidden rotate-180 md:flex flex-col justify-center">
              <svg onClick={()=>incrementIndex()} className="hover:scale-105 duration-100 active:scale-95 cursor-pointer" fill="#000" width="36" height="36" viewBox="144 144 512 512" xmlns="http://www.w3.org/2000/svg"><g><path d="m4e2 630.91c-127.33.0-230.91-103.58-230.91-230.91S272.68 169.09 4e2 169.09 630.91 272.68 630.91 4e2c0 127.33-103.58 230.91-230.91 230.91zm0-444.19c-117.61.0-213.28 95.672-213.28 213.28.0 117.6 95.672 213.28 213.28 213.28 117.6.0 213.28-95.68 213.28-213.28.0-117.6-95.68-213.28-213.28-213.28z"/><path d="m433.94 508.75c-2.1406.0-4.2891-.76953-5.9844-2.3359l-108.21-99.938c-1.8086-1.668-2.8359-4.0156-2.8359-6.4805.0-2.4648 1.0273-4.8125 2.8359-6.4805l108.21-99.93c3.5781-3.293 9.1484-3.0898 12.465.5 3.3008 3.5781 3.0781 9.1523-.5 12.461l-101.2 93.457 101.2 93.453c3.5781 3.3047 3.7969 8.8867.5 12.465-1.7422 1.875-4.1094 2.8281-6.4766 2.8281z"/></g></svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Instagram