import { getPageHeadTitle } from "@/lib/utils"



const pageItem = "faq"
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params
    return getPageHeadTitle(locale, pageItem)
}

const Faq = () => {

    return (
        <div>
        </div>
    );
}

export default Faq