import CardWithImage from "@/components/CardWithImage";
import WhiteGridContainer from "@/components/WhiteGridBox/WhiteGridContainer";
import HeroContainer from "@/components/HeroContainer/HeroContainer";
import { En } from "@/messages/en";
import { Sv } from "@/messages/sv";
import { use } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { getPageHeadTitle } from "@/lib/utils"
import SmallCard from "@/components/SmallCard";
import JoinPage from "@/components/JoinPage";
import CTABtn from "@/components/CTA-button";
import InstagramContainer from "@/components/Instagram/InstagramContainer";
import { getSectionById } from "@/lib/utils";
import CardWithLogo from "@/components/CardWithLogo";

const pageItem = "become-a-scout"
const headDescription = "become-a-scout"
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params
    return getPageHeadTitle(locale, pageItem, headDescription)
}

const data = await getSectionById('17520090-02e5-4b1c-b8e0-af8801314244', "join_images")


const BecomeAScout = ({ params }: { params: Promise<{ locale: string }> }) => {
    const { locale } = use(params)
    const messages = locale === "en" ? En : Sv
    if (!messages) {
        return null
    }

    return (
        <main>
            <HeroContainer bgImages={{ mobile: data.join_images.join_hero_mobile.asset._ref, desktop: data.join_images.join_hero_desktop.asset._ref }} messageSection={"joinHero"} position={"center"} />
            <Breadcrumbs />
            <div className="flex flex-col items-center w-full ">
                <CardWithLogo image="/anchorYellowBg.svg" sectionTitle="joinCard"/> 
                <WhiteGridContainer backgroundBlue={true} messageTitle="scoutLife" />
                <div className="w-full h-0 md:h-8"></div>
                <SmallCard title={messages?.becomeScoutSmallCard?.title} subtitle={messages?.becomeScoutSmallCard?.subtitle} image={{image: data.join_images.card_image_2.asset._ref, alt: data.join_images.card_image.alt}} secondTitle={messages?.becomeScoutSmallCard?.secondTitle} secondText={messages?.becomeScoutSmallCard?.secondText} thirdtext={messages?.becomeScoutSmallCard?.thirdtext} button={messages?.becomeScoutSmallCard?.button} />
                <section className="flex flex-col gap-6 font-albert pt-6 px-4 pb-8 md:pb-14 lg:max-w-430 lg:px-22">
                    <div className="flex flex-col gap-4">
                        <h2 className="text-h2 font-fraunces font-bold text-primary md:text-h3-desktop">
                            {messages?.joinContent?.title}
                        </h2>
                        <p className="text-text-black text-body lg:max-w-[72%] md:text-body-desktop tracking-[3%]">
                            {messages?.joinContent?.text}
                        </p>
                    </div>
                    <a
                        href="/pdfs/Bilaga-20251012-HSS-Trygga-maten-policy-Beslutad.pdf"
                        target="_blank"
                    >
                        <CTABtn text={messages?.joinContent?.button} />
                    </a>
                    <p className="text-text-black text-body md:text-body-desktop lg:max-w-[72%] tracking-[3%]">
                        {messages?.joinContent?.text02}
                    </p>
                    <a
                        href="https://www.scouternasfolkhogskola.se/kurser-utbildningar/scoututbildningar/kurskatalog-ledarskapson/"
                        target="_blank"
                    >
                        <CTABtn text={messages?.joinContent?.button02} />
                    </a>
                    <div className="flex flex-col gap-6">
                        <h3 className="text-h2 font-fraunces font-bold text-[#00355F]  md:text-h3-desktop">
                            {messages?.joinContent?.title02}
                        </h3>
                        <p className="text-text-black pb-4 text-body lg:max-w-[72%] md:text-body-desktop tracking-[3%]">
                            {messages?.joinContent?.text03}
                        </p>
                    </div>
                </section>
                <JoinPage
                    title={messages?.joinPage.title}
                    text={messages?.joinPage.text}
                    buttonText={messages?.joinPage.buttonText}
                    width="box"
                    btnWidth="full"
                />
                <InstagramContainer />
            </div>
        </main>
    )
};

export default BecomeAScout