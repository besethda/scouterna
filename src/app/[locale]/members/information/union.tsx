"use client"
import Link from "next/link"
import Image from "next/image"
import useMessages from "@/hook/useMessages"
import ContentSection from "@/components/ContentSection"
import ideadIcon from "../../../../../public/ideaIcon.svg"
import loveIcon from "../../../../../public/loveIcon.png"
import groupIcon from "../../../../../public/groupIcon.png"


const unionList = [
    {
        name: "HSS kårstämma 2025-10",
        published: "2025-10",
        url: "/pdfs/HSS_kårstämma_2025-10.pdf",
        icon: ideadIcon
        
    },
    {
        name: "HSS kårstämma 2025-06",
        published: "2025-06",
        url: "/pdfs/HSS_kårstämma_2025-06.pdf",
        icon: loveIcon
    },
    {
        name: "HSS kårstämma 2024-10",
        published: "2024-10",
        url: "/pdfs/HSS_kårstämma_2024-10.pdf",
        icon: groupIcon
    }
]

const Union = () => {
    const messages = useMessages()

    return (
        <div className="pt-3 pb-10 mx-auto bg-primary md:py-18 mx-4 rounded-3xl lg:w-[848px] xl:w-[1265px] 2xl:w-[1544px]">
            <ContentSection
                sectionLayout={["t", "p"]}
                page="union"
                background={"blue"}
                padding="top"
            />
            <div className="pt-7 flex flex-col items-center gap-2 font-albert text-text-white md:gap-9">
                <div className="w-full px-4 lg:max-w-430 lg:px-22">
                    {unionList.map((item, index) => (
                        <div key={index} className="flex py-2 gap-2 w-full items-center ">
                            <Image src={item.icon} alt={item.name} width={44} height={44} />
                            <div className="">
                                <p className="font-bold font-h3 font-fraunces">{item.published}</p>
                                <a href={item.url} target="_blank" className="justify-center text-body font-albert font-normal " aria-label={`${messages?.download || "Ladda ner"} ${item.name} (PDF)`}>
                                {messages?.download}HSS {messages?.union?.t0.toLowerCase()} 
                            </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Union