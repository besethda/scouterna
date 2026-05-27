import CardWithImage from "@/components/CardWithImage";
import WhiteGridContainer from "@/components/WhiteGridBox/WhiteGridContainer";
import HeroContainer from "@/components/HeroContainer/HeroContainer";
import { En} from "@/messages/en";
import { Sv } from "@/messages/sv";
import { use } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { getPageHeadTitle } from "@/lib/utils"
import SmallCard from "@/components/SmallCard";
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
            <HeroContainer bgImages={{mobile: "bg-[url('/images/IMG_9863.JPEG')]", desktop:"md:bg-[url('/images/IMG_6748.JPEG')]"}} messageSection={"joinHero"} position={"center"}/>
            <Breadcrumbs />
            <CardWithImage sectionTitle={"joinCard"} logo="/heart.png" image="/images/DSCF3017.jpg" />
            <WhiteGridContainer backgroundBlue={true} messageTitle="scoutLife"/>
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