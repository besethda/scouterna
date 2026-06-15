import { getPageHeadTitle } from "@/lib/utils"
import Breadcrumbs from "@/components/Breadcrumbs";
import { use } from "react";
import Union from "./union";
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
    const {locale} = use(params)
    return (
        <main className="bg-bg-blue w-full mx-auto lg:max-w-[var(--max-w-laptop)] 2xl:max-w-[var(--max-w-desktop)]">
            <Breadcrumbs />
            <div className="w-full flex flex-col items-center ">
                <CardWithLogo image="/informationYellowBg.svg" sectionTitle="memberInfo" isH1 />
                <div className="flex flex-col gap-10">
                    <ScoutInfo />
                    <Union  locale={locale}/>
                    <InstagramContainer showText={true}/>
                </div>
            </div>
        </main>
    );
}

export default Information