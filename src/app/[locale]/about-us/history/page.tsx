import { getPageHeadTitle } from "@/lib/utils"
import { getId } from "@/lib/utils";
import SanityFlex from "@/components/SanityFlex";
import BoatSection from "./boatsection";
import Breadcrumbs from "@/components/Breadcrumbs";
import { En } from "@/messages/en";
import { Sv } from "@/messages/sv";
import ContentSection from "@/components/ContentSection";
import CardWithLogo from "@/components/CardWithLogo";
import Image from "next/image";
import line from "../../../../../public/historia-line.svg"
import anchor from '../../../../../public/blueAnchor.svg'



const pageItem = "history"
const headDescription = "history"
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return getPageHeadTitle(locale, pageItem, headDescription)
}


const History = async ({ params }: { params: Promise<{ locale: string }> }) => {

  const { locale } = await params
  const messages = locale === "en" ? En : Sv
  const data = await getId("c57001b2-94f1-4bf1-ae81-1fcc684e0eee")

  return (
    <main>
      <Breadcrumbs />
      <CardWithLogo image="/heartYellowBg.svg" sectionTitle="historycard" isH1 />
      <div className="w-full relative ">
        <div className="flex justify-center">
          <div className=" lg:max-w-[var(--max-w-laptop)] xl:mx-auto 2xl:max-w-[var(--max-w-desktop)] mx-4 relative rounded-3xl w-full shadow-xl bg-bg-white overflow-hidden md:px-10 px-3 pt-8 pb-1">
            <h2 className="w-fit pb-2 text-h2 md:text-h2-desktop text-primary font-fraunces font-bold">{locale === "sv" ? data?.history_section.title_se : data?.history_section.title_en}</h2>
            <img src="/Path.png" alt="line" className="absolute md:top-22 md:left-8 xl:left-5 top-16 left-3 w-[65%] md:w-auto line" />
            <SanityFlex data={data?.history_layout.scout_life} locale={locale} color={"black"} />
          </div>
        </div>
        <div className="">
          <Image src={anchor} alt="anchor" height={150} width={150} className="hidden md:block md:absolute md:top-5 md:right-8 opacity-70 md:-rotate-12 xl:-rotate-18 lg:right-20  xl:right-70 lg:top-15 2xl:right-90 2xl:-rotate-20" />
        </div>
      </div>
      <div className="mx-4 ">
        <div className="lg:max-w-[var(--max-w-laptop)] xl:mx-auto 2xl:max-w-[var(--max-w-desktop)]">
          <ContentSection sectionLayout={["t"]} page={"boatSection"} child={true} padding={"top"} />
          <ContentSection sectionLayout={["p"]} page={"boatSection"} child={true} display={"desktop"} padding={"none"} />
        </div>
        <BoatSection images={data?.images} />
      </div>
    </main>
  );
}

export default History