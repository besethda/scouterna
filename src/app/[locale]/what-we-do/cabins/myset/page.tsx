import { getPageHeadTitle } from "@/lib/utils"
import CardWithoutImage from "@/components/CardWithoutImage";
import ContentSection from "@/components/ContentSection";
import CTABtn from "@/components/CTA-button";
import ImageContainer from "./ImageContainer";
import Link from "next/link";
import { En } from "@/messages/en";
import { Sv } from "@/messages/sv";
import { use } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import MysetHistory from "@/components/MysetHistory";


const pageItem = "myset"
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params
    return getPageHeadTitle(locale, pageItem)
}



const Myset = ({ params }: { params: Promise<{ locale: string }> }) => {

    const { locale } = use(params)
    const messages = locale === "en" ? En : Sv

    return (
        <div>
            <Breadcrumbs />
            <div className="flex flex-col items-center">
                <CardWithoutImage
                    headline={messages?.mysetCard?.headline}
                    logo="/blueHouse.png"
                    title={messages?.mysetCard?.title}
                    text={messages?.mysetCard?.text}
                    MDlogo="/blueHouseYellowBg.svg"
                />
                <div className="px-4 md:py-3 w-full flex flex-col items-center bg-bg-blue ">
                    <div className="lg:max-w-430 lg:px-22 w-full">
                        <ContentSection sectionLayout={["t", "p"]} page="myset01" background="blue" padding="top" child={true} />
                        <div className="bg-bg-blue pt-2">
                            <ImageContainer />
                        </div>
                        <ContentSection sectionLayout={["t", "p", "p"]} page="myset02" background="blue" padding="top" child={true} />
                        <div className="bg-bg-blue py-4">
                            <a href="https://web.cdn.scouterna.net/uploads/sites/322/2020/02/mysetplanlosning.pdf">
                                <CTABtn text={messages?.mysetBtn?.text} />
                            </a>
                        </div>
                        <ContentSection sectionLayout={["t", "p"]} page="myset03" background="blue" padding="bottom" child={true} />
                    </div>
                </div>                          
                <MysetHistory />
            </div>
        </div>
    );
}

export default Myset