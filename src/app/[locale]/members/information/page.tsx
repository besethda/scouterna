import { getPageHeadTitle } from "@/lib/utils"
import Breadcrumbs from "@/components/Breadcrumbs";
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

const Information = () => {

    return (
        <main className="bg-bg-blue">
            <Breadcrumbs />
            <div className="w-full flex flex-col items-center">
                <CardWithLogo image="/informationYellowBg.svg" sectionTitle="memberInfo" isH1 />
                <div className="flex flex-col gap-10">
                    <ScoutInfo />
                    <Union />
                    <InstagramContainer showText={true}/>
                </div>
            </div>
        </main>
    );
}

export default Information