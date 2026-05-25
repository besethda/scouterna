import { getPageHeadTitle } from "@/lib/utils"



const pageItem = "gdpr"
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params
    return getPageHeadTitle(locale, pageItem)
}

const Gdpr = () => {

    return (
        <div>
        </div>
    );
}

export default Gdpr