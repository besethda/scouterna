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
        <div className={`p-6 flex flex-col  bg-bg-white shadow-md relative font-gochi text-primary 
        ${text ? "min-h-125" : ""}
        ${page === "home" && "w-89.5"}
        ${page === "cabin" && "w-66.5"}
        ${page === "group" && "w-81.5 md:w-87"}
        ${page === "scout-life" && "w-89.5"}
        `}
        >
            <Image src={pinColor()} alt="hige" width={85} height={80} className="absolute inset-s-0 left-33 -top-4 z-40" />
            <div className={`mb-3.25  relative overflow-hidden
            ${page === "cabin" && "h-57.25"}
            ${page === "home" && "h-75"}
            ${page === "scout-life" && "h-75"}
            `}>
                <Image src={image} alt={imageTitle} fill className="object-cover  object-center" />
            </div>
            <div>
                <p className="text-center text-hero">{(messages as any)[section]?.[imageTitle]}</p>
            </div>
            <div>
                <p className="text-[20px]">{(messages as any)[section]?.[text]}</p>
            </div>

        </div>
    )
}
export default ImageCard