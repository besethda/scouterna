import { En } from "@/messages/en";
import { Sv } from "@/messages/sv";
import { use } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { getPageHeadTitle } from "@/lib/utils"
import CardWithoutImage from "@/components/CardWithoutImage"
import DivisionsBox from "@/components/DivisionsContainer/DivisionsBox";

const pageItem = "groups"
const headDescription = "groups"
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return getPageHeadTitle(locale, pageItem, headDescription)
}


const GroupStructure = ({ params }: { params: Promise<{ locale: string }> }) => {

  const { locale } = use(params)
  const messages = locale === "en" ? En : Sv



  return (
    <main className="">
      <Breadcrumbs />
      <section className="w-full flex flex-col items-center">
        <CardWithoutImage headline={messages?.groupCard?.headline} logo="/hand.png" title={messages?.groupCard?.title} text={messages?.groupCard?.text} MDlogo="/blueHandYellowBg.svg" />
        <div className="flex flex-col px-4 pb-8 md:pb-16 gap-1 items-center">
          <DivisionsBox division={"sjohumlorna"} boxStyle={"image"} />
          <DivisionsBox division={"kaparna"} boxStyle={"image"} />
          <DivisionsBox division={"konvojen"} boxStyle={"image"} />
          <DivisionsBox division={"utmanare"} boxStyle={"image"} />
          <DivisionsBox division={"familjescouter"} boxStyle={"image"} />
        </div>
      </section>
    </main>
  )
}

export default GroupStructure