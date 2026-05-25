import { getPageHeadTitle } from "@/lib/utils"



const pageItem = "safety"
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params
    return getPageHeadTitle(locale, pageItem)
}



const Safety = () => {

    return (
        <div>
        </div>
    );
}

export default Safety