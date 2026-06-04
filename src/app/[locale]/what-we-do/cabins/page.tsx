import { getPageHeadTitle } from "@/lib/utils"
import CardWithoutImage from "@/components/CardWithoutImage";
import { En} from "@/messages/en";
import { Sv } from "@/messages/sv";
import { use } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import CabinsSection from "@/components/CabinsSection";

const pageItem = "cabins"
const headDescription = "cabins"
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params
    return getPageHeadTitle(locale, pageItem, headDescription)
}


const Cabins = ({params}:{params: Promise<{locale: string}>}) => {
    const {locale} = use(params)
    const messages = locale === "en" ? En : Sv

    return (
        <main>
            <Breadcrumbs />
            <div className="flex flex-col items-center">
                <CardWithoutImage headline={messages?.cabinsCard?.headline} logo="/blueHouse.png" title={messages?.cabinsCard?.title} text={messages?.cabinsCard?.text} MDlogo="/blueHouseYellowBg.svg" />  
            </div>
            <CabinsSection />
        </main>
    );
}

export default Cabins