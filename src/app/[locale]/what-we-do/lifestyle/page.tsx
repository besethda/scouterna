import { getPageHeadTitle } from "@/lib/utils"


const pageItem = "lifestyle"
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params
    return getPageHeadTitle(locale, pageItem)
}



const LifeStyle = () => {

    return (
        <div>
        </div>
    );
}

export default LifeStyle