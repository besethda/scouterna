import Image from "next/image"
import ContentSection from "@/components/ContentSection"
import { client } from "@/sanity/lib/client"
import downloadIcon from "../../../../../public/downlodIcon.svg"
import { SanityFileAssetReference } from "../../../../../sanity.types"

type UnionType = {
  files: Array<{
    fileUrl: string,
    name: string;
  }>;
};

const Union = async ({locale = "sv"}:{locale:string}) => {
    const data = await client.fetch(`*[_type=="union"][0] { "files": history_section[] {name, "fileUrl": file.asset-> url} } `) as UnionType

    return (
        <div className="pt-3 py-8 bg-primary mx-4 overflow-hidden rounded-3xl lg:mx-auto lg:max-w-(--max-w-laptop) xl:mx-auto 2xl:max-w-(--max-w-desktop) shadow-xl">
            <ContentSection
                sectionLayout={["t", "p"]}
                page="union"
                color={"white"}
                padding=""
            /> 
            <div className="pt-4 flex flex-col items-center gap-2 font-albert text-text-white md:gap-9">
                <div className="w-full px-4 lg:max-w-430 lg:px-10">
                    {data.files.map((item, index:number) => (
                        <a key={index} href={item.fileUrl} target="_blank"className="flex py-2 gap-2 w-fit items-center ">
                            <Image src={downloadIcon} alt={item.name} width={44} height={44} />
                            <div className="">
                                <p className="font-bold font-h3 font-fraunces">{item.name}</p>
                                <p className="justify-center text-body font-albert font-normal" 
                                aria-label={`${locale === "sv" ? "Visa och ladda ner" : "View and download"} ${item.name} (PDF)`}
                                >
                                    {locale === "sv" ? "Visa och ladda ner " : "View and download "}
                                    {item.name}
                                </p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Union