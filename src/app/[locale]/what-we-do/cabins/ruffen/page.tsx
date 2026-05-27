import CardWithImage from "@/components/CardWithImage";
import MapWrapper from "@/components/Map/MapWrapper";
import { En} from "@/messages/en";
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

const Ruffen = ({params}:{params: Promise<{locale: string}>}) => {

    const {locale} = use(params)
    const messages = locale === "en" ? En : Sv
   
    return (
        <div>
            <Breadcrumbs />
            <CardWithImage sectionTitle="ruffen" logo="/blueHouse.png" image="/images/IMG_3957.JPEG" />
            <ContentSection sectionLayout={["t", "p", "p"]} page={"map"}/>
            <MapWrapper />
        </div>
    );
}

export default Ruffen
