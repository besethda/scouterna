"use client"

import useMessages from "@/hook/useMessages"
import ImageCard from "@/components/ImageCard";


const WhiteImageBox = () => {

    const imageList = [
        { img: "IMG_0406.JPEG", title: "title1", pin: "red" },
        { img: "IMG_1934.JPEG", title: "title2", pin: "pink" },
        { img: "IMG_7824.JPEG", title: "title3", pin: "dark_red" }
    ]
    const messages = useMessages()

    return (
        <div className="w-full bg-bg-blue flex flex-col  items-center pt-12 pb-2 md:pb-22">
            <div className="text-h2 pl-4 md:pb-3 pb-0 md:text-h2-desktop w-full lg:max-w-430 lg:px-22 text-primary font-fraunces font-bold mx-[1.5%]">
                {messages?.whiteImageBox.header}
            </div>
            <div className="w-full items-center lg:justify-center lg:max-w-400 flex px-4 py-4 lg:px-14 flex-col gap-8 md:flex-row md:justify-center md:flex-wrap">
                {imageList.map((image, index) => (
                    <ImageCard key={index} image={`/images/${image.img}`} imageTitle={image.title} text="" section="whiteImageBox" page="home" pin={image.pin} />
                )
                )}
            </div>
        </div>
    )
}

export default WhiteImageBox