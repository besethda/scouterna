import { getPageHeadTitle } from "@/lib/utils"
import { En } from "@/messages/en";
import { Sv } from "@/messages/sv";
import Breadcrumbs from "@/components/Breadcrumbs";
import { use } from "react";
import Union from "./union";
/*import Scoutnet from "@/components/Scoutnet/scoutnet";*/
import ScoutInfo from "@/components/ScoutInfo/scoutInfo";
import InstagramContainer from "@/components/Instagram/InstagramContainer";
import CardWithLogo from "@/components/CardWithLogo";

const pageItem = "information"
const headDescription = "information"
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params
    return getPageHeadTitle(locale, pageItem, headDescription)
}

const Information = ({ params }: { params: Promise<{ locale: string }> }) => {

    const { locale } = use(params)
    const messages = locale === "en" ? En : Sv
    return (
        <main className="bg-bg-blue ">
            <div className="max-w-360 mx-auto w-full">
            <Breadcrumbs />
            <div className="w-full flex flex-col items-center ">
                <CardWithLogo image="/informationYellowBg.svg" sectionTitle="memberInfo" isH1 />
                <div className="flex flex-col gap-10">
                    <ScoutInfo />
                    <Union  locale="={locale}"/>
                    <InstagramContainer showText={true}/>
                </div>
            </div>
            </div>
        </main>
    );
}

export default Information