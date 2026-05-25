import { getPageHeadTitle } from "@/lib/utils"



const pageItem = "ruffen"
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params
    return getPageHeadTitle(locale, pageItem)
}



const Ruffen = () => {

    return (
        <div>
        </div>
    );
}

export default Ruffen