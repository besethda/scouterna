import { En} from "@/messages/en";
import { Sv } from "@/messages/sv";
import { use } from "react";
import { getPageHeadTitle } from "@/lib/utils"





const pageItem = "groups"
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params
    return getPageHeadTitle(locale, pageItem)
}


const GroupStructure = ({params}:{params: Promise<{locale: string}>}) => {
  const {locale} = use(params)
  const messages = locale === "en" ? En : Sv
  return(
    <div>hello</div>
  )
}

export default GroupStructure