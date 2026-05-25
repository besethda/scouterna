import { getPageHeadTitle } from "@/lib/utils"



const pageItem = "boats"
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params
    return getPageHeadTitle(locale, pageItem)
}



const Boats = () => {

    return (
        <div>
        </div>
    );
}

export default Boats