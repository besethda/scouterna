import { getPageHeadTitle } from "@/lib/utils"
import Breadcrumbs from "@/components/Breadcrumbs";
import ContentSection from "@/components/ContentSection";
import { En} from "@/messages/en";
import { Sv } from "@/messages/sv";
import { use } from "react";


const pageItem = "gdpr"
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params
    return getPageHeadTitle(locale, pageItem)
}



const Gdpr = ({params}:{params: Promise<{locale: string}>}) => {
    const {locale} = use(params)
    const messages = locale === "en" ? En : Sv
    return (
        <div>
            <Breadcrumbs />
            <ContentSection sectionLayout={["t", "p", "s", "l", "l", "l", "l", "l", "s", "l", "l", "l", "l", "l", "l", "l", "l", "l", "p", "s", "p"]} page={"gdpr"} background={"blue"}/>
            <ContentSection sectionLayout={["s", "p", "p", "p", "p", "p", "p"]} page={"ethics"} display={"mobile"}/>
        </div>
    );
}

export default Gdpr