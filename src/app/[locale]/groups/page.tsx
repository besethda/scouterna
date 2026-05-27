import { getPageHeadTitle } from "@/lib/utils"
import { En} from "@/messages/en";
import { Sv } from "@/messages/sv";
import { use } from "react";
import CardWithoutImage from "@/components/CardWithoutImage"

const pageItem = "groups"
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params
    return getPageHeadTitle(locale, pageItem)
}


const GroupStructure = ({params}:{params: Promise<{locale: string}>}) => {

  const {locale} = use(params)
  const messages = locale === "en" ? En : Sv



  return (
    <div className="">
      <CardWithoutImage headline={messages?.groupCard?.headline} logo="/hand.png" title={messages?.groupCard?.title} text={messages?.groupCard?.text} MDlogo="/blueHandYellowBg.svg"/>
    </div>
  )
}

export default GroupStructure