import Image from "next/image"

interface WhiteImageBoxProps {
    icon : any;
    title : string;
    image : any;
} 

// md:bg-white md:text-primary

const WhiteImageBox = ({icon, title, image}:WhiteImageBoxProps) => {
    return (
        <div className="w-[358] h-[328]  bg-primary text-white rounded-2xl md:w-[337] md:h-[368]">
            <div className="flex pl-4 py-4 gap-2.5 leading-[1.2] md:leading-none md:pl-6 md:py-6 md:gap-4">
                <div  className="w-6 h-6 md:flex hidden">
                    <Image src={icon} alt={title || "icon"} className="object-contain" />
                </div>
                <h1 className="text-h2">{title}</h1>
                <div className="flex md:hidden w-4.5 h-4.5">
                    <Image src={icon} alt={title} className="object-contain" />
                </div>
            </div>
            <div className="w-full px-[26]">
                <Image src={image} alt={title} width={306} height={240} className="object-cover w-full h-[240] rounded-2xl md:h-[260]" />
            </div>
        </div>
    )
}

export default WhiteImageBox