import { getPageHeadTitle } from "@/lib/utils"
import CardWithImage from "@/components/CardWithImage";
import CTABtn from "@/components/CTA-button"
import { En} from "@/messages/en";
import { Sv } from "@/messages/sv";
import { use } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContentSection from "@/components/ContentSection";
import CardWithLogo from "@/components/CardWithLogo";



const pageItem = "safety"
const headDescription = "safety"
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params
    return getPageHeadTitle(locale, pageItem, headDescription)
}


const Safety = ({params}:{params: Promise<{locale: string}>}) => {

    const {locale} = use(params)
    const messages = locale === "en" ? En : Sv


    return (
        <main>
            <Breadcrumbs />
            <div className="flex flex-col items-center">
                <section className="h-fit pb-13">
                    <CardWithLogo image="/informationYellowBg.svg" sectionTitle="safetyCard" isH1 /> 
                </section>
                <div className="flex flex-col w-full px-4 gap-6 lg:max-w-430 lg:px-22 md:pt-10 md:gap-20 md:pb-16 pb-6" >
                    <section className="order-2 bg-white rounded-2xl"> 
                        <ContentSection sectionLayout={["h", "w", "p", "t", "s", "p", "s", "p", "s", "p"]} page="safeScout" padding="both" />
                    </section>
                    <section className="order-1 bg-primary rounded-2xl">
                        <ContentSection sectionLayout={["h", "p", "p", "t", "p", "w", "l", "l", "l", "t", "p", "w", "l", "l", "l", "t", ]} page={"guidelines"} padding="top" color="white"/>
                    </section>
                    <section className="order-3 bg-primary rounded-2xl">
                        <ContentSection sectionLayout={["h", "w", "p", "w"]} page="lockable" display="desktop" color="white"  />
                        <ContentSection sectionLayout={["h", "w", "p", ]} page="vests" display="mobile" padding="bottom" color="white" />
                    </section>
                </div>
            </div>
        </main>
    );
}

export default Safety