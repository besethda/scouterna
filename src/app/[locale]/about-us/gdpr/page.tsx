import { getPageHeadTitle } from "@/lib/utils"
import Breadcrumbs from "@/components/Breadcrumbs";
import { getId } from "@/lib/utils";
import { En} from "@/messages/en";
import { Sv } from "@/messages/sv";
import SanityFlex from "@/components/SanityFlex";
import CardWithLogo from "@/components/CardWithLogo";
import ContentSection from "@/components/ContentSection";

const pageItem = "gdpr"
const headDescription = "gdpr"
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params
    return getPageHeadTitle(locale, pageItem, headDescription)
}

const Gdpr = async ({params}:{params: Promise<{locale: string}>}) => {
    const {locale} = await params
    const messages = locale === "en" ? En : Sv
    const data = await getId("ec7ef49d-c0a3-4326-98ab-681d90994d8e")

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
            {/* <h2 className="w-fit py-2 text-h2 md:text-h2-desktop text-primary font-fraunces font-bold">{locale === "se" ? data?.gdpr_section.title_se : data?.gdpr_section.title_en}</h2>
            <SanityFlex data={data?.history_layout.scout_life} locale={locale}/> */}
        </main>
    );
}

export default Gdpr