"use client"

import Image from "next/image"
import useMessages from "@/hook/useMessages"



const WhiteImageBox = () => {

    const iconList = [{ icon: "ship" }, { icon: "heart" }, { icon: "compass" }]
    const imgList: Record<string, string> = { img1: "IMG_0406.JPEG", img2: "IMG_1934.JPEG", img3: "IMG_7824.JPEG" }
    const messages = useMessages()

    return (
        <div className="w-full md:bg-bg-blue flex flex-col  items-center pt-12 pb-2 md:pb-22">
            <div className="text-h2 pl-4 md:pb-3 pb-0 md:text-h2-desktop w-full lg:max-w-430 lg:px-22 text-primary font-albert mx-[1.5%]">{messages?.whiteImageBox.header}</div>
            <div className="w-full items-center lg:justify-center lg:max-w-400 flex px-4 py-4 lg:px-14 flex-col gap-[24] md:flex-row md:justify-center">
                {iconList.map((icon, index) => {
                    return (
                        <div key={index} className="w-90 md:w-70 lg:w-100 md:max-w-[30%] my-2 px-4 aspect-5/4 md:aspect-12/11 md:border-gray-300 md:border md:mx-4 flex flex-col items-center bg-primary text-white md:bg-white md:text-primary rounded-2xl">
                            <div className="flex w-full md:pl-2 pt-4 leading-[0.8] md:leading-none md:py-0 md:pt-6">
                                <div className="w-8 h-8 md:flex md:mr-3 shrink-0 hidden relative">
                                    <Image src={`/${icon.icon}Icon-desktop.svg`} alt={`${icon}`} fill className="object-contain" />
                                </div>
                                <h1 className="text-h2 pr-3 font-albert whitespace-nowrap min-h-5.5 md:min-h-7 overflow-hidden md:text-h3-desktop">{(messages?.whiteImageBox as Record<string, string>)[`title${index + 1}`]}</h1>
                                <div className="flex md:hidden min-w-4.5 min-h-4.5  relative">
                                    <Image src={`/${icon.icon}Icon.svg`} alt={`a${icon}`} fill className="object-contain" />
                                </div>
                            </div>
                            <div className="w-full h-full flex items-center lg:mb-4 lg:mt-2 justify-center overflow-hidden rounded-2xl">
                                <div className="w-78 h-57 md:w-52 md:h-44 lg:w-84 lg:h-84 lg:max-h-98 relative">
                                    <Image src={`/images/${imgList[`img${index + 1}`]}`} alt={`b${icon}`} fill className="object-cover object-center rounded-2xl" />
                                </div>
                            </div>
                        </div>
                    )
                }
                )}
            </div>
        </div>
    )
}

export default WhiteImageBox