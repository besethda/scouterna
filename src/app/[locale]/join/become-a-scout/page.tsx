import CardWithImage from "@/components/CardWithImage";
import { En} from "@/messages/en";
import { Sv } from "@/messages/sv";
import { use } from "react";
import { getPageHeadTitle } from "@/lib/utils"
import SmallCard from "@/components/SmallCard";
import useMessages from "@/hook/useMessages"
import JoinPage from "@/components/JoinPage";



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
            <SmallCard title={messages?.becomeScoutSmallCard?.title} subtitle={messages?.becomeScoutSmallCard?.subtitle} image="/images/DSCF3361.jpg" secondTitle={messages?.becomeScoutSmallCard?.secondTitle} secondText={messages?.becomeScoutSmallCard?.secondText} thirdtext={messages?.becomeScoutSmallCard?.thirdtext} button={messages?.becomeScoutSmallCard?.button} /> 
            <JoinPage 
                title={messages?.joinPage.title}
                text={messages?.joinPage.text}
                buttonText={messages?.joinPage.buttonText}
                width="box"
                btnWidth="full" 
            />
        </div>
    );
}

export default BecomeAScout