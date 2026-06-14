import { getPageHeadTitle } from "@/lib/utils"
import { getId } from "@/lib/utils";
import SanityFlex from "@/components/SanityFlex";
import BoatSection from "./boatsection";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContentSection from "@/components/ContentSection";
import CardWithLogo from "@/components/CardWithLogo";
import Image from "next/image";
import anchor from '../../../../../public/blueAnchor.svg'
import { HistoryType } from "../../../../../sanity.types";


const pageItem = "history"
const headDescription = "history"
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return getPageHeadTitle(locale, pageItem, headDescription)
}


const History = async ({ params }: { params: Promise<{ locale: string }> }) => {

  const { locale } = await params
  const data = await getId("c57001b2-94f1-4bf1-ae81-1fcc684e0eee") as HistoryType

  return (
    <main className="w-full mx-auto lg:max-w-[var(--max-w-laptop)] 2xl:max-w-[var(--max-w-desktop)] ">
      <Breadcrumbs />
      <CardWithLogo image="/heartYellowBg.svg" sectionTitle="historycard" isH1 />
      <div className="w-full relative">
        <div className="relative flex justify-center">
            <Image src="/Path.png" alt="line" width={300} height={20} className="absolute w-[204px] top-22 left-4 md:top-28 md:left-10 md:w-[386px] " />
              {data?.history_layout.scout_life.map((e:any, index:number)=> {return(
                <div key={index} className={`rounded-3xl rounded-3xl w-full shadow-xl ${index%2 === 0 ? "bg-bg-white" : "bg-primary"} my-8 overflow-hidden px-4 md:px-10 py-3`}>
                  <SanityFlex data={e.section_array} locale={locale} color={index%2 === 0 ? "black" : "white"}/>
                </div>
                )})}   
        </div>
        <div className="">
          <Image src={anchor} alt="anchor" height={150} width={150} className="hidden md:block md:absolute md:top-5 md:right-8 opacity-70 md:-rotate-12 xl:-rotate-18 lg:right-20 lg:top-30 xl:right-20 xl:top-30  2xl:right-50 2xl:-rotate-20" />
        </div>
      </div>
      <div className="mx-4 ">
        <div className="">
          <ContentSection sectionLayout={["t"]} page={"boatSection"} child={true} padding={"top"} />
          <ContentSection sectionLayout={["p"]} page={"boatSection"} child={true} display={"desktop"} padding={"none"} />
        </div>
        <BoatSection images={data?.images} />
      </div>
    </main>
  );
}

export default History