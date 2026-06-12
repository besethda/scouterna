import { getPageHeadTitle } from "@/lib/utils"
import { getId } from "@/lib/utils";
import SanityFlex from "@/components/SanityFlex";
import BoatSection from "./boatsection";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContentSection from "@/components/ContentSection";
import CardWithLogo from "@/components/CardWithLogo";
import Image from "next/image";
import anchor from '../../../../../public/blueAnchor.svg'



const pageItem = "history"
const headDescription = "history"
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return getPageHeadTitle(locale, pageItem, headDescription)
}


const History = async ({ params }: { params: Promise<{ locale: string }> }) => {

  const { locale } = await params
  const data = await getId("c57001b2-94f1-4bf1-ae81-1fcc684e0eee")

  return (
    <main>
      <Breadcrumbs />
      <CardWithLogo image="/heartYellowBg.svg" sectionTitle="historycard" isH1 />
      <div className="relative w-full mt-8 mb-10">
        <div className="flex justify-center">
          <div className="relative max-w-[92%] md:max-w-[95%] xl:max-w-[89%] lg:max-w-430 rounded-3xl w-full shadow-xl bg-bg-white overflow-hidden md:px-10 px-3">
            <h2 className="w-fit py-8 text-h2 md:text-h2-desktop text-primary font-fraunces font-bold">{locale === "sv" ? data?.history_section.title_se : data?.history_section.title_en}</h2>
            <img src="/Path.png" alt="line" className="absolute md:top-22 md:left-8 xl:left-5 top-16 left-3 w-[65%] md:w-auto line" />
            {/* <SanityFlex data={data?.history_layout.scout_life?.[0]?.section_array} locale={locale} color={"black"} /> */}
            {data?.history_layout.scout_life.map((e:any, index:number)=> {return(
                <div key={index}>
                  <SanityFlex data={e.section_array} locale={locale} color={index%2 === 0 ? "black" : "white"}/>
                </div>
            )})}         
          </div>
        </div>
        <div>
          <Image src={anchor} alt="anchor" height={150} width={150} className="hidden md:block md:absolute md:top-5 md:right-40 opacity-70 md:-rotate-12 lg:right-60 lg:top-30" />
        </div>
      </div>
      <ContentSection sectionLayout={["t"]} page={"boatSection"} padding={"top"} />
      <ContentSection sectionLayout={["p"]} page={"boatSection"} display={"desktop"} padding={"none"} />
      <BoatSection images={data?.images} />
    </main>
  );
}

export default History