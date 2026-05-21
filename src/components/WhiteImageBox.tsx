import Image from "next/image"

interface WhiteImageBoxProps {
    icon : any;
    title : string;
    image : any;
    desktopIcon : any;
} 

const WhiteImageBox = ({icon, title, image,desktopIcon}:WhiteImageBoxProps) => {
    return (
        <div className="w-[358] h-[328]  bg-primary text-white md:bg-white md:text-primary rounded-2xl md:w-[337] md:h-[368]">
            <div className="flex pl-4 py-4 gap-2.5 leading-[0.8] md:leading-none md:pl-6 md:py-6 md:gap-4">
                <div  className="w-6 h-6 md:flex hidden relative">
                    <Image src={desktopIcon} alt={title || "desktop icon"} fill className="object-contain" />
                </div>
                <h1 className="text-h2 md:text-h3-desktop">{title}</h1>
                <div className="flex md:hidden w-4.5 h-4.5 relative">
                    <Image src={icon} alt={title || "mobile icon"} fill className="object-contain" />
                </div>
            </div>
            <div className="w-full px-[26]">
                <Image src={image} alt={title} width={306} height={240} className="object-cover w-full h-[240] rounded-2xl md:h-[260]" />
            </div>
        </div>
    )
}

export default WhiteImageBox