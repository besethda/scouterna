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
            <ContentSection sectionLayout={["t", "p", "p", "p", "p", "p"]} page="history" background={"blue"} />
            <ContentSection sectionLayout={["t"]} page={"boatSection"} padding={"top"}/>
            <ContentSection sectionLayout={["p"]} page={"boatSection"} display={"desktop"} padding={"none"}/>
            <BoatSection />
        </main>
    );
}

export default History