import { getPageHeadTitle } from "@/lib/utils"
import ContentSection from "@/components/ContentSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import { En} from "@/messages/en";
import { Sv } from "@/messages/sv";
import { use } from "react";
import CardAbout from "@/components/AddCardAbout";


const pageItem = "history"
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params
    return getPageHeadTitle(locale, pageItem)
}


const History = ({params}:{params: Promise<{locale: string}>}) => {

    const {locale} = use(params)
    const messages = locale === "en" ? En : Sv


    return (
        <div>
            <Breadcrumbs />
            <CardAbout page="historycard" card="historymobilecard" logo="/heart.png" image="/images/IMG_1943.jpeg" MDlogo="/bg-heart.svg" />
            <ContentSection sectionLayout={["t", "p", "p", "p", "p", "p"]} page="history" background={"blue"} />
        </div>
    );
}

export default History