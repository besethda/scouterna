import CardWithImage from "@/components/CardWithImage";
import { En} from "@/messages/en";
import { Sv } from "@/messages/sv";
import { use } from "react";
import { getPageHeadTitle } from "@/lib/utils"



const pageItem = "become-a-scout"
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params
    return getPageHeadTitle(locale, pageItem)
}




const BecomeAScout = ({params}:{params: Promise<{locale: string}>}) => {
    const {locale} = use(params)
    const messages = locale === "en" ? En : Sv
    if (!messages) {
        return null
    }

    return (
        <div>
            <CardWithImage sectionTitle={"joinCard"} logo="/heart.png" image="/images/DSCF3017.jpg" />
        </div>
    );
}

export default BecomeAScout