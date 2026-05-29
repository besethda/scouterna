import { getPageHeadTitle } from "@/lib/utils"
import CardWithImage from "@/components/CardWithImage";
import CTABtn from "@/components/CTA-button"
import { En} from "@/messages/en";
import { Sv } from "@/messages/sv";
import { use } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContentSection from "@/components/ContentSection";



const pageItem = "safety"
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params
    return getPageHeadTitle(locale, pageItem)
}


const Safety = ({params}:{params: Promise<{locale: string}>}) => {

    const {locale} = use(params)
    const messages = locale === "en" ? En : Sv


    return (
        <>
            <Breadcrumbs />
            <div className="flex flex-col">
                <div className="h-fit pb-13">
                    <CardWithImage sectionTitle="safetyCard" logo="/blue-lifejacket.svg" image="/images/DSCF3070.jpg" />
                    <div className="hidden lg:block lg:px-22 px-4 pt-0 md:w-full md:flex md:justify-center ">
                        <a href="/pdfs/HSS-Flytvastpolicy-2025-Beslutad.pdf" download="HSS-Flytvastpolicy-2025.pdf"><CTABtn text={messages?.safetyBtn?.btnDesktop} /></a>
                    </div>
                    <div className="pl-4 pb-13 md:hidden">
                        <a href="/pdfs/HSS-Flytvastpolicy-2025-Beslutad.pdf" download="HSS-Flytvastpolicy-2025.pdf"><CTABtn text={messages?.safetyBtn?.btnMobile} /></a>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="order-1 md:order-2">
                        <ContentSection sectionLayout={["h", "w", "p", "t", "s", "p", "s", "p", "s", "p"]} page="safeScout" background={"mobile"} padding="both"/>
                    </div>
                    <div className="order-2 md:order-1">
                        <ContentSection sectionLayout={["t", "p", "p", "t", "w", "l", "l", "l", "t", "p", "w", "l", "l", "l", "t", "w"]} background={"desktop"} page={"guidelines"} padding="top"/>
                    </div>
                    <div className="order-3">
                        <ContentSection sectionLayout={["h", "w", "p", "w"]} page="lockable" background="blue" display="desktop"/>
                        <ContentSection sectionLayout={["h", "w", "p"]} page="vests" display="mobile" padding="bottom" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Safety