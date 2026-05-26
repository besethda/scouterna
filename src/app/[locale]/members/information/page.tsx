import { En} from "@/messages/en";
import { Sv } from "@/messages/sv";
import { use } from "react";
import CardWithImage from "@/components/CardWithImage";
import { getPageHeadTitle } from "@/lib/utils"






const pageItem = "information"
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params
    return getPageHeadTitle(locale, pageItem)
}



const Information = ({params}:{params: Promise<{locale: string}>}) => {

    const {locale} = use(params)
    const messages = locale === "en" ? En : Sv
    return (
        <div>
            <CardWithImage sectionTitle="memberInfo" logo="/dark-blue-hand.svg" image="/images/Boatsinarow.JPG"/>
        </div>
    );
}

export default Information