import { En } from "@/messages/en";
import { Sv } from "@/messages/sv";
import { use } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { getPageHeadTitle } from "@/lib/utils"
import CardWithoutImage from "@/components/CardWithoutImage"
import DivisionsBox from "@/components/DivisionsContainer/DivisionsBox";
import CardWithLogo from "@/components/CardWithLogo";

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
        <CardWithLogo image="/heartYellowBg.svg" sectionTitle="groupsCard" isH1/>
        <div className="flex flex-col px-4 pb-8 md:pb-16 gap-1 items-center">
          <DivisionsBox division={"spararscouter"} boxStyle={"image"} imageUrl="/images/IMG_1910.JPEG"/>
          <DivisionsBox division={"upptackascouter"} boxStyle={"image"} imageUrl="/images/IMG_0206.JPEG"/>
          <DivisionsBox division={"aventyrarscouter"} boxStyle={"image"} imageUrl="/images/IMG_9862.JPEG"/>
          <DivisionsBox division={"utmanare"} boxStyle={"image"} imageUrl="/images/IMG_0962.JPEG"/>
          <DivisionsBox division={"familjescouter"} boxStyle={"image"} imageUrl="/images/IMG_1932.JPEG" />
        </div>
      </section>
    </main>
  )
}

export default GroupStructure