import CardWithImage from "@/components/CardWithImage";
import { En } from "@/messages/en";
import { Sv } from "@/messages/sv";
import { use } from "react";
import { getPageHeadTitle } from "@/lib/utils"
import SmallCard from "@/components/SmallCard";
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
            <CardWithImage sectionTitle={"joinCard"} logo="/heart.png" image="/images/DSCF3017.jpg" />
            <SmallCard title={messages?.becomeScoutSmallCard?.title} subtitle={messages?.becomeScoutSmallCard?.subtitle} image="/images/DSCF3361.jpg" secondTitle={messages?.becomeScoutSmallCard?.secondTitle} secondText={messages?.becomeScoutSmallCard?.secondText} thirdtext={messages?.becomeScoutSmallCard?.thirdtext} button={messages?.becomeScoutSmallCard?.button} />
            <div className="flex flex-col gap-6 font-albert pt-6 px-4 md:px-29">
                <div className="flex flex-col gap-4">
                    <p className="text-[18px] font-medium text-[#00355F] md:text-h3-desktop">
                        {messages?.joinContent?.title}
                    </p>
                    <p className="text-text-black md:text-[18px] tracking-[3%]">
                        {messages?.joinContent?.text}
                    </p>

                </div>
                <CTABtn text={messages?.joinContent?.button} />
                <p className="text-text-black md:text-[18px] tracking-[3%]">
                    {messages?.joinContent?.text02}
                </p>
                <CTABtn text={messages?.joinContent?.button02} />
                <div className="flex flex-col gap-6">
                    <p className="text-[18px] font-medium text-[#00355F]  md:text-h3-desktop">
                        {messages?.joinContent?.title02}
                    </p>
                    <p className="text-text-black pb-4 md:text-[18px] tracking-[3%]">
                        {messages?.joinContent?.text03}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default BecomeAScout