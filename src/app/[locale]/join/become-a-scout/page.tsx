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
import CTABtn from "@/components/CTA-button";

const pageItem = "become-a-scout"
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params
    return getPageHeadTitle(locale, pageItem)
}


const BecomeAScout = ({ params }: { params: Promise<{ locale: string }> }) => {
    const { locale } = use(params)
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
            <div className="w-full h-0 md:h-8"></div>
            <SmallCard title={messages?.becomeScoutSmallCard?.title} subtitle={messages?.becomeScoutSmallCard?.subtitle} image="/images/DSCF3361.jpg" secondTitle={messages?.becomeScoutSmallCard?.secondTitle} secondText={messages?.becomeScoutSmallCard?.secondText} thirdtext={messages?.becomeScoutSmallCard?.thirdtext} button={messages?.becomeScoutSmallCard?.button} />
            <div className="flex flex-col gap-6 font-albert pt-6 px-4 md:px-29">
                <div className="flex flex-col gap-4">
                    <p className="text-h2 font-albert font-medium text-primary md:text-h3-desktop">
                        {messages?.joinContent?.title}
                    </p>
                    <p className="text-text-black text-body md:text-body-desktop tracking-[3%]">
                        {messages?.joinContent?.text}
                    </p>
                </div>
                <CTABtn text={messages?.joinContent?.button} />
                <p className="text-text-black text-body md:text-body-desktop tracking-[3%]">
                    {messages?.joinContent?.text02}
                </p>
                <CTABtn text={messages?.joinContent?.button02} />
                <div className="flex flex-col gap-6">
                    <p className="text-h3 font-medium text-[#00355F]  md:text-h3-desktop">
                        {messages?.joinContent?.title02}
                    </p>
                    <p className="text-text-black pb-4 text-body md:text-body-desktop tracking-[3%]">
                        {messages?.joinContent?.text03}
                    </p>
                </div>
            </div>
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