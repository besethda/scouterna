import { getPageHeadTitle } from "@/lib/utils"
import CardWithImage from "@/components/CardWithImage";
import DivisionsBox from "@/components/DivisionsContainer/DivisionsBox";
import MapWrapper from "@/components/Map/MapWrapper";
import { En } from "@/messages/en";
import { Sv } from "@/messages/sv";
import { use } from "react";


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
            <CardWithImage sectionTitle="ruffen" logo="/blueHouse.png" image="/images/IMG_3957.JPEG" />
            <div className="flex flex-col p-4 gap-1 md:items-center">
                <DivisionsBox division={"sjohumlorna"} boxStyle={"info"} />
                <DivisionsBox division={"kaparna"} boxStyle={"info"} />
                <DivisionsBox division={"utmanare"} boxStyle={"info"} />
                <DivisionsBox division={"konvojen"} boxStyle={"info"} />
                <DivisionsBox division={"familjescouter"} boxStyle={"info"} />
            </div>
            <MapWrapper />
        </div>
    );
}

export default Ruffen