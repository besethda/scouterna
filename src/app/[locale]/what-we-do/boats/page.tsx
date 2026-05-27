import { getPageHeadTitle } from "@/lib/utils"
import CardWithoutImage from "@/components/CardWithoutImage";
import { En} from "@/messages/en";
import { Sv } from "@/messages/sv";
import { use } from "react";






const pageItem = "boats"
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params
    return getPageHeadTitle(locale, pageItem)
}


const Boats = ({params}:{params: Promise<{locale: string}>}) => {

    const {locale} = use(params)
    const messages = locale === "en" ? En : Sv
    return (
        <div>
            <CardWithoutImage headline={messages?.boatsCard?.headline} logo="/blueBoat.svg" title={messages?.boatsCard?.title} text={messages?.boatsCard?.text} MDlogo="/blueBoatYellowBg.svg" />
        </div>
    );
}

export default Boats