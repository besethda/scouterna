"use client"
import Image from "next/image"
import image from "../../public/images/DSCF1948.jpg"

interface ImageCard {
    imageTitle: string,
    image: string
}

const ImageCard = () => {
    return (
        <div className="flex flex-col w-89.5 h-99 bg-bg-white shadow-md ">
            <div className=" mx-6 mt-6 mb-3.25 w-75 h-75 relative">
                <Image src={image} fill alt="hoge" className="object-cover" />
            </div>
            <div>
                <p className="text-center text-hero">text text</p>
            </div>

        </div>
    )
}
export default ImageCard