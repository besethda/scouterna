import { getPageHeadTitle } from "@/lib/utils"
import { getId } from "@/lib/utils";
import { PortableText } from "next-sanity";
import BoatSection from "./boatsection";
import Breadcrumbs from "@/components/Breadcrumbs";
import { En } from "@/messages/en";
import { Sv } from "@/messages/sv";
import { use } from "react";
import CardAbout from "@/components/AddCardAbout";


const pageItem = "history"
const headDescription = "history"
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params
    return getPageHeadTitle(locale, pageItem, headDescription)
}


const History = async ({ params }: { params: Promise<{ locale: string }> }) => {

    const { locale } = await params
    const messages = locale === "en" ? En : Sv
    const data = await getId("c57001b2-94f1-4bf1-ae81-1fcc684e0eee")
    console.log(data)


    return (
        <main>
            <Breadcrumbs />
            <div className="w-full flex flex-col items-center">
                {/* <CardAbout page="historycard" card="historymobilecard" logo="/heart.png" image="/images/boat2.jpg" MDlogo="/bg-heart.svg" /> */}
            </div>
            <div className="">
                <h2 className="w-fit py-2 text-h2 md:text-h2-desktop text-primary font-albert font-medium">{locale === "se" ? data?.history_section.title_se : data?.history_section.title_en}</h2>
                <div className="w-fit py-2 text-body md:text-body-desktop text-text-black font-albert lg:max-w-[63%]">
                <PortableText components={{block: {normal: ({children})=> <p className="mb-3">{children}</p>}}} 
                value={locale === "en" ? data?.history_layout.scout_life[0].text_en_array as any : data?.history_layout.scout_life[0].text_sv_array }/>
                </div>
            </div>
            <BoatSection />
        </main>
    );
}

export default History