import Image from "next/image"
import useMessages from "@/hook/useMessages"



const WhiteImageBox = () => {

    const iconList = [{icon: "ship"}, {icon:"heart"}, {icon: "compass"}]
    const imgList: Record<string, string> = {img1: "DSCF1948.jpg", img2:"IMG_1934.JPEG", img3: "IMG_8981.PNG"}
    const messages = useMessages()
    
    return (
        <div className="w-full items-center flex px-4 py-4 flex-col gap-[24] md:flex-row md:justify-center md:bg-">
            {iconList.map((icon, index)=> {
                return (
                    <div key={index} className="w-full md:w-[30%] my-2 px-4 aspect-6/5 flex flex-col items-center bg-primary text-white md:bg-white md:text-primary rounded-2xl">
                        <div className="flex w-full py-4 leading-[0.8] md:leading-none md:pl-6 md:py-6">
                            <div  className="w-6 h-6 md:flex hidden relative">
                                <Image src={`/${icon.icon}Icon.png`} alt={`${icon}`} fill className="object-contain" />
                            </div>
                            <h1 className="text-h2 pr-3 md:pl-3 whitespace-nowrap md:text-h3-desktop">{(messages?.whiteImageBox as Record<string, string>) [`title${index+1}`]}</h1>
                            <div className="flex md:hidden w-4.5 h-4.5 relative">
                                <Image src={`/${icon.icon}Icon.png`} alt={`a${icon}`} fill className="object-contain" />
                            </div>
                        </div>
                        <div className="w-full flex items-center justify-center overflow-hidden">
                            <div className="w-78 h-58 md:w-100 md:h-82  px-[26] relative">
                                <Image src={`/images/${imgList[`img${index+1}`]}`} alt={`b${icon}`} fill className="object-cover object-center- rounded-2xl" />
                            </div>
                        </div>
                    </div>
                )}
            )}
        </div>

    )
}

export default WhiteImageBox