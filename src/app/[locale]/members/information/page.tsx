import { getPageHeadTitle } from "@/lib/utils"



const pageItem = "information"
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params
    return getPageHeadTitle(locale, pageItem)
}


const Information = () => {

    return (
        <div>
        </div>
    );
}
export default Information