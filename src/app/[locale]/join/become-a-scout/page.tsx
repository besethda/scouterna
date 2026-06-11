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
import Line from "@/components/line"
import Scoutlife from "@/components/Scoutlife";
import boat from '../../../../../public/blueBoat1.svg'
import heart from '../../../../../public/blueHeart1.svg'
import Image from "next/image";

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
            <div className="max-w-360 mx-auto">
                <Breadcrumbs />
                <section className="flex flex-col items-center w-full ">
                    <CardWithLogo image="/anchorYellowBg.svg" sectionTitle="joinCard" />
                    <Scoutlife />
                    <div className=" bg-white mx-4 my-8 py-4 lg:mx-22 lg:my-20 lg:pt-2 rounded-3xl shadow-xl">
                        <SmallCard title={messages?.becomeScoutSmallCard?.title} subtitle={messages?.becomeScoutSmallCard?.subtitle} secondTitle={messages?.becomeScoutSmallCard?.secondTitle} secondText={messages?.becomeScoutSmallCard?.secondText} thirdtext={messages?.becomeScoutSmallCard?.thirdtext} button={messages?.becomeScoutSmallCard?.button} />
                        <Line hasPadding />
                        <section className="flex flex-col gap-6 font-albert px-4 pb-8 lg:max-w-430 lg:px-10">
                            <div className="relative **:flex flex-col gap-4 ">
                                <h2 className="text-h2 font-fraunces font-bold text-primary md:text-h3-desktop">
                                    {messages?.joinContent?.title}
                                </h2>
                                <p className="text-text-black text-body lg:max-w-[72%] md:text-body-desktop tracking-[3%]">
                                    {messages?.joinContent?.text}
                                </p>
                                <Image src={boat} alt="birds" height={150} width={150} className="hidden lg:block lg:absolute lg:-top-50 lg:right-10 opacity-90 lg:rotate-12" />
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
                            <Line />
                            <div className="relative flex flex-col gap-6">
                                <h3 className="font-fraunces text-h2 font-bold text-[#00355F]  md:text-h3-desktop">
                                    {messages?.joinContent?.title02}
                                </h3>
                                <p className="text-text-black pb-4 text-body lg:max-w-[72%] md:text-body-desktop tracking-[3%]">
                                    {messages?.joinContent?.text03}
                                </p>
                                <Image src={heart} alt="birds" height={150} width={150} className="hidden lg:block lg:absolute lg:top-5 lg:right-10 opacity-80 lg:rotate-12" />
                            </div>
                        </section>
                    </div>
                    <div className=" mx-4 my-8 py-4 lg:mx-22 lg:my-20 lg:pt-2">
                        <JoinPage
                            head={messages?.joinPage.head}
                            title={messages?.joinPage.title}
                            text={messages?.joinPage.text}
                            buttonText={messages?.joinPage.buttonText}
                            section="join"
                            width="box"
                            btnWidth="full"
                        />
                    </div>
                    <InstagramContainer />
                </section>
            </div>
        </main>
    )
};

export default BecomeAScout