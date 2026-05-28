import { En } from "@/messages/en";
import { Sv } from "@/messages/sv";
import { use } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { getPageHeadTitle } from "@/lib/utils"
import CardWithoutImage from "@/components/CardWithoutImage"
import DivisionsBox from "@/components/DivisionsContainer/DivisionsBox";

const pageItem = "groups"
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return getPageHeadTitle(locale, pageItem)
}


const GroupStructure = ({ params }: { params: Promise<{ locale: string }> }) => {

  const { locale } = use(params)
  const messages = locale === "en" ? En : Sv



  return (
    <div className="">
      <Breadcrumbs />
      <div className="w-full flex flex-col items-center">
        <CardWithoutImage headline={messages?.groupCard?.headline} logo="/hand.png" title={messages?.groupCard?.title} text={messages?.groupCard?.text} MDlogo="/blueHandYellowBg.svg" />
        <div className="flex flex-col p-4 gap-1 items-center">
          <DivisionsBox division={"sjohumlorna"} boxStyle={"image"} />
          <DivisionsBox division={"kaparna"} boxStyle={"image"} />
          <DivisionsBox division={"konvojen"} boxStyle={"image"} />
          <DivisionsBox division={"utmanare"} boxStyle={"image"} />
          <DivisionsBox division={"familjescouter"} boxStyle={"image"} />
        </div>
      </div>
    </div>
  )
}

export default GroupStructure