"use client"
import Image from "next/image"
import redPin from "../../public/pin-red.svg"
import pinkPin from "../../public/pin-pink.svg"
import darkRedPin from "../../public/pin-dark-red.svg"
import useMessages from "@/hook/useMessages"

interface ImageCardProps {
    imageTitle: string,
    image: string,
    section: string,
    page: string
    text: string,
    pin: string
}

const ImageCard = ({ imageTitle, image, section, page, text, pin }: ImageCardProps) => {

    const messages = useMessages()
    if (!messages) return null
    const pinColor = () => {
        if (pin === "red") return redPin;
        if (pin === "pink") return pinkPin;
        if (pin === "dark_red") return darkRedPin;
    }

    return (
        <div className="relative group">
            <Image src={pinColor()} alt={imageTitle} width={85} height={80} className={`absolute inset-s-0 z-20 
            ${page === "groups" || page === "scoutLife"
                    ?
                    "left-25 -top-5 md:left-20 md:-top-2"
                    : page === "cabin" ?
                        "left-20 -top-5 md:left-20 md:-top-2"
                        : page === "scout-life" ?
                            "left-22 -top-2 md:left-33"
                            : page === "home"
                                ? "left-22 -top-2 md:left-33 md:-top-4"
                                : page === "group"
                                    ? "left-25 -top-2 md:left-33"
                                    : section === "joinPage"
                                        ? "left-25 -top-2 md:left-34 lg:left-30 xl:left-35 2xl:left-52"
                                        : section === "interstsBtn"
                                            ? "left-30 -top-2 md:left-33"
                                            :
                                            "left-27 -top-2 md:left-33 md:-top-4"}
            `} />
            <div className={`flex flex-col  bg-bg-white shadow-[0_3px_8px_rgba(0,0,0,0.5)] relative font-gochi text-primary transition-transform duration-500 ease-out pin-swing
        ${text ? " md:min-h-125" : ""}
        ${page === "home" && "p-6 w-70 md:w-89.5 "}
        ${page === "cabin" && "p-6 w-66.5"}
        ${page === "group" && "p-3 w-77.5 h-90.75 md:w-89.5 md:h-auto"}
        ${page === "groups" && "p-6 w-77.5 md:w-66.5 md:h-75.5"}
        ${page === "scout-life" && "p-6 w-70  md:w-89.5"}
        ${page === "join" && "p-6 w-82 md:w-89.5 mx-auto"}
        ${page === "scoutLife" && "p-6 w-80 md:w-89.5 "}
        ${page === "cabin" || page === "groups"
                    ? "origin-[calc(80px+42.5px)_0px]"
                    : page === "group"
                        ? "origin-[calc(112px+42.5px)_0px] md:origin-[calc(132px+42.5px)_0px]"
                        : "origin-[calc(132px+42.5px)_0px]"
                }
        `}>

                <div className={`mb-3.25 relative overflow-hidden
            ${page === "cabin" && "h-57.25"}
            ${page === "home" && "h-56.5 md:h-75"}
            ${page === "scout-life" && "h-56.5 md:h-75"}
            ${page === "groups" && "w-66 h-60 md:w-55 md:h-55"}
            ${page === "group" && "h-75"}
            ${page === "join" && "h-75"}
            `}>
                    <Image src={image} alt={imageTitle} fill className="object-cover  object-center" />
                </div>
                <div>
                    <p className="text-center text-hero">{(messages as any)[section]?.[imageTitle]}</p>
                </div>
                <div>
                    <p className="text-h5-desktop">{(messages as any)[section]?.[text]}</p>
                </div>

            </div>
        </div>

    )
}
export default ImageCard