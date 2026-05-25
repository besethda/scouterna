import { getPageHeadTitle } from "@/lib/utils"



const pageItem = "cabins"
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params
    return getPageHeadTitle(locale, pageItem)
}



const Cabins = () => {

    return (
        <div>
        </div>
    );
}

export default Cabins