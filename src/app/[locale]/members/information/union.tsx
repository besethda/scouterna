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
        url: ""
    },
    {
        name: "HSS kårstämma 2025-06",
        published: "2025-06",
        url: ""
    },
    {
        name: "HSS kårstämma 2024-10",
        published: "2024-10",
        url: ""
    }
]

const Union = () => {
    const messages = useMessages()

    return (
        <div className="pt-3 pb-10 bg-bg-blue md:px-18 md:py-18">
            <ContentSection
                sectionLayout={["t", "p"]}
                page="union"
                background={"blue"}
                padding="top"
            />
            <div className="pt-7 px-4 bg-bg-blue flex flex-col gap-2 font-albert text-text-black md:gap-9">
                {unionList.map((item, index) => (
                    <div key={index} className="flex gap-2 items-center ">
                        <Image src={download} alt={item.name} />
                        <Link href={item.url} className="justify-center underline tracking-[0.03em]">
                            {messages?.download}HSS {messages?.union?.t0.toLowerCase()} {item.published}
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Union