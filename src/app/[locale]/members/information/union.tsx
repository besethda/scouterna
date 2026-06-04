"use client"
import Link from "next/link"
import Image from "next/image"
import useMessages from "@/hook/useMessages"
import ContentSection from "@/components/ContentSection"
import download from "../../../../../public/download-icon.svg"

const unionList = [
    {
        name: "HSS kårstämma 2025-10",
        published: "2025-10",
        url: "/pdfs/HSS_kårstämma_2025-10.pdf"
    },
    {
        name: "HSS kårstämma 2025-06",
        published: "2025-06",
        url: "/pdfs/HSS_kårstämma_2025-06.pdf"
    },
    {
        name: "HSS kårstämma 2024-10",
        published: "2024-10",
        url: "/pdfs/HSS_kårstämma_2024-10.pdf"
    }
]

const Union = () => {
    const messages = useMessages()

    return (
        <div className="pt-3 pb-10 w-full bg-bg-blue md:py-18">
            <ContentSection
                sectionLayout={["t", "p"]}
                page="union"
                background={"blue"}
                padding="top"
            />
            <div className="pt-7 bg-bg-blue flex flex-col items-center gap-2 font-albert text-text-black md:gap-9">
                <div className="w-full px-4 lg:max-w-430 lg:px-22">
                    {unionList.map((item, index) => (
                        <div key={index} className="flex py-2 gap-2 w-full items-center ">
                            <Image src={download} alt={item.name} />
                            <a href={item.url} target="_blank" className="justify-center underline tracking-[0.03em]" aria-label={`${messages?.download || "Ladda ner"} ${item.name} (PDF)`}>
                                {messages?.download}HSS {messages?.union?.t0.toLowerCase()} {item.published}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Union