import Image from "next/image"

interface WhiteImageBoxProps {
    icon : string;
    title : string;
    image : string;
} 

const WhiteImageBox = ({icon, title, image}:WhiteImageBoxProps) => {
    return (
        <div className="w-[358] h-[326] bg-primary text-white md:bg-white md:text-primary">
            <Image src={icon} alt={title} width={44} height={44} className="md:flex" />
            <h1>{title}</h1>
            <Image src={icon} alt={title} width={24} height={24}className="md:hidden" />
            <div>
                <Image src={image} alt={title} width={306} height={240} />
            </div>
        </div>
    )
}

export default WhiteImageBox