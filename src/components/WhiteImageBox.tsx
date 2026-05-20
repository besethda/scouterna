import Image from "next/image"

interface WhiteImageBoxProps {
    icon : string;
    title : string;
    image : string;
} 

const WhiteImageBox = ({icon, title, image}:WhiteImageBoxProps) => {
    return (
        <div className="w-[358] h-[326]">
            <Image src={icon} alt={title} width={306} height={240} />
            <h1>{title}</h1>
            <div>
            </div>
        </div>
    )
}

export default WhiteImageBox