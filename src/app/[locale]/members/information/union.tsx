import Image from "next/image"
import ContentSection from "@/components/ContentSection"
import download from "../../../../../public/download-icon.svg"
import { client } from "@/sanity/lib/client"
import { urlFor } from "@/sanity/lib/image"

const Union = async () => {
    const data = await client.fetch(`*[_type=="union"][0] { "files": history_section[] {name, "fileUrl": file.asset-> url} } `)
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
                    {data.files.map((item:any, index:number) => (
                        <div key={index} className="flex py-2 gap-2 w-full items-center ">
                            <Image src={download} alt={item.name} />
                            <a href={item.fileUrl} target="_blank" className="justify-center underline tracking-[0.03em]" aria-label={`"Ladda ner"} ${item.name} (PDF)`}>
                                {item.name}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Union