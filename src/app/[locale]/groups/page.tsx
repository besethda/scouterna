import { En } from "@/messages/en";
import { Sv } from "@/messages/sv";
import { use } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { getPageHeadTitle } from "@/lib/utils"
import { getId } from "@/lib/utils";
import DivisionsBox from "@/components/DivisionsContainer/DivisionsBox";
import CardWithLogo from "@/components/CardWithLogo";

const pageItem = "groups"
const headDescription = "groups"
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return getPageHeadTitle(locale, pageItem, headDescription)
}


const GroupStructure = async ({ params }: { params: Promise<{ locale: string }> }) => {

  const { locale } = await params
  const messages = locale === "en" ? En : Sv
  const data = await getId('2a5a4f80-b206-44b9-9e00-6b870a00f90e')
  if (!data) return


  return (
    <main className="w-full md:max-w-360 mx-auto">
      <Breadcrumbs />
      <section className="w-full flex flex-col items-center">
        <CardWithLogo image="/heartYellowBg.svg" sectionTitle="groupsCard" isH1 />
        <div className="flex flex-col px-4 pb-8 md:pb-16 gap-1 items-center lg:px-22">
          <DivisionsBox division={"sjohumlorna"} boxStyle={"image"} data={data?.groups.find((e: any) => e.name_slug === "sjohumlorna") || null} />
          <DivisionsBox division={"kaparna"} boxStyle={"image"} data={data?.groups.find((e: any) => e.name_slug === "kaparna") || null} />
          <DivisionsBox division={"konvojen"} boxStyle={"image"} data={data?.groups.find((e: any) => e.name_slug === "konvojen") || null} />
          <DivisionsBox division={"utmanare"} boxStyle={"image"} data={data?.groups.find((e: any) => e.name_slug === "utmanare") || null} />
          <DivisionsBox division={"smattarne"} boxStyle={"image"} data={data?.groups.find((e: any) => e.name_slug === "smattarne") || null} />
        </div>
      </section>
    </main>
  )
}

export default GroupStructure