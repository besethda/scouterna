import { getPageHeadTitle, getSectionById } from "@/lib/utils"
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
import CardWithLogo from "@/components/CardWithLogo";
import MapWrapper from "@/components/Map/MapWrapper";

const pageItem = "myset"
const headDescription = "myset"
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params
    return getPageHeadTitle(locale, pageItem, headDescription)
}



const Myset = async ({ params }: { params: Promise<{ locale: string }> }) => {

    const { locale } = await params
    const messages = locale === "en" ? En : Sv;
    const data = await getSectionById('17520090-02e5-4b1c-b8e0-af8801314244', "cabin_images")

    return (
        <main>
            <Breadcrumbs />
            <div className="flex flex-col items-center">
                <CardWithLogo image="/cabinYellowBg.svg" sectionTitle="mysetCard" isH1 /> 
                <div className="px-4 lg:px-10 py-8  md:py-3 lg:py-6 flex flex-col items-center bg-white mx-4 rounded-3xl mb-10 lg:max-w-[848px] 2xl:max-w-[1440px]">
                    <div className="">
                        <ContentSection sectionLayout={["t"]} page="myset01" padding="" child={true} />
                        <p className="py-2 text-body md:text-body-desktop text-text-black font-albert">{messages?.myset01?.p0} 
                            <a href="mailto:myset.hss.scout@gmail.com" className="hover:underline pr-1">myset.hss.scout@gmail.com</a>
                            {messages?.myset01?.p1}
                        </p>
                        <ContentSection sectionLayout={["t", "p", "p"]} page="myset02" padding="" child={true} />
                        <div className="py-4">
                            <a href="https://web.cdn.scouterna.net/uploads/sites/322/2020/02/mysetplanlosning.pdf"
                            target="_blank"
                            >
                                <CTABtn text={messages?.mysetBtn?.text} />
                            </a>
                        </div>
                        <ContentSection sectionLayout={["t", "p"]} page="myset03"  padding="none" child={true} />
                    </div>
                </div>
                <MysetHistory />
                <div className="pb-10 md:pt-6 md:pb-16 lg:max-w-430 lg:px-22 px-4 w-full">
                    <ContentSection sectionLayout={["t", "p", "p"]} page={"mysetMap"} padding="top" child={true} />
                    <div className="">
                        <MapWrapper page="myset" />
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Myset

