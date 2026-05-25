import { getPageHeadTitle } from "@/lib/utils"



const pageItem = "history"
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params
    return getPageHeadTitle(locale, pageItem)
}

const History = () => {

    return (
        <div>
        </div>
    );
}

export default History