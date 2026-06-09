import { getPageHeadTitle } from "@/lib/utils"
import Breadcrumbs from "@/components/Breadcrumbs";
import ContentSection from "@/components/ContentSection";
import { En} from "@/messages/en";
import { Sv } from "@/messages/sv";
import { use } from "react";
import CardAbout from "@/components/AddCardAbout";
import CardWithLogo from "@/components/CardWithLogo";

const pageItem = "gdpr"
const headDescription = "gdpr"
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params
    return getPageHeadTitle(locale, pageItem, headDescription)
}



const Gdpr = ({params}:{params: Promise<{locale: string}>}) => {
    const {locale} = use(params)
    const messages = locale === "en" ? En : Sv
    return (
        <main>
            <Breadcrumbs />
            <CardWithLogo image="/informationYellowBg.svg" sectionTitle="gdprcard" isH1/> 
            <div className="flex justify-center bg-bg-blue pb-10">
              <div className="md:max-w-[89%] max-w-[90%] rounded-3xl w-full shadow-xl bg-bg-white overflow-hidden">
                <ContentSection sectionLayout={["t", "p", "s", "l", "l", "l", "l", "l", "s", "l", "l", "l", "l", "l", "l", "l", "l", "l", "p"]} page={"gdpr"} background={"white"}/>
              </div>
            </div>
            <div className="bg-bg-blue flex justify-center pb-10">
              <div className="md:max-w-[89%] max-w-[90%] rounded-3xl w-full shadow-xl overflow-hidden bg-primary **:text-text-white">
                <ContentSection sectionLayout={["s", "p"]} page={"syfte"} background={"none"} />
              </div>
            </div>
            <ContentSection sectionLayout={["s", "p", "p", "p", "p", "p", "p"]} page={"ethics"} display={"mobile"}/>
        </main>
    );
}

export default Gdpr