import { getPageHeadTitle } from "@/lib/utils"
import Breadcrumbs from "@/components/Breadcrumbs";
import ContentSection from "@/components/ContentSection";
import { En} from "@/messages/en";
import { Sv } from "@/messages/sv";
import { use } from "react";
import CardAbout from "@/components/AddCardAbout";

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
            <CardAbout page="gdprcard" card="gdprmobilecard" logo="/faq.png" image="/images/IMG_1943.JPEG" MDlogo="/bg-information.svg"/>
            <ContentSection sectionLayout={["t", "p", "s", "l", "l", "l", "l", "l", "s", "l", "l", "l", "l", "l", "l", "l", "l", "l", "p", "s", "p"]} page={"gdpr"} background={"blue"}/>
            <ContentSection sectionLayout={["s", "p", "p", "p", "p", "p", "p"]} page={"ethics"} display={"mobile"}/>
        </main>
    );
}

export default Gdpr