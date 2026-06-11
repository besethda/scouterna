import Image from "next/image"
import ContentSection from "@/components/ContentSection"
import { client } from "@/sanity/lib/client"
import { urlFor } from "@/sanity/lib/image" 
import downloadIcon from "../../../../../public/downlodIcon.svg"

interface unionProps {
    locale: string
}

const Union = async ({locale = "sv"}:unionProps) => {
    const data = await client.fetch(`*[_type=="union"][0] { "files": history_section[] {name, "fileUrl": file.asset-> url} } `)
    return (
        <div className="pt-3 py-8 bg-primary mx-4 overflow-hidden rounded-3xl lg:mx-auto lg:w-212 xl:w-316.25 2xl:w-386">
            <ContentSection
                sectionLayout={["t", "p"]}
                page="union"
                color={"white"}
                padding=""
            />
            <div className="pt-4 flex flex-col items-center gap-2 font-albert text-text-white md:gap-9">
                <div className="w-full px-4 lg:max-w-430 lg:px-10">
                    {data.files.map((item:any, index:number) => (
                        <div key={index} className="flex py-2 gap-2 w-full items-center ">
                            <Image src={downloadIcon} alt={item.name} width={44} height={44} />
                            <div className="">
                                <p className="font-bold font-h3 font-fraunces">{item.published}</p>
                                <a href={item.fileUrl} target="_blank" className="justify-center text-body font-albert font-normal" 
                                aria-label={`${locale === "sv" ? "Visa och ladda ner" : "View and download"} ${item.name} (PDF)`}
                                >
                                    {locale === "sv" ? "Visa och ladda ner " : "View and download "}
                                    {item.name}
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