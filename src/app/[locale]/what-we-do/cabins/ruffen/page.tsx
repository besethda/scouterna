import CardWithImage from "@/components/CardWithImage";
import DivisionsBox from "@/components/DivisionsContainer/DivisionsBox";
import MapWrapper from "@/components/Map/MapWrapper";
import { En } from "@/messages/en";
import { Sv } from "@/messages/sv";
import { use } from "react";
import ContentSection from "@/components/ContentSection";
import { getPageHeadTitle } from "@/lib/utils"
import Breadcrumbs from "@/components/Breadcrumbs";
import CardWithLogo from "@/components/CardWithLogo";



const pageItem = "ruffen"
const headDescription = "ruffen"
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params
    return getPageHeadTitle(locale, pageItem, headDescription)
}

const Ruffen = ({ params }: { params: Promise<{ locale: string }> }) => {

    const { locale } = use(params)
    const messages = locale === "en" ? En : Sv

    return (
        <main>
            <Breadcrumbs />
            <div className="flex flex-col items-center w-full">
                <CardWithLogo image="/cabinYellowBg.svg" sectionTitle="ruffen" isH1/>
                <section className="md:bg-bg-blue py-7 flex w-full flex-col items-center">
                    <ContentSection sectionLayout={["t", "p"]} page={"ruffenDivisions"} padding="none" background="desktop" />
                    <div className="flex flex-col p-4 gap-1 md:px-25 md:grid md:grid-cols-2 w-full lg:max-w-430 lg:px-22 md:gap-2 [&>*]:w-full">
                        <DivisionsBox division={"spararscouter"} boxStyle={"info"} />
                        <DivisionsBox division={"upptackascouter"} boxStyle={"info"} />
                        <DivisionsBox division={"utmanare"} boxStyle={"info"} />
                        <DivisionsBox division={"aventyrarscouter"} boxStyle={"info"} />
                        <DivisionsBox division={"familjescouter"} boxStyle={"info"} />
                    </div>
                </section>
                <section className="pb-8 md:pt-8 md:pb-20 px-4 lg:max-w-430 lg:px-22 w-full">
                    <ContentSection sectionLayout={["t", "p", "p"]} page={"map"} padding="top" child={true} />
                    <div className="">
                        <MapWrapper page="ruffen" />
                    </div>
                </section>
            </div>

        </main>
    );
}

export default Ruffen
