import { getPageHeadTitle } from "@/lib/utils"
import { getId } from "@/lib/utils";
import SanityFlex from "@/components/SanityFlex";
import BoatSection from "./boatsection";
import Breadcrumbs from "@/components/Breadcrumbs";
import { En } from "@/messages/en";
import { Sv } from "@/messages/sv";
import ContentSection from "@/components/ContentSection";
import CardWithLogo from "@/components/CardWithLogo";
import Image from "next/image";
import line from "../../../../../public/historia-line.svg"



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


    return (
        <main>
            <Breadcrumbs />
            <CardWithLogo image="/heartYellowBg.svg" sectionTitle="historycard" isH1 />
            <div className="w-full py-8 px-4 md:px-10 rounded-3xl bg-[#FFFFFF] gap-6 shadow-xl">
                <h2 className="w-fit pt-2  text-h2 md:text-h2-desktop text-primary font-fraunces font-bold">{locale === "sv" ? data?.history_section.title_se : data?.history_section.title_en}</h2>
                <div className="w-50 md:w-full">
                    <Image src={line} alt="line" />
                </div>
                <SanityFlex data={data?.history_layout.scout_life} locale={locale} />
            </div>
            <ContentSection sectionLayout={["t"]} page={"boatSection"} padding={"top"} background={"blue"} />
            <ContentSection sectionLayout={["p"]} page={"boatSection"} display={"desktop"} padding={"none"} background={"blue"} />
            <BoatSection />
        </main>
    );
}

export default History