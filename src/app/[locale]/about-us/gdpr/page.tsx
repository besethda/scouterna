import { getPageHeadTitle } from "@/lib/utils"
import Breadcrumbs from "@/components/Breadcrumbs";
import { getId } from "@/lib/utils";
import { En} from "@/messages/en";
import { Sv } from "@/messages/sv";
import SanityFlex from "@/components/SanityFlex";
import CardAbout from "@/components/AddCardAbout";

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
    console.log(data)

    return (
        <main>
            <Breadcrumbs />
            {/* <CardAbout page="gdprcard" card="gdprmobilecard" logo="/faq.png" image="/images/IMG_1943.JPEG" MDlogo="/bg-information.svg"/> */}
            <h2 className="w-fit py-2 text-h2 md:text-h2-desktop text-primary font-fraunces font-medium">{locale === "se" ? data?.gdpr_section.title_se : data?.gdpr_section.title_en}</h2>
            <SanityFlex data={data?.history_layout.scout_life} locale={locale}/>
        </main>
    );
}

export default Gdpr