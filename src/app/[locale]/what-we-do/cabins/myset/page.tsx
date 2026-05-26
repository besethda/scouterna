import CardWithoutImage from "@/components/CardWithoutImage";
import { En} from "@/messages/en";
import { Sv } from "@/messages/sv";
import { use } from "react";
import { getPageHeadTitle } from "@/lib/utils"






const pageItem = "myset"
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params
    return getPageHeadTitle(locale, pageItem)
}



const Myset = ({params}:{params: Promise<{locale: string}>}) => {
    
    const {locale} = use(params)
    const messages = locale === "en" ? En : Sv
    return (
        <div>
            <CardWithoutImage headline={messages?.mysetCard?.headline} logo="/blueHouse.png" title={messages?.mysetCard?.title} text={messages?.mysetCard?.text} MDlogo="/blueHouseYellowBg.svg" />
        </div>
    );
}

export default Myset