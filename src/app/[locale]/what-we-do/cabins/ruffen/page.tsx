import CardWithImage from "@/components/CardWithImage";
import DivisionsBox from "@/components/DivisionsContainer/DivisionsBox";
import MapWrapper from "@/components/Map/MapWrapper";
import { En } from "@/messages/en";
import { Sv } from "@/messages/sv";
import { use } from "react";
import ContentSection from "@/components/ContentSection";
import { getPageHeadTitle } from "@/lib/utils"
import Breadcrumbs from "@/components/Breadcrumbs";



const pageItem = "ruffen"
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params
    return getPageHeadTitle(locale, pageItem)
}

const Ruffen = ({ params }: { params: Promise<{ locale: string }> }) => {

    const { locale } = use(params)
    const messages = locale === "en" ? En : Sv

    return (
        <div>
            <Breadcrumbs />
            <CardWithImage sectionTitle="ruffen" logo="/blueHouse.png" image="/images/IMG_3957.JPEG" />
            <div className="md:bg-bg-blue py-7">
                <ContentSection sectionLayout={["t", "p"]} page={"ruffenDivisions"} padding="none" background="desktop"/>
                <div className="flex flex-col p-4 gap-1 md:px-25 md:grid md:grid-cols-2 md:gap-2 md:items-stretch [&>*]:w-full">
                    <DivisionsBox division={"sjohumlorna"} boxStyle={"info"} />
                    <DivisionsBox division={"kaparna"} boxStyle={"info"} />
                    <DivisionsBox division={"utmanare"} boxStyle={"info"} />
                    <DivisionsBox division={"konvojen"} boxStyle={"info"} />
                    <DivisionsBox division={"familjescouter"} boxStyle={"info"} />
                </div>
            </div>
            <div className="pb-10 md:px-21 md:pt-18 md:pb-25">
                <ContentSection sectionLayout={["t", "p", "p"]} page={"map"} padding="top" />
                <div className="p-3 md:px-4">
                    <MapWrapper />
                </div>
            </div>
        </div>
    );
}

export default Ruffen
