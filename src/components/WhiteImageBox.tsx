import Image from "next/image"

interface WhiteImageBoxProps {
    icon : any;
    title : string;
    image : any;
} 

const WhiteImageBox = ({icon, title, image}:WhiteImageBoxProps) => {
    return (
        <div className="w-[358] h-[328]  bg-primary text-white md:bg-white md:text-primary rounded-2xl">
            <div className="flex pl-4 py-4 gap-2.5 leading-[1.2]">
                <Image src={icon} alt={title || "icon"} width={18} height={18}  className="md:flex hidden" />
                <h1 className="text-h2">{title}</h1>
                <div className="flex md:hidden w-4.5 h-4.5 ">
                    <Image src={icon} alt={title} object-contain />
                </div>
            </div>
            <div className="w-full px-[26]">
                <Image src={image} alt={title} width={306} height={240} className="object-cover w-full h-[240] rounded-2xl " />
            </div>
        </div>
    )
}

export default WhiteImageBox