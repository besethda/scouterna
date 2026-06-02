import { getPageHeadTitle } from "@/lib/utils"
import ContentSection from "@/components/ContentSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import { En } from "@/messages/en";
import { Sv } from "@/messages/sv";
import { use } from "react";



const pageItem = "history"
const headDescription = "history"
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params
    return getPageHeadTitle(locale, pageItem, headDescription)
}


const History = ({ params }: { params: Promise<{ locale: string }> }) => {

    const { locale } = use(params)
    const messages = locale === "en" ? En : Sv


    return (
        <div>
            <Breadcrumbs />
            <ContentSection sectionLayout={["t", "p", "p", "p", "p", "p"]} page="history" background={"blue"} />
        </div>
    );
}

export default History