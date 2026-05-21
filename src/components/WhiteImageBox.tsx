import Image from "next/image"
import useMessages from "@/hook/useMessages"



const WhiteImageBox = () => {

    const iconList = [{icon: "ship"}, {icon:"heart"}, {icon: "compass"}]
    const imgList: Record<string, string> = {img1: "DSCF1948.jpg", img2:"IMG_1934.JPEG", img3: "IMG_8981.PNG"}
    const messages = useMessages()
    
    return (
        <div className="w-full items-center flex px-4 py-4 flex-col gap-[24] md:flex-row md:justify-center">
            {iconList.map((icon, index)=> {
                return (
                    <div key={index} className="w-full md:w-[30%] my-2 px-4 aspect-6/5 flex flex-col bg-primary text-white md:bg-white md:text-primary rounded-2xl">
                        <div className="flex py-4 leading-[0.8] md:leading-none md:pl-6 md:py-6">
                            <div  className="w-6 h-6 md:flex hidden relative">
                                <Image src={`/${icon.icon}Icon.png`} alt={`${icon}`} fill className="object-contain" />
                            </div>
                            <h1 className="text-h2 md:text-h3-desktop">{(messages?.whiteImageBox as Record<string, string>) [`title${index+1}`]}</h1>
                            <div className="flex md:hidden w-4.5 h-4.5 relative">
                                <Image src={`/${icon.icon}Icon.png`} alt={`a${icon}`} fill className="object-contain" />
                            </div>
                        </div>
                        <div className="w-30 aspect-6/5 px-[26] relative">
                            <Image src={`/images/${imgList[`img${index+1}`]}`} alt={`b${icon}`} fill className="object-cover rounded-2xl" />
                        </div>
                    </div>
                )}
            )}
        </div>

    )
}

export default WhiteImageBox