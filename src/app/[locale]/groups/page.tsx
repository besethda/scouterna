import { getPageHeadTitle } from "@/lib/utils"



const pageItem = "groups"
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params
    return getPageHeadTitle(locale, pageItem)
}




const GroupStructure = () => {
  return(
    <div>hello</div>
  )
}

export default GroupStructure