import { getPageHeadTitle } from "@/lib/utils"
import ContentSection from "@/components/ContentSection";
import BoatSection from "./boatsection";
import Breadcrumbs from "@/components/Breadcrumbs";
import { En } from "@/messages/en";
import { Sv } from "@/messages/sv";
import { use } from "react";
import CardAbout from "@/components/AddCardAbout";
import CardWithLogo from "@/components/CardWithLogo";


const pageItem = "history"
const headDescription = "history"
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params
    return getPageHeadTitle(locale, pageItem, headDescription)
}


const History = ({ params }: { params: Promise<{ locale: string }> }) => {

    const { locale } = use(params)
    const messages = locale === "en" ? En : Sv


    return (
        <main>
            <Breadcrumbs />
            <CardWithLogo  image="/heartYellowBg.svg" sectionTitle="historycard" isH1 /> 
            <div className="relative">
              <div className="flex justify-center bg-bg-blue pb-10">
                <div className="md:max-w-[89%] max-w-[90%] rounded-3xl w-full shadow-xl bg-bg-white overflow-hidden">
                  <ContentSection sectionLayout={["ts", "p", "p", "p", "p", "p"]} page="history" background={"white"} />
                </div> 
              </div>
              <img src="/Path.png" alt="line" className="absolute md:top-23 md:left-35 xl:left-40 top-17 left-7 w-[60%] md:w-auto line"/>
            </div>
            <ContentSection sectionLayout={["t"]} page={"boatSection"} padding={"top"} background={"blue"}/>
            <ContentSection sectionLayout={["p"]} page={"boatSection"} display={"desktop"} padding={"none"} background={"blue"}/>
            <BoatSection />
        </main>
    );
}

export default History